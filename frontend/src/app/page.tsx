// app/page.tsx
import Hero from "@/components/Hero";
import CompanyOverview from "@/components/CompanyOverview";
import ProductDisplay from "@/components/ProductDisplay";
import NewsTestimonials from "@/components/NewsTestimonials";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <ProductDisplay />
      <NewsTestimonials />
      <ContactCTA
        heading="Ready to Get Started?"
        subheading="Explore our services and solutions, or reach out to our team to see how we can help you achieve your goals."
      />
    </>
  );
}
