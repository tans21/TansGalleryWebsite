/**
 * PRODUCT DETAIL PAGE
 * 
 * This page displays detailed information about a single product.
 * 
 * FEATURES:
 * - Large product image with navigation arrows (left/right)
 * - Image thumbnails for multiple product images
 * - Full product description
 * - Price and stock status
 * - Add to cart button
 * - Product features list
 * - Back button to return to products page
 * 
 * HOW IT WORKS:
 * - Gets product ID from URL parameter (/products/:id)
 * - Finds product in products array from src/data/products.js
 * - Displays all product information
 * - Allows image navigation if multiple images exist
 * 
 * IMAGE NAVIGATION:
 * - If product has multiple images, left/right arrows appear
 * - Click arrows or thumbnails to switch between images
 * - Images wrap around (last to first, first to last)
 * 
 * CUSTOMIZATION:
 * - Modify ProductDetail.css to change layout and styling
 * - Update features list in the JSX below
 * - Change image navigation behavior
 * - Add more product information fields
 */

import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();  // Get product ID from URL
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);  // Track which image is currently displayed
  
  // Find the product with matching ID from products array
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-detail">
        <div className="container">
          <div className="not-found">
            <h2>Product not found</h2>
            <button onClick={() => navigate('/products')} className="back-button">
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Get images array, fallback to single image if images array doesn't exist
  // This ensures the page works even if a product only has a single image
  const productImages = product.images || [product.image];
  const selectedImage = productImages[selectedImageIndex] || product.image;

  // Navigate to previous image (wraps to last image if at first)
  const handlePreviousImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image (wraps to first image if at last)
  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === productImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="product-detail">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-button">
          ← Back
        </button>
        
        <div className="product-detail-content">
          <div className="product-image-section">
            <div className="image-container">
              <img src={selectedImage} alt={product.name} className="detail-image" />
              {productImages.length > 1 && (
                <>
                  <button 
                    className="image-nav-button image-nav-left"
                    onClick={handlePreviousImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button 
                    className="image-nav-button image-nav-right"
                    onClick={handleNextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>
            {productImages.length > 1 && (
              <div className="image-thumbnails">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImageIndex === index ? 'active' : ''}`}
                    onClick={() => setSelectedImageIndex(index)}
                  >
                    <img src={img} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="product-info-section">
            <span className="product-category-badge">{product.category}</span>
            <h1 className="product-title">{product.name}</h1>
            <p className="product-description-full">{product.description}</p>
            
            <div className="product-meta">
              <div className="price-section">
                <span className="price-label">Price</span>
                <span className="price-value">₹{product.price.toFixed(2)}</span>
              </div>
              
              <div className="stock-section">
                {product.inStock ? (
                  <span className="stock-status in-stock">✓ In Stock</span>
                ) : (
                  <span className="stock-status out-of-stock">✗ Out of Stock</span>
                )}
              </div>
            </div>

            <div className="product-actions">
              <button
                className="add-to-cart-button"
                onClick={handleAddToCart}
                disabled={!product.inStock}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>

            {/* PRODUCT FEATURES SECTION */}
            {/* Customize this list to match your product features */}
            <div className="product-features">
              <h3>Features</h3>
              <ul>
                <li>Premium quality printing</li>
                <li>Eco-friendly materials</li>
                <li>Fast shipping available</li>
                <li>Customizable options</li>
                {/* Add more features here as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

