export default function Testimonials() {
  return (
    <section className="testimonials section-padding bg-light">
        <div className="container">
            <div className="section-header center reveal">
                <h2>What Our Customers Say</h2>
                <p>Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say about their experience with Shreeji Tiles.</p>
            </div>
            
            <div className="testimonials-grid">
                <div className="testimonial-card reveal">
                    <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="review-text">&quot;Excellent service and beautiful tile collection! The team helped us design our dream bathroom. Quality is outstanding and prices are very reasonable.&quot;</p>
                    <div className="reviewer-info">
                        <div>
                            <h4>Priya Sharma</h4>
                            <span className="location">Manjalpur</span>
                        </div>
                        <span className="project-type">Bathroom Renovation</span>
                    </div>
                </div>
                
                <div className="testimonial-card reveal">
                    <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="review-text">&quot;Shreeji Tiles made our kitchen renovation seamless. Their expertise in design consultation and quality of products exceeded our expectations.&quot;</p>
                    <div className="reviewer-info">
                        <div>
                            <h4>Rajesh Patel</h4>
                            <span className="location">Akota</span>
                        </div>
                        <span className="project-type">Kitchen Makeover</span>
                    </div>
                </div>

                <div className="testimonial-card reveal">
                    <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="review-text">&quot;Professional service from start to finish. The showroom has an amazing variety and the installation team was very skilled. Highly recommended!&quot;</p>
                    <div className="reviewer-info">
                        <div>
                            <h4>Meera Singh</h4>
                            <span className="location">Gotri</span>
                        </div>
                        <span className="project-type">Complete Home Tiling</span>
                    </div>
                </div>

                <div className="testimonial-card reveal">
                    <div className="quote-icon"><i className="fa-solid fa-quote-left"></i></div>
                    <div className="stars">
                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                    </div>
                    <p className="review-text">&quot;Best tile dealers in the city! Their collection of sanitaryware is impressive and the after-sales support is excellent. Will definitely return for future projects.&quot;</p>
                    <div className="reviewer-info">
                        <div>
                            <h4>Amit Kumar</h4>
                            <span className="location">Sama</span>
                        </div>
                        <span className="project-type">Bathroom & Kitchen</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
