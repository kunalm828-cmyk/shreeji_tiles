import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Wooden Finish Tiles in Vadodara | Natural Texture & Durable',
  description: 'Experience the warmth of wood with the durability of tiles. Shop premium wooden finish tiles in Vadodara for bedroom and living room flooring.',
  keywords: ['wooden tiles vadodara', 'wood texture tiles', 'natural finish flooring'],
};

const WoodenTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#5d4037', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Wooden Finish Tiles</h1>
                    <p>Natural aesthetics meets modern durability.</p>
                </div>
            </div>
            <Products filter="floor" />
            <Footer />
        </>
    );
};

export default WoodenTilesPage;
