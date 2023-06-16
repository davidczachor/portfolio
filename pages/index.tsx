import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="lg:snap-none h-screen snap-y snap-center overflow-auto z-0 overscroll-none overflow-x-hidden scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80">
      <Header />
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-start xl:snap-center">
        <Experience />
      </section>
      <section id="projects" className="snap-start xl:snap-center">
        <Projects />
      </section>
    </div>
  );
}
