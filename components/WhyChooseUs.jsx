export default function WhyChooseUs() {
  const features = [
    { icon: "fa-gem", title: "Premium Quality", desc: "We source only the finest materials to ensure unmatched durability and aesthetics." },
    { icon: "fa-swatchbook", title: "Wide Variety", desc: "Thousands of designs across multiple formats and finishes to suit any style." },
    { icon: "fa-cubes", title: "Latest Technology", desc: "Products manufactured using cutting-edge digital printing and Nano technology." },
    { icon: "fa-handshake", title: "Expert Consultation", desc: "Our experienced team helps you choose the perfect products for your specific needs." },
    { icon: "fa-truck-fast", title: "Timely Delivery", desc: "Efficient logistics ensuring your project stays on schedule." },
    { icon: "fa-shield-halved", title: "Trusted Warranty", desc: "Complete peace of mind with excellent after-sales support." }
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-header center reveal">
          <h2>Why Choose Shreeji Tiles</h2>
          <p>Experience the perfect blend of quality, variety, and expert service.</p>
        </div>
        
        <div className="why-choose-us">
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card reveal" style={{ transitionDelay: `${(idx % 3) * 0.1}s` }}>
                <div className="icon-wrapper">
                  <i className={`fa-solid ${feature.icon}`}></i>
                </div>
                <div>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="feature-image reveal">
            <img src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?q=80&w=1000&auto=format&fit=crop" alt="Modern Interior" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
