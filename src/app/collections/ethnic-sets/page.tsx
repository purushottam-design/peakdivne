import ProductGrid from "@/components/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ethnic Sets for Women | Peakdivine",
  description: "Shop complete ethnic sets for women at Peakdivine. Kurta sets, sharara sets, palazzo sets and more.",
};

export default function EthnicSetsPage() {
  return (
    <ProductGrid
      title="Ethnic Sets"
      subtitle="Perfectly coordinated ethnic sets — beautifully designed for festivals, functions, and everyday grace"
      category="ethnic-sets"
    />
  );
}
