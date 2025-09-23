import PageHeader from "@/components/PageHeader";

import ContactCTA from "@/components/ContactCTA";
import BlogsDisplay from "@/components/blogs/BlogsDisplay";

export default function Blog() {
  return (
    <>
          <PageHeader
              backgroundImage="https://images.pexels.com/photos/261949/pexels-photo-261949.jpeg"
              title="Latest Insights & News"
              subtitle="Stay up-to-date with our latest articles, updates, and industry insights."
              breadcrumbs={[
                  { label: "Home", href: "/" },
                  { label: "Blogs" },
              ]}
          />
      <BlogsDisplay />
          <ContactCTA
              heading="Stay Updated with the Latest News"
              subheading="Have questions or want more information on our latest updates, articles, and announcements? Reach out to our team today!"
          />
    </>
  );
}
