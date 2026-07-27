import ProductGrid from "@/components/ProductGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Women's Dresses | Peakdivine",
  description: "Shop stylish women's dresses at Peakdivine. Casual, festive, anarkali and printed dresses for every occasion.",
};

export default function DressesPage() {
  return (
    <ProductGrid
      title="Dresses"
      subtitle="Effortlessly elegant dresses for every mood and moment — from beach to banquet"
      category="dresses"
    />
  );
}
