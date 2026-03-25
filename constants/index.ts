import type { FooterColumn, HeroProps, NavLink, ServiceCard } from "@/types";

export const siteConfig = {
  name: "AutoDate",
  tagline: "Smart Fleet Management",
  
  title: "AutoDate — Precision Engineering",
  description:
    "From prototype to production, AutoDate helps teams engineer reliable products with speed, quality, and clarity.",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services", label: "Operations Management" },
      { href: "/services", label: "Unified Vehicle Data & Compliance System" },
      { href: "/services", label: "Risk, Safety, Incident Intelligence" },
      { href: "/services", label: "Enterprise Date & Integration Layer" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "20 Awudu Ekpheka Blvd, Lekki Phase 1, Lagos Nigeria." },
      { href: "/contact", label: "inquiry@autodatefleet.com" },
      { href: "/contact", label: "+234  913 866 7927" },

    ],
    socialLinks: [
      { href: "/contact", label: "Facebook" , icon: "/facebook.svg" },
      { href: "/https://www.instagram.com/autodatesmartfleet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" , icon: "/instagram.svg" },
      { href: "/https://www.linkedin.com/company/autodate-smart-fleet/", label: "LinkedIn" , icon: "/linkedin.svg" },
    ],
  },
];

export const getFooterCopyright = (year: number): string =>
  `© ${year} ${siteConfig.name}. All rights reserved.`;

export const uiStrings = {
  skipToContentLabel: "Skip to content",
  menuLabel: "Menu",
  closeMenuLabel: "Close menu",
  mobileNavLabel: "Primary navigation",
};

export const hero: {
  home: HeroProps;
  about: HeroProps;
  services: HeroProps;
  products: HeroProps;
  contact: HeroProps;
} = {
  home: {
    variant: "default",
    badge: "Manufacturing meets precision",
    title: "Engineering that ships on time.",
    subtitle:
      "From prototype to production, we help teams design and deliver high-quality parts with confidence.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
  about: {
    variant: "pageTitle",
    pageTitle: "About Us",
    title: "Clarity, quality, and dependable delivery.",
    subtitle:
      "AutoDate partners with engineering and operations teams to turn requirements into durable outcomes.",
    ctaLabel: "See our services",
    ctaHref: "/services",
  },
  services: {
    variant: "pageTitle",
    pageTitle: "Services",
    title: "A complete path from concept to production.",
    subtitle:
      "Strategic support across design, prototyping, manufacturing readiness, and rollout planning.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
  products: {
    variant: "pageTitle",
    pageTitle: "Products",
    title: "Reliable products engineered for real-world use.",
    subtitle:
      "Curated builds and configurable solutions designed to reduce risk and accelerate delivery.",
    ctaLabel: "Talk to an expert",
    ctaHref: "/contact",
  },
  contact: {
    variant: "pageTitle",
    pageTitle: "Contact",
    title: "Request a quote for your next project.",
    subtitle:
      "Share a few details and our team will respond with next steps and timelines.",
    ctaLabel: "Send request",
    ctaHref: "/contact",
  },
};

export const homeFeatures: ServiceCard[] = [
  {
    title: "Design with manufacturing in mind",
    description:
      "We align requirements, tolerances, and workflows so decisions stay consistent through production.",
    icon: "layers",
  },
  {
  title: "Prototype quickly, validate early",
    description:
      "Shorten feedback loops with structured prototypes that surface risks before scale.",
    icon: "wand",
  },
  {
    title: "Deliver with dependable quality",
    description:
      "Quality checks and documentation support smoother handoffs and fewer surprises.",
    icon: "shield",
  },
];

export const homeStats = [
  { value: "30+", label: "Engineering releases supported" },
  { value: "10+", label: "Manufacturing partners coordinated" },
  { value: "98%", label: "On-time delivery target for planned work" },
] as const;

export const homeTestimonials = [
  {
    quote:
      "AutoDate helped us turn a complex requirement set into a clear manufacturing plan. The process was fast and organized.",
    name: "Operations Lead",
    company: "Precision Manufacturing Co.",
  },
  {
    quote:
      "Their engineering approach made tradeoffs explicit, so our team could move forward with confidence.",
    name: "Product Manager",
    company: "Hardware Innovation Studio",
  },
] as const;

export const homePageCopy = {
  featuresTitle: "Built to reduce uncertainty during delivery.",
  testimonialsTitle: "Teams choose AutoDate for clarity and momentum.",
  ctaPrompt: "Ready to plan your next release?",
} as const;

export const aboutValues = [
  {
    title: "Evidence over assumptions",
    description:
      "We validate early, document decisions, and keep stakeholders aligned with clear tradeoffs.",
    icon: "spark",
  },
  {
    title: "Quality built into the workflow",
    description:
      "Checks, documentation, and review points help maintain standards from prototype to production.",
    icon: "shield",
  },
  {
    title: "Communication that moves work forward",
    description:
      "Expect direct updates, actionable next steps, and realistic timelines.",
    icon: "message",
  },
] as const;

export const aboutBody = {
  missionTitle: "Our mission",
  missionBody:
    "Help teams engineer dependable products by combining practical manufacturing insight with disciplined engineering clarity.",
  approachTitle: "Our approach",
  approachBody:
    "We start by understanding constraints, then translate requirements into a repeatable plan that supports fast learning and predictable delivery.",
} as const;

export const servicesCards: ServiceCard[] = [
  {
    title: "Manufacturing-ready design",
    description:
      "Support for DFM/DFA decisions, tolerance strategy, and documentation that reduces production risk.",
    icon: "layers",
  },
  {
    title: "Prototype planning & execution",
    description:
      "Build plans aligned to validation goals so teams learn faster before committing to scale.",
    icon: "wand",
  },
  {
    title: "Production rollout support",
    description:
      "Coordination and readiness checks that help teams transition from prototype to production smoothly.",
    icon: "shield",
  },
  {
    title: "Quality & review workflows",
    description:
      "Structured reviews and checklists that keep quality consistent across handoffs.",
    icon: "check",
  },
] ;

export const productsCards: ServiceCard[] = [
  {
    title: "Precision component kits",
    description:
      "Configurable kits designed to reduce integration time and improve consistency across builds.",
    icon: "layers",
  },
  {
    title: "Validated assemblies",
    description:
      "Assemblies with structured documentation and verification steps built into the lifecycle.",
    icon: "shield",
  },
  {
    title: "Modular manufacturing solutions",
    description:
      "Solutions that help teams standardize processes while still supporting product variety.",
    icon: "message",
  },
  {
    title: "Prototype-to-production packages",
    description:
      "Starter packages that guide teams from early validation through production readiness.",
    icon: "spark",
  },
] ;

export const contact = {
  detailsTitle: "What happens next",
  detailsItems: [
    {
      title: "Share your requirements",
      description:
        "Tell us what you're building, timelines, and any key constraints or preferences.",
      icon: "message",
    },
    {
      title: "We review and respond",
      description:
        "Our team will validate details and follow up with questions, if needed.",
      icon: "check",
    },
    {
      title: "Get a quote and plan",
      description:
        "You'll receive next steps and a clear path toward prototyping or production.",
      icon: "spark",
    },
  ],
  form: {
    title: "Quote request",
    description:
      "Provide project details below. We’ll use them to respond with next steps and timelines.",
    fields: {
      nameLabel: "Name",
      emailLabel: "Work email",
      companyLabel: "Company (optional)",
      budgetLabel: "Estimated budget",
      detailsLabel: "Project details",
    },
    placeholders: {
      name: "Your name",
      email: "name@company.com",
      company: "Company name (optional)",
      budget: "Select a range",
      details: "Briefly describe what you need (requirements, constraints, and timeline).",
    },
    budgetOptions: [
      { value: "under_25k", label: "Under $25k" },
      { value: "25k_50k", label: "$25k–$50k" },
      { value: "50k_100k", label: "$50k–$100k" },
      { value: "100k_plus", label: "$100k+" },
    ],
    submitLabel: "Submit request",
    submittingLabel: "Submitting...",
    successTitle: "Request received",
    successMessage:
      "Thanks—your quote request has been received. We’ll follow up shortly.",
    apiErrorTitle: "Could not submit request",
    privacyNote:
      "AutoDate will only use your details to respond to this request.",
    fieldErrors: {
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      detailsTooShort: "Project details are too short.",
      detailsTooLong: "Project details are too long.",
    },
    fallbackApiMessage:
      "Please try again in a moment. If the issue continues, contact us directly.",
  },
} as const;

