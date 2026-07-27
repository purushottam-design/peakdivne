import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShopProvider } from "@/context/ShopContext";

export const metadata: Metadata = {
  title: "Peakdivine - She Is Special | Women's Ethnic Wear Online",
  description: "Online Clothes Shopping at Peakdivine. Shop for Women's Clothing Online, latest Ethnic Wear at the Best Online Shopping Site. Free Shipping, Cash on Delivery.",
  keywords: "ethnic wear, women kurta, saree, lehenga, salwar kameez, online shopping",
  openGraph: {
    title: "Peakdivine - She Is Special",
    description: "Your Ultimate Destination For Exquisite Fashion And Timeless Designs.",
    type: "website",
  },
  icons: {
    icon: "/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-[#1A1A1A] antialiased min-h-screen flex flex-col">
        <ShopProvider>
        <Header />
        {/* Page content spacing: top = header offset, sides = px-4/6/8, bottom = pb-12/16. Change yahan se global page padding control hoti hai. */}
        <main
          id="main"
          className="flex-1 pt-[96px] md:pt-[104px] px-4 md:px-6 lg:px-10 pb-12 md:pb-16 animate-fade-in"
          style={{ animationDuration: "0.5s" }}
        >
          <div className="max-w-full mx-auto w-full">{children}</div>
        </main>
        <Footer />
        </ShopProvider>
      </body>
    </html>
  );
}
