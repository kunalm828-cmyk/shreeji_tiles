import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Outdoor Tiles in Vadodara | Weatherproof & Heavy Duty',
  description: 'Shop durable outdoor tiles in Vadodara. Perfect for terraces, balconies, and driveways. UV-resistant and high-strength tiles for your exterior spaces.',
  keywords: ['outdoor tiles vadodara', 'terrace tiles', 'heavy duty outdoor flooring'],
};

const OutdoorTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#263238', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Outdoor Tiles</h1>
                    <p>Designed for the elements. Built to last.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default OutdoorTilesPage;
