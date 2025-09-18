import CompanyOverview from "@/components/CompanyOverview";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsTestimonials from "@/components/NewsTestimonials";
import ProductDisplay from "@/components/ProductDisplay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      
      <Hero />
      <CompanyOverview />
      <ProductDisplay />
      <NewsTestimonials/>
      
    </>
  );
}
