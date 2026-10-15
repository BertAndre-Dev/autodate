import PartnerLogoFrame from "./partner-logo-frame";

type Logo = { fileName: string; alt: string; width?: number; height?: number };

const logos: Logo[] = [
  { fileName: "Siemens-energy-logo.svg", alt: "Siemens Energy" },
  { fileName: "British_Airways_(9) 1.svg", alt: "British Airways" },
  { fileName: "JF-Inspired-Copy 1.svg", alt: "JustFood" },
  { fileName: "hightechsynergy_logo 2.svg", alt: "Hightech Synergy" },
  { fileName: "axamansard-insurance-plc--600-removebg-preview 2.svg", alt: "AXA Mansard" },
  { fileName: "RT-Briscoe-Nigeria-Plc-removebg-preview 2.svg", alt: "RT Briscoe Nigeria Plc" },
  { fileName: "leadway-1024x334-removebg-preview 2.svg", alt: "Leadway" },
];

export default function PartnersLogoSlider() {
  return (
    <section className="mx-auto py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="flex flex-col items-center gap-10">
        <span className="inline-flex rounded-full bg-[#EFEFEF] px-6 py-2 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
          Trusted Fleet Solutions For
        </span>

        <PartnerLogoFrame logos={logos} />
      </div>
    </section>
  );
}
