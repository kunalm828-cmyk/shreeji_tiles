"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Marvelous() {
    const gridRef = useRef(null);
    const [currentMarvIndex, setCurrentMarvIndex] = useState(0);
    const marvSlideInterval = useRef(null);
    const MARV_COUNT = 6;

    // Touch Support Variables
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const minSwipeDistance = 50;

    const slideMarvelous = () => {
        if (!gridRef.current || gridRef.current.children.length === 0) return;
        
        const marvGrid = gridRef.current;
        const cardWidth = marvGrid.children[0].offsetWidth + 20;
        
        marvGrid.style.transition = "transform 0.5s ease-in-out";
        marvGrid.style.transform = `translateX(-${cardWidth}px)`;
        
        setTimeout(() => {
            if (!gridRef.current) return;
            marvGrid.style.transition = "none";
            marvGrid.appendChild(marvGrid.children[0]);
            marvGrid.style.transform = "translateX(0)";
        }, 500);
        
        setCurrentMarvIndex(prev => (prev + 1) % MARV_COUNT);
    };

    const startMarvSlider = () => {
        marvSlideInterval.current = setInterval(slideMarvelous, 3500); 
    };

    useEffect(() => {
        startMarvSlider();
        return () => {
            if (marvSlideInterval.current) clearInterval(marvSlideInterval.current);
        };
    }, []);

    const handleNext = () => {
        if (marvSlideInterval.current) clearInterval(marvSlideInterval.current);
        slideMarvelous();
        startMarvSlider();
    };

    const handlePrev = () => {
        if (marvSlideInterval.current) clearInterval(marvSlideInterval.current);
        if (!gridRef.current || gridRef.current.children.length === 0) return;

        const marvGrid = gridRef.current;
        marvGrid.style.transition = "none";
        const lastEl = marvGrid.children[marvGrid.children.length - 1];
        marvGrid.prepend(lastEl);
        const cardWidth = lastEl.offsetWidth + 20;
        marvGrid.style.transform = `translateX(-${cardWidth}px)`;
        
        // Force layout reflow
        void marvGrid.offsetHeight; 
        
        marvGrid.style.transition = "transform 0.5s ease-in-out";
        marvGrid.style.transform = "translateX(0)";
        
        setCurrentMarvIndex(prev => (prev - 1 + MARV_COUNT) % MARV_COUNT);
        startMarvSlider();
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
            handleNext();
        }
        if (isRightSwipe) {
            handlePrev();
        }
    };

    const cards = [
        { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop", title: "Grestek_Tiles" },
        { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", title: "MarbleX" },
        { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop", title: "Denver Gold & Rose Gold Series" },
        { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop", title: "Premium Floor Tiles" },
        { img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop", title: "Modern Wall Series" },
        { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop", title: "Luxury Bath Fittings" }
    ];

    return (
        <section className="marvelous-section section-padding">
            <div className="container">
                <div className="section-header center marvelous-header">
                    <h2>ADD A MARVELOUS</h2>
                    <p>TOUCH TO YOUR SPACE</p>
                </div>
                
                <div 
                    className="marvelous-carousel-wrapper reveal"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <button className="marv-nav left-nav" onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
                    <div className="marvelous-grid" ref={gridRef}>
                        {cards.map((card, i) => (
                            <div key={i} className="marv-card">
                                <img src={card.img} alt={card.title} />
                                <div className="explore-badge">EXPLORE</div>
                                <h4 className="marv-title">{card.title}</h4>
                            </div>
                        ))}
                    </div>
                    <button className="marv-nav right-nav" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
                    
                    <div className="marvelous-dots">
                        {Array.from({ length: MARV_COUNT }).map((_, i) => (
                            <span key={i} className={`dot ${i === currentMarvIndex ? 'active' : ''}`}></span>
                        ))}
                    </div>
                    
                    <div className="text-center" style={{ marginTop: '50px', textAlign: 'center' }}>
                        <Link href="#" className="btn-primary">View All Products</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
