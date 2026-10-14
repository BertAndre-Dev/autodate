"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { FormEvent } from "react";
import { createPortal } from "react-dom";
import { contact } from "@/constants";
import { isValidEmail, normalizeWhitespace, sanitizeText } from "@/lib/utils";

interface ContactMessageModalProps {
  open: boolean;
  onClose: () => void;
  initialEmail?: string;
}

interface FormValues {
  name: string;
  email: string;
  details: string;
}

type FieldErrors = Partial<Record<keyof FormValues, string>>;

const detailsMinLength = 20;
const detailsMaxLength = 2000;

export default function ContactMessageModal({
  open,
  onClose,
  initialEmail,
}: ContactMessageModalProps) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    details: "",
  });
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (initialEmail) {
      setValues((current) => ({ ...current, email: initialEmail }));
    }

    const frame = window.requestAnimationFrame(() => {
      firstFieldRef.current?.focus();
    });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, initialEmail]);

  if (!open || typeof document === "undefined") return null;

  const setField = (key: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [key]: value }));
    setFieldErrors((current) => ({ ...current, [key]: undefined }));
    setIsSuccess(false);
  };

  const validate = (nextValues: FormValues): FieldErrors => {
    const errors: FieldErrors = {};
    const name = nextValues.name.trim();
    const email = nextValues.email.trim();
    const details = nextValues.details.trim();

    if (name.length < 2) errors.name = contact.form.fieldErrors.required;
    if (!email) errors.email = contact.form.fieldErrors.required;
    if (email && !isValidEmail(email)) {
      errors.email = contact.form.fieldErrors.invalidEmail;
    }
    if (!details) errors.details = contact.form.fieldErrors.required;
    if (details && details.length < detailsMinLength) {
      errors.details = contact.form.fieldErrors.detailsTooShort;
    }
    if (details.length > detailsMaxLength) {
      errors.details = contact.form.fieldErrors.detailsTooLong;
    }

    return errors;
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);
    setIsSuccess(false);

    const nextErrors = validate(values);
    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: sanitizeText(values.name, 80),
          email: normalizeWhitespace(values.email).toLowerCase(),
          details: sanitizeText(values.details, detailsMaxLength),
        }),
      });
      const data = (await response.json()) as { ok: boolean; message?: string };
      if (!response.ok || !data.ok) {
        setFormError(data.message ?? contact.form.fallbackApiMessage);
        return;
      }
      setIsSuccess(true);
      setValues({ name: "", email: "", details: "" });
    } catch {
      setFormError(contact.form.fallbackApiMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-[#E4E4E4] bg-white px-4 text-sm text-[#1A1A1A] outline-none placeholder:text-[#A3A3A3] focus-visible:border-[#B71C1C] focus-visible:ring-2 focus-visible:ring-[#B71C1C]/20";

  return createPortal(
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-[#8E8E8E]/55 p-4"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative max-h-[92vh] w-full max-w-[640px] overflow-y-auto rounded-[1.75rem] bg-white px-6 py-10 shadow-2xl sm:px-12 sm:py-12"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={uiCloseLabel}
          className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6B6B6B] transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B71C1C]/30"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
            <path
              d="M6 6l12 12M18 6L6 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <form onSubmit={onSubmit} noValidate>
          <h2
            id={titleId}
            className="text-center text-2xl font-bold tracking-tight text-[#111111]"
          >
            {contact.form.title}
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm leading-7 text-[#3A3A3A] sm:text-base">
            {contact.form.description}
          </p>

          {formError ? (
            <p className="mt-6 text-center text-sm text-[#B71C1C]" role="alert">
              {formError}
            </p>
          ) : null}
          {isSuccess ? (
            <p className="mt-6 text-center text-sm text-[#1A1A1A]" role="status">
              {contact.form.successMessage}
            </p>
          ) : null}

          <div className="mt-8 space-y-4">
            <div>
              <label className="sr-only" htmlFor="contact-modal-name">
                {contact.form.fields.nameLabel}
              </label>
              <input
                ref={firstFieldRef}
                id="contact-modal-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => setField("name", event.target.value)}
                placeholder={contact.form.placeholders.name}
                aria-invalid={fieldErrors.name ? true : undefined}
                className={`${fieldClass} h-14`}
              />
              {fieldErrors.name ? (
                <p className="mt-1 text-xs text-[#B71C1C]">{fieldErrors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-modal-email">
                {contact.form.fields.emailLabel}
              </label>
              <input
                id="contact-modal-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => setField("email", event.target.value)}
                placeholder={contact.form.placeholders.email}
                aria-invalid={fieldErrors.email ? true : undefined}
                className={`${fieldClass} h-14`}
              />
              {fieldErrors.email ? (
                <p className="mt-1 text-xs text-[#B71C1C]">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="sr-only" htmlFor="contact-modal-message">
                {contact.form.fields.detailsLabel}
              </label>
              <textarea
                id="contact-modal-message"
                name="details"
                value={values.details}
                onChange={(event) => setField("details", event.target.value)}
                placeholder={contact.form.placeholders.details}
                aria-invalid={fieldErrors.details ? true : undefined}
                rows={7}
                className={`${fieldClass} min-h-48 resize-y py-4`}
              />
              {fieldErrors.details ? (
                <p className="mt-1 text-xs text-[#B71C1C]">{fieldErrors.details}</p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto mt-8 flex h-12 w-full max-w-sm items-center justify-center rounded-lg bg-[#C4161C] text-sm font-semibold text-white transition-colors hover:bg-[#A51218] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4161C]/40 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting
              ? contact.form.submittingLabel
              : contact.form.submitLabel}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}

const uiCloseLabel = "Close";
