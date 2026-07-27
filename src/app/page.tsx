"use client";
import Link from "next/link";
import { ArrowRight, Star, Play } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const heroSlides = [
  {
    badge: "New Collection 2025",
    title: "Spring Summer\nCollection",
    subtitle: "Discover the finest ethnic wear crafted with love and artistry",
    cta: "Shop Now",
    ctaLink: "/collections/women",
    bg: "from-[#f5e6d3] via-[#eeddc4] to-[#e4d0b0]",
    accent: "from-red-50 to-rose-100",
    img: "https://images.unsplash.com/photo-1753161025207-219ad023d7c4?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Women in ethnic wear",
  },
  {
    badge: "Women's Day Special",
    title: "Upto 50% OFF\nOn Select Styles",
    subtitle: "Celebrate every woman with stunning ethnic collections",
    cta: "View Sale",
    ctaLink: "/collections/sale",
    bg: "from-[#e8d5e8] via-[#dcc8dc] to-[#cdb5cd]",
    accent: "from-purple-100 to-pink-100",
    img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgAlt: "Festive collection",
  },
];

const categories = [
  { name: "Kurtas & Kurtis", count: "850+ styles", img: "https://plus.unsplash.com/premium_photo-1675186049419-d48f4b28fe7c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/collections/kurtas", bg: "#f0e8e0" },
  { name: "Ethnic Sets", count: "400+ styles", img: "https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", href: "/collections/ethnic-sets", bg: "#e8e0f0" },
  { name: "Dresses", count: "300+ styles", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80", href: "/collections/dresses", bg: "#e0f0e8" },
  { name: "Co-ords", count: "150+ styles", img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=500&q=80", href: "/collections/coords", bg: "#f0e0e8" },
];

const featuredProducts = [
  { id: 1, name: "Women Viscose Beige Embroidered Kurta Sharara Dupatta", price: 1999, originalPrice: 3999, discount: 50, img: "https://images.unsplash.com/photo-1512068549487-5e79d74c7fc3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: "BESTSELLER" },
  { id: 2, name: "Women Satin Burgundy Embroidered Kurta Comfort Pant", price: 2499, originalPrice: 4999, discount: 50, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80", badge: "NEW" },
  { id: 3, name: "Women Silk Jacquard Blue Woven Kurta Split Pant Dupatta", price: 2999, originalPrice: 5999, discount: 50, img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&q=80", badge: "HOT" },
  { id: 4, name: "Women Jacquard Grey Woven Co-Ord Set", price: 1799, originalPrice: 2999, discount: 40, img: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=400&q=80", badge: null },
  { id: 5, name: "Women Chanderi Ikat Print Dress", price: 1299, originalPrice: 2599, discount: 50, img: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&q=80", badge: "SALE" },
  { id: 6, name: "Women Liva Turquoise Blue Foil Print Kurta", price: 899, originalPrice: 1799, discount: 50, img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80", badge: null },
  { id: 7, name: "Festive Rust Radiance Georgette Kurta Set", price: 2799, originalPrice: 4999, discount: 44, img: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: "FESTIVE" },
  { id: 8, name: "Women Cotton Blue Geometric Print Tunic", price: 799, originalPrice: 1599, discount: 50, img: "https://plus.unsplash.com/premium_photo-1683121263622-664434494177?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", badge: null },
];

const blogPosts = [
  {
    tag: "A Season In Style",
    title: "SS26 Lookbook: Eight Stories, One Beautiful Season",
    excerpt: "Each season has its own beat. Spring Summer is lighter, brighter, and full of promise. With the unveiling of the SS26 Lookbook, Peakdivine delivers eight carefully designed narratives.",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    href: "/blog/ss26-lookbook",
    date: "March 10, 2025",
  },
  {
    tag: "A New Ethnic Perspective",
    title: "A Fresh Chapter in Ethnic Fashion – SS26 Teaser",
    excerpt: "Each season narrates a story. Some lay dormant while others unfold with vibrant energy. This narrative change for Spring Summer will celebrate grace, comfort, and the contemporary.",
    img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80",
    href: "/blog/ss26-teaser",
    date: "March 5, 2025",
  },
  {
    tag: "Festival Fashion",
    title: "Graceful Ugadi Outfits to Start the New Year Beautifully",
    excerpt: "Ugadi is the new year for many people living in Indian states such as Andhra Pradesh, Telangana, and Karnataka. It is a celebration of hope, optimism, and new starts.",
    img: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    href: "/blog/ugadi-outfits",
    date: "Feb 28, 2025",
  },
];

const marqueeItems = ["KURTAS", "DRESSES", "CO-ORDS", "ETHNIC SETS", "JEWELLERY", "DUPATTAS", "LEHENGAS", "SAREES", "PALAZZOS", "TUNICS"];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden ">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full h-full hero-slider"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-full">
                <img
                  src={slide.img}
                  alt={slide.imgAlt}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-black/40" /> */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-full mx-auto px-4 sm:px-6 w-full mt-10">
                    <div className="max-w-xl text-white stagger-children px-4 sm:px-6">
                      <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-[#C61D24] animate-fade-in-up">
                        {slide.badge}
                      </p>
                      <h1
                        className="text-5xl md:text-6xl font-bold leading-[1.1] mb-6 animate-fade-in-up"
                        style={{ fontFamily: '"Playfair Display", serif', letterSpacing: '1px' }}
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="text-lg text-gray-200 mb-8 max-w-md animate-fade-in-up"
                        style={{ fontFamily: '"Karla", sans-serif', lineHeight: 1.6 }}
                      >
                        {slide.subtitle}
                      </p>
                      <span className="inline-block animate-fade-in-up">
                        <Link
                          href={slide.ctaLink}
                          className="inline-flex items-center justify-center px-8 py-3 border  rounded-xl border-[#C61D24] bg-white text-[#121212] font-semibold text-xs tracking-widest uppercase hover:bg-[#C61D24] hover:text-white transition-all duration-300 ease-out"
                          style={{ fontFamily: '"Karla", sans-serif' }}
                        >
                          {slide.cta}
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Marquee Banner */}
      <div className="py-4 overflow-hidden border-y border-[#E8E4DE]" style={{ background: '#FAF8F4' }}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-4 px-6" style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '3px', fontWeight: 600, color: '#C61D24', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
              {item} <span className="text-[#C61D24]/40">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Category Showcase */}
      <section className="py-24 max-w-full mx-auto px-4 sm:px-6">
        <div className="mb-10 animate-fade-in-up">
          <p className="section-tag">Explore By Category</p>
          <h2 className="section-title">Shop The Look</h2>
          <p className="section-subtitle">From everyday chic to festive grandeur — find your perfect ensemble in our curated collections</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {categories.map((cat, i) => (
            <Link
              key={cat.name}
              href={cat.href}
              className="category-card animate-fade-in-up rounded-lg overflow-hidden"
              style={{ height: i === 0 || i === 3 ? '400px' : '320px', marginTop: i === 0 || i === 3 ? '0' : '40px' }}
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).style.background = cat.bg; }}
              />
              <div className="category-overlay" />
              <div className="category-label">
                <h3>{cat.name}</h3>
                <span>{cat.count}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Women's Day Sale Banner */}
      <section className="py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a0a 0%, #2d0f0f 100%)' }}>
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-evenly gap-8 py-4 stagger-children">
            <div className="animate-fade-in-up">
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '4px', textTransform: 'uppercase', color: '#C61D24', marginBottom: '12px' }}>Limited Time</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 5vw, 4rem)', color: 'white', fontWeight: 600, lineHeight: 1.1, marginBottom: '16px' }}>
                Women's Day<br />
                <span style={{ color: '#E0474F' }}>Grand Sale</span>
              </h2>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '1rem', color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>
                Upto 50% off on all ethnic wear. Get the finest Indian fashion at unbeatable prices.
              </p>
              <Link href="/collections/sale" className="btn-gold">
                Shop The Sale <ArrowRight size={14} />
              </Link>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.15s' }}>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(4rem, 12vw, 8rem)', color: '#C61D24', lineHeight: 0.9, fontWeight: 700 }}>50%</div>
              <div style={{ fontFamily: '"Karla", sans-serif', fontSize: '1rem', letterSpacing: '4px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginTop: '8px' }}>OFF</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-full mx-auto px-4 sm:px-6">
        <div className="mb-10 animate-fade-in-up">
          <p className="section-tag">Handpicked For You</p>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle">Discover our most-loved pieces, thoughtfully curated for the modern Indian woman</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 stagger-children">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card group animate-fade-in-up">
              <div className="product-image-wrap">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {product.badge && (
                  <div className={`product-badge ${product.badge === 'NEW' ? 'bg-emerald-700' : product.badge === 'BESTSELLER' ? 'bg-[#C61D24]' : ''}`}>
                    {product.badge}
                  </div>
                )}
                <div className="product-quick-add">Quick Add</div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">
                  <span className="price-current">₹{product.price.toLocaleString()}</span>
                  <span className="price-original">₹{product.originalPrice.toLocaleString()}</span>
                  <span className="price-save">{product.discount}% off</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/collections/women" className="btn-outline">
            View All Products <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* About / Brand Story Strip */}
      <section className="py-24" style={{ background: '#FAF8F4' }}>
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-fade-in-up">
              <p className="section-tag text-left">Our Story</p>
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1A1A1A', fontWeight: 600, lineHeight: 1.2, marginBottom: '20px' }}>
                Your Ultimate Destination For Exquisite Fashion
              </h2>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.8', marginBottom: '16px' }}>
                At Peakdivine, we celebrate the beauty and grace of Indian women through our exceptional range of ethnic wear. Every piece is crafted with utmost precision and a deep understanding of fashion trends.
              </p>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.8', marginBottom: '28px' }}>
                From traditional sarees and lehengas to contemporary salwar kameez sets — we offer a diverse selection that captures the essence of Indian culture while embracing modern sensibilities.
              </p>
              <div className="flex items-center gap-6 flex-wrap">
                <Link href="/about" className="btn-primary">
                  About Peakdivine <ArrowRight size={14} />
                </Link>
                <button className="flex items-center gap-2" style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#7A7A7A', border: 'none', background: 'none', cursor: 'pointer' }}>
                  <div className="w-8 h-8 rounded-full border-2 border-[#C61D24] flex items-center justify-center">
                    <Play size={10} fill="#C61D24" className="text-[#C61D24]" />
                  </div>
                  Our Story
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="col-span-1 aspect-[3/4] overflow-hidden rounded-3xl" style={{ borderRadius: '100px 100px 0 0' }}>
                <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&q=80" alt="Craft" className="w-full h-full object-cover" />
              </div>
              <div className="col-span-1 flex flex-col gap-3 mt-8">
                <div className="aspect-square overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=500&q=80" alt="Design" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-video overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Collection" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 max-w-full mx-auto px-4 sm:px-6">
        <div className="mb-10 animate-fade-in-up">
          <p className="section-tag">Style Journal</p>
          <h2 className="section-title">From Our Blog</h2>
          <p className="section-subtitle">Fashion stories, styling tips, and trend reports from the Peakdivine editorial team</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 stagger-children">
          {blogPosts.map((post) => (
            <Link key={post.href} href={post.href} className="blog-card animate-fade-in-up rounded-lg overflow-hidden">
              <div className="blog-image">
                <img src={post.img} alt={post.title} loading="lazy" />
              </div>
              <p className="blog-tag">{post.tag}</p>
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <span className="blog-read-more">Read More →</span>
            </Link>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/blog" className="btn-outline">View All Posts <ArrowRight size={14} /></Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="max-w-full mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C61D24', marginBottom: '12px' }}>✦ Stay In The Loop ✦</p>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', color: 'white', fontWeight: 600, marginBottom: '16px', lineHeight: 1.2 }}>
            Get Exclusive Offers & Style Updates
          </h2>
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.6)', marginBottom: '32px', lineHeight: 1.7 }}>
            Subscribe to our newsletter and be the first to know about new arrivals, special deals, and fashion tips tailored just for you.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex gap-0 max-w-[440px] mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="input-field input-field-dark flex-1"
              style={{ borderRight: 'none' }}
              aria-label="Email for newsletter"
            />
            <button type="submit" className="btn-gold px-6" style={{ whiteSpace: 'nowrap', borderLeft: 'none' }}>
              Subscribe
            </button>
          </form>
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '14px' }}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
}
