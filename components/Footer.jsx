"use client";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const handleScrollTop = (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };

  const handleSubscribe = async (e) => {
      e.preventDefault();
      const form = e.target;
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      try {
          submitBtn.textContent = 'Wait...';
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
              alert("Thank you for subscribing!");
              form.reset();
          } else {
              alert("Oops! There was a problem. Please try again.");
          }
      } catch (error) {
          alert("Oops! There was a problem. Please try again.");
      } finally {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
      }
  };

  return (
    <footer className="footer">
        <div className="container relative-footer">
            <div className="footer-grid reveal">
                <div className="footer-col brand-col">
                    <h3 className="footer-logo">Shreeji Tiles</h3>
                    <p className="footer-desc">Your trusted partner for premium tiles, sanitaryware, and bath fittings. Crafting elegant spaces for over 25 years.</p>
                    <div className="social-links"> 
                        <Link href="https://www.facebook.com/shreeji.tiles.3?mibextid=wwXIfr&rdid=BrIWvDZIbuv9mV0D&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1B93TPJcHq%2F%3Fmibextid%3DwwXIfr%26ref%3D1"><i className="fa-brands fa-facebook-f"></i></Link>
                        <Link href="https://www.instagram.com/shreeji_tiles?igsh=c296cnVlamltYTBl"><i className="fa-brands fa-instagram"></i></Link>
                    </div>
                </div>
                
                <div className="footer-col">
                    <h4>Quick Links</h4>
                    <ul className="footer-links">
                        <li><Link href="#home">Home</Link></li>
                        <li><Link href="#about">About Us</Link></li>
                        <li><Link href="#products">Products</Link></li>
                        <li><Link href="#gallery">Gallery</Link></li>
                        <li><Link href="#services">Services</Link></li>
                        <li><Link href="#contact">Get Quote</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </div>
                
                <div className="footer-col contact-col">
                    <h4>Contact Info</h4>
                    <ul>
                        <li><i className="fa-solid fa-location-dot"></i> <span>Shed No. 10 Anand Estate, Opp. Yamuna Mill, B/H Samruddhi Complex,<br/>Dabhoi Pratapnagar Road, Vadodara,<br/>Gujarat 390004</span></li>
                        <li><i className="fa-solid fa-phone"></i> <span><a href="tel:+919898713167" style={{ color: 'inherit', textDecoration: 'none' }}>+91 98987 13167</a></span></li>
                        <li><i className="fa-regular fa-envelope"></i> <span><a href="mailto:kunalm828@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>kunalm828@gmail.com</a></span></li>
                        <li><i className="fa-regular fa-clock"></i> <span>10 AM - 8 PM (Mon-Sat)<br/>11 AM - 1 PM on Sundays</span></li>
                    </ul>
                </div>
                
                <div className="footer-col subscribe-col">
                    <h4>Stay Updated</h4>
                    <p className="footer-desc">Get updates on new arrivals & trends</p>
                    <form onSubmit={handleSubscribe} className="subscribe-form">
                        <input type="email" name="email" placeholder="Your email address" required />
                        <input type="hidden" name="_captcha" value="false" />
                        <button type="submit" className="btn-white">Subscribe</button>
                    </form>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p>&copy; 2026 Shreeji Tiles. All rights reserved.</p>
                <p><Link href="https://www.tejaskpaisoftware.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>Designed by <Image src="/utility/tejaskp_logo_nobg.png" alt="Tejaskp AI Software Logo" width={100} height={24} style={{ height: '24px', width: 'auto' }} /> Tejaskp AI Software</Link></p>
                <a href="#" className="back-to-top" onClick={handleScrollTop}><i className="fa-solid fa-arrow-up"></i> Back to Top</a>
            </div>
        </div>
        <div className="footer-bg-lines"></div>
    </footer>
  );
}
