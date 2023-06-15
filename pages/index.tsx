import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="lg:snap-none lg:overflow-auto h-screen snap-y snap-center overflow-scroll z-0 overscroll-none overflow-x-hidden">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      {/* <section id="experience" className="snap-start">
        <Experience />
      </section> */}
      {/* Projects */}
    </div>
  );
}
