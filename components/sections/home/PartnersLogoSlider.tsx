import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import styles from "./partners-logo-slider.module.css";

type Logo = { fileName: string; alt: string; width?: number; height?: number };

const logos: Logo[] = [
  { fileName: "Siemens-energy-logo (1) 2.svg", alt: "Siemens Energy" },
  { fileName: "British_Airways_(9) 1.svg", alt: "British Airways" },
  { fileName: "JF-Inspired-Copy 1.svg", alt: "JustFood" },
  { fileName: "hightechsynergy_logo 2.svg", alt: "Hightech Synergy" },
  { fileName: "axamansard-insurance-plc--600-removebg-preview 2.svg", alt: "AXA Mansard" },
  { fileName: "RT-Briscoe-Nigeria-Plc-removebg-preview 2.svg", alt: "RT Briscoe Nigeria Plc" },
  { fileName: "leadway-1024x334-removebg-preview 2.svg", alt: "Leadway" },
];

function toPublicSrc(fileName: string) {
  return encodeURI(`/slider/${fileName}`);
}

function LogoRow() {
  return (
    <div className={styles.row}>
      {logos.map((logo) => (
        <div key={logo.fileName} className={styles.logoWrap}>
          <Image
            src={toPublicSrc(logo.fileName)}
            alt={logo.alt}
            width={logo.width ?? 190}
            height={logo.height ?? 56}
            className={styles.logo}
          />
        </div>
      ))}
    </div>
  );
}

function LogoRowClone() {
  return (
    <div className={styles.row} aria-hidden="true">
      {logos.map((logo) => (
        <div key={`clone-${logo.fileName}`} className={styles.logoWrap}>
          <Image
            src={toPublicSrc(logo.fileName)}
            alt=""
            width={logo.width ?? 190}
            height={logo.height ?? 56}
            className={styles.logo}
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnersLogoSlider() {
  return (
    <section className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="flex flex-col items-center gap-6">
          <span className="inline-flex rounded-full bg-[#EFEFEF] px-6 py-2 text-xs font-semibold text-neutral-700 ring-1 ring-neutral-200">
          Trusted Fleet Solutions For
        </span>

        <div className={styles.viewport}>
          <div className={styles.track}>
            <LogoRow />
            <LogoRowClone />
            {/* Third copy prevents gap when logos don't fill full width */}
            <LogoRow />
          </div>
        </div>
      </div>
    </section>
  );
}
