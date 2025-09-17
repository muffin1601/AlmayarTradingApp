import CompanyOverview from "@/components/CompanyOverview";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductDisplay from "@/components/ProductDisplay";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CompanyOverview />
      <ProductDisplay />
    </>
  );
}
