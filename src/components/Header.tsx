"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Heart } from "lucide-react";
import { useShop } from "@/context/ShopContext";

type NavItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  items: string[];
  isSale?: boolean;
};

const navItems: NavItem[] = [
  { label: "HOME", href: "/", hasDropdown: false, items: [] },
  // { label: "KURTAS & KURTIS", href: "/collections/kurtas", hasDropdown: true, items: ["Cotton Kurtas", "Silk Kurtis", "Printed Kurtas", "Embroidered Kurtas", "Long Kurtas"] },
  { label: "KURTAS & KURTIS", href: "/collections/kurtas", hasDropdown: false, items: [] },
  { label: "DRESSES", href: "/collections/dresses", hasDropdown: false, items: [] },
  // { label: "ETHNIC SETS WITH DUPATTA", href: "/collections/with-dupatta", hasDropdown: false, items: [] },
  { label: "ETHNIC SETS", href: "/collections/ethnic-sets", hasDropdown: false, items: [] },
  { label: "CO-ORDS", href: "/collections/coords", hasDropdown: false, items: [] },
  { label: "JEWELLERY", href: "/collections/jewellery", hasDropdown: false, items: [] },
  // { label: "EOSS", href: "/collections/sale", hasDropdown: false, items: [], isSale: true },
];

const CURRENCIES = [
  { code: "INR" as const, symbol: "₹", label: "INR ₹" },
  { code: "USD" as const, symbol: "$", label: "USD $" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const currencyRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { cartCount, wishlistCount, currency, setCurrency } = useShop();

  useEffect(() => {
    if (searchOpen) {
      setSearchQuery("");
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(e.target as Node)) {
        setCurrencyOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    setSearchOpen(false);
    setSearchQuery("");
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Solid clean header (design similar to reference, content remains yours)
  const isTransparent = false;
  // Use brand colors (red accent + deep text)
  const textColorClass = "text-[#1f1f1f] hover:text-[#C61D24]";
  const iconBaseClass = "text-[#1f1f1f]";
  const iconHoverClass = "hover:text-[#C61D24]";

  return (
    <>
      {/* Announcement Bar */}
      <div className={`announcement-bar ${isTransparent ? 'hidden' : ''}`}>
        <span>✨ FREE SHIPPING ON ORDERS ABOVE ₹999 &nbsp;|&nbsp; USE CODE: PEAKDIVINE10 FOR 10% OFF &nbsp;|&nbsp; EASY RETURNS &nbsp;✨</span>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-all duration-300 ${
          scrolled ? "border-gray-200 shadow-md shadow-black/5" : "border-gray-100"
        }`}
      >
        <div className="max-w-full mx-auto p-4 sm:p-6 ">
          <div className="flex items-center justify-between gap-6 h-16 lg:h-18">
            {/* Left: Logo + mobile menu */}
            <div className="flex items-center gap-2 ">
              <button
                className={`lg:hidden p-2 -ml-2 ${iconBaseClass} ${iconHoverClass}`}
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={22} />
              </button>
              <Link href="/" className="flex items-center">
                <img
                  src="/logo.webp"
                  alt="Peakdivine"
                  className="h-24 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Center: Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <div
                    key={item.label}
                    className="relative group"
                    onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
                        textColorClass
                      } ${item.isSale ? "text-[#C61D24]" : ""} ${isActive ? "text-[#C61D24]" : ""}`}
                      style={{ fontFamily: '"Karla", sans-serif' }}
                    >
                      {item.label}
                      {item.hasDropdown && <ChevronDown size={12} className="mt-0.5 opacity-80" />}
                      <span
                        className={`pointer-events-none absolute -bottom-1 left-0 h-[1px] w-full bg-[#C61D24] origin-left transform transition-transform duration-200 ${
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                    {item.hasDropdown && item.items.length > 0 && (
                      <div
                        className={`absolute top-full left-0 mt-1 min-w-[220px] bg-white border border-gray-100 shadow-xl rounded-md py-2 z-50 transition-all duration-300 ease-out ${
                          activeDropdown === item.label
                            ? "opacity-100 visible translate-y-0"
                            : "opacity-0 invisible -translate-y-2"
                        }`}
                      >
                        {item.items.map((sub) => (
                          <Link
                            key={sub}
                            href={`/collections/${sub.toLowerCase().replace(/ /g, "-")}`}
                            className="block px-4 py-2 text-xs tracking-[0.14em] uppercase text-gray-700 hover:text-[#C61D24] hover:bg-red-50"
                            style={{ fontFamily: '"Karla", sans-serif' }}
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: Utility Icons */}
            <div className={`flex items-center justify-end gap-4 ${iconBaseClass}`}>
              <button
                className={`hidden sm:flex p-2 transition-colors ${iconHoverClass}`}
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
              >
                <Search size={20} className="stroke-[1.5]" />
              </button>
              <Link href="/wishlist" className={`hidden sm:flex relative p-2 transition-colors ${iconHoverClass}`} aria-label="Wishlist">
                <Heart size={20} className="stroke-[1.5]" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C61D24] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link href="/account" className={`hidden sm:flex p-2 transition-colors ${iconHoverClass}`} aria-label="Account">
                <User size={20} className="stroke-[1.5]" />
              </Link>
              <Link href="/cart" className={`relative p-2 transition-colors ${iconHoverClass}`} aria-label="Cart">
                <ShoppingBag size={20} className="stroke-[1.5]" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#C61D24] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
              <div className="hidden sm:block relative" ref={currencyRef}>
                <button
                  type="button"
                  onClick={() => setCurrencyOpen((o) => !o)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 text-[11px] font-medium rounded-full border border-[#C61D24]/25 bg-red-50 text-[#1f1f1f] hover:bg-red-100 transition-colors"
                  style={{ fontFamily: '"Karla", sans-serif' }}
                  aria-label="Currency"
                  aria-expanded={currencyOpen}
                >
                  {currency}
                  <span className="text-xs">{CURRENCIES.find((c) => c.code === currency)?.symbol ?? "₹"}</span>
                  <ChevronDown size={12} className={`transition-transform ${currencyOpen ? "rotate-180" : ""}`} />
                </button>
                {currencyOpen && (
                  <div
                    className="absolute top-full right-0 mt-1 min-w-[120px] bg-white border border-gray-100 shadow-xl rounded-md py-1 z-50"
                    role="menu"
                  >
                    {CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        type="button"
                        role="menuitem"
                        onClick={() => {
                          setCurrency(c.code);
                          setCurrencyOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-xs font-medium transition-colors ${
                          currency === c.code ? "text-[#C61D24] bg-red-50" : "text-gray-700 hover:bg-gray-50"
                        }`}
                        style={{ fontFamily: '"Karla", sans-serif' }}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm animate-fade-in"
          style={{ animationDuration: "0.2s" }}
          aria-modal="true"
          role="dialog"
          aria-label="Search"
          onClick={() => setSearchOpen(false)}
        >
          <div className="max-w-2xl mx-auto pt-24 px-4" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSearchSubmit} className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
              <div className="flex">
                <input
                  ref={searchInputRef}
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search products..."
                  className="flex-1 px-4 py-3 text-[#1f1f1f] placeholder-gray-400 focus:outline-none focus:ring-0 border-0"
                  style={{ fontFamily: '"Karla", sans-serif', fontSize: "14px" }}
                  autoComplete="off"
                />
                <button type="submit" className="px-4 py-3 bg-[#C61D24] text-white hover:bg-[#a0181e] transition-colors" aria-label="Search">
                  <Search size={20} />
                </button>
              </div>
            </form>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="mt-3 text-white/90 hover:text-white text-sm"
              style={{ fontFamily: '"Karla", sans-serif' }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu animate-fade-in">
          <div className="mobile-menu-overlay animate-fade-in" onClick={() => setMobileOpen(false)} style={{ animationDuration: "0.2s" }} />
          <div className="mobile-menu-panel bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl rounded-r-2xl animate-slide-in-left">
            <div className="flex items-center justify-between mb-8">
              <img src="/logo.webp" alt="Peakdivine" className="h-8 w-auto object-contain" />
              <button onClick={() => setMobileOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`py-3 px-2 border-b border-gray-100 text-sm font-semibold tracking-wider uppercase ${item.isSale ? "text-red-700" : "text-gray-800"}`}
                  style={{ fontFamily: '"Karla", sans-serif', letterSpacing: '1.2px', fontSize: '12px' }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="/account" className="btn-primary text-center justify-center" onClick={() => setMobileOpen(false)}>
                My Account
              </Link>
              <Link href="/cart" className="btn-outline text-center justify-center" onClick={() => setMobileOpen(false)}>
                Cart ({cartCount})
              </Link>
              <Link href="/wishlist" className="btn-outline text-center justify-center" onClick={() => setMobileOpen(false)}>
                Wishlist ({wishlistCount})
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
