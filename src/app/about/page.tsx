import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Star, Users, Leaf, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Peakdivine – She Is Special | Our Story",
  description: "Learn about Peakdivine's journey to become one of India's finest ethnic wear brands. Our commitment to quality, craft, and celebrating Indian women.",
};

const values = [
  { icon: <Leaf size={22} className="text-[#C61D24]" />, title: "Sustainable Craft", desc: "We work with artisans across India to preserve traditional craftsmanship while embracing eco-conscious practices." },
  { icon: <Star size={22} className="text-[#C61D24]" />, title: "Unmatched Quality", desc: "Every piece is carefully inspected for quality, ensuring that what you receive is nothing short of perfect." },
  { icon: <Users size={22} className="text-[#C61D24]" />, title: "Celebrating Women", desc: "Peakdivine is built on the belief that every woman deserves to feel special, beautiful, and celebrated." },
  { icon: <Award size={22} className="text-[#C61D24]" />, title: "Award-Winning Design", desc: "Our design team draws from India's rich textile traditions to create collections that are both timeless and contemporary." },
];

const team = [
  { name: "Shreya Agarwal", role: "Founder & Creative Director", img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Priya Malhotra", role: "Head of Design", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80" },
  { name: "Kavita Sharma", role: "Head of Operations", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="animate-fade-in-up" style={{ height: '70vh', minHeight: '480px', background: 'linear-gradient(135deg, #f5e6d3 0%, #eeddc4 50%, #e4d0b0 100%)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-2xl">
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C61D24', marginBottom: '16px' }}>About Peakdivine</p>
            <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(2.5rem, 6vw, 5rem)', color: '#1A1A1A', fontWeight: 600, lineHeight: 1.1, marginBottom: '24px' }}>
              She Is Special
            </h1>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '1.1rem', color: '#4A4A4A', lineHeight: 1.8, marginBottom: '32px', maxWidth: '500px' }}>
              A celebration of the Indian woman — her grace, her strength, and her timeless elegance.
            </p>
            <Link href="/collections/women" className="btn-primary">
              Explore Collections <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-amber-200/30 to-transparent" />
      </section>

      {/* Story Section */}
      <section className="py-20 max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center stagger-children">
          <div className="animate-fade-in-up">
            <p className="section-tag text-left">Our Journey</p>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#1A1A1A', fontWeight: 600, lineHeight: 1.2, marginBottom: '20px' }}>
              Born From a Passion for Indian Craft
            </h2>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.9, marginBottom: '16px' }}>
              Peakdivine was founded with a single belief: that Indian ethnic wear deserves to be seen and celebrated on a global stage. We started as a small studio in Jaipur, handpicking fabrics from artisans across Rajasthan, Gujarat, and Uttar Pradesh.
            </p>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.9, marginBottom: '16px' }}>
              Today, we are proud to have dressed over 10,000 women across India and beyond — from everyday moments to wedding celebrations, from first days at work to last dances of the night.
            </p>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.9, marginBottom: '28px' }}>
              Every piece we create is a love letter to Indian craftsmanship — embroidered by skilled artisans, woven with intention, and designed for the woman who knows her worth.
            </p>
            <div className="flex gap-8">
              {[["10K+", "Happy Customers"], ["1000+", "Designs"], ["50+", "Artisan Partners"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', color: '#C61D24', fontWeight: 700 }}>{num}</div>
                  <div style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '1px', textTransform: 'uppercase', color: '#7A7A7A', marginTop: '4px' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="aspect-[3/4] overflow-hidden" style={{ borderRadius: '0 100px 0 0' }}>
              <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Craft" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden mt-8" style={{ borderRadius: '100px 0 0 0' }}>
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16" style={{ background: '#FAF8F4' }}>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <p className="section-tag animate-fade-in-up">What We Stand For</p>
          <h2 className="section-title animate-fade-in-up">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 stagger-children">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-white border border-gray-100 hover:border-amber-200 transition-all duration-300 rounded-lg animate-fade-in-up hover:shadow-lg">
                <div className="mb-5 w-12 h-12 border border-amber-200 flex items-center justify-center">{v.icon}</div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', color: '#1A1A1A', fontWeight: 600, marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#7A7A7A', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 max-w-[1200px] mx-auto px-4 sm:px-6">
        <p className="section-tag animate-fade-in-up">The People Behind Peakdivine</p>
        <h2 className="section-title animate-fade-in-up">Meet The Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10 stagger-children">
          {team.map((member) => (
            <div key={member.name} className="text-center animate-fade-in-up">
              <div className="w-40 h-40 mx-auto mb-5 overflow-hidden" style={{ borderRadius: '50%', border: '3px solid #E8E4DE' }}>
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem', color: '#1A1A1A', fontWeight: 600 }}>{member.name}</h3>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#C61D24', marginTop: '6px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ background: '#0A0A0A' }}>
        <div className="max-w-[700px] mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '3px', textTransform: 'uppercase', color: '#C61D24', marginBottom: '12px' }}>Start Your Journey</p>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'white', fontWeight: 600, marginBottom: '16px' }}>
            Discover Your Signature Style
          </h2>
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: 'rgba(255,255,255,0.55)', marginBottom: '28px', lineHeight: 1.7 }}>
            Explore over 1000 designs crafted just for you — because you are special.
          </p>
          <Link href="/collections/women" className="btn-gold">
            Shop Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
