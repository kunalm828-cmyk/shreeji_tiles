import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Living Room Tiles in Vadodara | Luxury Flooring & Wall Designs',
  description: 'Create a grand entrance with premium living room tiles in Vadodara. From high-gloss vitrified tiles to marble-finish slabs, find the perfect floor for your lounge.',
  keywords: ['living room tiles vadodara', 'hall floor tiles', 'luxury living room flooring'],
};

const LivingRoomTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#f8f9fa', padding: '100px 0', color: '#333', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Living Room Tiles</h1>
                    <p>Where elegance meets every day living.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default LivingRoomTilesPage;
