import {
  aboutPage,
  blogPosts,
  contactPage,
  homeHeroLanding,
  servicesPage,
  siteConfig,
  solutionsPage,
} from "@/constants";
import { siteUrl } from "@/lib/site-url";

export function GET() {
  const base = siteUrl();
  const services = servicesPage.sections
    .map((section) => `- ${section.title}: ${section.body}`)
    .join("\n");
  const pillars = solutionsPage.pillars
    .map((pillar) => `- ${pillar.title}: ${pillar.body}`)
    .join("\n");
  const articles = blogPosts
    .map((post) => `- [${post.title}](${base}/blog/${post.slug}): ${post.excerpt}`)
    .join("\n");

  const body = `# ${siteConfig.name}

> ${siteConfig.description}

${aboutPage.whoBody}

- Founded: ${aboutPage.sinceYear}
- Location: ${contactPage.visit.body}
- Email: ${contactPage.email.address}
- Phone: ${contactPage.call.phone}
- Hours: ${contactPage.call.hours}
- Audience: enterprise and medium-to-large fleet operators

## Pages

- [Home](${base}/): ${homeHeroLanding.description}
- [About Us](${base}/about): ${aboutPage.whoBody}
- [Services](${base}/services): ${servicesPage.hero.title}. ${servicesPage.hero.subtitle}
- [Solutions](${base}/solutions): ${solutionsPage.hero.description}
- [Contact](${base}/contact): Book a demo, visit, call, or email AutoDate.
- [Blog](${base}/blog): Articles on fleet efficiency, compliance, and operations.

## Services

${services}

## Smart Fleet

${solutionsPage.hero.description}

${pillars}

Included capabilities: ${solutionsPage.capabilities.join(", ")}.

## Articles

${articles}

## Policies

- [Privacy notice](${base}/privacy-notice)
- [Cookie notice](${base}/cookie-notice)
- [Sitemap](${base}/sitemap.xml)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
