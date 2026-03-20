"use client";
import { useState, useEffect } from 'react';
import TiltWrapper from './TiltWrapper';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [
    { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop", text: "PORCELAIN SLAB", class: "top-left", itemClass: "" },
    { src: "https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?q=80&w=800&auto=format&fit=crop", text: "GVT / PGVT TILES", class: "center", itemClass: "" },
    { src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop", text: "DIGITAL WALL TILES", class: "top-right", itemClass: "" },
    { src: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1600&auto=format&fit=crop", text: "NANO/DIGITAL VITRIFIED TILES", class: "bottom-left", itemClass: "span-2" },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop", text: "DOUBLE CHARGE VITRIFIED\nTILES", class: "bottom-right", itemClass: "" },
  ];

  useEffect(() => {
    if (activeImage) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
  }, [activeImage]);

  return (
    <>
      <section className="gallery-section section-padding" id="gallery">
          <div className="container gallery-container">
              <div className="gallery-grid">
                  {images.map((img, idx) => (
                      <TiltWrapper key={idx} className={`gallery-item reveal ${img.itemClass}`}>
                          <div onClick={() => setActiveImage(img)} style={{ cursor: 'pointer', height: '100%' }}>
                              <img src={img.src} alt={img.text.replace('\n', ' ')} />
                              <div className={`gallery-text ${img.class}`} style={{ transform: 'translateZ(30px)' }}>
                                {img.text.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && img.text.includes('\n') ? <br/> : ''}</span>)}
                              </div>
                          </div>
                      </TiltWrapper>
                  ))}
              </div>
          </div>
      </section>

      {/* Glassmorphism Modal */}
      {activeImage && (
        <div 
          className="gallery-modal-overlay" 
          onClick={() => setActiveImage(null)}
        >
            <button className="gallery-modal-close" onClick={() => setActiveImage(null)}>
                <i className="fa-solid fa-xmark"></i>
            </button>
            <div 
              className="gallery-modal-content navbar-glass-style" 
              onClick={(e) => e.stopPropagation()}
            >
                <img src={activeImage.src} alt={activeImage.text.replace('\n', ' ')} className="gallery-modal-img" />
                <h3 className="gallery-modal-title">{activeImage.text.replace('\n', ' ')}</h3>
            </div>
        </div>
      )}
    </>
  );
}
