"use client";

import Link from "next/link";
import { useState } from "react";
import { Heart, Share2, Star, ChevronDown, Check, Truck, RotateCcw, Shield } from "lucide-react";
import type { Product } from "@/data/products";
import { getRelatedProducts } from "@/data/products";
import { useShop } from "@/context/ShopContext";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const related = getRelatedProducts(product);
  const { addToCart, isInWishlist, toggleWishlist } = useShop();

  const [selectedImg, setSelectedImg] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [qty, setQty] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const wishListed = isInWishlist(product.id);

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(
      { id: product.id, name: product.name, price: product.price, img: product.img, size: selectedSize },
      qty
    );
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2500);
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-2 mb-8"
        style={{ fontFamily: '"Karla", sans-serif', fontSize: "12px", color: "#7A7A7A" }}
      >
        <Link href="/" className="hover:text-[#C61D24] transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/collections/women" className="hover:text-[#C61D24] transition-colors">
          Women
        </Link>
        <span>/</span>
        <span className="text-gray-900">Kurta Sets</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Gallery */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-3 w-16 flex-shrink-0">
            {product.imgs.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`w-16 h-20 overflow-hidden border-2 transition-colors ${
                  selectedImg === i ? "border-amber-700" : "border-transparent"
                }`}
              >
                <img src={img} alt={`View ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
          <div className="flex-1 aspect-[2/3] overflow-hidden relative">
            <img
              src={product.imgs[selectedImg]}
              alt={product.name}
              className="w-full h-full object-cover"
              style={{ transition: "opacity 0.3s ease" }}
            />
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 w-10 h-10 bg-white shadow-md flex items-center justify-center transition-colors ${
                wishListed ? "text-red-500" : "text-gray-500 hover:text-red-400"
              }`}
              aria-label={wishListed ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart size={18} fill={wishListed ? "currentColor" : "none"} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1
            style={{
              fontFamily: '"Playfair Display", serif',
              fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
              color: "#1A1A1A",
              fontWeight: 600,
              lineHeight: 1.3,
              marginBottom: "12px",
            }}
          >
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i <= Math.round(product.rating) ? "#C61D24" : "none"}
                  className={i <= Math.round(product.rating) ? "text-[#C61D24]" : "text-gray-300"}
                />
              ))}
            </div>
            <span
              style={{
                fontFamily: '"Karla", sans-serif',
                fontSize: "12px",
                color: "#7A7A7A",
              }}
            >
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div
            className="flex items-center gap-4 mb-6 pb-6"
            style={{ borderBottom: "1px solid #E8E4DE" }}
          >
            <span
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "1.8rem",
                color: "#1A1A1A",
                fontWeight: 600,
              }}
            >
              ₹{product.price.toLocaleString()}
            </span>
            <span
              style={{
                fontFamily: '"Karla", sans-serif',
                fontSize: "1.1rem",
                color: "#7A7A7A",
                textDecoration: "line-through",
              }}
            >
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span
              style={{
                background: "#C41E3A",
                color: "white",
                padding: "3px 10px",
                fontFamily: '"Karla", sans-serif',
                fontSize: "12px",
                fontWeight: 700,
              }}
            >
              {product.discount}% OFF
            </span>
          </div>

          {/* Color */}
          <div className="mb-5">
            <p
              style={{
                fontFamily: '"Karla", sans-serif',
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                color: "#4A4A4A",
                marginBottom: "10px",
              }}
            >
              Colour: <span style={{ color: "#C61D24" }}>{selectedColor}</span>
            </p>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-3 py-1.5 text-xs border transition-all duration-200 ${
                    selectedColor === color
                      ? "border-[#C61D24] bg-red-50 text-[#C61D24]"
                      : "border-gray-200 text-gray-600 hover:border-red-300"
                  }`}
                  style={{ fontFamily: '"Karla", sans-serif', fontSize: "11px" }}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-10px">
              <p
                style={{
                  fontFamily: '"Karla", sans-serif',
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#4A4A4A",
                }}
              >
                Size
              </p>
              <button
                style={{
                  fontFamily: '"Karla", sans-serif',
                  fontSize: "11px",
                  color: "#C61D24",
                  textDecoration: "underline",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Size Guide
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border text-sm font-medium transition-all duration-200 ${
                    selectedSize === size
                      ? "border-black bg-black text-white"
                      : "border-gray-200 text-gray-700 hover:border-gray-400"
                  }`}
                  style={{ fontFamily: '"Karla", sans-serif' }}
                >
                  {size}
                </button>
              ))}
            </div>
            {!selectedSize && (
              <p
                style={{
                  fontFamily: '"Karla", sans-serif',
                  fontSize: "11px",
                  color: "#C41E3A",
                  marginTop: "6px",
                }}
              >
                Please select a size
              </p>
            )}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex gap-3 mb-6">
            <div className="flex items-center border border-gray-200">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                −
              </button>
              <span
                className="w-12 text-center"
                style={{ fontFamily: '"Karla", sans-serif', fontSize: "14px" }}
              >
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-11 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 font-semibold tracking-wider text-xs uppercase transition-all duration-300 ${
                addedToCart ? "bg-green-700 text-white border-green-700" : "bg-black text-white hover:bg-white hover:text-black border-black"
              } border-2`}
              style={{ fontFamily: '"Karla", sans-serif', fontSize: "12px", letterSpacing: "1.5px" }}
            >
              {addedToCart ? (
                <>
                  <Check size={14} /> Added to Cart
                </>
              ) : (
                "Add to Cart"
              )}
            </button>
            <button
              className="w-11 h-11 border border-gray-200 flex items-center justify-center hover:border-[#C61D24] hover:text-[#C61D24] transition-colors"
              aria-label="Share"
            >
              <Share2 size={16} />
            </button>
          </div>

          {/* Buy Now */}
          <button className="btn-gold w-full justify-center mb-6">
            Buy Now — ₹{(product.price * qty).toLocaleString()}
          </button>

          {/* Trust Badges */}
          <div
            className="grid grid-cols-3 gap-4 py-5"
            style={{ borderTop: "1px solid #E8E4DE", borderBottom: "1px solid #E8E4DE" }}
          >
            {[
              { icon: <Truck size={16} />, text: "Free Delivery above ₹999" },
              { icon: <RotateCcw size={16} />, text: "Easy 15-day Returns" },
              { icon: <Shield size={16} />, text: "100% Authentic" },
            ].map((item) => (
              <div key={item.text} className="text-center">
                <div className="flex justify-center mb-2 text-[#C61D24]">{item.icon}</div>
                <p
                  style={{
                    fontFamily: '"Karla", sans-serif',
                    fontSize: "10px",
                    color: "#4A4A4A",
                    lineHeight: 1.4,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Product Details Accordion */}
          <div className="mt-5">
            {[
              { label: "Product Description", content: product.description },
              {
                label: "Fabric & Care",
                content: `Fabric: ${product.fabric}\nCare: ${product.care}\nOrigin: ${product.origin}`,
              },
            ].map((acc) => (
              <details key={acc.label} className="group border-b border-gray-100">
                <summary
                  className="flex items-center justify-between py-4 cursor-pointer list-none"
                  style={{
                    fontFamily: '"Karla", sans-serif',
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "#1A1A1A",
                  }}
                >
                  {acc.label}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-open:rotate-180 text-gray-400"
                  />
                </summary>
                <p
                  className="pb-4"
                  style={{
                    fontFamily: '"Karla", sans-serif',
                    fontSize: "13px",
                    color: "#4A4A4A",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                  }}
                >
                  {acc.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <p className="section-tag">You May Also Like</p>
        <h2 className="section-title" style={{ marginBottom: "32px" }}>
          Related Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {related.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="product-card group">
              <div className="product-image-wrap">
                <img src={p.img} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                <div className="product-quick-add">Quick View</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{p.name}</h3>
                <span className="price-current">₹{p.price.toLocaleString()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

