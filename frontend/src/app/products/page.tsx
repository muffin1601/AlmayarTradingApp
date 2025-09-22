import PageHeader from "@/components/PageHeader";

import ProductPage from "@/components/product/ProductsPage";

export default function Home() {
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
        </>
    );
}
