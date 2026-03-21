import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Solutions from '@/components/sections/Solutions';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className='mx-auto'>
      <Header />
    <div className="min-h-screen max-w-[1440px] !mx-auto">
      <main>
        <Hero />
        <About />
        <Services />
        {/* <Solutions /> */}
        <Contact />
      </main>
      <Footer />
    </div>
    </div>
  );
}
