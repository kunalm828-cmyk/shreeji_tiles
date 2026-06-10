import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Commercial Tiles in Vadodara | Heavy Duty & High Traffic Flooring',
  description: 'Shop heavy-duty commercial tiles in Vadodara. Ideal for showrooms, offices, warehouses, and malls. High-strength vitrified solutions for business spaces.',
  keywords: ['commercial tiles vadodara', 'heavy duty floor tiles', 'industrial flooring vadodara'],
};

const CommercialTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#37474f', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Commercial & Industrial Tiles</h1>
                    <p>Strength for your business. Style for your brand.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default CommercialTilesPage;
