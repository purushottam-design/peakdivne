import type { Metadata } from "next";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Ethnic Jewellery | Peakdivine",
  description: "Complete your look with handcrafted ethnic jewellery from Peakdivine. Earrings, necklaces and more to pair with every outfit.",
};

export default function JewelleryPage() {
  return (
    <ProductGrid
      title="Jewellery"
      subtitle="Handpicked jewellery pieces to complement your favourite Peakdivine outfits"
      category="jewellery"
    />
  );
}

