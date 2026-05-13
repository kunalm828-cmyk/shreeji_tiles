import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Premium Floor Tiles in Vadodara | Vitrified & Marble Finish Designs',
  description: 'Looking for the best floor tiles in Vadodara? Shreeji Tiles offers high-quality vitrified floor tiles, marble finish designs, and durable flooring solutions for homes and offices. Visit our showroom today.',
  keywords: [
    'floor tiles vadodara', 'vitrified floor tiles', 'marble finish tiles vadodara', 
    'best flooring shop vadodara', 'premium vitrified tiles', 'marble finish floor tiles',
    'living room floor tiles', 'double charge vitrified tiles', '800x800 vitrified tiles',
    'scratch resistant floor tiles', 'commercial floor tiles'
  ],
};

const FloorTilesPage = () => {
    return (
        <main>
            <Navbar />
            <div className="category-header section-padding-top" style={{ background: '#fff', paddingTop: '120px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: '#1a1a1a', marginBottom: '20px' }}>
                        Premium Floor Tiles Showroom in Vadodara
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', lineHeight: '1.6' }}>
                        Elevate your living space with the finest **vitrified floor tiles in Vadodara**. 
                        At Shreeji Tiles, we stock a massive collection of **800x800mm and 600x1200mm tiles** 
                        in high-gloss, satin, and matte finishes. Our **marble finish floor tiles** give 
                        your home a luxury look at a fraction of the cost of real marble.
                    </p>
                </div>
            </div>
            
            <section className="category-products">
                <Products />
            </section>

            <section className="category-seo-text section-padding bg-white">
                <div className="container">
                    <h2>Advanced Flooring Solutions for Vadodara Homes</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Double Charge Vitrified</h3>
                            <p>For high-traffic areas, our **double charge vitrified tiles** offer extreme durability and color longevity. Ideal for commercial and residential use in Vadodara.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Large Format Luxury</h3>
                            <p>Make your rooms look bigger with our **large format floor tiles**. These tiles reduce grout lines and create a seamless, premium look in modern apartments.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Scratch Resistant</h3>
                            <p>Our **premium floor tiles** are highly resistant to scratches and household chemicals, ensuring your floors stay beautiful for decades.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default FloorTilesPage;
