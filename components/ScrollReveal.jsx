"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        // Find all elements to reveal
        const revealElements = document.querySelectorAll('.reveal');

        const revealCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        };

        const revealOptions = {
            threshold: 0.05,
            rootMargin: "0px"
        };

        const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

        revealElements.forEach(el => {
            revealObserver.observe(el);
        });

        return () => {
            revealObserver.disconnect();
        };
    }, [pathname]); // Re-run when page route changes

    return null;
}
