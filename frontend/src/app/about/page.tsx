import PageHeader from "@/components/PageHeader";
import CompanyHistory from "@/components/about/CompanyHistory";
import MissionVision from "@/components/about/MissionVision";
import Team from "@/components/about/Team";
import CertificationsPartners from "@/components/about/CertificationsPartners";
import ContactCTA from "@/components/ContactCTA";

export default function About() {
  return (
    <>
      <PageHeader
        backgroundImage="https://images.pexels.com/photos/2134319/pexels-photo-2134319.jpeg"
        title="About Our Company"
        subtitle="We are committed to delivering premium solutions to our clients."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <CompanyHistory />
      <MissionVision />
      <Team />
      <CertificationsPartners />
      <ContactCTA
        heading="Want to Learn More About Us?"
        subheading="Get in touch to discover our story, our mission, and how we can work together to create something exceptional."
      />
    </>
  );
}
