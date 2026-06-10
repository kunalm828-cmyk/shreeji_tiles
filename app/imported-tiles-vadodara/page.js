import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Imported Tiles in Vadodara | Exclusive Global Collections',
  description: 'Discover world-class imported tiles in Vadodara. Featuring exclusive designs from Europe and around the globe for premium interior projects.',
  keywords: ['imported tiles vadodara', 'luxury global tiles', 'premium imported ceramic'],
};

const ImportedTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: '#1a1a1a', padding: '100px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Imported Tile Collection</h1>
                    <p>Global designs, delivered to your doorstep.</p>
                </div>
            </div>
            <Products filter="luxury" />
            <Footer />
        </>
    );
};

export default ImportedTilesPage;
