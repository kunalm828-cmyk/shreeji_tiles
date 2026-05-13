import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Designer Wall Tiles in Vadodara | Elevation & Kitchen Designs',
  description: 'Discover beautiful designer wall tiles in Vadodara for kitchens, bathrooms, and exterior elevations. Shop latest ceramic and digital wall tile patterns at Shreeji Tiles.',
  keywords: ['wall tiles vadodara', 'designer wall tiles', 'kitchen wall tiles', 'elevation wall tiles', 'digital wall tiles'],
};

const WallTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#2c3e50', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Designer Wall Tiles</h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>Creative patterns and textures to transform your vertical spaces.</p>
                </div>
            </div>

            <Products filter="wall" />

            <section className="authority-content section-padding">
                <div className="container">
                    <h2>Modern Wall Tile Solutions for Every Space</h2>
                    <p style={{ lineHeight: '1.8', color: '#555' }}>
                        Vertical surfaces define the character of a room. At Shreeji Tiles, our **wall tiles in Vadodara** 
                        range from minimalist matte finishes to vibrant **digital ceramic patterns**. 
                        Whether you need **stain-resistant kitchen backsplash tiles** or **weatherproof elevation tiles** 
                        for your building exterior, our collection offers both style and protection. 
                        Visit our showroom to see how our textures can bring your walls to life.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default WallTilesPage;
