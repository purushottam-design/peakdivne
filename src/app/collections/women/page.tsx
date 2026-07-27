import ProductGrid from "@/components/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Ethnic Wear - All Collections | Peakdivine",
  description: "Shop the latest women's ethnic wear collection at Peakdivine. Kurtas, dresses, co-ords, lehengas and more.",
};

export default function WomenCollectionPage() {
  return (
    <ProductGrid
      title="Women's Collection"
      subtitle="Discover our complete range of ethnic wear for the modern Indian woman"
    />
  );
}
