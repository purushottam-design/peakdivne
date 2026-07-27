import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SS26 Lookbook: Eight Stories, One Beautiful Season | Peakdivine",
  description:
    "Explore the Peakdivine SS26 lookbook – eight curated stories that capture the light, bright spirit of the season.",
};

export default function Ss26LookbookPost() {
  return (
    <article className="max-w-[800px] mx-auto py-12">
      <p className="section-tag">A Season In Style</p>
      <h1 className="section-title">
        SS26 Lookbook: Eight Stories, One Beautiful Season
      </h1>
      <p className="section-subtitle mb-8">
        A preview of the Spring Summer 2026 collection – lighter, brighter and filled with
        promise.
      </p>
      <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: '"Karla", sans-serif' }}>
        This is a placeholder blog article for the SS26 lookbook. You can update this
        content later with detailed copy, imagery and styling tips that match your final
        collection.
      </p>
      <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
        Back to Blog
      </Link>
    </article>
  );
}

