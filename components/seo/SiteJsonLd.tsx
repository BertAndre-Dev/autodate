import { aboutPage, contactPage, footerColumns, siteConfig } from "@/constants";
import { siteUrl } from "@/lib/site-url";

export default function SiteJsonLd() {
  const base = siteUrl();
  const sameAs = footerColumns
    .flatMap((column) => column.socialLinks ?? [])
    .map((link) => link.href.split("?")[0]);

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${base}/#organization`,
        name: siteConfig.name,
        url: base,
        description: siteConfig.description,
        email: contactPage.email.address,
        telephone: contactPage.call.phoneHref.replace("tel:", ""),
        foundingDate: aboutPage.sinceYear,
        logo: `${base}/logo.svg`,
        sameAs,
        address: {
          "@type": "PostalAddress",
          streetAddress: "20 Awudu Ekpekha Boulevard",
          addressLocality: "Lekki Phase 1",
          addressRegion: "Lagos",
          postalCode: "106104",
          addressCountry: "NG",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        name: siteConfig.name,
        url: base,
        description: siteConfig.description,
        publisher: { "@id": `${base}/#organization` },
        inLanguage: "en",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
