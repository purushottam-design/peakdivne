import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Size Guide | Peakdivine",
  description: "Find your perfect size with Peakdivine's easy-to-understand women's ethnic wear size guide.",
};

export default function SizeGuidePage() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <div className="mb-8 text-center">
        <p className="section-tag">Fit Guide</p>
        <h1 className="section-title">Size Guide</h1>
        <p className="section-subtitle">
          Use these measurements as a reference to choose the right size. If you are in
          between sizes, we generally recommend sizing up for a more comfortable fit.
        </p>
      </div>
      <div className="overflow-x-auto border border-gray-100">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {["Size", "Bust (inches)", "Waist (inches)", "Hips (inches)"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left text-xs font-semibold tracking-wide text-gray-600 uppercase"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ["XS", "32", "26", "34"],
              ["S", "34", "28", "36"],
              ["M", "36", "30", "38"],
              ["L", "38", "32", "40"],
              ["XL", "40", "34", "42"],
              ["XXL", "42", "36", "44"],
            ].map((row, i) => (
              <tr key={row[0]} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/40"}>
                {row.map((cell) => (
                  <td
                    key={cell}
                    className="px-4 py-3 whitespace-nowrap text-gray-700"
                    style={{ fontFamily: '"Karla", sans-serif' }}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p
        className="mt-4 text-xs text-gray-500"
        style={{ fontFamily: '"Karla", sans-serif' }}
      >
        These are body measurements. Garment measurements may vary slightly depending on
        the style and fabric.
      </p>
    </div>
  );
}

