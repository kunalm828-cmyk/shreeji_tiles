import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export const metadata = {
  title: 'Top Floor Tile Trends: Vitrified vs Marble Finish | Shreeji Tiles',
  description: 'Confused between vitrified tiles and marble? Read our expert comparison on durability, maintenance, and aesthetics for living room flooring in Vadodara.',
  keywords: ['floor tile trends 2026', 'vitrified vs marble floor', 'living room flooring ideas vadodara', 'premium vitrified tiles guide'],
};

const BlogPostPage = () => {
    return (
        <>
            <Navbar />
            <article className="blog-article section-padding">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h1 style={{ fontSize: '3rem', lineHeight: '1.2', marginBottom: '30px' }}>Top Floor Tile Trends: Vitrified vs Marble Finish</h1>
                    <p style={{ color: '#888', marginBottom: '40px' }}>Published on May 10, 2026 | By Shreeji Tiles Flooring Experts</p>
                    
                    <div style={{ height: '400px', background: 'url("/blog-floor.jpg") center/cover', borderRadius: '25px', marginBottom: '40px' }}></div>
                    
                    <div className="blog-content" style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#333' }}>
                        <p>When it comes to flooring, homeowners in Vadodara often find themselves choosing between the timeless appeal of marble and the modern durability of vitrified tiles.</p>
                        
                        <h2 style={{ marginTop: '40px' }}>Why Vitrified Tiles are Winning</h2>
                        <p>In modern architecture, **premium vitrified tiles** have become the preferred choice for bungalows and apartments alike. Unlike natural marble, which is porous and prone to staining, vitrified tiles are virtually non-porous. This makes them ideal for high-traffic areas like living rooms and kitchens.</p>
                        
                        <h2 style={{ marginTop: '40px' }}>Durability and Maintenance</h2>
                        <p>If you are looking for **scratch-resistant floor tiles**, vitrified options are superior. They require zero polishing over time, whereas marble needs periodic grinding to maintain its shine. This long-term cost advantage is a major factor for smart homeowners in Gujarat.</p>
                        
                        <h2 style={{ marginTop: '40px' }}>Aesthetic Versatility</h2>
                        <p>Today\'s **marble-finish vitrified tiles** are so realistic that they are hard to distinguish from the real thing. You can get the "Statuary Marble" or "Carrara" look without the high maintenance of actual natural stone.</p>
                        
                        <div style={{ background: '#333', color: 'white', padding: '40px', borderRadius: '20px', marginTop: '50px' }}>
                            <h3>Visit Our Experience Center</h3>
                            <p>See the difference for yourself. Our showroom features large-scale displays of **double charge vitrified tiles** and **GVT collections** from top brands like Somany and Kajaria.</p>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </>
    );
};

export default BlogPostPage;
