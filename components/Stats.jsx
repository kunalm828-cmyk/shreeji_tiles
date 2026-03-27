"use client";
import { useEffect, useRef } from 'react';

export default function Stats() {
    const counterRefs = useRef([]);

    useEffect(() => {
        const speed = 50; // Lower number = fewer steps = faster animation
        
        const startCounters = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target');
                        const count = +counter.innerText.replace(/,/g, '');
                        
                        const inc = target / speed;

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc).toLocaleString();
                            setTimeout(updateCount, 15);
                        } else {
                            counter.innerText = target.toLocaleString();
                        }
                    };
                    
                    updateCount();
                    observer.unobserve(counter); // Animate only once per load
                }
            });
        };

        const counterObserver = new IntersectionObserver(startCounters, {
            root: null,
            threshold: 0.5
        });

        counterRefs.current.forEach(counter => {
            if (counter) counterObserver.observe(counter);
        });

        return () => counterObserver.disconnect();
    }, []);

    const statItems = [
        { target: 25, label: "Years Experience" },
        { target: 27000, label: "Happy Clients" },
        { target: 15000, label: "Product Varieties" },
        { target: 24, label: "Customer Support" }
    ];

    return (
        <section className="stats-section section-padding">
            <div className="container stats-container">
                {statItems.map((stat, idx) => (
                    <div key={idx} className="stat-item reveal">
                        <h3 className="counter-wrap">
                            <span 
                                className="counter" 
                                data-target={stat.target} 
                                ref={el => counterRefs.current[idx] = el}
                            >0</span>
                            <span className="plus">+</span>
                        </h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
