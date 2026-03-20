"use client";
import Link from 'next/link';

export default function Contact() {
  const handleSubmit = async (e) => {
      e.preventDefault();
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      try {
          submitBtn.textContent = 'Sending...';
          submitBtn.disabled = true;
          
          const formData = new FormData(form);
          const response = await fetch("https://formsubmit.co/ajax/kunalm828@gmail.com", {
              method: "POST",
              headers: {
                  'Accept': 'application/json'
              },
              body: formData
          });
          
          if (response.ok) {
              alert("Thank you! Your inquiry has been submitted successfully.");
              form.reset();
          } else {
              alert("Oops! There was a problem submitting your form. Please try again.");
          }
      } catch (error) {
          console.error("Form submission error:", error);
          alert("Oops! There was a problem submitting your form. Please try again.");
      } finally {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }
  };

  return (
    <section className="contact-section section-padding" id="contact">
        <div className="container">
            <div className="section-header center reveal">
                <h2>Contact & Inquiry</h2>
                <p>Ready to transform your space? Get in touch with our experts for personalized consultation and competitive quotes.</p>
            </div>
            
            <div className="contact-grid">
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
                                <p><a href="tel:+919898713167" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98987 13167</a></p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="icon-circle"><i className="fa-regular fa-envelope"></i></div>
                            <div>
                                <h5>Email</h5>
                                <p><a href="mailto:kunalm828@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>kunalm828@gmail.com</a></p>
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
                    
                    <Link href="https://wa.me/919898713167" className="btn-whatsapp reveal"><i className="fa-brands fa-whatsapp"></i> WhatsApp Inquiry</Link>
                    
                    <div className="map-container reveal">
                        <iframe 
                            title="Shreeji Tiles Location"
                            src="https://maps.google.com/maps?q=22.2823199,73.2174973&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                
                <div className="contact-form-block reveal">
                    <h3>Send us an Inquiry</h3>
                    <form onSubmit={handleSubmit} className="inquiry-form">
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" placeholder="Your full name" required />
                            </div>
                            <div className="form-group">
                                <label>Email Address *</label>
                                <input type="email" name="email" placeholder="your.email@example.com" required />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Address</label>
                                <input type="text" name="address" placeholder="Your Address" />
                            </div>
                            <div className="form-group">
                                <label>Mobile Number</label>
                                <input type="tel" name="phone" placeholder="Your Mobile Number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Project Type</label>
                            <select name="project_type">
                                <option>Select your project type</option>
                                <option>Bathroom Renovation</option>
                                <option>Kitchen Makeover</option>
                                <option>Flooring</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Message</label>
                            <textarea name="message" rows="4" placeholder="Tell us about your project requirements, preferred styles, budget, or any specific questions..."></textarea>
                        </div>
                        
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" className="btn-primary btn-full">Submit Inquiry</button>
                        <p className="form-note">We&apos;ll respond to your inquiry within 24 hours. For urgent queries, please call us directly.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
  );
}
