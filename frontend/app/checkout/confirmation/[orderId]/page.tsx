import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ConfirmationClient from "./ConfirmationClient";

export const metadata: Metadata = {
  title: "Order Confirmed — BANC Horology",
};

export default function ConfirmationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ConfirmationClient />
      </main>
      <Footer />
    </>
  );
}
