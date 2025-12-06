/**
 * HOME PAGE
 * 
 * This is the main landing page of your website.
 * 
 * SECTIONS:
 * 1. Hero Section - Large banner with title, subtitle, and CTA button
 * 2. Featured Products - Shows first 6 products from your products array
 * 3. Features Section - Highlights key features/benefits of your products
 * 
 * CUSTOMIZATION:
 * 
 * HERO SECTION:
 * - Update hero title: Change "Beautiful Printed Cards for Every Occasion"
 * - Update hero subtitle: Change the description text
 * - Update CTA button text: Change "Shop Now"
 * - Modify Home.css to change hero colors, fonts, background
 * 
 * FEATURED PRODUCTS:
 * - Change number of featured products: Modify .slice(0, 6) - change 6 to desired number
 * - Show specific products: Instead of slice, filter by category or ID
 * - Example: const featuredProducts = products.filter(p => p.category === 'Wedding');
 * 
 * FEATURES SECTION:
 * - Add/remove features: Add or remove <div className="feature"> blocks
 * - Change icons: Replace emoji icons (🎨, 🚀, etc.) with your own
 * - Update feature titles and descriptions
 * - Modify Home.css for feature card colors and styling
 */

import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ButterflyMagic from '../components/ButterflyMagic';
import { products } from '../data/products';
import './Home.css';

const Home = () => {
  // Get first 6 products to display as featured products
  // Change the number (6) to show more or fewer featured products
  // Or filter by category: products.filter(p => p.category === 'Wedding')
  const featuredProducts = products.slice(0, 6);

  return (
    <div className="home">
      {/* HERO SECTION - Main banner at top of page */}
      <section className="hero">
        <div className="hero-content">
          {/* UPDATE HERO TITLE */}
          <h1 className="hero-title">
            <ButterflyMagic>
              Beautiful Printed Cards for Every Occasion
            </ButterflyMagic>
          </h1>
          {/* UPDATE HERO SUBTITLE */}
          <p className="hero-subtitle">
            Discover our collection of premium printed cards. From weddings to birthdays,
            we have the perfect card for your special moments.
          </p>
          {/* UPDATE CTA BUTTON TEXT */}
          <Link to="/products" className="cta-button">
            Shop Now
          </Link>
        </div>
      </section>

      {/* FEATURED PRODUCTS SECTION */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {/* Display featured products using ProductCard component */}
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="view-all">
            <Link to="/products" className="view-all-button">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES/BENEFITS SECTION */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            {/* FEATURE 1 - Customize icon, title, and description */}
            <div className="feature">
              <div className="feature-icon">🎨</div>  {/* Change emoji or use image */}
              <h3>Premium Quality</h3>  {/* Update title */}
              <p>High-quality printing and materials for lasting impressions</p>  {/* Update description */}
            </div>
            
            {/* FEATURE 2 */}
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3>Fast Shipping</h3>
              <p>Quick delivery to get your cards when you need them</p>
            </div>
            
            {/* FEATURE 3 */}
            <div className="feature">
              <div className="feature-icon">💝</div>
              <h3>Customizable</h3>
              <p>Personalize your cards to match your style</p>
            </div>
            
            {/* FEATURE 4 */}
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h3>Eco-Friendly</h3>
              <p>Sustainable materials for environmentally conscious choices</p>
            </div>
            
            {/* ADD MORE FEATURES HERE:
            <div className="feature">
              <div className="feature-icon">🛍️</div>
              <h3>Your Feature Title</h3>
              <p>Your feature description</p>
            </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

