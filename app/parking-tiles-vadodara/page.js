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
    'high strength parking tiles', 'parking floor tiles', 'industrial parking tiles'
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
                    <h2>Ultimate Durability for Your Driveways</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div className="seo-text-block">
                            <h3>High Breaking Strength</h3>
                            <p>Our **heavy-duty outdoor tiles** have a high thickness and breaking strength, ensuring they don't crack under the weight of heavy SUVs.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Anti-Skid Texture</h3>
                            <p>Wet parking lots can be slippery. Our **textured parking tiles** provide maximum grip for tires and safety for pedestrians.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Weather Proof</h3>
                            <p>These tiles are **UV resistant and frost proof**, ensuring the color and texture don't fade under the harsh Gujarat sun.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default ParkingTilesPage;
