import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="md:snap-y-none md:overflow-auto h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      {/* Experiences */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
