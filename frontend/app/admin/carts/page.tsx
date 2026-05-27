import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AdminCartsClient from "./AdminCartsClient";

export const metadata: Metadata = {
  title: "Admin — Cart Viewer · BANC",
};

export default function AdminCartsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-40 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <AdminCartsClient />
      </main>
      <Footer />
    </>
  );
}
