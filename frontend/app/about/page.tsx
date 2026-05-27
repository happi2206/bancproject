import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About — BANC Horology",
  description: "Architectural horology crafted in the heart of Milan since 1984.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
