"use client";

import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { useShop } from "@/context/ShopContext";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, formatPrice } = useShop();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  return (
    <div>
      <div
        className="py-12 text-center animate-fade-in-up"
        style={{ background: "#FAF8F4", borderBottom: "1px solid #E8E4DE" }}
      >
        <p className="section-tag">Saved for later</p>
        <h1 className="section-title" style={{ marginBottom: "8px" }}>
          My Wishlist
        </h1>
        <p
          style={{
            fontFamily: '"Karla", sans-serif',
            fontSize: "13px",
            color: "#7A7A7A",
          }}
        >
          {wishlistProducts.length} item{wishlistProducts.length !== 1 ? "s" : ""} in your wishlist
        </p>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 py-12">
        {wishlistProducts.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="text-gray-300 mx-auto mb-4" />
            <h2
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.5rem",
                color: "#7A7A7A",
                marginBottom: "8px",
              }}
            >
              Your wishlist is empty
            </h2>
            <p
              style={{
                fontFamily: '"Karla", sans-serif',
                fontSize: "14px",
                color: "#7A7A7A",
                marginBottom: "24px",
              }}
            >
              Save items you love by clicking the heart on product pages
            </p>
            <Link href="/collections/kurtas" className="btn-primary">
              Shop Now <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4 stagger-children">
            {wishlistProducts.map((product, i) => (
              <div
                key={product.id}
                className="product-card group animate-fade-in-up relative"
                style={{ animationDelay: `${i * 0.05}s` } as React.CSSProperties}
              >
                <Link href={`/products/${product.id}`} className="block">
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
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-2 right-2 z-10 w-9 h-9 rounded-full bg-white/90 shadow flex items-center justify-center text-[#C61D24] hover:bg-white transition-colors"
                  aria-label="Remove from wishlist"
                >
                  <Heart size={18} className="fill-current" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
