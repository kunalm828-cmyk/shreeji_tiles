"use client";
import React, { useRef, useState } from 'react';

export default function TiltWrapper({ children, className = "" }) {
    const cardRef = useRef(null);
    const [style, setStyle] = useState({});

    const handleMouseMove = (e) => {
        if (window.innerWidth <= 768) return; // Disable tilting on mobile

        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Define max tilt up to 15 degrees
        const maxTilt = 15;
        const rotateX = ((y - centerY) / centerY) * -maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        setStyle({
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
            transition: 'none',
            zIndex: 10
        });
    };

    const handleMouseLeave = () => {
        setStyle({
            transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
            transition: 'transform 0.5s ease-out',
            zIndex: 1
        });
    };

    return (
        <div 
            ref={cardRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                ...style,
                willChange: 'transform',
                transformStyle: 'preserve-3d'
            }}
        >
            {children}
        </div>
    );
}
