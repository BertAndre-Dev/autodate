"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import ContactMessageModal from "@/components/forms/ContactMessageModal";

const ContactModalContext = createContext<
  ((email?: string) => void) | null
>(null);

export function useContactModal() {
  const openContact = useContext(ContactModalContext);
  if (!openContact) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return openContact;
}

function isContactLink(anchor: HTMLAnchorElement) {
  let url: URL;
  try {
    url = new URL(anchor.href);
  } catch {
    return false;
  }
  return url.hash === "#contact" || url.pathname === "/contact";
}

export default function ContactModalProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState<string | undefined>();

  const openContact = useCallback((nextEmail?: string) => {
    setEmail(nextEmail);
    setOpen(true);
  }, []);

  const closeContact = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }
      const anchor = (event.target as Element | null)?.closest("a");
      if (!(anchor instanceof HTMLAnchorElement) || !isContactLink(anchor)) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      setEmail(undefined);
      setOpen(true);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return (
    <ContactModalContext.Provider value={openContact}>
      {children}
      <ContactMessageModal
        open={open}
        onClose={closeContact}
        initialEmail={email}
      />
    </ContactModalContext.Provider>
  );
}
