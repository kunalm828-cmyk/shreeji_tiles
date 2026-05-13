import React from 'react';

const SEOContent = () => {
    return (
        <section className="seo-content section-padding bg-white" id="seo-expertise">
            <div className="container">
                <div className="section-header center reveal">
                    <h2>#1 Choice for Tiles in Vadodara</h2>
                    <p>Discover why Shreeji Tiles is the preferred destination for premium flooring and wall solutions in Gujarat.</p>
                </div>

                <div className="seo-grid">
                    <div className="seo-card reveal">
                        <div className="seo-icon">
                            <i className="fa-solid fa-award"></i>
                        </div>
                        <h3>Best Tiles Showroom in Vadodara</h3>
                        <p>
                            With over 25 years of experience, we pride ourselves on being the **top tile dealers in Vadodara**. 
                            Whether you're looking for **Kajaria tiles**, **Somany tiles**, or exclusive **Sinox collections**, 
                            our showroom near Pratap Nagar offers an unmatched variety.
                        </p>
                    </div>

                    <div className="seo-card reveal">
                        <div className="seo-icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <h3>Local SEO Showroom Near Me</h3>
                        <p>
                            Conveniently located near **Dabhoi Road** and **Pratap Nagar**, we serve homeowners and builders 
                            across Vadodara. If you're searching for a **tiles shop near me** with premium quality and 
                            competitive pricing, Shreeji Tiles is your one-stop destination.
                        </p>
                    </div>

                    <div className="seo-card reveal">
                        <div className="seo-icon">
                            <i className="fa-solid fa-gem"></i>
                        </div>
                        <h3>Luxury Tiles & Sanitaryware</h3>
                        <p>
                            From **anti-skid bathroom tiles** to **large format vitrified floor tiles**, we offer solutions 
                            that combine aesthetics with durability. Our collection includes **kitchen backsplash tiles**, 
                            **heavy-duty parking tiles**, and authentic **wooden finish planks**.
                        </p>
                    </div>
                </div>

                <div className="competitor-edge section-padding-top reveal">
                    <div className="edge-content">
                        <h3>Why Choose Shreeji Tiles Over Others?</h3>
                        <div className="edge-grid">
                            <div className="edge-item">
                                <strong>Exclusive Collection:</strong> While others offer generic designs, we stock the 
                                latest **designer tiles in Vadodara** that are unique to our showroom.
                            </div>
                            <div className="edge-item">
                                <strong>Expert Consultation:</strong> Our team helps you choose the **best bathroom tiles** 
                                based on your interior theme and budget.
                            </div>
                            <div className="edge-item">
                                <strong>Quality Assurance:</strong> Every tile in our **premium ceramic showroom** 
                                undergoes strict quality checks for scratch resistance and durability.
                            </div>
                            <div className="edge-item">
                                <strong>Complete Solution:</strong> Beyond tiles, we are a leading **sanitaryware and bath fittings 
                                shop in Vadodara**, offering brands like Jaquar and Kohler style fittings.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .seo-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, min-child(300px, 1fr));
                    gap: 30px;
                    margin-top: 50px;
                }
                .seo-card {
                    padding: 40px;
                    background: #f8faff;
                    border-radius: 20px;
                    transition: all 0.3s ease;
                    border: 1px solid #eef2ff;
                }
                .seo-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
                    background: #fff;
                    border-color: var(--primary-color);
                }
                .seo-icon {
                    font-size: 2.5rem;
                    color: var(--primary-color);
                    margin-bottom: 20px;
                }
                .seo-card h3 {
                    font-size: 1.5rem;
                    margin-bottom: 15px;
                    color: #1a1a1a;
                }
                .seo-card p {
                    color: #555;
                    line-height: 1.7;
                }
                .competitor-edge {
                    margin-top: 60px;
                    padding: 50px;
                    background: var(--primary-color);
                    color: white;
                    border-radius: 30px;
                }
                .edge-content h3 {
                    font-size: 2rem;
                    text-align: center;
                    margin-bottom: 40px;
                    color: white;
                }
                .edge-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 30px;
                }
                .edge-item {
                    background: rgba(255,255,255,0.1);
                    padding: 25px;
                    border-radius: 15px;
                    font-size: 1rem;
                    line-height: 1.6;
                    border: 1px solid rgba(255,255,255,0.2);
                }
                .edge-item strong {
                    display: block;
                    font-size: 1.2rem;
                    margin-bottom: 10px;
                    color: #ffd700;
                }
                @media (max-width: 768px) {
                    .seo-grid { grid-template-columns: 1fr; }
                    .competitor-edge { padding: 30px 20px; }
                }
            `}</style>
        </section>
    );
};

export default SEOContent;
