export default function About() {
  return (
    <section className="about section-padding" id="about">
        <div className="container about-container">
            <div className="about-content reveal">
                <h2>Best Tiles Dealer in Vadodara</h2>
                <div className="divider"></div>
                <p>Since 2000, Shreeji Tiles has been the trusted destination for premium ceramic tiles Vadodara, sanitaryware, and bath fittings. As a leading floor tiles showroom Vadodara, we pride ourselves on offering an extensive collection that combines aesthetic excellence with functional durability.</p>
                <p>Our experienced team provides personalized consultation to help you transform your vision into reality. If you are looking for a tiles shop in Vadodara for a modern kitchen, luxurious bathroom, or elegant living space, we have the perfect solution for you.</p>
                
                <div className="about-features">
                    <div className="feature-item">
                        <div className="feature-icon"><i className="fa-solid fa-award"></i></div>
                        <div className="feature-text">
                            <h4>Premium Quality</h4>
                            <p>Curated collection of the finest tiles and sanitaryware from trusted manufacturers</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><i className="fa-solid fa-user-tie"></i></div>
                        <div className="feature-text">
                            <h4>Expert Consultation</h4>
                            <p>Professional design guidance to help you create the perfect space</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><i className="fa-regular fa-clock"></i></div>
                        <div className="feature-text">
                            <h4>25+ Years Experience</h4>
                            <p>Decades of expertise in tiles and interior solutions</p>
                        </div>
                    </div>
                    <div className="feature-item">
                        <div className="feature-icon"><i className="fa-solid fa-shield-halved"></i></div>
                        <div className="feature-text">
                            <h4>Quality Assurance</h4>
                            <p>Guaranteed quality with comprehensive after-sales support</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-image-wrapper reveal">
                <img src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&w=1000&auto=format&fit=crop" alt="Premium marble tiles in Vadodara showroom" className="about-img" loading="lazy" decoding="async" />
                <div className="stats-badge">
                    <h3>9000+</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    </section>
  );
}
