import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Bedroom Tiles in Vadodara | Cozy Textures & Warm Designs',
  description: 'Transform your bedroom into a sanctuary with our premium bedroom tiles in Vadodara. Shop wooden finish and soft matte tiles for a peaceful ambiance.',
  keywords: ['bedroom tiles vadodara', 'bedroom floor tiles', 'cozy flooring ideas'],
};

const BedroomTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#efebe9', padding: '100px 0', color: '#4e342e', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Bedroom Tiles</h1>
                    <p>Comfort and style for your private sanctuary.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default BedroomTilesPage;
