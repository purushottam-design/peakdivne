"use client";
import Link from "next/link";
import { Instagram, Facebook, Youtube, Twitter, MapPin, Phone, Mail, Heart } from "lucide-react";

const footerLinks = {
  collections: [
    { label: "Kurtas & Kurtis", href: "/collections/kurtas" },
    { label: "Dresses", href: "/collections/dresses" },
    { label: "Ethnic Sets", href: "/collections/ethnic-sets" },
    // { label: "With Dupatta", href: "/collections/with-dupatta" },
    { label: "Co-ords", href: "/collections/coords" },
    { label: "Jewellery", href: "/collections/jewellery" },
    { label: "Sale", href: "/collections/sale" },
  ],
  usefulLinks: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Track Order", href: "/track-order" },
    { label: "Size Guide", href: "/size-guide" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Return Policy", href: "/returns" },
    { label: "Shipping Policy", href: "/shipping" },
    { label: "FAQs", href: "/faqs" },
  ],
};

const paymentMethods = ["Visa", "Mastercard", "UPI", "PayTM", "GPay", "Net Banking", "COD"];

export default function Footer() {
  return (
    <footer className="footer ">
      {/* USP bar above footer */}
      <div className="usp-bar">
        <div className="max-w-full mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 md:justify-between stagger-children">
            {[
              { icon: "🇮🇳", title: "Made In India", desc: "Proudly Indian" },
              { icon: "🚚", title: "Free Delivery", desc: "On orders ₹999+" },
              { icon: "↩️", title: "Easy Returns", desc: "15-day hassle free" },
              { icon: "💬", title: "Top-notch Support", desc: "24/7 assistance" },
              { icon: "🔒", title: "Secure Payments", desc: "100% safe & secure" },
            ].map((usp) => (
              <div key={usp.title} className="usp-item animate-fade-in-up">
                <div className="usp-icon transition-transform duration-300 hover:scale-110">
                  <span style={{ fontSize: '1.1rem' }}>{usp.icon}</span>
                </div>
                <div className="usp-text">
                  <h4>{usp.title}</h4>
                  <p>{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-full mx-auto footer-inner">
        <div className="footer-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Brand Column */}
          <div className="flex flex-col items-cent justify-ce">
            <div className="mb-6">
              <img
                src="/logo.webp"
                alt="Peakdivine"
                className="h-14 sm:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
              <p
                style={{
                  fontFamily: '"Karla", sans-serif',
                  fontSize: '9px',
                  letterSpacing: '3px',
                  color: 'rgba(255,255,255,0.4)',
                  textTransform: 'uppercase',
                  marginTop: '6px',
                }}
              >
                She Is Special
              </p>
            </div>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '24px' }}>
              Your ultimate destination for exquisite women's ethnic fashion. Celebrating Indian craftsmanship with timeless designs.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Instagram size={16} />, href: "https://www.instagram.com/peak_divine", label: "Instagram" },
                { icon: <Facebook size={16} />, href: "https://www.facebook.com/peakdivine", label: "Facebook" },
                { icon: <Youtube size={16} />, href: "https://www.youtube.com/@peak_divine", label: "YouTube" },
                { icon: <Twitter size={16} />, href: "https://x.com/PeakDivine", label: "X (Twitter)" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 border border-white/20 flex items-center justify-center text-white/60 hover:border-[#C61D24] hover:text-[#C61D24] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h3 className="footer-heading">Collections</h3>
            {footerLinks.collections.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">{link.label}</Link>
            ))}
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            {footerLinks.usefulLinks.map((link) => (
              <Link key={link.label} href={link.href} className="footer-link">{link.label}</Link>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-heading">Stay Connected</h3>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: '1.8', marginBottom: '20px' }}>
              Subscribe to get latest updates on new arrivals, exclusive offers and style tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mb-6">
              <input
                type="email"
                placeholder="Your email address"
                className="input-field input-field-dark mb-3"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-gold w-full justify-center">
                Subscribe
              </button>
            </form>
            <div>
              <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Contact Us</p>
              <div className="flex flex-col gap-2">
                {[
                  { icon: <Mail size={12} />, text: "support@peakdivine.com" },
                  { icon: <Phone size={12} />, text: "+91 9031062307 (Project Manager)" },
                  { icon: <Phone size={12} />, text: "+91 9031074219 (HR)" },
                  { icon: <MapPin size={12} />, text: "101 City plaza, Kidwaipuri, Patna - 800001, Bihar, India" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: '"Karla", sans-serif', fontSize: '12px' }}>
                    <span className="text-[#C61D24] flex-shrink-0">{item.icon}</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '12px' }}>Accepted Payments</p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method) => (
              <span
                key={method}
                className="border border-white/20 px-3 py-1 text-xs text-white/50"
                style={{ fontFamily: '"Karla", sans-serif', fontSize: '10px', letterSpacing: '0.5px' }}
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.5px' }}>
            © {new Date().getFullYear()} Peakdivine – She Is Special. All rights reserved. |{" "}
            <a 
              href="https://aa100xtech.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Design By Absolute Advancement 100X Tech
            </a>
          </p>
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: 'rgba(255,255,255,0.35)' }} className="flex items-center gap-1">
            Made with <Heart size={11} className="text-[#C61D24] fill-[#C61D24]" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}