import Action from "@/components/Action";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Price from "@/components/Price";
import Service from "@/components/Service";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Service */}
      <Service />

      {/* Price */}
      <Price />

      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
