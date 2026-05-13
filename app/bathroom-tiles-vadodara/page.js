import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Premium Bathroom Tiles in Vadodara | Anti-Skid & Luxury Designs',
  description: 'Explore the best collection of bathroom tiles in Vadodara at Shreeji Tiles. From anti-skid floor tiles to luxury wall designs, find everything for your dream bathroom. Visit our showroom near Pratap Nagar.',
  keywords: [
    'bathroom tiles vadodara', 'anti skid bathroom tiles', 'luxury bathroom tiles', 
    'bathroom floor tiles vadodara', 'modern bathroom design vadodara', 
    'digital bathroom tiles', 'matte finish bathroom tiles', 'washroom tiles showroom vadodara',
    'premium bathroom tiles collection', 'waterproof bathroom tiles'
  ],
};

const BathroomTilesPage = () => {
    return (
        <main>
            <Navbar />
            <div className="category-header section-padding-top" style={{ background: '#f8faff', paddingTop: '120px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: '#1a1a1a', marginBottom: '20px' }}>
                        Best Bathroom Tiles in Vadodara
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', lineHeight: '1.6' }}>
                        Shreeji Tiles brings you an exclusive range of **bathroom wall and floor tiles in Vadodara**. 
                        Our collection features the latest **anti-skid vitrified tiles**, **glossy ceramic finishes**, 
                        and **luxury carving patterns** from top brands like Sinox. Whether you're renovating 
                        a small washroom or designing a master bathroom, we have the perfect solutions near Pratap Nagar.
                    </p>
                </div>
            </div>
            
            <section className="category-products">
                {/* Reusing Products component but focusing on Bathroom */}
                <Products />
            </section>

            <section className="category-seo-text section-padding bg-light">
                <div className="container">
                    <h2>Why Buy Bathroom Tiles from Shreeji Tiles Vadodara?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Anti-Skid Safety</h3>
                            <p>Safety is priority in wet areas. Our **anti-skid bathroom tiles** provide superior grip and are perfect for families with kids and elderly members in Vadodara homes.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Low Maintenance</h3>
                            <p>Our **premium ceramic bathroom tiles** are stain-resistant and easy to clean, keeping your bathroom looking fresh for years with minimal effort.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Modern Designs</h3>
                            <p>From **minimalist matte finishes** to **high-gloss digital tiles**, our Vadodara showroom stays updated with the latest 2026 global bathroom trends.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default BathroomTilesPage;
