import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Graceful Ugadi Outfits to Start the New Year Beautifully | Peakdivine",
  description:
    "Discover graceful Ugadi outfit ideas from Peakdivine to begin the new year with colour, elegance and joy.",
};

export default function UgadiOutfitsPost() {
  return (
    <article className="max-w-[800px] mx-auto py-12">
      <p className="section-tag">Festival Fashion</p>
      <h1 className="section-title">
        Graceful Ugadi Outfits to Start the New Year Beautifully
      </h1>
      <p className="section-subtitle mb-8">
        A placeholder article for your Ugadi styling guide – update with your curated
        product picks and photography.
      </p>
      <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: '"Karla", sans-serif' }}>
        Use this page to share outfit inspiration, colour stories and styling tips for
        Ugadi. You can link directly to products or collections once they are ready.
      </p>
      <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
        Back to Blog
      </Link>
    </article>
  );
}

