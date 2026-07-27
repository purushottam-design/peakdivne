import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Peakdivine",
  description: "Answers to frequently asked questions about ordering, shipping, returns and more at Peakdivine.",
};

const faqs = [
  {
    q: "How long will my order take to arrive?",
    a: "Orders are usually delivered within 3–7 working days after dispatch, depending on your location.",
  },
  {
    q: "Do you offer Cash on Delivery (COD)?",
    a: "Yes, COD is available for most serviceable pin codes within India. Any applicable COD fee will be shown at checkout.",
  },
  {
    q: "What is your return policy?",
    a: "Most products can be returned or exchanged within a limited time window if they are unworn, unused and in original condition. Please see our Return Policy page for full details.",
  },
  {
    q: "How do I track my order?",
    a: "You can track your shipment from the Track Order page using your order ID and registered email or mobile number.",
  },
];

export default function FaqsPage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Help Center</p>
        <h1 className="section-title">Frequently Asked Questions</h1>
        <p className="section-subtitle">
          Find quick answers to common questions. For anything else, our support team is
          just a message away.
        </p>
      </div>
      <div className="space-y-4">
        {faqs.map((item) => (
          <div
            key={item.q}
            className="border border-gray-100 p-4 bg-white"
          >
            <h2 className="font-medium mb-2 text-sm text-gray-900">
              {item.q}
            </h2>
            <p className="text-sm text-gray-700" style={{ fontFamily: '"Karla", sans-serif' }}>
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

