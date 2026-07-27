import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Peakdivine",
  description: "Read Peakdivine's privacy policy to understand how we collect, use and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Policies</p>
        <h1 className="section-title">Privacy Policy</h1>
        <p className="section-subtitle">
          We value your trust. This page explains how Peakdivine collects, uses and
          safeguards your personal information.
        </p>
      </div>
      <div className="space-y-6 text-sm text-gray-700" style={{ fontFamily: '"Karla", sans-serif' }}>
        <section>
          <h2 className="font-semibold mb-2 text-base">1. Information We Collect</h2>
          <p>
            We collect information that you provide directly to us when you create an
            account, place an order, subscribe to our newsletter or contact support. This
            may include your name, email address, phone number, shipping address and
            payment details (processed securely via our payment partners).
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">2. How We Use Your Information</h2>
          <p>
            Your information is used to process and deliver your orders, provide customer
            support, send order updates, and share personalised offers if you opt in. We
            do not sell your personal data to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">3. Cookies &amp; Analytics</h2>
          <p>
            We use cookies and similar technologies to improve your browsing experience,
            remember your preferences and understand how our website is used so we can
            enhance it over time.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">4. Data Security</h2>
          <p>
            We implement reasonable technical and organisational measures to protect your
            information. However, no method of transmission over the internet is 100%
            secure, so we cannot guarantee absolute security.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">5. Your Rights</h2>
          <p>
            You may request access, correction or deletion of your personal data, subject
            to applicable laws. To exercise these rights, please reach out via our
            contact page.
          </p>
        </section>
      </div>
    </div>
  );
}

