import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A Fresh Chapter in Ethnic Fashion – SS26 Teaser | Peakdivine",
  description:
    "Get a glimpse of Peakdivine's SS26 collection – a new chapter in ethnic fashion that celebrates grace, comfort and contemporary design.",
};

export default function Ss26TeaserPost() {
  return (
    <article className="max-w-[800px] mx-auto py-12">
      <p className="section-tag">A New Ethnic Perspective</p>
      <h1 className="section-title">
        A Fresh Chapter in Ethnic Fashion – SS26 Teaser
      </h1>
      <p className="section-subtitle mb-8">
        A short teaser article for your upcoming Spring Summer 2026 launch.
      </p>
      <p className="text-sm text-gray-700 mb-6" style={{ fontFamily: '"Karla", sans-serif' }}>
        This page is a stub for the SS26 teaser blog post. Replace this placeholder text
        with your final editorial copy, campaign visuals and product highlights when
        ready.
      </p>
      <Link href="/blog" className="btn-outline inline-flex items-center gap-2">
        Back to Blog
      </Link>
    </article>
  );
}

