import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Heavy Duty Parking Tiles in Vadodara | Outdoor & Industrial Tiles',
  description: 'Buy heavy-duty parking tiles in Vadodara. Shreeji Tiles offers high-strength outdoor tiles, anti-skid parking solutions, and weather-resistant industrial tiles. Visit our showroom today.',
  keywords: [
    'parking tiles vadodara', 'heavy duty parking tiles', 'outdoor tiles vadodara', 
    'driveway parking tiles', 'industrial floor tiles', 'commercial parking tiles',
    'high strength parking tiles', 'parking floor tiles', 'industrial parking tiles',
    'bungalow parking tiles', 'elevation tiles vadodara',
    'parking paving tiles', 'terrace outdoor tiles', 'UV resistant outdoor tiles',
    'premium terrace flooring', 'best anti skid outdoor tiles', 'heavy duty outdoor flooring'
  ],
};

const ParkingTilesPage = () => {
    return (
        <main>
            <Navbar />
            <div className="category-header section-padding-top" style={{ background: '#f5f5f5', paddingTop: '120px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: '#1a1a1a', marginBottom: '20px' }}>
                        Heavy Duty Parking Tiles in Vadodara
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', lineHeight: '1.6' }}>
                        When it comes to outdoor durability, Shreeji Tiles is the leader in **parking tiles in Vadodara**. 
                        Our **heavy-duty Corpo parking tiles** are designed to withstand high vehicular traffic, 
                        extreme heat, and monsoon rains. Perfect for bungalows, residential complexes, 
                        and industrial driveways in Gujarat.
                    </p>
                </div>
            </div>
            
            <section className="category-products">
                <Products />
            </section>

            <section className="category-seo-text section-padding bg-white">
                <div className="container">
                    <h2>Outdoor Spaces: Best tiles for parking area?</h2>
                    <p style={{ marginBottom: '40px', color: '#555' }}>
                        Choosing the right **parking floor tiles** is crucial for durability. Shreeji Tiles is the **best tiles showroom near me** for **bungalow parking tiles** and **industrial parking tiles** in Gujarat.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="seo-text-block">
                            <h3>High Strength & Performance</h3>
                            <p>Our **high strength parking tiles** and **commercial parking tiles** are built for the toughest conditions. They are the **best tiles for parking area** if you have heavy vehicles.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Anti-Skid Outdoor Tiles</h3>
                            <p>For safety during Gujarat monsoons, our **anti-skid parking tiles** provide a rough texture and excellent grip. Ideal for **driveway parking tiles** and garden paths.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Weather Resistant Beauty</h3>
                            <p>Our **outdoor tiles in Vadodara** are designed to resist UV rays and moisture, making them the perfect **balcony outdoor tiles** and elevation solutions.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default ParkingTilesPage;
