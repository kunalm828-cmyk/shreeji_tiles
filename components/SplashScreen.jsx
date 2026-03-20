"use client";
import { useEffect, useState } from 'react';

export default function SplashScreen() {
    const [isSplashActive, setIsSplashActive] = useState(true);
    const [isSplashOut, setIsSplashOut] = useState(false);

    useEffect(() => {
        if (typeof document !== 'undefined') {
            document.body.classList.add('splash-active');
            
            const timer = setTimeout(() => {
                document.body.classList.remove('splash-active');
                document.body.classList.add('splash-out');
                setIsSplashActive(false);
                setIsSplashOut(true);
            }, 1500); // Unveil after 1.5 seconds

            return () => {
                clearTimeout(timer);
                document.body.classList.remove('splash-active');
                document.body.classList.remove('splash-out');
            };
        }
    }, []);

    // We still render the splash screen structure so the CSS animations run
    return (
        <div id="splash-screen">
            <div id="splash-bg"></div>
            <div className="splash-logo-wrapper">
                <img src="utility/logo.png" alt="Shreeji Tiles Splash Logo" />
            </div>
        </div>
    );
}
