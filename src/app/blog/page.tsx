import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Fashion Blog – Style Tips & Ethnic Wear Trends | Peakdivine",
  description: "Stay updated with the latest ethnic fashion trends, styling tips, and lookbook stories from Peakdivine.",
};

const blogPosts = [
  {
    tag: "A Season In Style",
    title: "SS26 Lookbook: Eight Stories, One Beautiful Season",
    excerpt: "Each season has its own beat. Spring Summer is lighter, brighter, and full of promise. With the unveiling of the SS26 Lookbook, Peakdivine delivers eight carefully designed narratives that merge into one cohesive vision of modern ethnic wear.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    href: "/blog/ss26-lookbook",
    date: "March 10, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    tag: "A New Ethnic Perspective",
    title: "A Fresh Chapter in Ethnic Fashion – SS26 Teaser",
    excerpt: "Each season narrates a story. Some lay dormant while others unfold with vibrant energy. This narrative change for Spring Summer will celebrate grace, comfort, and contemporary elegance.",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80",
    href: "/blog/ss26-teaser",
    date: "March 5, 2025",
    readTime: "4 min read",
    featured: false,
  },
  {
    tag: "Festival Fashion",
    title: "Graceful Ugadi Outfits to Start the New Year Beautifully",
    excerpt: "Ugadi is the new year for many people in Andhra Pradesh, Telangana, and Karnataka. It is a celebration of hope, optimism, and new starts. Mango leaves decorate the home as families dress in their finest.",
    img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=800&q=80",
    href: "/blog/ugadi-outfits",
    date: "Feb 28, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    tag: "Style Guide",
    title: "How to Style a Kurta Set for Every Occasion",
    excerpt: "The kurta set is the ultimate versatile piece in any Indian wardrobe. From casual brunches to formal functions, here's how to style your favourite kurta sets for every occasion in your life.",
    img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
    href: "/blog/style-kurta-sets",
    date: "Feb 20, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    tag: "Fabric Guide",
    title: "The Ultimate Guide to Choosing Summer Fabrics",
    excerpt: "As the temperature rises, the right fabric can make all the difference. Discover which fabrics keep you cool, comfortable, and stylish throughout the summer season.",
    img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&q=80",
    href: "/blog/summer-fabrics-guide",
    date: "Feb 15, 2025",
    readTime: "5 min read",
    featured: false,
  },
  {
    tag: "Colour Trends",
    title: "Trending Colours in Ethnic Wear for 2025",
    excerpt: "From earthy terracottas to vibrant peacock blues, explore the colour palette defining ethnic fashion in 2025. Learn how to incorporate these shades into your wardrobe effectively.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
    href: "/blog/colour-trends-2025",
    date: "Feb 8, 2025",
    readTime: "4 min read",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = blogPosts.find(p => p.featured)!;
  const rest = blogPosts.filter(p => !p.featured);

  return (
    <div>
      {/* Hero */}
      <div className="py-14 text-center" style={{ background: '#FAF8F4', borderBottom: '1px solid #E8E4DE' }}>
        <p className="section-tag">Style Journal</p>
        <h1 className="section-title">Peakdivine Blog</h1>
        <p className="section-subtitle">Fashion stories, styling tips, and trend reports from our editorial team</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-14">
        {/* Featured Post */}
        <div className="mb-14">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', letterSpacing: '2.5px', textTransform: 'uppercase', color: '#C61D24', marginBottom: '16px' }}>Featured Story</p>
          <Link href={featured.href} className="grid lg:grid-cols-2 gap-8 group">
            <div className="overflow-hidden aspect-video lg:aspect-auto" style={{ minHeight: '360px' }}>
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center">
              <p className="blog-tag">{featured.tag}</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3, marginBottom: '16px' }}>
                {featured.title}
              </h2>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.8, marginBottom: '24px' }}>
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 mb-6">
                <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', color: '#7A7A7A' }}>{featured.date}</span>
                <span style={{ color: '#E8E4DE' }}>|</span>
                <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', color: '#7A7A7A' }}>{featured.readTime}</span>
              </div>
              <span className="blog-read-more">Read Full Story <ArrowRight size={12} className="inline ml-1" /></span>
            </div>
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-12" />

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.href} href={post.href} className="blog-card">
              <div className="blog-image">
                <img src={post.img} alt={post.title} loading="lazy" />
              </div>
              <p className="blog-tag">{post.tag}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="flex items-center gap-2 mt-3">
                <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', color: '#7A7A7A' }}>{post.date}</span>
                <span style={{ color: '#E8E4DE' }}>·</span>
                <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', color: '#7A7A7A' }}>{post.readTime}</span>
              </div>
              <span className="blog-read-more">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
