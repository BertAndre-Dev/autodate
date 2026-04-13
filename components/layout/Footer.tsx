import Link from "next/link";
import { footerColumns, siteConfig } from "@/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-[#1A1A1A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-0">
        <div className="flex flex-col items-start mb-10">
          <Image
            src="/logo.svg"
            alt="AutoDate"
            width={120}
            height={120}
            loading="lazy"
          />
          <p className="text-base text-white">{siteConfig.tagline}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-[18px] font-semibold text-white">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={`${column.title}-${link.href}`}>
                    <Link
                      href={link.href}
                      className="text-base text-[#FFFFFF80] transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-2 mt-4">
                {column.socialLinks?.map((socialLink) => (
                  <Link
                    key={socialLink.href}
                    href={socialLink.href}
                    className="bg-[#B71C1C] hover:bg-[#B71C1C]/80 p-3 rounded-full"
                  >
                    <Image
                      src={socialLink.icon ?? ""}
                      alt={socialLink.label}
                      width={20}
                      height={20}
                      loading="lazy"
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
