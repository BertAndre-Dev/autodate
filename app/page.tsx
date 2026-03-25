import Hero from "@/components/layout/Hero";
import HomePageSections from "@/components/sections/home/HomePageSections";
import { hero } from "@/constants";

export default function Home() {
  return (
    <>
      <Hero {...hero.home} />
      <HomePageSections />
    </>
  );
}
