import AboutInfo from "@/components/AboutInfo";
import Action from "@/components/Action";
import Blog from "@/components/Blog";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewsLetter from "@/components/NewsLetter";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main>
      {/* Header Section */}
      <Header />

      {/* Blog */}
      <Blog />
      {/* Action */}
      <Action />

      {/* News Letter */}
      <NewsLetter />

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
