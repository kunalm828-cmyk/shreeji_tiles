import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Italian Tiles in Vadodara | Designer Marble & Slab Collection',
  description: 'Experience the elegance of Italy with our premium Italian tiles in Vadodara. Shop large slabs, marble finishes, and designer collections for luxury villas.',
  keywords: ['italian tiles vadodara', 'italian marble tiles', 'luxury italian design'],
};

const ItalianTilesPage = () => {
    return (
        <>
            <Navbar />
            <div className="category-hero" style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/italian-hero.jpg") center/cover', padding: '120px 0', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem' }}>Italian Designer Tiles</h1>
                    <p>Sophistication. Elegance. Perfection.</p>
                </div>
            </div>
            <Products filter="luxury" />
            <Footer />
        </>
    );
};

export default ItalianTilesPage;
