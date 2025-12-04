/**
 * FOOTER COMPONENT
 * 
 * This component displays the website footer with links, contact info, and social media.
 * 
 * SECTIONS:
 * - Logo/Brand section
 * - Quick Links (navigation)
 * - Contact Information
 * - Social Media Links
 * - Copyright notice
 * 
 * CUSTOMIZATION:
 * - Update email: Change 'tanuchauhan212002@gmail.com' below
 * - Update social media links: Replace Facebook and Instagram URLs
 * - Add/remove links: Modify the Quick Links section
 * - Update copyright: Change year and company name in footer-bottom
 * - Add phone number: Add another <p> tag in Contact section
 * - Modify Footer.css to change colors, layout, spacing
 * 
 * SOCIAL MEDIA:
 * - Add more social links by copying the <a> tag structure
 * - Update href with your social media URLs
 * - Keep target="_blank" and rel="noopener noreferrer" for security
 */

import logo from '../assets/TansGalleryLogo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* BRAND/LOGO SECTION */}
        <div className="footer-section footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="TansGallery Logo" className="footer-logo-image" />
          </div>
        </div>
        
        {/* QUICK LINKS SECTION */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/reviews">Reviews</a></li>
            <li><a href="/cart">Cart</a></li>
            {/* Add more navigation links here if needed */}
          </ul>
        </div>
        
        {/* CONTACT INFORMATION SECTION */}
        <div className="footer-section">
          <h4>Contact</h4>
          <div className="contact-info">
            {/* UPDATE EMAIL ADDRESS HERE */}
            <p><span className="contact-label">Email:</span> <a href="mailto:tanuchauhan212002@gmail.com">tanuchauhan212002@gmail.com</a></p>
            {/* Add phone number here if needed:
            <p><span className="contact-label">Phone:</span> <a href="tel:+1234567890">(123) 456-7890</a></p>
            */}
          </div>
        </div>
        
        {/* SOCIAL MEDIA LINKS SECTION */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            {/* UPDATE SOCIAL MEDIA URLs HERE */}
            <a href="https://www.facebook.com/profile.php?id=61584528864184" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">Facebook</a>
            <a href="https://www.instagram.com/tansgallery07?igsh=NXRncXV0MTBiN3pm&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">Instagram</a>
            {/* Add more social media links here:
            <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">Twitter</a>
            */}
          </div>
        </div>
      </div>
      
      {/* COPYRIGHT SECTION */}
      <div className="footer-bottom">
        {/* UPDATE COPYRIGHT YEAR AND COMPANY NAME */}
        <p>&copy; 2024 TansGallery. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

