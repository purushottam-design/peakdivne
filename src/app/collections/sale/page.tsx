import ProductGrid from "@/components/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sale - Upto 50% Off on Ethnic Wear | Peakdivine",
  description: "Shop the Peakdivine end of season sale. Upto 50% off on kurtas, dresses, ethnic sets and more.",
};

export default function SalePage() {
  return (
    <ProductGrid
      title="End of Season Sale"
      subtitle="Upto 50% off on the finest ethnic wear — grab your favourites before they're gone!"
    />
  );
}
