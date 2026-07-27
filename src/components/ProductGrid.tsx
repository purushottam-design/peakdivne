"use client";
import Link from "next/link";
import { useState } from "react";
import { Grid3X3, Grid2X2, ChevronDown, ArrowRight } from "lucide-react";
import { products as allProducts } from "@/data/products";

const sortOptions = ["Featured", "Newest", "Price: Low to High", "Price: High to Low", "Best Sellers"];
const filterCategories = ["All", "Kurtas", "Dresses", "Ethnic Sets", "Co-ords", "Lehengas", "Jewellery"];
const filterPrices = ["All", "Under ₹1000", "₹1000 - ₹2000", "₹2000 - ₹5000", "Above ₹5000"];

interface ProductGridProps {
  title?: string;
  subtitle?: string;
  category?: string;
  showFilters?: boolean;
}

export default function ProductGrid({ title = "All Products", subtitle, category, showFilters = true }: ProductGridProps) {
  const [gridCols, setGridCols] = useState(4);
  const [sortBy, setSortBy] = useState("Featured");
  const [filterCategory, setFilterCategory] = useState(category || "All");
  const [filterPrice, setFilterPrice] = useState("All");
  const [showFilterPanel, setShowFilterPanel] = useState(false);

  const filtered = allProducts.filter((p) => {
    if (filterCategory !== "All" && !p.category.includes(filterCategory.toLowerCase().replace(/ /g, "-"))) return false;
    if (filterPrice === "Under ₹1000" && p.price >= 1000) return false;
    if (filterPrice === "₹1000 - ₹2000" && (p.price < 1000 || p.price > 2000)) return false;
    if (filterPrice === "₹2000 - ₹5000" && (p.price < 2000 || p.price > 5000)) return false;
    if (filterPrice === "Above ₹5000" && p.price <= 5000) return false;
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Price: Low to High") return a.price - b.price;
    if (sortBy === "Price: High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <div>
      {/* Collection Hero */}
      <div className="py-12 text-center animate-fade-in-up" style={{ background: '#FAF8F4', borderBottom: '1px solid #E8E4DE' }}>
        <p className="section-tag">Peakdivine Collections</p>
        <h1 className="section-title" style={{ marginBottom: '8px' }}>{title}</h1>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: '#7A7A7A', marginTop: '8px' }}>
          {sorted.length} Products
        </p>
      </div>

      <div className="max-w-full mx-auto px-4 sm:px-6 py-8">
        {showFilters && (
          <div className="filter-bar -mx-4 sm:-mx-6 px-4 sm:px-6 mb-8 flex items-center justify-between gap-4 flex-wrap">
            {/* Filter Categories */}
            <div className="flex items-center gap-2 flex-wrap">
              {filterCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wider transition-all duration-200 ${
                    filterCategory === cat
                      ? "bg-black text-white"
                      : "border border-gray-200 text-gray-600 hover:border-red-600 hover:text-red-700"
                  }`}
                  style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase' }}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {/* Price Filter */}
              <div className="relative">
                <select
                  value={filterPrice}
                  onChange={(e) => setFilterPrice(e.target.value)}
                  className="appearance-none border border-gray-200 px-3 py-1.5 pr-8 text-xs text-gray-600 bg-transparent cursor-pointer"
                  style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '0.5px' }}
                >
                  {filterPrices.map((p) => <option key={p}>{p}</option>)}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>
              {/* Sort */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none border border-gray-200 px-3 py-1.5 pr-8 text-xs text-gray-600 bg-transparent cursor-pointer"
                  style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '0.5px' }}
                >
                  {sortOptions.map((s) => <option key={s}>{s}</option>)}
                </select>
                <ChevronDown size={12} className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400" />
              </div>
              {/* Grid Toggle */}
              <div className="hidden sm:flex items-center border border-gray-200">
                <button onClick={() => setGridCols(4)} className={`p-2 ${gridCols === 4 ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50"}`}>
                  <Grid3X3 size={14} />
                </button>
                <button onClick={() => setGridCols(3)} className={`p-2 ${gridCols === 3 ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50"}`}>
                  <Grid2X2 size={14} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        <div className={`grid gap-4 sm:gap-6 grid-cols-2 stagger-children ${gridCols === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
          {sorted.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="product-card group animate-fade-in-up">
              <div className="product-image-wrap">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {product.badge && (
                  <div className={`product-badge ${
                    product.badge === 'NEW' ? '!bg-emerald-700' :
                    product.badge === 'BESTSELLER' ? '!bg-[#C61D24]' :
                    product.badge === 'PREMIUM' ? '!bg-purple-800' : ''
                  }`}>
                    {product.badge}
                  </div>
                )}
                <div className="product-quick-add">Quick View →</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="price-current">₹{product.price.toLocaleString()}</span>
                  <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="price-save">{product.discount}% off</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-20">
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#7A7A7A' }}>No products found</p>
            <button onClick={() => { setFilterCategory("All"); setFilterPrice("All"); }} className="btn-outline mt-6">Clear Filters</button>
          </div>
        )}

        {/* Load More */}
        {sorted.length > 0 && (
          <div className="text-center mt-12">
            <button className="btn-outline">
              Load More Products <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export { allProducts };
