"use client";

import dynamic from "next/dynamic";
import styles from "./office-map.module.css";

const OfficeMap = dynamic(() => import("./OfficeMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-105 w-full items-center justify-center bg-[#e8ebef] text-sm text-neutral-500 md:h-130">
      Loading map…
    </div>
  ),
});

export default function LocationMap() {
  return (
    <div className={styles.frame}>
      <OfficeMap />
    </div>
  );
}
