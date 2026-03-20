"use client";
import { useEffect, useState, useRef } from 'react';

export default function Hero() {
    const slides = [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
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
                <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url('${url}')` }}></div>
            ))}
            
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1>Where Style Meets<br/>Durability</h1>
                <p className="hero-subtitle">Discover a World of Tiles, Sanitaryware & Bath Fittings</p>
                <p className="hero-desc">Transform Your Kitchen with Luxury Tiles</p>
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
