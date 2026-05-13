import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Products from '../components/Products';

export const metadata = {
  title: 'Modern Kitchen Wall Tiles in Vadodara | Backsplash & Designer Series',
  description: 'Explore modern kitchen wall tiles and backsplash designs in Vadodara. Shreeji Tiles offers stain-resistant, glossy, and digital kitchen tiles at best prices. Visit us near Pratap Nagar.',
  keywords: ['kitchen tiles vadodara', 'kitchen wall tiles', 'kitchen backsplash tiles vadodara', 'stain resistant kitchen tiles', 'designer kitchen tiles'],
};

const KitchenTilesPage = () => {
    return (
        <main>
            <Navbar />
            <div className="category-header section-padding-top" style={{ background: '#fff9f9', paddingTop: '120px' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', color: '#1a1a1a', marginBottom: '20px' }}>
                        Modern Kitchen Tiles in Vadodara
                    </h1>
                    <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '800px', lineHeight: '1.6' }}>
                        Create your dream kitchen with our specialized collection of **kitchen wall tiles in Vadodara**. 
                        Shreeji Tiles offers a wide variety of **backsplash tiles** that are not only 
                        aesthetically beautiful but also highly **stain-resistant and easy to clean**. 
                        From classic white gloss to modern digital patterns, we have it all.
                    </p>
                </div>
            </div>
            
            <section className="category-products">
                <Products />
            </section>

            <section className="category-seo-text section-padding bg-light">
                <div className="container">
                    <h2>Best Backsplash & Wall Tiles for Vadodara Kitchens</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginTop: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Stain Resistant</h3>
                            <p>Kitchens are prone to oil and food splashes. Our **glossy kitchen wall tiles** are designed for 1-swipe cleaning, making maintenance effortless.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Heat Resistant</h3>
                            <p>All our **ceramic kitchen tiles** are tested for high-temperature resistance, ensuring they stay perfect even near cooking zones.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Custom Patterns</h3>
                            <p>Explore our **digital kitchen tile designs** featuring food motifs, geometric shapes, and mosaic patterns unique to our Vadodara showroom.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default KitchenTilesPage;
