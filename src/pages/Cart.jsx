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
 * - Checkout button that sends order email
 * - Success animation after checkout
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

  /**
   * Handle checkout process
   * Sends order email with cart items and total price
   * 
   * TO CHANGE EMAIL RECIPIENT:
   * Replace 'tanuchauhan212002@gmail.com' with your email address
   */
  const handleCheckout = async () => {
    setIsProcessing(true);
    setMessage(null);

    try {
      const result = await sendOrderEmail(
        cartItems,
        getTotalPrice(),
        'tanuchauhan212002@gmail.com'  // CHANGE THIS TO YOUR EMAIL ADDRESS
      );

      if (result.success) {
        // Always show success animation, regardless of method
        setIsProcessing(false);
        setShowSuccess(true);
        
        // Clear cart after animation (3 seconds)
        setTimeout(() => {
          clearCart();
          setShowSuccess(false);
        }, 3000);
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to send order. Please try again or contact support.' });
        setIsProcessing(false);
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'An error occurred. Please try again.' });
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
                  <div className="cart-item-price">${item.price.toFixed(2)}</div>
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
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${getTotalPrice().toFixed(2)}</span>
            </div>
            {message && (
              <div className={`checkout-message ${message.type}`}>
                {message.text}
              </div>
            )}
            <button 
              className="checkout-button"
              onClick={handleCheckout}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Proceed to Checkout'}
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

