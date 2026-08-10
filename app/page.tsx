import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Connect from '@/components/Connect';
import Footer from '@/components/Footer';
import AdUnit from '@/components/AdUnit';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-16">
        <AdUnit />
        <About />
        <Skills />
        <Projects />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
