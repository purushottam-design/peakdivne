import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Ethnic Sets With Dupatta | Peakdivine",
  description: "Shop elegant ethnic sets with dupatta at Peakdivine. Thoughtfully coordinated outfits for festive and special occasions.",
};

export default function WithDupattaPage() {
  return (
    <ProductGrid
      title="Ethnic Sets With Dupatta"
      subtitle="Coordinated kurta, bottom and dupatta sets crafted for effortless festive elegance"
      category="with-dupatta"
    />
  );
}

