"use client";
import { useEffect, useRef, useState } from 'react';

const marvels = [
  { img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&w=800&auto=format&fit=crop", title: "Grestek_Tiles" },
  { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", title: "MarbleX" },
  { img: "https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=800&auto=format&fit=crop", title: "Denver Gold & Rose Gold Series" },
  { img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=800&auto=format&fit=crop", title: "Premium Floor Tiles" },
  { img: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop", title: "Modern Wall Series" },
  { img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop", title: "Luxury Bath Fittings" }
];

export default function MarvelousSlider() {
  const [cards, setCards] = useState(marvels);
  const [activeDot, setActiveDot] = useState(0);
  const gridRef = useRef(null);

  const slideNext = () => {
    if (!gridRef.current) return;
    const cardWidth = gridRef.current.children[0].offsetWidth + 20;
    
    gridRef.current.style.transition = "transform 0.5s ease-in-out";
    gridRef.current.style.transform = `translateX(-${cardWidth}px)`;
    
    setTimeout(() => {
      gridRef.current.style.transition = "none";
      setCards(prev => {
        const newArr = [...prev];
        const first = newArr.shift();
        newArr.push(first);
        return newArr;
      });
      gridRef.current.style.transform = "translateX(0)";
    }, 500);

    setActiveDot(prev => (prev + 1) % marvels.length);
  };

  const slidePrev = () => {
    if (!gridRef.current) return;
    gridRef.current.style.transition = "none";
    setCards(prev => {
      const newArr = [...prev];
      const last = newArr.pop();
      newArr.unshift(last);
      return newArr;
    });
    
    setTimeout(() => {
        const cardWidth = gridRef.current.children[0].offsetWidth + 20;
        gridRef.current.style.transform = `translateX(-${cardWidth}px)`;
        void gridRef.current.offsetHeight; // reflow
        gridRef.current.style.transition = "transform 0.5s ease-in-out";
        gridRef.current.style.transform = "translateX(0)";
        setActiveDot(prev => (prev - 1 + marvels.length) % marvels.length);
    }, 0);
  };

  useEffect(() => {
    const interval = setInterval(slideNext, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="marvelous-section section-padding">
      <div className="container">
        <div className="section-header center marvelous-header">
          <h2>ADD A MARVELOUS</h2>
          <p>TOUCH TO YOUR SPACE</p>
        </div>
        
        <div className="marvelous-carousel-wrapper reveal">
          <button className="marv-nav left-nav" onClick={slidePrev}><i className="fa-solid fa-chevron-left"></i></button>
          <div className="marvelous-grid" ref={gridRef}>
            {cards.map((card, idx) => (
              <div key={idx + '-' + card.title} className="marv-card">
                <img src={card.img} alt={card.title} />
                <div className="explore-badge">EXPLORE</div>
                <h4 className="marv-title">{card.title}</h4>
              </div>
            ))}
          </div>
          <button className="marv-nav right-nav" onClick={slideNext}><i className="fa-solid fa-chevron-right"></i></button>
          
          <div className="marvelous-dots">
            {marvels.map((_, idx) => (
              <span key={idx} className={`dot ${idx === activeDot ? 'active' : ''}`}></span>
            ))}
          </div>
        </div>
        
        <div className="text-center" style={{ marginTop: '50px' }}>
          <button className="btn-primary">View All Products <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
    </section>
  );
}
