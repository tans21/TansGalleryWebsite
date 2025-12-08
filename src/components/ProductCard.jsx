/**
 * PRODUCT CARD COMPONENT
 * 
 * This component displays a single product card on the Products page and Home page.
 * 
 * PROPS:
 * - product: Object containing product data (id, name, description, price, image, images, category, inStock)
 * 
 * FEATURES:
 * - Displays product image, name, description, price, and stock status
 * - Category badge with color-coded styling
 * - "Add to Cart" button
 * - Clickable card that navigates to product detail page
 * 
 * CATEGORY COLORS:
 * Each category automatically gets a colored badge. To add a new category:
 * 1. Add the category name to the colorMap below
 * 2. Add corresponding CSS class in ProductCard.css
 * 3. Add color variable in index.css (optional, for consistency)
 * 
 * CUSTOMIZATION:
 * - Modify ProductCard.css to change card appearance
 * - Update getCategoryColor function to add new categories
 * - Change button text or behavior in handleAddToCart
 */

import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Handle adding product to cart (prevents navigation when clicking button)
  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  /**
   * Maps product categories to CSS classes for color-coded badges
   * 
   * TO ADD A NEW CATEGORY:
   * 1. Add entry here: 'Your Category': 'category-yourcategory'
   * 2. Add CSS class in ProductCard.css: .category-yourcategory { background: your-gradient; }
   * 3. Use the exact category name in products.js file
   */
  const getCategoryColor = (category) => {
    const colorMap = {
      'Wedding': 'category-wedding',
      'Birthday': 'category-birthday',
      'Business': 'category-business',
      'Thank You': 'category-thankyou',
      'Holiday': 'category-holiday',
      'Anniversary': 'category-anniversary',
      'Graduation': 'category-graduation',
      'Baby Shower': 'category-babyshower',
      'Christmas': 'category-christmas'
    };
    return colorMap[category] || 'category-default';
  };

  return (
    <div className="product-card">
      <Link to={`/products/${product.id}`} className="product-link">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-overlay">
            <span className={`product-category ${getCategoryColor(product.category)}`}>{product.category}</span>
          </div>
        </div>
        <div className="product-info">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-footer">
            <span className="product-price">₹{product.price.toFixed(2)}</span>
            {product.inStock ? (
              <span className="stock-badge in-stock">In Stock</span>
            ) : (
              <span className="stock-badge out-of-stock">Out of Stock</span>
            )}
          </div>
        </div>
      </Link>
      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};

export default ProductCard;


