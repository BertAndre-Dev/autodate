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
}

export interface FooterColumn {
  title: string;
  links: NavLink[];
  socialLinks?: NavLink[];
}

export interface HomeHeroMissionVision {
  title: string;
  body: string;
}

export interface HomeHeroLanding {
  pill: string;
  titlePrefix: string;
  rotatingWords: readonly string[];
  description: string;
  mission: HomeHeroMissionVision;
  vision: HomeHeroMissionVision;
  ctaLabel: string;
  ctaHref: string;
  mainImageSrc: string;
  insetTopLeftSrc?: string;
  insetBottomRightSrc?: string;
  mainImageAlt: string;
  insetTopLeftAlt: string;
  insetBottomRightAlt: string;
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