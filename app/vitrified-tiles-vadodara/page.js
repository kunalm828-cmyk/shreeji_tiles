import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Premium Vitrified Tiles in Vadodara | Double Charge & GVT',
  description: 'Shop durable vitrified tiles in Vadodara. High breaking strength, low porosity, and premium marble finishes. Best prices for double charge and polished vitrified tiles.',
  keywords: ['vitrified tiles vadodara', 'double charge vitrified tiles', 'full body vitrified tiles', 'premium floor tiles', 'marble finish vitrified tiles'],
};

const VitrifiedTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#f5f5f5', padding: '100px 0', color: '#333', textAlign: 'center', borderBottom: '1px solid #eee' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Vitrified Tiles Collection</h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>Engineered for strength. Designed for elegance. The ultimate flooring choice.</p>
                </div>
            </div>

            <Products filter="floor" />

            <section className="authority-content section-padding bg-white">
                <div className="container">
                    <h2>Advanced Vitrified Tiles for High-Traffic Areas</h2>
                    <p style={{ lineHeight: '1.8', color: '#555' }}>
                        Vitrified tiles are the backbone of modern flooring. We provide **high-durability vitrified tiles in Vadodara** 
                        that are resistant to scratches, stains, and chemicals. Our range includes **double charge vitrified tiles** 
                        for heavy-use areas and **polished vitrified tiles** for a sleek, reflective finish in living rooms. 
                        Trusted by leading builders in Gujarat, our vitrified collection ensures your floors remain 
                        pristine for decades with minimal maintenance.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default VitrifiedTilesPage;
