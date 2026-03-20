"use client";
import { useEffect, useRef } from 'react';

export default function StatsCounter() {
  const countersRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        const counter = entry.target;
        if (entry.isIntersecting && !counter.classList.contains('counted')) {
          counter.classList.add('counted');
          const target = +counter.getAttribute('data-target');
          const duration = 1500; 
          const increment = target / (duration / 16); 
          let currentWait = 0;

          const updateCounter = () => {
            currentWait += increment;
            if (currentWait < target) {
              counter.innerText = Math.ceil(currentWait);
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerText = target;
            }
          };
          updateCounter();
          obs.unobserve(counter);
        }
      });
    }, { threshold: 0.5 });

    countersRef.current.forEach(c => {
      if (c) observer.observe(c);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats-section section-padding">
      <div className="container stats-container">
        {[
          { label: "Years Experience", target: 25 },
          { label: "Happy Customers", target: 9000 },
          { label: "Product Varieties", target: 15000 },
          { label: "Customer Support", target: 24 }
        ].map((stat, idx) => (
          <div key={idx} className="stat-item reveal">
            <h3 className="counter-wrap">
              <span className="counter" data-target={stat.target} ref={el => countersRef.current[idx] = el}>0</span>
              <span className="plus">+</span>
            </h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
