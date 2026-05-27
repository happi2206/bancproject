import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import BagContent from "@/app/components/bag/BagContent";
import ProtectedRoute from "@/app/components/auth/ProtectedRoute";

export const metadata: Metadata = {
  title: "Cart — BANC Horology",
};

export default function CartPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <header className="mb-20">
          <h1 className="font-headline-lg text-headline-lg uppercase tracking-widest border-b border-outline/10 pb-8">
            Shopping Cart
          </h1>
        </header>
        <ProtectedRoute>
          <BagContent />
        </ProtectedRoute>
      </main>
      <Footer />
    </>
  );
}
