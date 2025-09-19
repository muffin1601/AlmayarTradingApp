import PageHeader from "@/components/PageHeader";

import ContactPage from "@/components/contact/ContactPage";

export default function Home() {
    return (
        <>
            <PageHeader
                backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                title="Get in Touch with Us"
                subtitle="We’re here to answer your questions and provide support for all your trading needs."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Contact Us" },
                ]}
            />


<ContactPage />
        </>
    );
}
