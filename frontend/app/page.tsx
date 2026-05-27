import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CollectionsGrid from "./components/CollectionsGrid";
import FeaturedRelease from "./components/FeaturedRelease";
import BestSellers from "./components/BestSellers";
import BestsellersBento from "./components/BestsellersBento";
import EditorialSection from "./components/EditorialSection";
import CraftsmanshipSection from "./components/CraftsmanshipSection";
import HeritageCallout from "./components/HeritageCallout";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CollectionsGrid />
        <FeaturedRelease />
        <BestSellers />
        <BestsellersBento />
        <EditorialSection />
        <CraftsmanshipSection />
        <HeritageCallout />
      </main>
      <Footer />
    </>
  );
}
