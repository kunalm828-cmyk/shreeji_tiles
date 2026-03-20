export default function ContactForm() {
  return (
    <section className="contact-section section-padding">
      <div className="container">
        <div className="section-header center reveal">
          <h2>Contact & Inquiry</h2>
          <p>Ready to transform your space? Get in touch with our experts for personalized consultation and competitive quotes.</p>
        </div>
        
        <div className="contact-grid">
          {/* Left: Info & Map */}
          <div className="contact-info-block reveal">
            <h3>Visit Our Showroom</h3>
            
            <div className="info-list">
              <div className="info-item">
                <div className="icon-circle"><i className="fa-solid fa-location-dot"></i></div>
                <div>
                  <h5>Address</h5>
                  <p>B/H, Samruddhi Complex, Shed No. 10 Anand Estate, Dabhoi, Pratap Nagar Rd, opp. Yamuna Mill Road, Vadodara, Gujarat 390004</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-circle"><i className="fa-solid fa-phone"></i></div>
                <div>
                  <h5>Phone</h5>
                  <p>+91 98987 13167</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-circle"><i className="fa-regular fa-envelope"></i></div>
                <div>
                  <h5>Email</h5>
                  <p>info.shreeji.tiles@gmail.com</p>
                </div>
              </div>
              <div className="info-item">
                <div className="icon-circle"><i className="fa-regular fa-clock"></i></div>
                <div>
                  <h5>Store Hours</h5>
                  <p>10 AM - 8 PM (Monday - Saturday)<br/>11 AM - 1 PM on Sundays</p>
                </div>
              </div>
            </div>
            
            <a href="https://wa.me/919898713167" className="btn-whatsapp reveal"><i className="fa-brands fa-whatsapp"></i> WhatsApp Inquiry</a>
            
            <div className="map-container reveal">
              <iframe 
                title="Shreeji Tiles Location"
                src="https://maps.google.com/maps?q=B/H,%20Samruddhi%20Complex,%20Shed%20No.%2010%20Anand%20Estate,%20Dabhoi,%20Pratap%20Nagar%20Rd,%20opp.%20Yamuna%20Mill%20Road,%20Vadodara,%20Gujarat%20390004&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          
          {/* Right: Form */}
          <div className="contact-form-block reveal">
            <h3>Send us an Inquiry</h3>
            <form action="#" className="inquiry-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your full name" required />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Address</label>
                  <input type="text" placeholder="Your Address" />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input type="tel" placeholder="Your Mobile Number" />
                </div>
              </div>
              <div className="form-group">
                <label>Project Type</label>
                <select>
                  <option>Select your project type</option>
                  <option>Bathroom Renovation</option>
                  <option>Kitchen Makeover</option>
                  <option>Flooring</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Tell us about your project requirements, preferred styles, budget, or any specific questions..."></textarea>
              </div>
              
              <button type="submit" className="btn-primary btn-full">Submit Inquiry</button>
              <p className="form-note">We'll respond to your inquiry within 24 hours. For urgent queries, please call us directly.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
