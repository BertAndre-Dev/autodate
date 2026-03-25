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