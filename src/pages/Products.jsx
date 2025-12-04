/**
 * PRODUCTS PAGE
 * 
 * This page displays all products with category filtering.
 * 
 * FEATURES:
 * - Shows all products in a grid layout
 * - Category filter buttons at the top
 * - Automatically generates filter buttons based on product categories
 * - Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
 * 
 * HOW IT WORKS:
 * - Reads products from src/data/products.js
 * - Automatically extracts unique categories from products
 * - Filters products based on selected category
 * - Displays products using ProductCard component
 * 
 * CUSTOMIZATION:
 * - Modify Products.css to change layout and styling
 * - Change grid columns in Products.css (.products-grid)
 * - Add search functionality by adding a search input and filter
 * - Add sorting options (price, name, etc.)
 */

import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import './Products.css';

const Products = () => {
  // State to track selected category filter
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Extract unique categories from products and add 'All' option
  // Categories are automatically generated from your products data
  const categories = ['All', ...new Set(products.map(p => p.category))];
  
  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'All'
    ? products  // Show all products
    : products.filter(p => p.category === selectedCategory);  // Show only selected category

  return (
    <div className="products-page">
      <div className="container">
        <h1 className="page-title">Our Products</h1>
        
        <div className="category-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="no-products">
            <p>No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;


