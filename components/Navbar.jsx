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
      const sections = ['home', 'about', 'products', 'gallery', 'services', 'contact'];
      let currentSection = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Check if top of section is inside viewport or slightly above
          if (rect.top <= 150) {
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
            <Image src="/utility/logo.png" alt="Shreeji Tiles Logo" className="navbar-logo-img" width={200} height={60} style={{ height: '60px', width: 'auto', objectFit: 'contain', filter: 'invert(1)' }} priority />
            
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <i className="fa-solid fa-bars"></i>
            </button>
            
            <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</Link>
                <Link href="#products" className={activeSection === 'products' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Products</Link>
                <Link href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Gallery</Link>
                <Link href="#services" className={activeSection === 'services' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Services</Link>
                <Link href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Get Quote</Link>
                <Link href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
            <div className="nav-contact">
                <i className="fa-solid fa-phone"></i> <a href="tel:+919898713167" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98987 13167</a>
            </div>
        </div>
    </header>
  );
}
