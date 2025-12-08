import React from 'react';
import './Reviews.css';

const Reviews = () => {
  return (
    <div className="reviews-page">
      <div className="reviews-container">
        <div className="reviews-header">
          <h1>Customer Reviews</h1>
          <p className="reviews-subtitle">See what our customers are saying about TansGallery</p>
        </div>

        <div className="no-reviews-container" style={{ 
          textAlign: 'center', 
          padding: '4rem 2rem', 
          background: 'white', 
          borderRadius: '12px', 
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>💚</div>
          <h2 style={{ color: '#2d3748', marginBottom: '1rem', fontSize: '2rem' }}>We'd Love to Hear From You!</h2>
          <p style={{ color: '#718096', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            We would be honored if you shared your experience with us. Your feedback helps us grow and continue creating beautiful moments.
          </p>
          
          <a 
            href="https://forms.gle/Kj8cLNxcdyp9v9wm6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="review-link-button"
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              background: 'linear-gradient(135deg, #6FA8A8 0%, #BFD68E 100%)',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.1rem',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 15px rgba(74, 124, 124, 0.3)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(74, 124, 124, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(74, 124, 124, 0.3)';
            }}
          >
            Write a Review
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
