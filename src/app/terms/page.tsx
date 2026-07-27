import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Peakdivine",
  description: "Read the terms and conditions for using the Peakdivine website and placing orders.",
};

export default function TermsPage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Policies</p>
        <h1 className="section-title">Terms &amp; Conditions</h1>
        <p className="section-subtitle">
          Please read these terms carefully before using the Peakdivine website or placing
          an order with us.
        </p>
      </div>
      <div className="space-y-6 text-sm text-gray-700" style={{ fontFamily: '"Karla", sans-serif' }}>
        <section>
          <h2 className="font-semibold mb-2 text-base">1. General</h2>
          <p>
            By accessing or using this website you agree to be bound by these terms and
            conditions and our other policies such as the Privacy Policy and Return
            Policy.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">2. Orders &amp; Payments</h2>
          <p>
            All orders are subject to acceptance and availability. Prices are displayed in
            INR and payments are processed securely through our payment partners.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">3. Shipping &amp; Delivery</h2>
          <p>
            Shipping timelines are estimates and may vary based on your location and
            courier partners. Detailed information is available on our Shipping Policy
            page.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">4. Returns &amp; Exchanges</h2>
          <p>
            Returns and exchanges are governed by our Return Policy. Please review it
            carefully before placing your order.
          </p>
        </section>
      </div>
    </div>
  );
}

