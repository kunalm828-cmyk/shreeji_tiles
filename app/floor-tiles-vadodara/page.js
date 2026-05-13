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
    'scratch resistant floor tiles', 'commercial floor tiles', '600x600 floor tiles',
    'wooden finish tiles', 'wood plank tiles', 'porcelain wood tiles', 'villa flooring tiles'
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
                    <h2>Living Room & Bedroom: Which floor tiles are durable?</h2>
                    <p style={{ marginBottom: '40px', color: '#555' }}>
                        If you are looking for **where to buy tiles in Vadodara** for your **living room floor**, Shreeji Tiles offers **scratch resistant floor tiles** and **marble finish vitrified tiles** that last a lifetime. 
                        We are the **best flooring showroom** for **villa flooring tiles** and modern apartments.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Luxury Floor Tiles Collection</h3>
                            <p>Our **large format tiles** (800x1600mm) create a seamless, marble-like look for **bungalow flooring** in Manjalpur and Karelibaug. These are the **best tiles for living room** luxury.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Commercial Flooring Solutions</h3>
                            <p>Looking for **office floor tiles** or **restaurant flooring solutions**? Our heavy-duty vitrified range handles high traffic with ease while maintaining a premium aesthetic.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Italian Tiles Design</h3>
                            <p>We provide **imported tiles in Vadodara** with **Italian tiles design** patterns, giving your home an international appeal at competitive prices.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default FloorTilesPage;
