import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Elevation Tiles in Vadodara | 3D Stone & Brick Wall Designs',
  description: 'Transform your home exterior with premium elevation tiles in Vadodara. Shop 3D stone, brick, and rustic wall tiles for a stunning facade.',
  keywords: ['elevation tiles vadodara', 'exterior wall tiles', '3d wall tiles vadodara'],
};

const ElevationTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#4e342e', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Elevation Wall Tiles</h1>
                    <p>Building character with every texture.</p>
                </div>
            </div>
            <Products filter="wall" />
            <Footer />
        </>
    );
};

export default ElevationTilesPage;
