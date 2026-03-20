"use client";
import { useState, useEffect } from 'react';

const slides = [
  { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop", 
    tagline: "ELEVATING LIFESTYLES", title: "Premium Tiles &\nSanitaryware" },
  { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop", 
    tagline: "ELEGANT DESIGNS", title: "Redefine Your\nLiving Spaces" },
  { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=2000&auto=format&fit=crop", 
    tagline: "LUXURY REDEFINED", title: "Exquisite Bath\nCollections" }
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
