import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Luxury Tiles in Vadodara | Designer Italian & Premium Collections',
  description: 'Elevate your interiors with Vadodara\'s most exclusive luxury tile collection. Featuring designer Italian patterns, large slabs, and premium finishes for villas and high-end bungalows.',
  keywords: ['luxury tiles vadodara', 'imported tiles vadodara', 'italian tiles vadodara', 'designer wall tiles', 'premium interior flooring'],
};

const LuxuryTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/luxury-bg.jpg") center/cover', padding: '120px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', fontWeight: '800' }}>Luxury Tiles Collection</h1>
                    <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '20px auto' }}>The Art of Premium Living. Discover Vadodara's finest range of imported and designer tiles for your dream home.</p>
                </div>
            </div>

            <Products filter="luxury" />

            <section className="authority-content section-padding">
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <h2>Why Choose Luxury Tiles for Your Modern Home?</h2>
                        <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.8' }}>
                            Luxury tiles are more than just flooring; they are a statement of your personal style. 
                            Our **Italian-inspired designs** and **large format slabs** are meticulously curated to provide 
                            a seamless, high-end look that is both durable and aesthetically stunning. 
                            Whether you are renovating a villa in Akota or a penthouse in Alkapuri, 
                            our premium collection offers the perfect blend of texture and luxury.
                        </p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default LuxuryTilesPage;
