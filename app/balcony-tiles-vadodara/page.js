import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Balcony Tiles in Vadodara | Anti-Skid & Stylish Outdoor Flooring',
  description: 'Enhance your balcony with premium anti-skid tiles in Vadodara. Weatherproof, stylish, and easy to maintain tiles for your sit-out areas.',
  keywords: ['balcony tiles vadodara', 'anti-skid balcony tiles', 'outdoor sitout tiles'],
};

const BalconyTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#455a64', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Balcony Tiles</h1>
                    <p>Open spaces that breathe style.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default BalconyTilesPage;
