import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import WhyChooseUs from "@/components/why-choose-us";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
