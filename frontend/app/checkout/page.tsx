import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProtectedRoute from "@/app/components/auth/ProtectedRoute";
import CheckoutClient from "./CheckoutClient";

export const metadata: Metadata = {
  title: "Checkout — BANC Horology",
};

export default function CheckoutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <ProtectedRoute>
          <CheckoutClient />
        </ProtectedRoute>
      </main>
      <Footer />
    </>
  );
}
