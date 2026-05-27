import { Suspense } from "react";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import SearchResults from "./SearchResults";

export const metadata: Metadata = {
  title: "Search — BANC Horology",
  description: "Search the BANC watch catalogue.",
};

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <main className="pt-40 pb-20 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <Suspense
          fallback={
            <div className="py-40 text-center font-label-sm text-label-sm uppercase tracking-widest text-on-surface/30">
              Loading...
            </div>
          }
        >
          <SearchResults />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
