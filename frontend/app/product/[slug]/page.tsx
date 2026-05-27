import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProductPageClient from "@/app/components/product/ProductPageClient";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-40 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <ProductPageClient productId={slug} />
      </main>
      <Footer />
    </>
  );
}
