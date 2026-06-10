"use client";
import { useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import SEOContent from '../components/SEOContent';
import LocalAreaTrust from '../components/LocalAreaTrust';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Marvelous from '../components/Marvelous';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

export default function Home() {
  useEffect(() => {
    // Prevent browser from restoring previous scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SplashScreen />
      <Navbar />
      <Hero />
      <About />
      <Products />
      <SEOContent />
      <LocalAreaTrust />
      <Marvelous />
      <Services />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
