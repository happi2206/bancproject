import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import CollectionsPageGrid from "@/app/components/collections/CollectionsPageGrid";
import CollectionsNewsletter from "@/app/components/collections/CollectionsNewsletter";

export const metadata: Metadata = {
  title: "Collections — BANC Horology",
  description:
    "An exploration of temporal architecture. Each piece in our Core Collection represents a synthesis of Milanese aesthetic discipline and Swiss mechanical precision.",
};

export default function CollectionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-0 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <CollectionsPageGrid />
        <CollectionsNewsletter />
      </main>
      <Footer />
    </>
  );
}
