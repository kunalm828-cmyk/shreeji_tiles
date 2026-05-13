import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Premium Sanitaryware in Vadodara | Luxury Bath Fittings & Showroom',
  description: 'Upgrade your bathroom with high-end sanitaryware and premium bath fittings in Vadodara. Explore our exclusive collection of faucets, showers, and modern washbasins near Pratap Nagar.',
  keywords: ['sanitaryware vadodara', 'bath fittings vadodara', 'luxury bathroom fittings', 'premium wash basin showroom', 'bathroom renovation vadodara'],
};

const SanitarywarePage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#1a1a1a', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Premium Sanitaryware</h1>
                    <p style={{ maxWidth: '600px', margin: '20px auto' }}>Exclusive bathroom solutions combining functionality with high-end design.</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
                        <div className="feature-card" style={{ padding: '40px', background: '#f9f9f9', borderRadius: '20px' }}>
                            <h3>Designer Faucets</h3>
                            <p>Premium chrome and matte finish bath fittings that add a touch of elegance to your daily routine.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '40px', background: '#f9f9f9', borderRadius: '20px' }}>
                            <h3>Modern Washbasins</h3>
                            <p>From table-top designs to pedestal styles, our collection fits every modern bathroom theme.</p>
                        </div>
                        <div className="feature-card" style={{ padding: '40px', background: '#f9f9f9', borderRadius: '20px' }}>
                            <h3>Smart Showers</h3>
                            <p>Experience luxury with our range of rainfall showers and thermostatic mixers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="authority-content section-padding bg-light">
                <div className="container">
                    <h2>Complete Bathroom Solutions in Vadodara</h2>
                    <p style={{ lineHeight: '1.8', color: '#444' }}>
                        At Shreeji Tiles, we understand that a bathroom is a sanctuary. 
                        We bring you a curated range of **premium sanitaryware in Vadodara** 
                        that focuses on durability, water-saving technology, and contemporary style. 
                        Our showroom near Pratap Nagar features the latest trends in **luxury bath fittings** 
                        trusted by builders and interior designers across Gujarat.
                    </p>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default SanitarywarePage;
