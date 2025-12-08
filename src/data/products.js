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
 * - "Christmas" - Red/Green gradient
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
 *     ],
 *     category: "Thank You",  // Must match one of the available categories
 *     inStock: true
 *   }
 * ];
 */

// Sample product data for printed cards
export const products = [
  {
    id: 1,
    name: "Wedding Congratulations Card 0A",
    description: "Beautifully designed wedding congratulations card with elegant typography and premium finish. Perfect for your special day.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/wedding0a/1.png",
    images: [
      "/images/products/wedding0a/1.png",
      "/images/products/wedding0a/2.png",
      "/images/products/wedding0a/3.png"
    ],
    category: "Wedding",
    inStock: true
  },
  {
    id: 2,
    name: "Birthday Celebration Card 0B",
    description: "Colorful and fun birthday card with modern design. Great for celebrating special birthdays.\n\nSize: 14.8 X 10.5cm",
    price: 199,
    image: "/images/products/birthday0b/1.png",
    images: [
      "/images/products/birthday0b/1.png",
      "/images/products/birthday0b/2.png",
      "/images/products/birthday0b/3.png"
    ],
    category: "Birthday",
    inStock: true
  },
  {
    id: 4,
    name: "Thank You Card 0A",
    description: "Handcrafted to make every “thank you” feel special.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/thankyou0a/1.png",
    images: [
      "/images/products/thankyou0a/1.png",
      "/images/products/thankyou0a/2.png",
      "/images/products/thankyou0a/3.png"
    ],
    category: "Thank You",
    inStock: true
  },
  {
    id: 7,
    name: "Graduation Card 0A",
    description: "Celebrate achievements with this stylish graduation card. Perfect for congratulating graduates.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/graduation0a/1.png",
    images: [
      "/images/products/graduation0a/1.png",
      "/images/products/graduation0a/2.png",
      "/images/products/graduation0a/3.png"
    ],
    category: "Graduation",
    inStock: true
  },
  {
    id: 9,
    name: "Merry Christmas Card",
    description: "Spread the joy of the season with this festive Christmas card featuring classic holiday designs.\n\nSet of two cards.\n\nSize: 14.8 X 10.5cm",
    price: 299,
    image: "/images/products/christmas/1.png",
    images: [
      "/images/products/christmas/1.png",
      "/images/products/christmas/2.png",
      "/images/products/christmas/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 10,
    name: "Merry Christmas Card (SnowMan)",
    description: "A beautifully crafted holiday card to share warm wishes. Perfect for family and friends.\n\nSet of two cards.\n\nSize: 14.8 X 10.5cm",
    price: 299,
    image: "/images/products/christmas2/1.png",
    images: [
      "/images/products/christmas2/1.png",
      "/images/products/christmas2/2.png",
      "/images/products/christmas2/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 11,
    name: "Merry Christmas Card (Santa)",
    description: "Celebrate the magic of Christmas with this delightful Santa-themed card. Sure to bring smiles to everyone!\n\nSize: 14.8 X 10.5cm",
    price: 199,
    image: "/images/products/christmas3/1.png",
    images: [
      "/images/products/christmas3/1.png",
      "/images/products/christmas3/2.png",
      "/images/products/christmas3/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 12,
    name: "Merry Christmas Card 0A",
    description: "Spread festive cheer with this unique Christmas card design. A perfect way to send your season's greetings.\n\nSet of two cards.\n\nSize: 14.8 X 10.5cm",
    price: 299,
    image: "/images/products/christmas4/1.png",
    images: [
      "/images/products/christmas4/1.png",
      "/images/products/christmas4/2.png",
      "/images/products/christmas4/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 13,
    name: "Merry Christmas Card 0B",
    description: "Make your holiday greetings special with this beautifully detailed Christmas card.\n\nSet of two cards.\n\nSize: 14.8 X 10.5cm",
    price: 299,
    image: "/images/products/christmas5/1.png",
    images: [
      "/images/products/christmas5/1.png",
      "/images/products/christmas5/2.png",
      "/images/products/christmas5/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 14,
    name: "Merry Christmas Card 0C",
    description: "A classic and elegant Christmas card design to convey your warmest holiday wishes.\n\nSet of two cards.\n\nSize: 14.8 X 10.5cm",
    price: 299,
    image: "/images/products/christmas6/1.png",
    images: [
      "/images/products/christmas6/1.png",
      "/images/products/christmas6/2.png",
      "/images/products/christmas6/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 15,
    name: "Birthday Celebration Card 0A",
    description: "Make birthdays extra special with this vibrant and cheerful birthday card.\n\nSize: 14.8 X 10.5cm",
    price: 199,
    image: "/images/products/birthday1/1.png",
    images: [
      "/images/products/birthday1/1.png",
      "/images/products/birthday1/2.png",
      "/images/products/birthday1/3.png"
    ],
    category: "Birthday",
    inStock: true
  },
  {
    id: 16,
    name: "Merry Christmas Card 0D",
    description: "Spread festive cheer with this unique Christmas card design. A perfect way to send your season's greetings.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/christmas7/1.png",
    images: [
      "/images/products/christmas7/1.png",
      "/images/products/christmas7/2.png",
      "/images/products/christmas7/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 17,
    name: "Merry Christmas Card 0E",
    description: "Spread festive cheer with this unique Christmas card design. A perfect way to send your season's greetings.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/christmas9/1.png",
    images: [
      "/images/products/christmas9/1.png",
      "/images/products/christmas9/2.png",
      "/images/products/christmas9/3.png"
    ],
    category: "Christmas",
    inStock: true
  },
  {
    id: 18,
    name: "Birthday Celebration Card 0C",
    description: "Celebrate another year of joy with this lovely birthday card.\n\nSize: 21 X 14.8cm (A5)",
    price: 349,
    image: "/images/products/birthday0c/1.png",
    images: [
      "/images/products/birthday0c/1.png",
      "/images/products/birthday0c/2.png",
      "/images/products/birthday0c/3.png"
    ],
    category: "Birthday",
    inStock: true
  }
];
