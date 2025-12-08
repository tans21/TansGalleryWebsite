/**
 * CART PAGE
 * 
 * This page displays the shopping cart and handles checkout.
 * 
 * FEATURES:
 * - Display all cart items with images, names, prices
 * - Quantity controls (increase/decrease)
 * - Remove items from cart
 * - Order summary with totals
 * - Checkout modal to collect customer details
 * - Checkout button that sends order email
 * - Success animation after checkout
 * - Quota limit reached modal
 * - Empty cart state
 * 
 * EMAIL INTEGRATION:
 * - Uses EmailJS service (configured in src/services/emailService.js)
 * - Sends order details to your email address
 * - Update email address in handleCheckout function below
 * - Configure EmailJS in EMAILJS_SETUP.md
 * 
 * CUSTOMIZATION:
 * - Change email recipient: Update 'tanuchauhan212002@gmail.com' below
 * - Modify Cart.css to change cart appearance
 * - Add shipping cost calculation
 * - Add payment gateway integration
 * - Customize success message/animation
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { sendOrderEmail } from '../services/emailService';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showQuotaModal, setShowQuotaModal] = useState(false);
  
  // Checkout Modal State
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    customizationMessage: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    return errors;
  };

  const handleOpenModal = () => {
    setShowModal(true);
    setFormErrors({});
  };

  const handleCloseModal = () => {
    if (!isProcessing) {
      setShowModal(false);
    }
  };

  // Calculate next reset date (6th of next month)
  const getNextResetDate = () => {
    const now = new Date();
    // Start with next month
    let nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 6);
    
    // If today is after the 6th, it's definitely next month.
    // If today is before the 6th, wait, is the limit resetting THIS month on the 6th?
    // If we hit the limit on the 2nd, and it resets on the 6th, then we just need to wait until THIS month's 6th.
    // However, usually "Monthly" limit means a full billing cycle.
    // Assuming standard calendar month logic or explicit billing cycle.
    // The user prompt said: "Try ordering again on 6 'next month'".
    // So we will strictly look for the NEXT occurrence of the 6th in the NEXT month.
    
    // Actually, simple logic based on user request: "next month".
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    
    // Get next month index (handling December -> January wrap)
    const nextMonthIndex = (now.getMonth() + 1) % 12;
    return `${monthNames[nextMonthIndex]}`;
  };

  /**
   * Handle final checkout process
   * Sends order email with cart items, total price, and customer details
   */
  const handleFinalCheckout = async (e) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log('%c=== CHECKOUT INITIATED ===', 'background: #ff00ff; color: #fff; font-size: 20px; font-weight: bold; padding: 10px; border: 3px solid blue;');
    setIsProcessing(true);
    setMessage(null);

    try {
      console.log('Calling sendOrderEmail...');
      const result = await sendOrderEmail(
        cartItems,
        getTotalPrice(),
        formData.email, // Use customer's email from form
        formData.name,
        formData.customizationMessage
      );

      console.log('sendOrderEmail result:', result);

      if (result.success) {
        console.log('Email sent successfully!');
        setIsProcessing(false);
        setShowModal(false);
        setShowSuccess(true);
        
        // Clear cart after animation (3 seconds)
        setTimeout(() => {
          clearCart();
          setShowSuccess(false);
          setFormData({ name: '', email: '', customizationMessage: '' });
        }, 3000);
      } else {
        console.error('Email sending failed:', result.error);
        setIsProcessing(false);
        
        // Check for specific quota error
        if (result.isQuotaError) {
          setShowModal(false); // Close normal checkout modal
          setShowQuotaModal(true); // Show quota exceeded modal
        } else {
          setMessage({ type: 'error', text: result.error || 'Failed to send order. Please try again or contact support.' });
        }
      }
    } catch (error) {
      console.error('Exception in handleFinalCheckout:', error);
      setMessage({ type: 'error', text: `An error occurred: ${error.message || 'Please try again.'}` });
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="container">
          <h1 className="page-title">Shopping Cart</h1>
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <Link to="/products" className="shop-button">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      {/* SUCCESS ANIMATION OVERLAY */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-animation">
            <div className="success-tick">
              <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                <path className="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
              </svg>
            </div>
            <h2 className="success-title">Order Completed!</h2>
            <p className="success-message">Your order has been sent successfully.</p>
          </div>
        </div>
      )}

      {/* QUOTA LIMIT MODAL */}
      {showQuotaModal && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ textAlign: 'center' }}>
            <div className="modal-header" style={{ justifyContent: 'center', borderBottom: 'none', paddingBottom: 0 }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</div>
            </div>
            <h2 style={{ color: '#e53e3e', marginBottom: '1rem' }}>Orders Paused</h2>
            <p style={{ fontSize: '1.1rem', color: '#4a5568', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              The order maxed out for this month.<br/>
              Try ordering again on <strong>6 {getNextResetDate()}</strong>.
            </p>
            <p style={{ color: '#718096', marginBottom: '2rem' }}>
              Or send a mail to:<br/>
              <a 
                href="mailto:tanuchauhan212002@gmail.com" 
                style={{ color: '#667eea', fontWeight: '600', textDecoration: 'none' }}
              >
                tanuchauhan212002@gmail.com
              </a>
            </p>
            <button 
              className="checkout-button" 
              onClick={() => setShowQuotaModal(false)}
              style={{ marginTop: 0 }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CHECKOUT MODAL */}
      {showModal && !showQuotaModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>Checkout Details</h2>
              <button className="close-modal" onClick={handleCloseModal} disabled={isProcessing}>&times;</button>
            </div>
            <form onSubmit={handleFinalCheckout} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={formErrors.name ? 'error' : ''}
                  disabled={isProcessing}
                  placeholder="Enter your full name"
                />
                {formErrors.name && <span className="error-text">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={formErrors.email ? 'error' : ''}
                  disabled={isProcessing}
                  placeholder="Enter your email address"
                />
                {formErrors.email && <span className="error-text">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="customizationMessage">Customization Request (Optional)</label>
                <textarea
                  id="customizationMessage"
                  name="customizationMessage"
                  value={formData.customizationMessage}
                  onChange={handleInputChange}
                  rows="4"
                  disabled={isProcessing}
                  placeholder="Any specific customization details?"
                ></textarea>
              </div>

              {message && (
                <div className={`checkout-message ${message.type}`}>
                  {message.text}
                </div>
              )}

              <div className="modal-footer">
                <button type="button" className="cancel-button" onClick={handleCloseModal} disabled={isProcessing}>
                  Cancel
                </button>
                <button type="submit" className="submit-order-button" disabled={isProcessing}>
                  {isProcessing ? 'Sending Order...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="container">
        <h1 className="page-title">Shopping Cart</h1>
        
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-category">{item.category}</p>
                  <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
                </div>
                <div className="cart-item-controls">
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      −
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="remove-btn"
                  >
                    Remove
                  </button>
                </div>
                <div className="cart-item-total">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{getTotalPrice().toFixed(2)}</span>
            </div>
            
            <button 
              className="checkout-button"
              onClick={handleOpenModal}
              disabled={isProcessing}
            >
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="clear-cart-button">
              Clear Cart
            </button>
            <Link to="/products" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
