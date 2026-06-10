"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header logic
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scrollspy logic
      const sections = ['home', 'about', 'products', 'services', 'gallery', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if top of section is inside viewport or slightly above
          // Uses window.innerHeight * 0.5 to trigger when section enters the middle half of screen
          if (rect.top <= window.innerHeight * 0.5) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger manually on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
            <Image src="/bglogo.png" alt="Shreeji Tiles - Best Tiles Showroom in Vadodara" className="navbar-logo-img" width={200} height={60} style={{ height: '60px', width: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} priority />
            
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link href="/#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="/#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link href="/bathroom-tiles-vadodara" onClick={() => setIsMenuOpen(false)}>Bathroom</Link>
                <Link href="/floor-tiles-vadodara" onClick={() => setIsMenuOpen(false)}>Flooring</Link>
                <Link href="/kitchen-tiles-vadodara" onClick={() => setIsMenuOpen(false)}>Kitchen</Link>
                <Link href="/luxury-tiles-vadodara" onClick={() => setIsMenuOpen(false)}>Luxury</Link>
                <Link href="/sanitaryware-vadodara" onClick={() => setIsMenuOpen(false)}>Sanitaryware</Link>
                <Link href="/blog" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                <Link href="/#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="nav-contact">
                <i className="fa-solid fa-phone"></i> <a href="tel:+919898713167" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98987 13167</a>
            </div>
        </div>
    </header>
  );
}
