"use client";
import { useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
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

    // --- Global Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    return () => {
        revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <SplashScreen />
      <Navbar />
      <Hero />
      <About />
      <Products />
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
