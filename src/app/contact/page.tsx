"use client";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      {/* Hero */}
      <div className="py-14 text-center animate-fade-in-up" style={{ background: '#FAF8F4', borderBottom: '1px solid #E8E4DE' }}>
        <p className="section-tag">Get In Touch</p>
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">Have a question or need help? We&apos;re here for you</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-14 stagger-children">
          {/* Contact Info */}
          <div className="animate-fade-in-up">
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.8rem', color: '#1A1A1A', fontWeight: 600, marginBottom: '8px' }}>We&apos;re Happy to Help</h2>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '0.95rem', color: '#4A4A4A', lineHeight: 1.8, marginBottom: '32px' }}>
              Whether you have questions about our products, orders, returns, or just want to say hello — our team is ready to assist you.
            </p>
            <div className="flex flex-col gap-6 mb-10">
              {[
                { icon: <Mail size={18} />, title: "Email Us", info: "support@peakdivine.com", sub: "We reply within 24 hours" },
                { icon: <Phone size={18} />, title: "Call Us", info: "+91 9031062307 · +91 9031074219", sub: "Project Manager · HR" },
                { icon: <MapPin size={18} />, title: "Visit Us", info: "101 City plaza, Kidwaipuri, Patna - 800001, Bihar, India", sub: "Studio visits by appointment" },
                { icon: <Clock size={18} />, title: "Working Hours", info: "Monday - Saturday", sub: "9:00 AM – 6:00 PM IST" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 border border-red-200 flex items-center justify-center text-[#C61D24] flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#1A1A1A', marginBottom: '3px' }}>{item.title}</h3>
                    <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '14px', color: '#4A4A4A', fontWeight: 500 }}>{item.info}</p>
                    <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: '#7A7A7A' }}>{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 border border-red-200 bg-red-50">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <Send size={24} className="text-[#C61D24]" />
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#1A1A1A', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '14px', color: '#4A4A4A' }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: '#1A1A1A', marginBottom: '8px' }}>Send Us a Message</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>First Name</label>
                    <input type="text" required className="input-field" placeholder="Priya" />
                  </div>
                  <div>
                    <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Last Name</label>
                    <input type="text" required className="input-field" placeholder="Sharma" />
                  </div>
                </div>
                <div>
                  <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Email Address</label>
                  <input type="email" required className="input-field" placeholder="priya@email.com" />
                </div>
                <div>
                  <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Subject</label>
                  <input type="text" required className="input-field" placeholder="How can we help?" />
                </div>
                <div>
                  <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Message</label>
                  <textarea required className="input-field" placeholder="Write your message here..." rows={5} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-primary self-start">
                  Send Message <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
