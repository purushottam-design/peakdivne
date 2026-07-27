import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collections – Women's Ethnic Wear | Peakdivine",
  description: "Explore Peakdivine collections: Kurtas & Kurtis, Dresses, Ethnic Sets, Co-ords, Jewellery and more. She Is Special.",
};

const collections = [
  { label: "Kurtas & Kurtis", href: "/collections/kurtas", desc: "From casual cotton to festive silk — for every occasion." },
  { label: "Dresses", href: "/collections/dresses", desc: "Elegant ethnic and Indo-western dresses." },
  { label: "Ethnic Sets", href: "/collections/ethnic-sets", desc: "Curated sets for a complete look." },
  { label: "With Dupatta", href: "/collections/with-dupatta", desc: "Outfits paired with beautiful dupattas." },
  { label: "Co-ords", href: "/collections/coords", desc: "Coordinated tops and bottoms, ready to wear." },
  { label: "Jewellery", href: "/collections/jewellery", desc: "Traditional and contemporary accessories." },
  { label: "Sale", href: "/collections/sale", desc: "Special offers and limited-time deals." },
];

export default function CollectionsPage() {
  return (
    <div>
      <section className="py-14 text-center animate-fade-in-up" style={{ background: "#FAF8F4", borderBottom: "1px solid #E8E4DE" }}>
        <p className="section-tag">Peakdivine</p>
        <h1 className="section-title">Collections</h1>
        <p className="section-subtitle">
          Discover our range of women&apos;s ethnic wear — from kurtas and dresses to ethnic sets and jewellery.
        </p>
      </section>

      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.href}
              href={col.href}
              className="group block border border-gray-100 p-6 hover:border-[#C61D24]/30 hover:shadow-md transition-all duration-300"
            >
              <h2
                className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-[#C61D24] transition-colors"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                {col.label}
              </h2>
              <p
                className="text-sm text-gray-600 mb-4"
                style={{ fontFamily: '"Karla", sans-serif', lineHeight: 1.6 }}
              >
                {col.desc}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-[#C61D24] group-hover:gap-2 transition-all">
                Shop now <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
