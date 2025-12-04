/**
 * PRODUCT DATA FILE
 * 
 * This file contains all your product information.
 * To add your own products, simply add new objects to the products array below.
 * 
 * REQUIRED FIELDS FOR EACH PRODUCT:
 * - id: Unique number identifier (must be unique for each product)
 * - name: Product name/title (displayed on product cards and detail pages)
 * - description: Product description (shown on product cards and detail pages)
 * - price: Product price in decimal format (e.g., 24.99)
 * - image: Main product image URL (displayed on product cards)
 * - images: Array of image URLs (for product detail page gallery - at least 1 image required)
 * - category: Product category (must match one of the categories defined in ProductCard.jsx)
 * - inStock: Boolean (true/false) - determines if product is available for purchase
 * 
 * Product Object Structure:
 * {
 *   id: number,                    // Unique identifier (required)
 *   name: string,                  // Product name (required)
 *   description: string,            // Product description (required)
 *   price: number,                  // Price in decimal format (required)
 *   image: string,                  // Main image URL (required)
 *   images: string[],               // Array of image URLs, minimum 1 (required)
 *   category: string,               // Category name (required, must match available categories)
 *   inStock: boolean                // Stock availability (required)
 * }
 * 
 * AVAILABLE CATEGORIES (for automatic color coding):
 * - "Wedding" - Pink/Rose gradient
 * - "Birthday" - Yellow/Orange gradient
 * - "Business" - Blue/Indigo gradient
 * - "Thank You" - Green/Teal gradient
 * - "Holiday" - Coral/Orange gradient
 * - "Anniversary" - Pink/Purple gradient
 * - "Graduation" - Indigo/Blue gradient
 * - "Baby Shower" - Yellow/Pink gradient
 * 
 * IMAGE TIPS:
 * - Use high-quality images (recommended: 400x400px or larger)
 * - You can use local images: Place images in /public/images/ folder and reference as "/images/your-image.jpg"
 * - Or use external URLs (like Unsplash, your own hosting, etc.)
 * - For multiple images, add URLs to the images array (minimum 1, recommended 2-4)
 * - The first image in the images array should match the main 'image' field
 * - All images should be the same product from different angles or variations
 * 
 * Quick Reference - Image Paths:
 * - Local: "/images/products/product-name.jpg"
 * - External: "https://example.com/image.jpg"
 * - Unsplash: "https://images.unsplash.com/photo-1234567890?w=400&h=400&fit=crop"
 * 
 * Sample Product Card Code Examples:
 * 
 * // Example 1: Basic product with local images
 * {
 *   id: 9,
 *   name: "Custom Wedding Invitation",
 *   description: "Elegant wedding invitation with premium paper quality and gold foil accents.",
 *   price: 29.99,
 *   image: "/images/products/wedding-invitation-main.jpg",
 *   images: [
 *     "/images/products/wedding-invitation-main.jpg",
 *     "/images/products/wedding-invitation-2.jpg",
 *     "/images/products/wedding-invitation-3.jpg"
 *   ],
 *   category: "Wedding",
 *   inStock: true
 * }
 * 
 * // Example 2: Product with external image URLs
 * {
 *   id: 10,
 *   name: "Birthday Party Invitation",
 *   description: "Colorful and fun birthday invitation perfect for kids' parties.",
 *   price: 15.99,
 *   image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
 *   images: [
 *     "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
 *     "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
 *   ],
 *   category: "Birthday",
 *   inStock: true
 * }
 * 
 * // Example 3: Product with single image (minimum requirement)
 * {
 *   id: 11,
 *   name: "Business Card Premium",
 *   description: "Professional business card with matte finish and rounded corners.",
 *   price: 19.99,
 *   image: "/images/products/business-card.jpg",
 *   images: [
 *     "/images/products/business-card.jpg"
 *   ],
 *   category: "Business",
 *   inStock: true
 * }
 * 
 * // Example 4: Out of stock product
 * {
 *   id: 12,
 *   name: "Limited Edition Holiday Card",
 *   description: "Special holiday card with glitter accents. Limited availability.",
 *   price: 24.99,
 *   image: "/images/products/holiday-card.jpg",
 *   images: [
 *     "/images/products/holiday-card.jpg",
 *     "/images/products/holiday-card-2.jpg"
 *   ],
 *   category: "Holiday",
 *   inStock: false  // Product is out of stock
 * }
 * 
 * // Example 5: Product with multiple images (recommended)
 * {
 *   id: 13,
 *   name: "Anniversary Card Set",
 *   description: "Set of 5 romantic anniversary cards with elegant designs.",
 *   price: 34.99,
 *   image: "/images/products/anniversary-set-main.jpg",
 *   images: [
 *     "/images/products/anniversary-set-main.jpg",
 *     "/images/products/anniversary-set-2.jpg",
 *     "/images/products/anniversary-set-3.jpg",
 *     "/images/products/anniversary-set-4.jpg"
 *   ],
 *   category: "Anniversary",
 *   inStock: true
 * }
 * 
 * // Example 6: Adding to the products array
 * export const products = [
 *   // ... existing products ...
 *   {
 *     id: 14,
 *     name: "New Product Name",
 *     description: "Your detailed product description here.",
 *     price: 22.99,
 *     image: "/images/products/new-product.jpg",
 *     images: [
 *       "/images/products/new-product.jpg",
 *       "/images/products/new-product-2.jpg"
 *   ],
 *     category: "Thank You",  // Must match one of the available categories
 *     inStock: true
 *   }
 * ];
 */

// Sample product data for printed cards
export const products = [
  {
    id: 1,
    name: "Elegant Wedding Invitation",
    description: "Beautifully designed wedding invitation card with elegant typography and premium finish. Perfect for your special day.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=400&fit=crop"
    ],
    category: "Wedding",
    inStock: true
  },
  {
    id: 2,
    name: "Birthday Celebration Card",
    description: "Colorful and fun birthday card with modern design. Great for celebrating special birthdays.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop"
    ],
    category: "Birthday",
    inStock: true
  },
  {
    id: 3,
    name: "Business Card Premium",
    description: "Professional business card with matte finish. Make a lasting impression with premium quality.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop"
    ],
    category: "Business",
    inStock: true
  },
  {
    id: 4,
    name: "Thank You Card Set",
    description: "Set of 10 beautifully designed thank you cards. Perfect for expressing gratitude.",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
    ],
    category: "Thank You",
    inStock: true
  },
  {
    id: 5,
    name: "Holiday Greeting Card",
    description: "Festive holiday card with warm colors and seasonal designs. Spread joy this holiday season.",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
    ],
    category: "Holiday",
    inStock: true
  },
  {
    id: 6,
    name: "Anniversary Card Deluxe",
    description: "Romantic anniversary card with elegant design. Celebrate your love story beautifully.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?w=400&h=400&fit=crop"
    ],
    category: "Anniversary",
    inStock: true
  },
  {
    id: 7,
    name: "Graduation Card",
    description: "Celebrate achievements with this stylish graduation card. Perfect for congratulating graduates.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
    ],
    category: "Graduation",
    inStock: true
  },
  {
    id: 8,
    name: "Baby Shower Invitation",
    description: "Adorable baby shower invitation with cute designs. Welcome the new arrival in style.",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&h=400&fit=crop"
    ],
    category: "Baby Shower",
    inStock: true
  }
];

