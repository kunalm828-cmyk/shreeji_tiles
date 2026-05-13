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
                    <h2>Expert Guide: Which tiles are best for your bathroom?</h2>
                    <p style={{ marginBottom: '40px', color: '#555' }}>
                        If you are wondering **where can I buy luxury tiles in Vadodara**, Shreeji Tiles near Pratap Nagar is your answer. 
                        We help you solve common questions like "which tiles are best for home?" with our expert consultation.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Modern House Tiles Showroom</h3>
                            <p>Our **luxury bathroom flooring** options include **matte finish tiles** and **digital wall series** that are perfect for **villa renovations** and modern bungalows in Alkapuri and Akota.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Best Sanitaryware Showroom</h3>
                            <p>We are not just a tile shop; we are a complete **bathroom renovation showroom in Vadodara**. Explore **washroom tiles** paired with premium bath fittings.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Waterproof & Durable</h3>
                            <p>Looking for **waterproof bathroom tiles**? Our high-density porcelain tiles prevent seepage and maintain their **luxury tile collection** look for years.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default BathroomTilesPage;
