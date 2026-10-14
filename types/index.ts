export interface NavLink {
  href: string;
  label: string;
  icon?: string;
}

export interface HeroProps {
  variant?: "default" | "pageTitle";
  badge?: string;
  pageTitle?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
  href?: string;
  featured?: boolean;
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
  socialLinks?: NavLink[];
}

export interface HomeHeroLanding {
  pill: string;
  titleLine1: string;
  titleLine2: string;
  rotatingWords: readonly string[];
  description: string;
  emailPlaceholder: string;
  ctaLabel: string;
  ctaHref: string;
  stats: readonly { value: string; label: string }[];
  mainImageSrc: string;
  mainImageAlt: string;
}

export interface TailoredIndustryItem {
  id: string;
  label: string;
  /** Small icon in the accordion row (e.g. `*-icon.svg`). */
  iconSrc: string;
  /** Large panel image when this row is active (e.g. full `*.svg` asset). */
  panelImageSrc: string;
  imageAlt: string;
  body: string;
}

export interface ServicesPageMedia {
  src: string;
  alt: string;
}

export interface SolutionsPillar {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
}

export interface SolutionsComparisonRow {
  without: string;
  with: string;
}

export interface SolutionsPageContent {
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaLabel: string;
    ctaHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  pillarsTitle: string;
  pillars: readonly SolutionsPillar[];
  capabilitiesTitle: string;
  capabilities: readonly string[];
  comparisonTitle: string;
  comparisonWithoutLabel: string;
  comparisonWithLabel: string;
  comparisonRows: readonly SolutionsComparisonRow[];
}

export interface ServicesPageSection {
  id: string;
  title: string;
  body: string;
  mediaFirst: boolean;
  images: ServicesPageMedia[];
  included?: string[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface BlogSection {
  heading?: string;
  paragraphs: string[];
  list?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  coverImageAlt: string;
  publishedAt: string;
  author: string;
  sections: BlogSection[];
}