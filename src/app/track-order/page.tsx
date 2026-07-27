import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Track Your Order | Peakdivine",
  description: "Track your Peakdivine order using your order ID and registered mobile number or email.",
};

export default function TrackOrderPage() {
  return (
    <div className="max-w-[700px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Order Updates</p>
        <h1 className="section-title">Track Your Order</h1>
        <p className="section-subtitle">
          Enter your order details below to check the latest status of your shipment.
        </p>
      </div>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Order ID
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="e.g. PDV12345"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Registered Email or Mobile Number
          </label>
          <input
            type="text"
            className="input-field"
            placeholder="you@example.com / 98xxxxxx10"
          />
        </div>
        <button type="submit" className="btn-primary w-full justify-center">
          Check Status
        </button>
      </form>
      <p className="mt-6 text-xs text-gray-500 text-center">
        For any help, please{" "}
        <Link href="/contact" className="underline">
          contact our support team
        </Link>
        .
      </p>
    </div>
  );
}

