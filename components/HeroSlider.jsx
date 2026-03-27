"use client";
import { useState, useEffect } from 'react';

const slides = [
  { img: "/utility/hero/f84d3ecffdc64bbeacb3347c725d21aa.jpg", 
    tagline: "ELEVATING LIFESTYLES", title: "Premium Tiles &\nSanitaryware" },
  { img: "/utility/hero/7666e05efd36894028e4b6a46adf8a96.jpg", 
    tagline: "ELEGANT DESIGNS", title: "Redefine Your\nLiving Spaces" },
  { img: "/utility/hero/3d5a92b5ccd1bc60cdff2ed9113403cc.jpg", 
    tagline: "LUXURY REDEFINED", title: "Exquisite Bath\nCollections" },
  { img: "/utility/hero/Screenshot 2026-03-25 at 11.05.34.jpg", 
    tagline: "ULTIMATE DURABILITY", title: "Heavy Duty &\nParking Tiles" }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      {slides.map((slide, index) => (
        <div key={index} className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
             style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${slide.img}')` }}>
        </div>
      ))}
      <div className="container hero-content text-center">
        <span className="hero-tagline">{slides[currentSlide].tagline}</span>
        <h1>{slides[currentSlide].title.split('\n').map((line, i) => <span key={i}>{line}<br/></span>)}</h1>
        <p>Discover our exclusive range of tiles, bathroom fittings, and wellness products crafted for modern aesthetics.</p>
        <div className="hero-btns">
          <button className="btn-primary">Explore Collection</button>
          <button className="btn-outline">Contact Us</button>
        </div>
      </div>
      <div className="hero-slider-dots">
        {slides.map((_, index) => (
          <span key={index} 
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}></span>
        ))}
      </div>
    </section>
  );
}
