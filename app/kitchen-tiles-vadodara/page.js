import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Products from '../../components/Products';

export const metadata = {
  title: 'Modern Kitchen Wall Tiles in Vadodara | Backsplash & Designer Series',
  description: 'Explore modern kitchen wall tiles and backsplash designs in Vadodara. Shreeji Tiles offers stain-resistant, glossy, and digital kitchen tiles at best prices. Visit us near Pratap Nagar.',
  keywords: [
    'kitchen tiles vadodara', 'kitchen wall tiles', 'kitchen backsplash tiles vadodara', 
    'stain resistant kitchen tiles', 'designer kitchen tiles', 'glossy kitchen tiles',
    'kitchen ceramic tiles', 'modular kitchen tiles vadodara', 'premium kitchen tiles',
    'designer kitchen wall tiles', 'modern kitchen tiles vadodara'
  ],
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
                    <h2>Modern Kitchen Inspirations: Which tiles are best for home?</h2>
                    <p style={{ marginBottom: '40px', color: '#555' }}>
                        If you are searching for **who sells modern kitchen tiles near me**, Shreeji Tiles has the **latest tiles design** for **modular kitchen tiles in Vadodara**. 
                        Our **kitchen backsplash tiles** are both functional and decorative.
                    </p>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <div className="seo-text-block">
                            <h3>Designer Kitchen Wall Tiles</h3>
                            <p>Transform your cooking space with **designer kitchen wall tiles** and **mosaic patterns**. We offer **glossy kitchen tiles** that are easy to maintain and 100% stain-proof.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>High Gloss & Digital</h3>
                            <p>Our **digital ceramic tiles** for kitchens offer vibrant colors and patterns that don't fade. Visit our **kitchen tiles showroom** near Dabhoi Road to see the collection.</p>
                        </div>
                        <div className="seo-text-block">
                            <h3>Home Renovation Solutions</h3>
                            <p>As a leading **home renovation tiles shop**, we help you match your kitchen tiles with your overall interior theme, from minimalist to **luxury interiors**.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
};

export default KitchenTilesPage;
