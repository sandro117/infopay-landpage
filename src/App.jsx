import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BentoGrid from './components/BentoGrid';
import ChatDemo from './components/ChatDemo';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white bg-dot-pattern flex flex-col font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden relative">
      {/* Divine Light Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 w-full">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <BentoGrid />
          <ChatDemo />
          <Pricing />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
