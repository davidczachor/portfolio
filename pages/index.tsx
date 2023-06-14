import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      {/* About */}
      {/* Experiences */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact */}
    </div>
  );
}
