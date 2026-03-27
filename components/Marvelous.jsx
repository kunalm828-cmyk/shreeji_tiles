"use client";
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Marvelous() {
    const gridRef = useRef(null);
    const [currentMarvIndex, setCurrentMarvIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(null);
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

    const goToSlide = (index) => {
        if (index === currentMarvIndex) return;
        if (marvSlideInterval.current) clearInterval(marvSlideInterval.current);
        
        const marvGrid = gridRef.current;
        let diff = index - currentMarvIndex;
        let absDiff = Math.abs(diff);
        
        const cardWidth = marvGrid.children[0].offsetWidth + 20;

        if (diff < 0) {
            marvGrid.style.transition = "none";
            for(let j = 0; j < absDiff; j++) {
                const lastEl = marvGrid.children[marvGrid.children.length - 1];
                marvGrid.prepend(lastEl);
            }
            marvGrid.style.transform = `translateX(-${cardWidth * absDiff}px)`;
            
            // Force layout reflow
            void marvGrid.offsetHeight; 
            
            marvGrid.style.transition = "transform 0.5s ease-in-out";
            marvGrid.style.transform = "translateX(0)";
        } else {
            marvGrid.style.transition = "transform 0.5s ease-in-out";
            marvGrid.style.transform = `translateX(-${cardWidth * diff}px)`;
            
            setTimeout(() => {
                if (!gridRef.current) return;
                marvGrid.style.transition = "none";
                for(let j = 0; j < diff; j++) {
                    marvGrid.appendChild(marvGrid.children[0]);
                }
                marvGrid.style.transform = "translateX(0)";
            }, 500);
        }
        
        setCurrentMarvIndex(index);
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
        { img: "/utility/digital-lavender-style-interior-design.jpg", title: "Digital Lavender Style" },
        { img: "/utility/home-interior-decorated-brown-shades.jpg", title: "Brown Shades Interior" },
        { img: "/utility/view-small-bathroom-with-modern-style-decor-furniture.jpg", title: "Modern Bathroom" },
        { img: "/utility/hero/3d-rendering-modern-design-marble-tile-toilet-bathroom-wardrobe-with-walk-closet.jpg", title: "Marble Washroom" },
        { img: "/utility/hero/marble-kitchen-gas-stove-contemporary-interior.jpg", title: "Marble Kitchen" },
        { img: "/utility/hero/neon-robot-vacuum-cleaner.jpg", title: "Modern Floors" }
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
                            <div key={i} className="marv-card" onClick={() => setSelectedImage(card.img)} style={{ cursor: 'zoom-in' }}>
                                <img src={card.img} alt={card.title} loading="lazy" decoding="async" />
                                <h4 className="marv-title">{card.title}</h4>
                            </div>
                        ))}
                    </div>
                    <button className="marv-nav right-nav" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
                    
                    <div className="marvelous-dots">
                        {Array.from({ length: MARV_COUNT }).map((_, i) => (
                            <span 
                                key={i} 
                                className={`dot ${i === currentMarvIndex ? 'active' : ''}`}
                                onClick={() => goToSlide(i)}
                                style={{ cursor: 'pointer' }}
                            ></span>
                        ))}
                    </div>
                    
                </div>
            </div>

            {selectedImage && (
                <div className="marv-lightbox" onClick={() => setSelectedImage(null)}>
                    <div className="marv-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="marv-lightbox-close" onClick={() => setSelectedImage(null)}>&times;</span>
                        <img src={selectedImage} alt="Large" loading="lazy" decoding="async" />
                    </div>
                </div>
            )}
            <style jsx>{`
                .marv-lightbox {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0, 0, 0, 0.85);
                    z-index: 10000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    opacity: 0;
                    animation: fadeIn 0.3s forwards;
                }
                .marv-lightbox-content {
                    background: rgba(255, 255, 255, 0.45);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
                    border-radius: 30px;
                    padding: 20px;
                    position: relative;
                    max-width: 90vw;
                    max-height: 90vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: zoomIn 0.3s forwards;
                    transform: scale(0.9);
                }
                .marv-lightbox img {
                    max-width: 100%;
                    max-height: calc(90vh - 40px);
                    object-fit: contain;
                    border-radius: 12px;
                }
                .marv-lightbox-close {
                    position: absolute;
                    top: -15px;
                    right: -15px;
                    background: white;
                    color: #333;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                    cursor: pointer;
                    z-index: 10001;
                    transition: transform 0.2s, background 0.3s, color 0.3s;
                }
                .marv-lightbox-close:hover {
                    transform: scale(1.1);
                    background: #ff4757;
                    color: white;
                }
                @keyframes fadeIn {
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    to { transform: scale(1); }
                }
                @media (max-width: 768px) {
                    .marv-lightbox { padding: 15px; }
                    .marv-lightbox-content { padding: 15px; max-height: 85vh; border-radius: 20px; }
                    .marv-lightbox img { max-height: calc(85vh - 30px); }
                    .marv-lightbox-close { top: -10px; right: -10px; font-size: 20px; width: 30px; height: 30px; }
                }
            `}</style>
        </section>
    );
}
