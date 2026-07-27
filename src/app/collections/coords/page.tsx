import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Co-ord Sets for Women | Peakdivine",
  description: "Discover stylish co-ord sets for women at Peakdivine. Elevated matching sets for modern ethnic and fusion looks.",
};

export default function CoordsPage() {
  return (
    <ProductGrid
      title="Co-ord Sets"
      subtitle="Versatile co-ord sets that blend contemporary silhouettes with ethnic detailing"
      category="coords"
    />
  );
}

