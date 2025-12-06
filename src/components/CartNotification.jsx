/**
 * CART NOTIFICATION COMPONENT
 * 
 * This component displays a beautiful animated cart icon notification
 * when an item is added to the cart.
 * 
 * FEATURES:
 * - Animated slide-in and bounce effect
 * - Clickable to navigate to cart page
 * - Stays visible as long as cart has items
 * - Beautiful cart icon with pulse animation
 * - Smooth fade out animation when cart is empty
 * - Only displays on Home and Products pages
 */

import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './CartNotification.css';

const CartNotification = () => {
  const { cartItems, showNotification, setShowNotification } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [shouldAnimate, setShouldAnimate] = useState(false);

  // Trigger animation when item is added
  useEffect(() => {
    if (showNotification && cartItems.length > 0) {
      setShouldAnimate(true);
      // Reset the showNotification flag
      setShowNotification(false);
    }
  }, [showNotification, cartItems.length, setShowNotification]);

  // Handle click to navigate to cart
  const handleClick = () => {
    navigate('/cart');
  };

  // Check if current page allows notification (Home page or Products pages)
  const isAllowedPage = location.pathname === '/' || location.pathname.startsWith('/products');

  // Don't show if cart is empty or on restricted pages (Cart or Reviews)
  if (cartItems.length === 0 || !isAllowedPage) {
    return null;
  }

  return (
    <div className={`cart-notification ${shouldAnimate ? 'animate' : ''}`} onClick={handleClick}>
      <div className="cart-notification-content">
        <div className="cart-icon-wrapper">
          <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.7 15.3C4.3 15.7 4.6 16.5 5.1 16.5H17M17 13V17C17 18.1 17.9 19 19 19C20.1 19 21 18.1 21 17V13M9 19.5C9.8 19.5 10.5 20.2 10.5 21C10.5 21.8 9.8 22.5 9 22.5C8.2 22.5 7.5 21.8 7.5 21C7.5 20.2 8.2 19.5 9 19.5ZM20 19.5C20.8 19.5 21.5 20.2 21.5 21C21.5 21.8 20.8 22.5 20 22.5C19.2 22.5 18.5 21.8 18.5 21C18.5 20.2 19.2 19.5 20 19.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="cart-icon-pulse"></div>
        </div>
        <div className="cart-notification-text">
          <span className="cart-notification-title">
            {cartItems.length === 1 ? 'Item Added!' : `${cartItems.length} Items in Cart`}
          </span>
          <span className="cart-notification-subtitle">Click to view cart</span>
        </div>
        <div className="cart-notification-arrow">→</div>
      </div>
    </div>
  );
};

export default CartNotification;

