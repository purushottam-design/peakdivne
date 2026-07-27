import ProductGrid from "@/components/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kurtas & Kurtis for Women | Peakdivine",
  description: "Shop the latest kurtas and kurtis for women at Peakdivine. Cotton, silk, printed, embroidered and more designs.",
};

export default function KurtasPage() {
  return (
    <ProductGrid
      title="Kurtas & Kurtis"
      subtitle="From casual cotton to festive silk — explore our wide range of kurtas designed for every occasion"
      category="kurtas"
    />
  );
}
