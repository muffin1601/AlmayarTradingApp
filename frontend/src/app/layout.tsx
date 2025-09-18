
import { Outfit } from 'next/font/google';
import "./global.css"; 
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from '@/components/FloatingButtons';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "Al Mayar",
  description: "We supply robust automotive components",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <Header />
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
    <Footer />
    <FloatingButtons />
    </>
  );
}