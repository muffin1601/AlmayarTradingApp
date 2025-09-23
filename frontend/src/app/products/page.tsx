import ContactCTA from "@/components/ContactCTA";
import PageHeader from "@/components/PageHeader";

import ProductPage from "@/components/product/ProductsPage";

export default function Product() {
    return (
        <>
            <PageHeader
                backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                title="Our Products"
                subtitle="Explore our high-quality trading products sourced globally."
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Products" },
                ]}
            />
            <ProductPage />
            <ContactCTA
                heading="Questions About Our Products?"
                subheading="Whether you need more details, pricing information, or advice on which product fits your needs, our team is here to help."
            />

        </>
    );
}
