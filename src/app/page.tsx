import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CloudDevOps from "@/components/CloudDevOps";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">

      <Navbar />

      <Hero />

      <About />

      {/* <Certifications /> */}

      <Skills />

      <CloudDevOps />

      <Projects />

      <Experience />

      <Certifications />

      <Contact />

      <Footer />

    </main>
  );
}