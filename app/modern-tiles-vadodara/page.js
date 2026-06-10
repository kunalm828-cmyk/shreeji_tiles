import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Modern Tiles in Vadodara | Contemporary Designs for 2026',
  description: 'Shop the latest modern tiles in Vadodara. From minimalist designs to contemporary textures, find the perfect match for your new home.',
  keywords: ['modern tiles vadodara', 'contemporary tile design', 'latest tiles 2026'],
};

const ModernTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#f5f5f5', padding: '100px 0', color: '#333', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Modern Tiles</h1>
                    <p>Trends that define the future of interiors.</p>
                </div>
            </div>
            <Products filter="wall" />
            <Footer />
        </>
    );
};

export default ModernTilesPage;
