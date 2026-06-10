import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Designer Tiles in Vadodara | Exclusive Patterns & Style',
  description: 'Elevate your interiors with Vadodara\'s finest designer tiles. Explore unique patterns, textures, and luxury designs for premium homes.',
  keywords: ['designer tiles vadodara', 'luxury tile patterns', 'exclusive tile collection'],
};

const DesignerTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#1a1a1a', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Designer Tiles Collection</h1>
                    <p>Exclusive designs for the modern visionary.</p>
                </div>
            </div>
            <Products filter="luxury" />
            <Footer />
        </>
    );
};

export default DesignerTilesPage;
