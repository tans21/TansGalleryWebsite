/**
 * HEADER COMPONENT
 * 
 * This component displays the website header/navigation bar.
 * 
 * FEATURES:
 * - Logo with brand name and tagline
 * - Navigation links (Home, Products, Reviews, Cart)
 * - Shopping cart badge showing item count
 * - Sticky header (stays at top when scrolling)
 * 
 * CUSTOMIZATION:
 * - Change logo: Replace TansGalleryLogo.png in src/assets/ folder
 * - Update brand name: Change "TansGallery" text below
 * - Update tagline: Change "Beautiful Printed Cards" text below
 * - Add/remove navigation links: Add or remove <Link> elements in nav section
 * - Modify Header.css to change colors, fonts, spacing
 * 
 * LOGO SETUP:
 * - Place your logo image in src/assets/ folder
 * - Update the import path if using a different filename
 * - Recommended logo size: 90x90px (will be scaled)
 */

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/TansGalleryLogo.png';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="header">
      <div className="header-container">
        {/* LOGO SECTION - Clickable link to home page */}
        <Link to="/" className="logo">
          <img src={logo} alt="TansGallery Logo" className="logo-image" />
          <div className="logo-text">
            <h1>TansGallery</h1>  {/* CHANGE THIS TO YOUR BRAND NAME */}
            <span className="tagline">Beautiful Printed Cards</span>  {/* CHANGE THIS TO YOUR TAGLINE */}
          </div>
        </Link>
        
        {/* NAVIGATION MENU */}
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/reviews" className="nav-link">Reviews</Link>
          {/* Cart link with badge showing item count */}
          <Link to="/cart" className="nav-link cart-link">
            Cart
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Link>
          {/* Add more navigation links here if needed */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

