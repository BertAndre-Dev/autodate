import Hero from "@/components/layout/Hero";
import ProductsPageSections from "@/components/sections/products/ProductsPageSections";
import { hero } from "@/constants";

export default function ProductsPage() {
  return (
    <>
      <Hero {...hero.products} />
      <ProductsPageSections />
    </>
  );
}

