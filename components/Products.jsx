"use client";
import React, { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const PdfPreview = dynamic(() => import('./PdfPreview'), {
    ssr: false,
    loading: () => <div style={{ height: '250px', background: '#f1f5f9', animation: 'shimmer 1.5s infinite linear', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>Loading preview...</div>
});

const categories = [
    {
        title: "Bathroom Tiles",
        desc: "Explore the Sinox glossy and carving collection",
        tags: ["Glossy Finish", "Carving", "Vitrified", "Porcelain"],
        img: "/utility/bathroom/BLUME MINT.png",
        images: [
            "/utility/bathroom/BLUME MINT.png",
            "/utility/bathroom/PERSIAN WHITE - CR.png",
            "/utility/bathroom/ROMIO WHITE GOLD.png",
            "/utility/bathroom/TERRENCE BASE.png",
            "/utility/bathroom/TERRENCE DECOR.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.51.41.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.51.51.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.52.03.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.52.14.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.52.27.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.52.43.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.52.55.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.53.05.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.53.18.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.53.28.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.53.55.png",
            "/utility/bathroom/Screenshot 2026-03-25 at 23.54.11.png"
        ],
        catalogName: "Bathroom_Tiles"
    },
    {
        title: "Tonalita Collection",
        desc: "Explore our beautiful Tonalita series",
        tags: ["New", "Tonalita", "Premium", "Designer"],
        img: "/utility/tonalita/Screenshot 2026-03-25 at 15.20.14.png",
        images: [
            "/utility/tonalita/Screenshot 2026-03-25 at 15.20.14.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.20.31.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.20.55.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.21.07.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.21.21.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.21.40.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.21.55.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.22.07.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.22.19.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.22.36.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.22.47.png",
            "/utility/tonalita/Screenshot 2026-03-25 at 15.23.01.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.03.26.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.03.36.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.03.51.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.04.03.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.04.13.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.04.23.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.04.39.png",
            "/utility/tonalita/Screenshot 2026-03-26 at 00.04.50.png"
        ],
        catalogName: "Tonalita_Collection"
    },
    {
        title: "Kitchen Collection",
        desc: "Specialized tiles for modern kitchens",
        tags: ["Kitchen", "Backsplash", "Durable", "Easy Clean"],
        img: "/utility/kitchen/Screenshot 2026-03-25 at 23.23.56.png",
        images: [
            "/utility/kitchen/Screenshot 2026-03-25 at 23.23.56.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.24.13.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.26.45.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.27.13.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.27.27.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.27.45.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.28.26.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.34.47.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.35.04.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.56.54.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.57.17.png",
            "/utility/kitchen/Screenshot 2026-03-25 at 23.58.02.png"
        ],
        catalogName: "Kitchen_Collection"
    },
    {
        title: "Heavy Duty & Parking tiles",
        desc: "Corpo parking tiles designed for high durability and outdoor use",
        tags: ["Heavy Duty", "Parking", "Weather-Resistant", "Anti-Skid"],
        img: "/utility/heavy duty/Screenshot 2026-03-24 at 12.58.12.png",
        images: [
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.58.12.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.58.31.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.58.51.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.59.04.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.59.13.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 12.59.25.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.00.16.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.00.36.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.02.55.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.03.18.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.04.20.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.04.32.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.04.48.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.05.06.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.05.15.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.05.24.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.06.02.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.06.11.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.07.05.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.07.17.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.07.28.png",
            "/utility/heavy duty/Screenshot 2026-03-24 at 13.07.38.png"
        ],
        catalogName: "Heavy_Duty_Tiles"
    },
    {
        title: "Wooden Strips",
        desc: "Authentic wood-look tiles - Wooden strip 200x1200mm",
        tags: ["Wood Finish", "Planks", "Textured", "Natural Look"],
        img: "/utility/wood/Screenshot 2026-03-25 at 11.05.34.png",
        images: [
            "/utility/wood/Screenshot 2026-03-25 at 11.05.34.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.05.46.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.05.59.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.06.11.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.06.27.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.06.42.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.06.54.png",
            "/utility/wood/Screenshot 2026-03-25 at 11.07.06.png"
        ],
        catalogName: "Wooden_Strips"
    },
    {
        title: "Flooring Tiles",
        desc: "Explore our premium flooring tiles collection",
        tags: ["Floor Tiles", "Premium", "Durable", "Elegant"],
        img: "/utility/floor/ANATOLIA BEIGE.png",
        images: [
            "/utility/floor/ANATOLIA BEIGE.png",
            "/utility/floor/ANATOLIA CREMA.png",
            "/utility/floor/ANATOLIA GREY.png",
            "/utility/floor/ANATOLIA SILVER.png",
            "/utility/floor/CRYSTAL WHITE.png",
            "/utility/floor/DESCENT SILVER.png",
            "/utility/floor/EIRENE WHITE.png",
            "/utility/floor/ELEGANT BIANCO.png",
            "/utility/floor/ELEGANT WHITE.png",
            "/utility/floor/LEVIN GREY.png",
            "/utility/floor/LEVIN NATURAL.png",
            "/utility/floor/LIZARD GREY.png",
            "/utility/floor/LIZARD SILVER.png",
            "/utility/floor/PERLINO WHITE.png",
            "/utility/floor/PORTOSANTA MINT.png",
            "/utility/floor/SARDONYX TEAL.png",
            "/utility/floor/STARK BEIGE.png",
            "/utility/floor/STATUARIO GRANDE.png",
            "/utility/floor/TRAQNQUIL ONYX SILVER.png",
            "/utility/floor/VEGAS SMOKE.png",
            "/utility/floor/VIVAN STATUARIO-EL.png",
            "/utility/floor/WALLSTER SILVER.png"
        ],
        catalogName: "Flooring_Tiles"
    }
];

export default function Products() {
    const [selectedGallery, setSelectedGallery] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [zoomedImage, setZoomedImage] = useState(null);
    const trackRef = useRef(null);

    const scrollToPage = (pageIndex) => {
        if (trackRef.current && trackRef.current.children[pageIndex]) {
            const child = trackRef.current.children[pageIndex];
            trackRef.current.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
        }
    };

    const scrollPrev = () => {
        scrollToPage(Math.max(0, currentPage - 1));
    };
    
    const scrollNext = () => {
        if (!selectedGallery || !selectedGallery.images) return;
        scrollToPage(Math.min(selectedGallery.images.length - 1, currentPage + 1));
    };

    const handleScroll = () => {
        if (trackRef.current && trackRef.current.children.length > 0) {
            const scrollLeft = trackRef.current.scrollLeft;
            const items = trackRef.current.children;
            let closest = 0;
            let minDiff = Infinity;
            for(let i = 0; i < items.length; i++) {
                const diff = Math.abs(items[i].offsetLeft - scrollLeft);
                if(diff < minDiff) {
                    minDiff = diff;
                    closest = i;
                }
            }
            if (closest !== currentPage) {
                setCurrentPage(closest);
            }
        }
    };

    const handleDownload = (e, url, name) => {
        e.preventDefault();
        const link = document.createElement("a");
        link.href = url;
        link.download = `${name}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="products section-padding bg-light" id="products">
            <div className="container">
                <div className="section-header center reveal">
                    <h2>Our Catalog Collections</h2>
                    <p>Explore our comprehensive range of premium catalogues spanning parking spaces, elegant home interiors, and architectural tiles.</p>
                </div>

                <div className="products-grid">
                    {categories.map((cat, idx) => (
                        <div className={`product-card reveal ${cat.title === "Tonalita Collection" ? "premium-gold-card" : ""}`} key={idx}>
                            <div className="card-img">
                                {cat.img ? (
                                    <img 
                                        src={cat.img} 
                                        alt={cat.title} 
                                        style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            objectFit: 'cover'
                                        }} 
                                        loading="lazy"
                                        decoding="async"
                                    />
                                ) : cat.pdfFile ? (
                                    <PdfPreview pdfUrl={cat.pdfFile} title={cat.title} />
                                ) : null}
                            </div>
                            <div className="card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <h3>{cat.title}</h3>
                                    {cat.catalogName && cat.pdfFile && (
                                        <span className="catalog-badge" title="PDF Catalog Available">
                                            <i className="fa-regular fa-file-pdf"></i> PDF
                                        </span>
                                    )}
                                </div>

                                <p>{cat.desc}</p>
                                <div className="tags">
                                    {cat.tags.map((tag, tIdx) => (
                                        <span className="tag" key={tIdx}>{tag}</span>
                                    ))}
                                </div>
                                <div className="action-buttons" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '15px' }}>
                                    {cat.images ? (
                                        <button
                                            onClick={(e) => { e.preventDefault(); setSelectedGallery({ title: cat.title, images: cat.images }); setCurrentPage(0); }}
                                            className="btn-outline btn-view-photos"
                                            style={{ width: '100%', justifyContent: 'center', cursor: 'pointer' }}
                                        >
                                            <i className="fa-solid fa-images" style={{ marginRight: '6px' }}></i> View Photos
                                        </button>
                                    ) : cat.pdfFile ? (
                                        <>
                                            <a
                                                href={cat.pdfFile}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn-outline btn-view-pdf"
                                                style={{ flex: 1, padding: '10px 5px', justifyContent: 'center', textAlign: 'center', fontSize: '14px' }}
                                            >
                                                <i className="fa-regular fa-eye" style={{ marginRight: '6px' }}></i> View PDF
                                            </a>
                                            <button
                                                onClick={(e) => handleDownload(e, cat.pdfFile, cat.catalogName)}
                                                className="btn-outline"
                                                style={{ flex: 1, padding: '10px 5px', justifyContent: 'center', fontSize: '14px' }}
                                            >
                                                <i className="fa-solid fa-download" style={{ marginRight: '6px' }}></i> Download
                                            </button>
                                        </>
                                    ) : (
                                        <a href="#" className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>
                                            View Catalog <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedGallery && (
                    <div className="gallery-modal" onClick={() => setSelectedGallery(null)}>
                        <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                            <button className="gallery-close" onClick={() => setSelectedGallery(null)}>&times;</button>
                            <div className="modal-slider-wrapper" style={{ position: 'relative' }}>
                                <button 
                                    className="gallery-nav-btn prev"
                                    onClick={(e) => { e.stopPropagation(); scrollPrev(); }}
                                    disabled={currentPage === 0}
                                    style={{ display: selectedGallery.images.length > 1 ? 'flex' : 'none' }}
                                >
                                    <i className="fa-solid fa-chevron-left"></i>
                                </button>
                                
                                <div 
                                    className="modal-gallery-track" 
                                    ref={trackRef} 
                                    onScroll={handleScroll}
                                >
                                    {selectedGallery.images.map((imgSrc, idx) => (
                                        <div key={idx} className="gallery-slide-item">
                                            <img 
                                                src={imgSrc} 
                                                alt={`Gallery ${idx + 1}`} 
                                                loading="lazy" 
                                                decoding="async"
                                                onClick={() => setZoomedImage(imgSrc)}
                                                style={{ cursor: 'zoom-in' }}
                                            />
                                        </div>
                                    ))}
                                </div>
                                
                                <button 
                                    className="gallery-nav-btn next"
                                    onClick={(e) => { e.stopPropagation(); scrollNext(); }}
                                    disabled={currentPage >= selectedGallery.images.length - 1}
                                    style={{ display: selectedGallery.images.length > 1 ? 'flex' : 'none' }}
                                >
                                    <i className="fa-solid fa-chevron-right"></i>
                                </button>
                            </div>
                            
                            {selectedGallery.images.length > 1 && (
                                <div className="gallery-pagination-text">
                                    {currentPage + 1} / {selectedGallery.images.length}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            {zoomedImage && (
                <div className="expanded-lightbox" onClick={() => setZoomedImage(null)}>
                    <div className="expanded-lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <span className="expanded-lightbox-close" onClick={() => setZoomedImage(null)}>&times;</span>
                        <img src={zoomedImage} alt="Expanded View" loading="lazy" decoding="async" />
                    </div>
                </div>
            )}
            
            <style jsx>{`
                .expanded-lightbox {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0, 0, 0, 0.85);
                    z-index: 10050;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                    opacity: 0;
                    animation: expFadeIn 0.3s forwards;
                }
                .expanded-lightbox-content {
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
                    animation: expZoomIn 0.3s forwards;
                    transform: scale(0.9);
                }
                .expanded-lightbox img {
                    max-width: 100%;
                    max-height: calc(90vh - 40px);
                    object-fit: contain;
                    border-radius: 12px;
                }
                .expanded-lightbox-close {
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
                    z-index: 10051;
                    transition: transform 0.2s, background 0.3s, color 0.3s;
                }
                .expanded-lightbox-close:hover {
                    transform: scale(1.1);
                    background: #ff4757;
                    color: white;
                }
                @keyframes expFadeIn {
                    to { opacity: 1; }
                }
                @keyframes expZoomIn {
                    to { transform: scale(1); }
                }
                @media (max-width: 768px) {
                    .expanded-lightbox { padding: 15px; }
                    .expanded-lightbox-content { padding: 15px; max-height: 85vh; border-radius: 20px; }
                    .expanded-lightbox img { max-height: calc(85vh - 30px); }
                    .expanded-lightbox-close { top: -10px; right: -10px; font-size: 20px; width: 30px; height: 30px; }
                }
                .gallery-modal {
                    position: fixed;
                    top: 0; left: 0; right: 0; bottom: 0;
                    background: rgba(0, 0, 0, 0.85);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 40px;
                }
                .gallery-content {
                    background: rgba(255, 255, 255, 0.4);
                    backdrop-filter: blur(16px);
                    -webkit-backdrop-filter: blur(16px);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    border-radius: 30px;
                    border: 1px solid rgba(255, 255, 255, 0.6);
                    padding: 40px;
                    width: 100%;
                    max-width: 1000px;
                    max-height: 90vh;
                    overflow-y: auto;
                    position: relative;
                    color: #000;
                }
                .gallery-close {
                    position: absolute;
                    top: 15px;
                    right: 20px;
                    background: none;
                    border: none;
                    font-size: 2rem;
                    cursor: pointer;
                    color: #000;
                }
                .gallery-content h2 {
                    text-align: center;
                    margin-bottom: 20px;
                    color: #000;
                }
                .modal-slider-wrapper {
                    width: 100%;
                    overflow: hidden;
                    position: relative;
                }
                .modal-gallery-track {
                    display: flex;
                    gap: 30px;
                    width: 100%;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                    padding-bottom: 20px;
                    position: relative;
                }
                .modal-gallery-track::-webkit-scrollbar {
                    display: none;
                }
                .gallery-slide-item {
                    flex: 0 0 100%;
                    min-width: 100%;
                    scroll-snap-align: center;
                    border-radius: 16px;
                    overflow: hidden;
                    background: transparent;
                    display: flex;
                    justify-content: center;
                }
                .gallery-slide-item img {
                    width: 100%;
                    height: 100%;
                    aspect-ratio: 4 / 3;
                    max-height: 70vh;
                    object-fit: cover;
                    border-radius: 16px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    background: #fff;
                }

                .gallery-caption {
                    text-align: center;
                    margin-top: 8px;
                    font-size: 0.9rem;
                    color: #555;
                    font-weight: 500;
                    padding-bottom: 10px;
                }

                .gallery-nav-btn {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    background: rgba(255, 255, 255, 0.9);
                    border: none;
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 100;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                    color: #333;
                    font-size: 1.2rem;
                    transition: all 0.2s ease;
                }
                .gallery-nav-btn:hover:not(:disabled) {
                    background: #fff;
                    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
                    transform: translateY(-50%) scale(1.1);
                    color: var(--primary-color, #104f80);
                }
                .gallery-nav-btn:disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                }
                .gallery-nav-btn.prev {
                    left: 10px;
                }
                .gallery-nav-btn.next {
                    right: 10px;
                }
                .gallery-pagination-text {
                    text-align: center;
                    margin-top: 15px;
                    font-weight: 600;
                    color: #333;
                    font-size: 1.1rem;
                }

                @media (max-width: 768px) {
                    .gallery-modal { padding: 15px; }
                    .gallery-content { padding: 20px 15px; }
                    .modal-gallery-track { gap: 15px; }
                    .gallery-slide-item img { max-height: 60vh; }
                }

                .catalog-badge {
                    display: inline-flex;
                    align-items: center;
                    font-size: 0.75rem;
                    background-color: #fee2e2;
                    color: #ef4444;
                    padding: 2px 8px;
                    border-radius: 9999px;
                    font-weight: 600;
                    margin-top: 5px;
                }
                .catalog-badge i {
                    margin-right: 4px;
                }
                .btn-view-pdf, .btn-view-photos {
                    transition: all 0.3s ease;
                }
                .btn-view-pdf:hover, .btn-view-photos:hover {
                    background-color: var(--primary-color) !important;
                    color: var(--white, #ffffff) !important;
                    border-color: var(--primary-color) !important;
                }
            `}</style>
        </section>
    );
}
