import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Anti-Skid Tiles in Vadodara | Safety First for Bathrooms & Wet Areas',
  description: 'Buy premium anti-skid tiles in Vadodara. Maximum grip and safety for bathrooms, balconies, and wet areas without compromising on style.',
  keywords: ['anti skid tiles vadodara', 'safety floor tiles', 'bathroom floor tiles'],
};

const AntiSkidTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#37474f', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Anti-Skid Safety Tiles</h1>
                    <p>Maximum grip. Minimum risk. Premium safety.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default AntiSkidTilesPage;
