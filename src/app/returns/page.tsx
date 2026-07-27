import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return & Exchange Policy | Peakdivine",
  description: "Understand Peakdivine's return and exchange policy for ethnic wear orders.",
};

export default function ReturnsPage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Policies</p>
        <h1 className="section-title">Return &amp; Exchange Policy</h1>
        <p className="section-subtitle">
          We want you to love your purchase. If something is not quite right, our return
          and exchange guidelines below will help.
        </p>
      </div>
      <div className="space-y-6 text-sm text-gray-700" style={{ fontFamily: '"Karla", sans-serif' }}>
        <section>
          <h2 className="font-semibold mb-2 text-base">1. Eligibility</h2>
          <p>
            Items must be unused, unwashed and in their original condition with tags
            attached to be eligible for return or exchange within the specified window.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">2. Return Window</h2>
          <p>
            Unless otherwise mentioned on the product page, you can raise a return or
            exchange request within 7–15 days of delivery.
          </p>
        </section>
        <section>
          <h2 className="font-semibold mb-2 text-base">3. Non-returnable Items</h2>
          <p>
            Certain items such as final sale products, altered garments or accessories may
            not be eligible for return due to hygiene or safety reasons.
          </p>
        </section>
      </div>
    </div>
  );
}

