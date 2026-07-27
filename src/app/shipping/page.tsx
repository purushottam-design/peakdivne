import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy | Peakdivine",
  description: "Learn about Peakdivine's shipping timelines, charges and serviceable locations.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Policies</p>
        <h1 className="section-title">Shipping Policy</h1>
        <p className="section-subtitle">
          Information about delivery timelines, charges and serviceable locations for your
          Peakdivine orders.
        </p>
      </div>
      <div className="space-y-6 text-sm text-gray-700" style={{ fontFamily: '"Karla", sans-serif' }}>
        <section>
          <h2 className="font-semibold mb-2 text-base">1. Dispatch Time</h2>
          <p>
            Orders are usually processed within 1–3 working days. During festive or sale
            periods, processing times may be slightly longer.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">2. Delivery Timelines</h2>
          <p>
            Standard delivery within India typically takes 3–7 working days from the date
            of dispatch, depending on your location and courier partner.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">3. Shipping Charges</h2>
          <p>
            We may offer free shipping above a certain cart value. Any applicable shipping
            or COD charges will be shown at checkout before you confirm your order.
          </p>
        </section>
      </div>
    </div>
  );
}

