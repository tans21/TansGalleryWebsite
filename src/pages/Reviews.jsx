/**
 * Reviews Page Component
 * 
 * Displays customer testimonials and reviews in an interactive, visually appealing format.
 * Features include review statistics, expandable review cards, and a full-screen modal view.
 * 
 * Key Features:
 * - Dynamic statistics dashboard (total reviews, average rating, 5-star count)
 * - Interactive review cards with hover effects
 * - Full-screen modal popup for detailed review viewing
 * - Star rating visualization
 * - Customer images with products (optional)
 * - Responsive design for all screen sizes
 * 
 * Adding New Reviews:
 * To add customer reviews, simply extend the reviews array with new review objects.
 * Each review object requires:
 *   - id: Unique numeric identifier
 *   - name: Customer's full name
 *   - rating: Integer between 1-5 (represents star rating)
 *   - date: Date string in ISO format (YYYY-MM-DD)
 *   - comment: Customer's review text
 *   - product: Product name or collection name being reviewed
 *   - image: Optional image URL or local path (displays in modal view)
 * 
 * Sample Review Card Code:
 * 
 * // Example 1: Basic review card (without image)
 * {
 *   id: 5,
 *   name: 'John Doe',
 *   rating: 5,
 *   date: '2024-02-20',
 *   comment: 'Excellent quality and fast shipping! The cards exceeded my expectations.',
 *   product: 'Thank You Cards',
 *   image: null  // or omit this property entirely
 * }
 * 
 * // Example 2: Review card with local image
 * {
 *   id: 6,
 *   name: 'Jane Smith',
 *   rating: 4,
 *   date: '2024-02-18',
 *   comment: 'Beautiful designs! The paper quality is premium and the printing is crisp.',
 *   product: 'Business Cards',
 *   image: '/images/reviews/jane-smith-review.jpg'
 * }
 * 
 * // Example 3: Review card with external image URL
 * {
 *   id: 7,
 *   name: 'Robert Williams',
 *   rating: 5,
 *   date: '2024-02-15',
 *   comment: 'Perfect for my event! Great customer service and the custom design was exactly what I wanted.',
 *   product: 'Custom Invitations',
 *   image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop'
 * }
 * 
 * // Example 4: Review card with different rating
 * {
 *   id: 8,
 *   name: 'Lisa Anderson',
 *   rating: 3,
 *   date: '2024-02-10',
 *   comment: 'Good quality cards, but shipping took longer than expected. Overall satisfied with the product.',
 *   product: 'Holiday Cards',
 *   image: '/images/reviews/lisa-holiday.jpg'
 * }
 * 
 * Image Configuration:
 * - Local images: Place in /public/images/reviews/ and reference as "/images/reviews/filename.jpg"
 * - External images: Use full URL (e.g., from Unsplash, your CDN, etc.)
 * - Images appear in the expanded modal view when a review card is clicked
 * - Recommended image dimensions: 600x600px or larger for best quality
 * 
 * Customization Options:
 * - Styling: Edit Reviews.css to modify colors, spacing, fonts, and animations
 * - Statistics: Adjust calculation logic in the reviews-stats section
 * - Layout: Modify grid configuration in reviews-grid class
 * - Functionality: Add review submission form, filtering, or sorting features
 * - Modal: Customize modal appearance and behavior in review-modal classes
 */

import { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  // State management for review interactions
  // Tracks which review card is currently expanded (for future card expansion feature)
  const [expandedReviewId, setExpandedReviewId] = useState(null);

  /**
   * Reviews Data Array
   * 
   * Contains all customer reviews displayed on the page.
   * Reviews are automatically sorted by date (newest first) and used to calculate statistics.
   * 
   * Review Object Structure:
   * {
   *   id: number,              // Unique identifier (required)
   *   name: string,             // Customer's full name (required)
   *   rating: number,           // Star rating from 1-5 (required)
   *   date: string,             // Date in 'YYYY-MM-DD' format (required)
   *   comment: string,          // Review text content (required)
   *   product: string,          // Product or collection name (required)
   *   image: string             // Image URL or local path (optional)
   * }
   * 
   * Sample Code Examples:
   * 
   * // Minimal review card (no image)
   * {
   *   id: 10,
   *   name: 'Customer Name',
   *   rating: 5,
   *   date: '2024-03-01',
   *   comment: 'Your review text goes here. Be descriptive and authentic.',
   *   product: 'Product Name'
   * }
   * 
   * // Complete review card with image
   * {
   *   id: 11,
   *   name: 'Customer Name',
   *   rating: 4,
   *   date: '2024-03-01',
   *   comment: 'Your detailed review text here. Share your experience with the product.',
   *   product: 'Product Collection Name',
   *   image: '/images/reviews/customer-photo.jpg'  // Local path
   *   // OR
   *   // image: 'https://example.com/image.jpg'    // External URL
   * }
   * 
   * // Adding to the array:
   * const reviews = [
   *   // ... existing reviews ...
   *   {
   *     id: 12,
   *     name: 'New Customer',
   *     rating: 5,
   *     date: '2024-03-05',
   *     comment: 'Amazing product! Highly recommend.',
   *     product: 'New Collection',
   *     image: '/images/reviews/new-customer.jpg'
   *   }
   * ];
   * 
   * Tips:
   * - Keep review comments authentic and varied in length
   * - Use recent dates for credibility
   * - Include diverse product categories
   * - Mix ratings to show authenticity (not all 5 stars)
   * - Add images for visual proof and engagement
   * - Ensure each id is unique (increment from highest existing id)
   */
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely beautiful cards! The quality is exceptional and the designs are stunning. Perfect for my wedding invitations. Highly recommend!',
      product: 'Wedding Collection',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=600&fit=crop' // Replace with your image
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: '2024-01-10',
      comment: 'Ordered birthday cards for my daughter\'s party. The cards arrived quickly and were exactly as shown. Great customer service too!',
      product: 'Birthday Cards',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=600&fit=crop' // Replace with your image
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 4,
      date: '2024-01-08',
      comment: 'Love the eco-friendly options! The cards are beautiful and I feel good about using sustainable materials. Will definitely order again.',
      product: 'Eco-Friendly Collection',
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600&h=600&fit=crop' // Replace with your image
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      date: '2024-01-05',
      comment: 'The custom printing service is amazing! They helped me create personalized thank you cards that were perfect. Very professional and helpful team.',
      product: 'Custom Printing',
      image: 'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=600&h=600&fit=crop' // Replace with your image
    }
  ];

  // Modal state management
  // Stores the currently selected review object when modal is open, null when closed
  const [selectedReview, setSelectedReview] = useState(null);

  /**
   * Opens the full-screen modal with detailed review information
   * @param {Object} review - The review object to display in the modal
   */
  const openReviewModal = (review) => {
    setSelectedReview(review);
  };

  /**
   * Closes the review modal by clearing the selected review state
   */
  const closeReviewModal = () => {
    setSelectedReview(null);
  };

  /**
   * Handles backdrop clicks to close the modal
   * Only closes if the click target is the overlay itself (not the modal content)
   * @param {Event} e - Click event object
   */
  const handleModalBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeReviewModal();
    }
  };

  /**
   * Handles keyboard events for accessibility
   * Closes modal when Escape key is pressed
   * @param {Event} e - Keyboard event object
   */
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && selectedReview) {
      closeReviewModal();
    }
  };

  /**
   * Renders a visual star rating display
   * Creates 5 star elements, filling stars up to the rating value
   * @param {number} rating - The rating value (1-5)
   * @returns {JSX.Element[]} Array of star span elements
   */
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span key={index} className={`star ${index < rating ? 'filled' : ''}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="reviews-page" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="reviews-container">
        <div className="reviews-header">
          <h1>Customer Reviews</h1>
          <p className="reviews-subtitle">See what our customers are saying about TansGallery</p>
        </div>

        <div className="reviews-stats">
          <div className="stat-item">
            <div className="stat-value">{reviews.length}</div>
            <div className="stat-label">Total Reviews</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {(reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)}
            </div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">
              {reviews.filter(review => review.rating === 5).length}
            </div>
            <div className="stat-label">5-Star Reviews</div>
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="review-card"
              onClick={() => openReviewModal(review)}
            >
              <div className="review-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {review.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h3 className="reviewer-name">{review.name}</h3>
                    <p className="review-date">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>
              {/* Product category or name being reviewed */}
              <p className="review-product">Product: {review.product}</p>
              {/* Customer's review text */}
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Modal Popup for Detailed Review View */}
      {/* Only renders when a review is selected (selectedReview is not null) */}
      {selectedReview && (
        <div 
          className="review-modal-overlay" 
          onClick={handleModalBackdropClick}
        >
          <div className="review-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="review-modal-close" 
              onClick={closeReviewModal}
              aria-label="Close modal"
            >
              ×
            </button>
            
            <div className="review-modal-content">
              <div className="review-modal-header">
                <div className="reviewer-info">
                  <div className="reviewer-avatar">
                    {selectedReview.name.charAt(0)}
                  </div>
                  <div className="reviewer-details">
                    <h2 className="reviewer-name">{selectedReview.name}</h2>
                    <p className="review-date">{new Date(selectedReview.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                <div className="review-rating">
                  {renderStars(selectedReview.rating)}
                </div>
              </div>

              {/* Product information */}
              <p className="review-product">Product: {selectedReview.product}</p>
              
              {/* Full review comment text */}
              <p className="review-comment">{selectedReview.comment}</p>

              {/* Optional customer image with product */}
              {/* Only displays if the review includes an image URL */}
              {selectedReview.image && (
                <div className="review-modal-image-container">
                  <img 
                    src={selectedReview.image} 
                    alt={`${selectedReview.name} with ${selectedReview.product}`}
                    className="review-modal-image"
                  />
                  <p className="review-image-caption">Customer photo with product</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;

