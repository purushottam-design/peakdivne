"use client";
import Link from "next/link";
import { User, Package, Heart, LogIn, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function AccountPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");

  return (
    <div>
      <div className="py-12 text-center" style={{ background: '#FAF8F4', borderBottom: '1px solid #E8E4DE' }}>
        <p className="section-tag">My Peakdivine</p>
        <h1 className="section-title">My Account</h1>
      </div>

      <div className="max-w-[440px] mx-auto px-4 sm:px-6 py-14">
        {/* Tab Switcher */}
        <div className="flex border border-gray-200 mb-8">
          {(["login", "signup"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-xs font-semibold tracking-wider uppercase transition-all ${
                tab === t ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50"
              }`}
              style={{ fontFamily: '"Karla", sans-serif', letterSpacing: '1.5px', fontSize: '11px' }}
            >
              {t === "login" ? "Sign In" : "Create Account"}
            </button>
          ))}
        </div>

        {tab === "login" ? (
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div>
              <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Email Address</label>
              <input type="email" required className="input-field" placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Password</label>
              <input type="password" required className="input-field" placeholder="••••••••" />
            </div>
            <div className="flex justify-end">
              <a href="#" style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: '#C61D24', textDecoration: 'none' }}>Forgot Password?</a>
            </div>
            <button type="submit" className="btn-primary justify-center">
              Sign In <LogIn size={14} />
            </button>
            <div className="text-center">
              <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#7A7A7A' }}>Don&apos;t have an account? </span>
              <button onClick={() => setTab("signup")} style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#C61D24', border: 'none', background: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Create one</button>
            </div>
          </form>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
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
              <input type="email" required className="input-field" placeholder="your@email.com" />
            </div>
            <div>
              <label style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', color: '#4A4A4A', display: 'block', marginBottom: '6px' }}>Password</label>
              <input type="password" required className="input-field" placeholder="Create a strong password" />
            </div>
            <button type="submit" className="btn-primary justify-center">
              Create Account <ArrowRight size={14} />
            </button>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', color: '#7A7A7A', textAlign: 'center', lineHeight: 1.6 }}>
              By creating an account, you agree to our <Link href="/terms" style={{ color: '#C61D24' }}>Terms</Link> and <Link href="/privacy-policy" style={{ color: '#C61D24' }}>Privacy Policy</Link>.
            </p>
          </form>
        )}

        {/* Benefits */}
        <div className="mt-10 pt-8 border-t border-gray-100">
          <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', letterSpacing: '2px', textTransform: 'uppercase', color: '#7A7A7A', marginBottom: '14px' }}>Account Benefits</p>
          <div className="flex flex-col gap-3">
              {[
                { icon: <Package size={14} />, text: "Track your orders in real-time" },
                { icon: <Heart size={14} />, text: "Save items to your wishlist" },
                { icon: <User size={14} />, text: "Manage addresses & preferences" },
              ].map((item) => (
              <div key={item.text} className="flex items-center gap-3" style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#4A4A4A' }}>
                <span className="text-[#C61D24]">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
