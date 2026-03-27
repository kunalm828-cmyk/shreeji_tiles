"use client";
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

export default function Hero() {
    const slides = [
        "/utility/hero/3d-rendering-modern-design-marble-tile-toilet-bathroom-wardrobe-with-walk-closet.jpg",
        "/utility/hero/3d-rendering-modern-luxury-hotel-office-reception-meeting-lounge.jpg",
        "/utility/hero/beautiful-shot-modern-house-bathroom-with-technology-art.jpg",
        "/utility/hero/marble-kitchen-gas-stove-contemporary-interior.jpg",
        "/utility/hero/neon-robot-vacuum-cleaner.jpg",
        "/utility/hero/photorealistic-stone-wall-surface-used-interior-design-2.jpg",
        "/utility/hero/photorealistic-stone-wall-surface-used-interior-design.jpg"
    ];
    const [currentSlide, setCurrentSlide] = useState(0);
    const intervalRef = useRef(null);

    // Touch Support Variables
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
    const goToSlide = (index) => setCurrentSlide(index);

    const startSlider = () => {
        intervalRef.current = setInterval(nextSlide, 5000);
    };

    const resetSlider = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        startSlider();
    };

    // Touch Handlers
    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;
        if (isLeftSwipe) {
            nextSlide();
            resetSlider();
        }
        if (isRightSwipe) {
            prevSlide();
            resetSlider();
        }
    };

    useEffect(() => {
        startSlider();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <section
            className="hero"
            id="home"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {slides.map((url, i) => (
                <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                    <Image 
                        src={url} 
                        alt={`Hero Slide ${i + 1}`} 
                        fill 
                        priority={i === 0} 
                        quality={85}
                        style={{ objectFit: 'cover' }} 
                        sizes="100vw"
                    />
                </div>
            ))}

            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Premium Tiles Showroom<br />in Vadodara</h1>
                <p className="hero-subtitle">Discover a World of Ceramic Tiles, Floor Tiles, Sanitaryware & Bath Fittings</p>
                <p className="hero-desc">The top-rated tiles dealer in Vadodara for home and kitchen makeovers.</p>
                <div className="hero-ctas">
                    <a href="tel:+919898713167" className="btn btn-primary">Call Now</a>
                    <a href="#contact" className="btn btn-outline btn-outline-white">Visit Showroom</a>
                </div>
            </div>
            <div className="hero-slider-dots">
                {slides.map((_, i) => (
                    <span
                        key={i}
                        className={`dot ${i === currentSlide ? 'active' : ''}`}
                        onClick={() => { goToSlide(i); resetSlider(); }}
                    ></span>
                ))}
            </div>
            <div className="slider-arrows">
                <button className="arrow left-arrow" onClick={() => { prevSlide(); resetSlider(); }}><i className="fa-solid fa-chevron-left"></i></button>
                <button className="arrow right-arrow" onClick={() => { nextSlide(); resetSlider(); }}><i className="fa-solid fa-chevron-right"></i></button>
            </div>
        </section>
    );
}
