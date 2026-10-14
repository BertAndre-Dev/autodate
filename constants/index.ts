import type {
  BlogPost,
  FooterColumn,
  HeroProps,
  HomeHeroLanding,
  NavLink,
  ServiceCard,
  ServicesPageSection,
  SolutionsPageContent,
  TailoredIndustryItem,
} from "@/types";

export const siteConfig = {
  name: "AutoDate",
  tagline: "SMART FLEET",

  title: "AutoDate — Precision Engineering",
  description:
    "From prototype to production, AutoDate helps teams engineer reliable products with speed, quality, and clarity.",
} as const;

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/blog", label: "Blog" },
];

export const navContactCta = {
  href: "/#contact",
  label: "Contact Us",
} as const;

export const homeHeroLanding: HomeHeroLanding = {
  pill: "Intelligent Fleet Solutions",
  titleLine1: "Intelligent fleet",
  titleLine2: "solutions for",
  rotatingWords: [
    "Smart Routing",
    "Maintenance",
    "Real-Time Optimization",
  ],
  description:
    "One partner for every stage of your fleet, backed by the Smart Fleet software platform.",
  emailPlaceholder: "Enter your email",
  ctaLabel: "Book a Demo",
  ctaHref: "#contact",
  stats: [
    { value: "10+", label: "Years" },
    { value: "6", label: "Industry Sectors" },
    { value: "99%", label: "Client Satisfaction" },
  ],
  mainImageSrc: "/main.svg",
  mainImageAlt: "White commercial van in a clean studio-style setting.",
};

export const footerCta = {
  title: "Ready To See Your Whole Fleet In One View?",
  description:
    "Autodate is built for enterprise and medium-to-large fleet operators around the world.",
  ctaLabel: "Contact Us",
  ctaHref: "/#contact",
  brandLine: "Smart Fleet Management",
} as const;

export const footerColumns: FooterColumn[] = [
  {
    title: "Quick Links",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/#contact", label: "Contact Us" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/#services", label: "Operations Management" },
      {
        href: "/#services",
        label: "Unified Vehicle Data & Compliance System",
      },
      { href: "/#services", label: "Risk, Safety, Incident Intelligence" },
      { href: "/#services", label: "Enterprise Date & Integration Layer" },
    ],
  },
  {
    title: "Contact",
    links: [
      {
        href: "text",
        label: "20 Awudu Ekpheka Blvd, Lekki Phase 1, Lagos Nigeria.",
      },
      {
        href: "mailto:inquiry@autodatefleet.com",
        label: "inquiry@autodatefleet.com",
      },
      { href: "tel:+2349138667927", label: "+234 913 866 7927" },
    ],
    socialLinks: [
      {
        href: "https://www.instagram.com/autodatesmartfleet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        label: "Instagram",
        icon: "/instagram.svg",
      },
      {
        href: "https://www.linkedin.com/company/autodate-smart-fleet/",
        label: "LinkedIn",
        icon: "/linkedin.svg",
      },
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
    title: "Engineering that ships on time.",
    subtitle:
      "From prototype to production, we help teams design and deliver high-quality parts with confidence.",
    ctaLabel: "Request a quote",
    ctaHref: "/contact",
  },
  about: {
    variant: "pageTitle",
    pageTitle: "About Us",
    title: "Support across the full vehicle lifecycle, not just after it is on the road.",
    subtitle:
      "Autodate is a technology-driven fleet and mobility company for global enterprises.",
    ctaLabel: "Contact Us",
    ctaHref: "/#contact",
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
    title: "Get in touch",
    subtitle:
      "Share a few details and our team will respond with next steps and timelines.",
    ctaLabel: "Send request",
    ctaHref: "/contact",
  },
};


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


export const homeIntelligentFleet = {
  pill: "Intelligent Fleet Management",
  title: "Intelligent Fleet Management",
  description:
    "Gain complete visibility and control over your fleet operations with a centralized, real-time intelligence system designed for efficiency, safety, and scalability. Track vehicle movement, driver behavior, and leverage vehicle data insights to anticipate maintenance needs.",
  capabilitiesTitle: "Key Capabilities",
  collageTopImageSrc: "/Intelligent/cars.svg",
  collageTopImageAlt: "Aerial view of a large fleet parking area with many vehicles.",
  collageBottomImageSrc: "/Intelligent/man.svg",
  collageBottomImageAlt:
    "Fleet professional on a phone while seated in a vehicle.",
  capabilities: [
    "Real-Time Monitoring & Optimization",
    "Predictive Maintenance & Lifecycle Management",
    "Smart Routing & Traffic Intelligence",
  ],
} as const;

export const fleetOfferCards = [
  {
    title: "Smart Fleet Platform",
    description: "Real-time tracking, compliance and safety intelligence.",
    imageSrc: "/fleet/car.png",
  },
  {
    title: "Vehicle Purchase and Leasing:",
    description: "Sourcing, procurement and registration support.",
    imageSrc: "/fleet/car.png",
  },
  {
    title: "Maintenance",
    description: "Scheduled parts purchase, servicing and repair management.",
    imageSrc: "/fleet/car.png",
  },
  {
    title: "Compliance and Insurance",
    description:
      "Automated renewals, always-valid documents, and coverage that keeps pace with your fleet.",
    imageSrc: "/fleet/car.png",
  },
] as const;

export const problemSection = {
  eyebrow: "Industry insiders with over 10 years of experience",
  title: "The Problem We Solve",
  paragraphs: [
    "Most fleet operators still run on paper records, spreadsheets and informal incident reporting. Vehicles, drivers, compliance and maintenance data sit in different places, or nowhere at all. The result is poor visibility, avoidable costs, regulatory exposure and safety risk that could be managed ahead of time.",
    "Our market survey found strong demand for one integrated partner instead of another point tool.",
  ],
  ctaLabel: "Read More",
  ctaHref: "/about",
  imageSrc: "/img.svg",
  imageAlt: "Rows of vehicles parked in a fleet yard.",
} as const;

export const homeServicesLanding = {
  eyebrow: "What we do",
  title: "Everything your fleet needs, from purchase to disposal.",
} as const;

export const homeServicesLandingCards: ServiceCard[] = [
  {
    title: "Smart Fleet Platform",
    description:
      "Real-time tracking, compliance and safety intelligence.",
    icon: "/service/traffic-jam.svg",
    href: "/services#platform",
  },
  {
    title: "Vehicle Purchase and Leasing",
    description:
      "Sourcing and procurement support for fleet-grade vehicles. We handle registration, documentation and plate number processing on your behalf, so new vehicles are road-ready without the paperwork falling on your team.",
    icon: "/service/traffic-jam.svg",
    href: "/services#purchase",
  },
  {
    title: "Maintenance",
    description:
      "Scheduled parts purchase, servicing and repair management. Keep every vehicle serviced on time and out of the workshop for as little time as possible, with maintenance planned and tracked through the Smart Fleet platform.",
    icon: "/service/traffic-jam.svg",
    href: "/services#maintenance",
  },
  {
    title: "Compliance and Insurance",
    description:
      "Digitized compliance records with alerts at 30, 14 and 7 days before expiry, paired with insurance support for every vehicle in your fleet. Documents stay valid and coverage keeps pace as your fleet changes.",
    icon: "/service/traffic-jam.svg",
    href: "/services#compliance",
  },
  {
    title: "Vehicle disposal and Auction",
    description:
      "When a vehicle reaches the end of its time in your fleet, we support its sale through auction or direct sales.",
    icon: "/service/traffic-jam.svg",
    href: "/services#disposal",
  },
  {
    title: "Operations Management",
    description:
      "Streamline and automate fleet operations from dispatch to delivery. Monitor performance, reduce inefficiencies, and improve turnaround time with intelligent workflows and real-time oversight.",
    icon: "/service/traffic-jam.svg",
    href: "/#contact",
  },
];

export const servicesPage = {
  hero: {
    title: "Full Lifecycle Fleet Services",
    subtitle:
      "Support across the full vehicle lifecycle, not just after it is on the road.",
    imageSrc: "/service/service-hero.png",
    imageAlt: "Three cars driving on a highway at sunset.",
  },
  sections: [
    {
      id: "purchase",
      title: "Vehicle Purchase And Leasing",
      body: "Sourcing and procurement support for fleet-grade vehicles. We handle registration, documentation and plate number processing on your behalf, so new vehicles are road-ready without the paperwork falling on your team.",
      mediaFirst: false,
      images: [
        {
          src: "/service/car-key.png",
          alt: "Car keys being handed over beside a red vehicle.",
        },
        {
          src: "/service/handshake.png",
          alt: "Two people shaking hands beside a pickup truck.",
        },
      ],
      included: [
        "Sourcing and procurement of fleet-grade vehicles",
        "Vehicle registration",
        "Documentation",
        "Plate number processing, handled for you",
      ],
      ctaLabel: "Enquire about purchase or leasing",
      ctaHref: "/#contact",
    },
    {
      id: "maintenance",
      title: "Maintenance",
      body: "Scheduled parts purchase, servicing and repair management. Keep every vehicle serviced on time and out of the workshop for as little time as possible, with maintenance planned and tracked through the Smart Fleet platform.",
      mediaFirst: true,
      images: [
        {
          src: "/service/Technician3.png",
          alt: "A technician holding wrenches over an open car engine.",
        },
        {
          src: "/service/fix.png",
          alt: "A white car raised on a lift in a workshop.",
        },
      ],
      included: [
        "Scheduled servicing",
        "Parts purchase",
        "Repair management",
        "Maintenance scheduling inside the platform",
      ],
      ctaLabel: "Talk to us about maintenance",
      ctaHref: "/#contact",
    },
    {
      id: "compliance",
      title: "Compliance And Insurance",
      body: "Digitized compliance records with alerts at 30, 14 and 7 days before expiry, paired with insurance support for every vehicle in your fleet. Documents stay valid and coverage keeps pace as your fleet changes.",
      mediaFirst: true,
      images: [
        {
          src: "/service/lady.png",
          alt: "A fleet officer holding documents and a car key beside a black SUV.",
        },
        {
          src: "/service/car-key.png",
          alt: "Car keys being handed over beside a red vehicle.",
        },
      ],
      included: [
        "Digital compliance records",
        "Automated renewals and expiry alerts at 30, 14 and 7 days",
        "Insurance support for every vehicle",
      ],
      ctaLabel: "Get compliance support",
      ctaHref: "/#contact",
    },
    {
      id: "disposal",
      title: "Vehicle Disposal And Auction",
      body: "When a vehicle reaches the end of its time in your fleet, we support its sale through auction or direct sales.",
      mediaFirst: true,
      images: [
        {
          src: "/service/man.png",
          alt: "A man in a suit opening the door of a car in a showroom.",
        },
        {
          src: "/service/cars.png",
          alt: "A row of parked cars along a paved street.",
        },
      ],
    },
    {
      id: "platform",
      title: "Smart Fleet Platform",
      body: "All of the above is connected through our software platform, giving you live tracking, one view of compliance and a clear picture of risk and safety.",
      mediaFirst: true,
      images: [
        {
          src: "/service/technicain2.png",
          alt: "A driver holding a tablet at the steering wheel.",
        },
        {
          src: "/service/technician.png",
          alt: "A fleet operator reviewing live truck locations on a tablet.",
        },
      ],
      ctaLabel: "Explore the platform",
      ctaHref: "/#contact",
    },
  ] satisfies ServicesPageSection[],
};

export const solutionsPage: SolutionsPageContent = {
  hero: {
    title: "Our Technology",
    subtitle: "(the smart fleet web app)",
    description:
      "One platform, four pillars, unifying everything fleet operators currently manage by hand.",
    ctaLabel: "Book a Demo",
    ctaHref: "/#contact",
    imageSrc: "/solutionns/app.png",
    imageAlt:
      "Smart Fleet dashboard on a tablet, showing fleet totals, quick actions, and alerts.",
  },
  pillarsTitle: "The Four Pillars",
  pillars: [
    {
      title: "Fleet intelligence and operations",
      body: "See your whole fleet in one view. Live vehicle tracking, dashboards, fuel and trip analytics, and driver performance all in one place.",
      imageSrc: "/solutionns/pillar.png",
      imageAlt: "Cars on a highway overlaid with a live tracking grid.",
    },
    {
      title: "Unified vehicle data and compliance",
      body: "Every vehicle gets a digital profile. Automated alerts at 30, 14 and 7 days before expiry, plus renewal tracking, keep your documents valid.",
      imageSrc: "/solutionns/pillar2.png",
      imageAlt: "A connected truck driving through a corridor of vehicle data.",
    },
    {
      title: "Risk, safety and incident intelligence",
      body: "Get ahead of safety issues with risk heatmaps, incident logging and SOS capability.",
      imageSrc: "/solutionns/pillar3.png",
      imageAlt: "An analyst reviewing a falling risk chart beside live operations data.",
    },
    {
      title: "Enterprise data and integration layer",
      body: "Centralized data that connects to insurers, logistics platforms and government systems, so your fleet information is not stuck in silos.",
      imageSrc: "/solutionns/pillar4.png",
      imageAlt: "A central server linked to several laptops across one data layer.",
    },
  ],
  capabilitiesTitle: "Included capabilities",
  capabilities: [
    "Fleet dashboard",
    "Vehicle profiles",
    "Driver Profile",
    "GPS tracking",
    "Compliance alerts",
    "Maintenance scheduling",
    "Incidence logging",
  ],
  comparisonTitle: "From scattered data to one system",
  comparisonWithoutLabel: "Without Smart Fleet",
  comparisonWithLabel: "With Smart Fleet",
  comparisonRows: [
    {
      without: "Paper records and spreadsheets",
      with: "Digital vehicle profiles",
    },
    {
      without: "Missed renewals",
      with: "Alerts at 30, 14 and 7 days",
    },
    {
      without: "No idea where vehicles are",
      with: "Live GPS tracking",
    },
    {
      without: "Informal incident reporting",
      with: "Incident logging",
    },
    {
      without: "Data in different places",
      with: "One connected platform",
    },
  ],
};

export const homeTailoredSection = {
  pill: "Industry Fleet Solutions",
  title: "Tailored Solution For Every Industry",
  description:
    "Our platform is built to adapt across industries, delivering customized mobility intelligence solutions that address unique operational challenges. ",
  heroImageSrc: "/tailored/logistics.svg",
  heroImageAlt:
    "Fleet and logistics imagery representing tailored industry solutions.",
} as const;

export const homeTailoredIndustries: TailoredIndustryItem[] = [
  {
    id: "logistics",
    label: "Logistics & Transportation",
    iconSrc: "/tailored/logistics-icon.svg",
    panelImageSrc: "/tailored/logistics.svg",
    imageAlt: "Logistics and transportation fleet solutions.",
    body: "Optimize routes, dwell time, and asset utilization with live visibility from first mile to last. Integrate dispatch, compliance, and performance metrics in one operational view.",
  },
  {
    id: "insurance",
    label: "Insurance Providers",
    iconSrc: "/tailored/insurance-icon.svg",
    panelImageSrc: "/tailored/insurance.svg",
    imageAlt: "Insurance and telematics for providers.",
    body: "Enhance underwriting accuracy and claims processing with access to reliable vehicle data, driver behavior metrics, and incident reports. ",
  },
  {
    id: "government",
    label: "Government & Public Sector",
    iconSrc: "/tailored/government-icon.svg",
    panelImageSrc: "/tailored/government.svg",
    imageAlt: "Government and public sector fleet programs.",
    body: "Enable smarter traffic management, data-driven policy-making, and improved road safety enforcement through centralized mobility intelligence.",
  },
  {
    id: "ride",
    label: "Ride-Hailing & Mobility Platforms",
    iconSrc: "/tailored/ride-icon.svg",
    panelImageSrc: "/tailored/lady-drivinng.png",
    imageAlt: "Driver and passenger talking in a car.",
    body: "Improve driver safety, route efficiency, and customer experience with real-time traffic intelligence and integrated vehicle data.",
  },
  {
    id: "corporate",
    label: "Corporate & Enterprise Fleet",
    iconSrc: "/tailored/corporate-icon.svg",
    panelImageSrc: "/tailored/coperate.svg",
    imageAlt: "Corporate and enterprise fleet management.",
    body: "Ensure employee safety, monitor fleet usage, and streamline transportation logistics across business operations.",
  },
  {
    id: "automotive",
    label: "Automotive & Mobility Startups",
    iconSrc: "/tailored/automative-icon.svg",
    panelImageSrc: "/tailored/automative.svg",
    imageAlt: "Automotive and mobility startup solutions.",
    body: "Leverage a robust data infrastructure to build and scale innovative mobility solutions faster and more efficiently.",
  },
];

export const aboutPage = {
  title: "About Us",
  subtitle:
    "Support across the full vehicle lifecycle, not just after it is on the road.",
  sinceLabel: "Since",
  sinceYear: "2009",
  imageSrc: "/img.svg",
  imageAlt: "Rows of new vehicles parked in a fleet yard.",
  whoTitle: "Who we are",
  whoBody:
    "Autodate is a technology-driven fleet and mobility company for global enterprises. We support vehicles from acquisition, management and maintenance through to disposal by auction or direct sales, all backed by our Smart Fleet software platform.",
  mission: {
    title: "Mission",
    icon: "/mission.svg",
    body: "To build a connected mobility ecosystem that leverages real-time data and automation to optimize transportation & empower smarter decision-making.",
  },
  vision: {
    title: "Vision",
    icon: "/vission.svg",
    body: "To become Africa’s leading intelligent mobility infrastructure where every vehicle is seamlessly connected through data and technology.",
  },
  approachTitle: "Our approach",
  approachBody:
    "Fleet operators are often managing everything by hand. Records are on paper or in spreadsheets, incidents are handled informally, and critical data is scattered. We built Autodate to bring this together so operators can see their whole fleet, stay compliant and act on problems early.",
  focusTitle: "What we focus on",
  focus: [
    {
      label: "Visibility",
      text: "Live knowledge of where vehicles are and how they are performing.",
    },
    {
      label: "Compliance",
      text: "Documents and renewals kept valid, with alerts before anything expires.",
    },
    {
      label: "Safety",
      text: "Incident logging and risk insight so safety issues are handled proactively.",
    },
    {
      label: "Connected data",
      text: "One central record that connects to insurers, logistics platforms and government systems.",
    },
  ],
  locationTitle: "Where to find us",
  locationBody:
    "20 Awudu Ekpekha Boulevard, Lekki Phase 1, Lagos, Nigeria, serving enterprise clients globally.",
  mapLabel: "20 Awudu Ekpekha Boulevard, Lekki Phase 1, Lagos, Nigeria",
  mapLat: 6.4452159,
  mapLng: 3.4783371,
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
    title: "Send us a message",
    description:
      "Have a sales inquiry, partnership proposal, or a general question? Fill out the form below and we will get back to you promptly.",
    fields: {
      nameLabel: "Name",
      emailLabel: "Email",
      detailsLabel: "Message",
    },
    placeholders: {
      name: "Your name",
      email: "name@company.com",
      details: "Write your message",
    },
    submitLabel: "Submit request",
    submittingLabel: "Submitting...",
    successTitle: "Request received",
    successMessage: "Thanks, your request has been received. We'll follow up shortly.",
    apiErrorTitle: "Could not submit request",
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

export const blogPosts: BlogPost[] = [
  {
    slug: "why-fleet-efficiency-is-the-foundation-of-sustainable-business-operations",
    title:
      "Why Fleet Efficiency Is the Foundation of Sustainable Business Operations",
    excerpt:
      "Fleet efficiency helps businesses reduce operational waste, improve resource utilization, and build more sustainable, resilient operations through smarter data-driven decisions.",
    coverImage: "/blog/blog-5.jpeg",
    coverImageAlt:
      "Fleet efficiency and sustainable business operations represented by connected commercial vehicles and operational data.",
    publishedAt: "2026-08-31",
    author: "Autodate SmartFleet",
    sections: [
      {
        paragraphs: [
          "For businesses that rely on vehicles to move people, products, or services, fleet performance has a direct impact on operational costs, productivity, and sustainability. A fleet that consumes unnecessary fuel, spends too much time idle, or experiences frequent breakdowns creates waste that extends far beyond the vehicle itself.",
          "This is why fleet efficiency is becoming an important foundation for sustainable business operations.",
        ],
      },
      {
        heading: "What Is Fleet Efficiency?",
        paragraphs: [
          "Fleet efficiency is the ability to get the maximum operational value from a fleet while using the fewest necessary resources. It involves optimizing fuel consumption, vehicle utilization, routing, maintenance, driver behaviour, and overall fleet performance.",
          "An efficient fleet is not simply one that has fewer vehicles. It is one where every vehicle is being used effectively, maintained properly, and supported by data-driven decisions.",
        ],
      },
      {
        heading: "Reducing Operational Waste",
        paragraphs: [
          "One of the biggest benefits of improving fleet efficiency is reducing operational waste.",
          "Unnecessary idling, inefficient routes, excessive mileage, poor vehicle utilization, and unplanned maintenance can all increase operating costs. When these inefficiencies occur across a large fleet, their impact can become significant.",
          "With fleet management technology, businesses can monitor vehicle activity, identify inefficiencies, and make informed decisions about how vehicles are being used.",
          "The result is a fleet that does more with less.",
        ],
      },
      {
        heading: "Efficiency and Sustainable Operations",
        paragraphs: [
          "Sustainability is not only about adopting new technologies or changing vehicle types. It is also about improving the way existing resources are managed.",
          "Better fuel efficiency can reduce unnecessary fuel consumption. Smarter route planning can reduce avoidable mileage. Proactive maintenance can help vehicles remain reliable and productive for longer. Improved utilization can ensure that businesses are getting more value from the vehicles they already operate.",
          "These improvements can contribute to both environmental and economic objectives.",
        ],
      },
      {
        heading: "The Role of Technology",
        paragraphs: [
          "Technology is making it easier for fleet managers to measure and improve performance.",
          "Solutions such as GPS fleet tracking, telematics, route optimization, vehicle monitoring, and fleet analytics provide visibility into everyday operations. Managers can use this information to identify patterns, track performance indicators, and respond to inefficiencies before they become larger problems.",
          "This shift from reactive to data-driven fleet management can make sustainability part of everyday operational decision-making.",
        ],
      },
      {
        heading: "Building a More Resilient Business",
        paragraphs: [
          "An efficient fleet can also strengthen business resilience.",
          "Lower operating costs, improved vehicle availability, better maintenance planning, and more predictable operations can help businesses respond more effectively to changing demands.",
          "Ultimately, sustainable fleet management is about creating an operation that is efficient today while being better prepared for tomorrow.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Fleet efficiency is more than a transportation objective. It is a business strategy.",
          "By reducing waste, improving resource utilization, adopting smart fleet technology, and making decisions based on reliable data, businesses can improve operational performance while advancing their sustainability goals.",
          "A more efficient fleet creates a more efficient business—and sustainable operations start with using resources smarter.",
        ],
      },
    ],
  },
  {
    slug: "how-technology-reduces-operational-waste-in-fleet-management",
    title: "How Technology Reduces Operational Waste in Fleet Management",
    excerpt:
      "Operational waste is not always obvious. Here's how fleet management technology turns real-time data into smarter decisions, less idle time, better routes, and more efficient operations.",
    coverImage: "/blog/blog-4.jpeg",
    coverImageAlt:
      "How Technology Reduces Operational Waste — Autodate SmartFleet infographic showing a delivery truck surrounded by visibility, fuel, maintenance, routing, and cost-saving icons.",
    publishedAt: "2026-08-17",
    author: "Autodate SmartFleet",
    sections: [
      {
        paragraphs: [
          "Operational waste is not always obvious. In fleet management, it can come from vehicles sitting idle, inefficient routes, unnecessary fuel consumption, delayed maintenance, underutilized vehicles, or time lost to poor planning.",
          "For businesses managing multiple vehicles, these small inefficiencies can quickly become significant operational costs. This is where fleet management technology can make a measurable difference.",
        ],
      },
      {
        heading: "Turning Fleet Data into Better Decisions",
        paragraphs: [
          "Modern fleet management systems provide businesses with real-time visibility into how their vehicles are being used. Through telematics, GPS tracking, vehicle monitoring, and data analytics, fleet managers can identify patterns that may otherwise go unnoticed.",
          "For example, tracking vehicle activity can reveal excessive idle time, inefficient routes, unauthorized vehicle use, or vehicles that are spending too much time off the road.",
          "Instead of relying on assumptions, managers can use this information to make data-driven fleet decisions.",
        ],
      },
      {
        heading: "Reducing Idle Time and Fuel Waste",
        paragraphs: [
          "One of the simplest ways technology can improve fleet efficiency is by identifying unnecessary idling.",
          "When vehicles remain stationary with engines running, businesses can consume fuel without generating productive mileage. Over time, this contributes to higher operating costs and unnecessary resource consumption.",
          "Fleet technology can help monitor idle time and highlight recurring patterns, allowing managers to address the behaviour and improve fuel efficiency.",
        ],
      },
      {
        heading: "Smarter Routes, Less Waste",
        paragraphs: [
          "Route planning is another area where technology can reduce operational waste. Route optimization tools can help fleet managers identify more efficient journeys, avoid unnecessary mileage, and improve vehicle utilization.",
          "Better routing can mean less time on the road, more productive trips, and fewer resources spent completing the same task.",
          "This supports not only financial efficiency but also sustainable fleet operations.",
        ],
      },
      {
        heading: "Preventing Waste Through Proactive Maintenance",
        paragraphs: [
          "Vehicle downtime can also create significant operational waste. Unexpected breakdowns can disrupt schedules, increase repair costs, and reduce fleet availability.",
          "With predictive maintenance and vehicle performance monitoring, fleet managers can identify potential maintenance issues earlier. Addressing problems before they become major failures can extend vehicle lifespan and improve fleet reliability.",
        ],
      },
      {
        heading: "Technology as an ESG Enabler",
        paragraphs: [
          "Reducing operational waste is more than a cost-saving strategy. It can also contribute to broader ESG goals.",
          "A more efficiently managed fleet can reduce unnecessary fuel consumption, improve resource utilization, strengthen operational controls, and support safer, more accountable fleet operations.",
          "The goal is not simply to operate more vehicles, it is to operate them smarter.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Technology gives fleet managers the visibility needed to identify waste, understand its causes, and take action. From fleet tracking and route optimization to fuel monitoring and predictive maintenance, the right tools can transform everyday fleet data into better operational decisions.",
          "Less waste. Better efficiency. Smarter fleet operations.",
        ],
      },
    ],
  },
  {
    slug: "technology-driven-mobility-the-future-of-sustainable-fleet-operations",
    title:
      "Technology-Driven Mobility: The Future of Sustainable Fleet Operations",
    excerpt:
      "The future of fleet management isn't just about moving vehicles, it's about moving smarter. Here's how technology-driven mobility improves efficiency, supports ESG goals, and builds long-term value.",
    coverImage: "/blog/blog-3.jpeg",
    coverImageAlt:
      "Technology-Driven Mobility: The Future of Sustainable Fleet Operations — Autodate SmartFleet banner with connected commercial vans and a city skyline.",
    publishedAt: "2026-08-05",
    author: "Autodate SmartFleet",
    sections: [
      {
        paragraphs: [
          "The future of fleet management isn't just about moving vehicles, it's about moving smarter.",
          "As businesses face increasing pressure to improve efficiency, reduce operational waste, and meet Environmental, Social, and Governance (ESG) expectations, technology-driven mobility has become a key driver of sustainable fleet operations. Organizations are no longer relying solely on traditional fleet management practices. Instead, they're embracing digital technologies that provide greater visibility, improve decision-making, and create long-term business value.",
          "The question is no longer whether technology should be part of fleet management, it's how businesses can use it to operate more efficiently and responsibly.",
        ],
      },
      {
        heading: "What Is Technology-Driven Mobility?",
        paragraphs: [
          "Technology-driven mobility is the use of digital tools, connected systems, and real-time data to improve the way fleets operate.",
          "Rather than managing vehicles through manual processes and fragmented information, businesses can leverage fleet management technology to monitor operations, streamline workflows, and make informed decisions.",
          "Modern mobility solutions enable fleet managers to gain insights into vehicle performance, maintenance schedules, utilization, and operational trends, all from a centralized platform.",
          "This level of visibility allows businesses to respond faster, plan better, and operate more sustainably.",
        ],
      },
      {
        heading: "Driving Fleet Efficiency Through Technology",
        paragraphs: [
          "Efficient fleet operations begin with accurate information.",
          "When businesses have access to real-time data, they can identify inefficiencies before they become costly problems. Underutilized vehicles, delayed maintenance, unnecessary travel, and manual administrative tasks all contribute to operational waste.",
          "By adopting smart fleet management solutions, organizations can:",
        ],
        list: [
          "Improve fleet utilization",
          "Optimize maintenance planning",
          "Reduce vehicle downtime",
          "Streamline reporting",
          "Improve operational efficiency",
        ],
      },
      {
        paragraphs: [
          "These improvements help businesses achieve more with the resources they already have, reducing unnecessary costs while supporting sustainability objectives.",
        ],
      },
      {
        heading: "Supporting ESG Through Smarter Operations",
        paragraphs: [
          "Technology-driven mobility plays an important role in helping organizations achieve their ESG goals.",
        ],
      },
      {
        heading: "Environmental",
        paragraphs: [
          "Efficient route planning, optimized vehicle utilization, and preventive maintenance reduce unnecessary fuel consumption, extend vehicle lifecycles, and minimize operational waste.",
        ],
      },
      {
        heading: "Social",
        paragraphs: [
          "Digital fleet management supports safer operations by improving maintenance compliance, enhancing vehicle reliability, and helping businesses create safer working environments for drivers and employees.",
        ],
      },
      {
        heading: "Governance",
        paragraphs: [
          "Reliable fleet data strengthens transparency, accountability, and compliance. Businesses can monitor key performance indicators, maintain accurate operational records, and generate reports that support stronger governance and informed decision-making.",
          "Technology doesn't replace responsible management—it empowers it.",
        ],
      },
      {
        heading: "Preparing for the Future of Mobility",
        paragraphs: [
          "The fleet industry continues to evolve rapidly.",
          "Connected vehicles, automation, predictive maintenance, artificial intelligence, and data analytics are changing how businesses manage their operations. Organizations that embrace these innovations will be better equipped to adapt to changing market demands while maintaining operational excellence.",
          "Technology-driven mobility provides the flexibility businesses need to scale, improve productivity, and remain competitive in an increasingly digital world.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Sustainable fleet operations are no longer defined solely by the vehicles businesses own, they are defined by how intelligently those vehicles are managed.",
          "Organizations that invest in fleet management software and digital fleet management solutions gain more than operational efficiency. They build resilient, data-driven fleets that support sustainability, strengthen governance, and create long-term business value.",
          "At Autodate SmartFleet, we believe technology is the foundation of modern mobility. By providing businesses with the tools to improve visibility, optimize operations, and reduce operational waste, we help organizations build smarter fleets that are efficient, responsible, and ready for the future.",
        ],
      },
    ],
  },
  {
    slug: "can-technology-make-fleet-operations-more-sustainable",
    title: "Can Technology Make Fleet Operations More Sustainable?",
    excerpt:
      "Sustainability for fleets starts with how operations are managed every day, not only with electric vehicles. Here's how technology drives efficiency, reduces waste, and supports long-term growth.",
    coverImage: "/blog/blog.jpeg",
    coverImageAlt:
      "Fleet management dashboard on a laptop beside white commercial trucks, a city skyline, and wind turbines.",
    publishedAt: "2026-07-13",
    author: "Autodate SmartFleet",
    sections: [
      {
        paragraphs: [
          "Sustainability has become a priority for businesses across industries. For fleet operators, however, the conversation often begins and ends with electric vehicles. While transitioning to EVs is an important step for some organizations, it's not the only or even the most immediate way to build a more sustainable fleet.",
          "In reality, sustainability starts with how a fleet is managed every day. From vehicle utilization and maintenance to route planning and driver behaviour, technology is helping businesses operate more efficiently while reducing waste, lowering costs, and making better use of resources.",
        ],
      },
      {
        heading: "Sustainability Is About Efficiency",
        paragraphs: [
          "A sustainable fleet isn't simply one with newer vehicles. It's a fleet that maximizes every trip, minimizes unnecessary resource consumption, and keeps vehicles operating at their best.",
          "Without the right tools, fleet managers often rely on manual processes, scattered records, and delayed reporting. This can lead to unnecessary trips, vehicles sitting idle for long periods, missed maintenance schedules, and poor visibility into daily operations.",
          "These inefficiencies don't just affect productivity, they also create avoidable waste. Technology helps eliminate many of these challenges by providing real-time insights that enable faster, smarter decisions.",
        ],
      },
      {
        heading: "Better Decisions Through Better Data",
        paragraphs: [
          "Every vehicle generates valuable operational data. When collected and analyzed effectively, that information becomes a powerful tool for improving fleet performance.",
          "Fleet technology can help organizations answer important questions such as:",
        ],
        list: [
          "Which vehicles are being underutilized?",
          "Are maintenance schedules being followed?",
          "Where are unnecessary delays occurring?",
          "Which routes consistently take longer than expected?",
          "How can resources be allocated more efficiently?",
        ],
      },
      {
        paragraphs: [
          "Instead of reacting to problems after they occur, businesses can identify trends early and make proactive decisions that improve operations over time.",
        ],
      },
      {
        heading: "Small Improvements Create Big Results",
        paragraphs: [
          "Sustainability isn't always driven by dramatic changes. Often, it's the result of many small improvements made consistently.",
          "Optimizing routes can reduce unnecessary travel. Preventive maintenance can extend vehicle life and reduce unexpected breakdowns. Monitoring fleet performance can help managers identify opportunities to improve utilization and reduce operational waste.",
          "Individually, these improvements may seem modest. Together, they can significantly enhance both operational efficiency and long-term sustainability.",
        ],
      },
      {
        heading: "Technology Supports Long-Term Growth",
        paragraphs: [
          "As businesses expand, managing a fleet becomes increasingly complex. More vehicles, more drivers, and more operational data require systems that can scale without adding unnecessary administrative burden.",
          "Digital fleet management platforms centralize information, streamline workflows, and provide the visibility needed to make informed decisions across the entire operation.",
          "This allows businesses to spend less time managing paperwork and more time focusing on performance, customer service, and strategic growth.",
        ],
      },
      {
        heading: "A Smarter Path to Sustainability",
        paragraphs: [
          "Building a sustainable fleet doesn't always require replacing every vehicle or making major capital investments overnight.",
          "Sometimes, the most meaningful progress begins with better visibility, smarter planning, and data-driven decision-making.",
          "Technology empowers fleet managers to reduce waste, improve efficiency, and build operations that are both resilient and prepared for the future.",
          "At Autodate SmartFleet, we believe sustainability is achieved through smarter operations. By helping organizations gain greater control over their fleets, we enable them to improve performance, make better use of their resources, and move confidently toward a more sustainable future.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

