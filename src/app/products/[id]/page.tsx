import { notFound } from "next/navigation";
import { getProductById, products } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const id = parseInt(params.id, 10);
  const product = getProductById(id);

  if (!product) {
    return notFound();
  }
  return <ProductDetailClient product={product} />;
}
