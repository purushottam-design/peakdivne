"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import { useShop } from "@/context/ShopContext";

function SearchContent() {
  const searchParams = useSearchParams();
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  const { formatPrice } = useShop();

  const results = q
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      )
    : [];

  return (
    <div>
      <div
        className="py-12 text-center animate-fade-in-up"
        style={{ background: "#FAF8F4", borderBottom: "1px solid #E8E4DE" }}
      >
        <p className="section-tag">Search</p>
        <h1 className="section-title" style={{ marginBottom: "8px" }}>
          {q ? `Results for "${searchParams.get("q")}"` : "Search Products"}
        </h1>
        <p
          style={{
            fontFamily: '"Karla", sans-serif',
            fontSize: "13px",
            color: "#7A7A7A",
          }}
        >
          {q ? `${results.length} product${results.length !== 1 ? "s" : ""} found` : "Use the search bar in the header"}
        </p>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 py-8">
        {!q ? (
          <p
            className="text-center py-12"
            style={{ fontFamily: '"Karla", sans-serif', color: "#7A7A7A" }}
          >
            Enter a search term above to find kurtas, dresses, and more.
          </p>
        ) : results.length === 0 ? (
          <div className="text-center py-20">
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.5rem",
                color: "#7A7A7A",
              }}
            >
              No products found for &quot;{searchParams.get("q")}&quot;
            </p>
            <Link href="/collections/kurtas" className="btn-outline mt-6 inline-block">
              Browse collections
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 stagger-children">
            {results.map((product, i) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="product-card group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` } as React.CSSProperties}
              >
                <div className="product-image-wrap">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {product.badge && (
                    <div
                      className={`product-badge ${
                        product.badge === "NEW"
                          ? "!bg-emerald-700"
                          : product.badge === "BESTSELLER"
                            ? "!bg-[#C61D24]"
                            : product.badge === "PREMIUM"
                              ? "!bg-purple-800"
                              : ""
                      }`}
                    >
                      {product.badge}
                    </div>
                  )}
                  <div className="product-quick-add">Quick View →</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-price">
                    <span className="price-current">{formatPrice(product.price)}</span>
                    <span className="price-original">{formatPrice(product.originalPrice)}</span>
                    <span className="price-save">{product.discount}% off</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="py-12 text-center" style={{ background: "#FAF8F4", borderBottom: "1px solid #E8E4DE" }}>
        <p className="section-tag">Search</p>
        <h1 className="section-title" style={{ marginBottom: "8px" }}>Search Products</h1>
        <p style={{ fontFamily: '"Karla", sans-serif', fontSize: "13px", color: "#7A7A7A" }}>Loading...</p>
      </div>
    }>
      <SearchContent />
    </Suspense>
  );
}
