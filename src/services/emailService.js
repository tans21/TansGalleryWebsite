/**
 * EMAIL SERVICE
 * 
 * This file handles sending order emails when customers checkout.
 * 
 * SETUP INSTRUCTIONS:
 * 1. Sign up for free account at https://www.emailjs.com/
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create an email template
 * 4. Get your Service ID, Template ID, and Public Key
 * 5. Configure Environment Variables (see below)
 * 
 * ENVIRONMENT VARIABLES:
 * Create a .env file in the root directory with the following values:
 * VITE_EMAILJS_SERVICE_ID=your_service_id
 * VITE_EMAILJS_TEMPLATE_ID=your_template_id
 * VITE_EMAILJS_PUBLIC_KEY=your_public_key
 * 
 * EMAIL TEMPLATE VARIABLES:
 * The following variables are sent to your email template:
 * - to_email: Recipient email address
 * - customer_name: Name of the customer
 * - subject: Email subject line
 * - message: Plain text version of order
 * - html_message: HTML list of items (place this inside the template structure)
 * - order_items: Plain text list of items
 * - total_price: Total order price
 * - order_date: Date and time of order
 * - customization_message: Custom message from the customer
 */

import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION
// These are loaded from environment variables for security and flexibility
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// CACHE BUSTER - This will force browser to reload if changed
const CODE_VERSION = 'v2.6-2025-01-07-14:30';
console.log('%c📧 EmailJS Service Loaded:', 'background: #4CAF50; color: white; font-size: 14px; padding: 5px; font-weight: bold;');
console.log('Code Version:', CODE_VERSION);
// Don't log full keys in production, just existence check
console.log('Service ID Configured:', !!EMAILJS_SERVICE_ID);
console.log('Template ID Configured:', !!EMAILJS_TEMPLATE_ID);

// DEV MODE: Set to true to simulate quota limits for testing
const DEV_TEST_MODE = false;
const DEV_MAX_EMAILS = 200; // This is now just for reference, real limit is managed by EmailJS

// Check if EmailJS is configured
const isEmailJSConfigured = () => {
  return EMAILJS_SERVICE_ID && 
         EMAILJS_TEMPLATE_ID && 
         EMAILJS_PUBLIC_KEY;
};

// Initialize EmailJS (only once)
let isInitialized = false;
const initializeEmailJS = () => {
  if (!isInitialized && EMAILJS_PUBLIC_KEY) {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      isInitialized = true;
      console.log('EmailJS initialized successfully');
    } catch (error) {
      console.error('EmailJS initialization error:', error);
    }
  }
};

export const sendOrderEmail = async (cartItems, totalPrice, recipientEmail, customerName = 'Valued Customer', customizationMessage = '') => {
  // VERY VISIBLE MARKER - If you see this, the new code is running!
  // VERSION: 2.6 - Updated at 2025-01-07
  console.log('%c=== EMAIL SERVICE CALLED - NEW CODE VERSION 2.6 ===', 'background: #00ff00; color: #000; font-size: 20px; font-weight: bold; padding: 10px; border: 3px solid red;');
  console.log('Cart items:', cartItems);
  console.log('Total price:', totalPrice);
  console.log('Recipient email:', recipientEmail);
  console.log('Customer Name:', customerName);
  
  // Prevent any mailto fallback - EmailJS should handle everything
  if (typeof window !== 'undefined' && window.location && window.location.href.includes('mailto:')) {
    console.error('ERROR: mailto link detected - this should not happen!');
  }

  // --- DEV MODE QUOTA CHECK ---
  if (DEV_TEST_MODE) {
    const sentCount = parseInt(localStorage.getItem('dev_email_sent_count') || '0');
    console.log(`[DEV MODE] Sent emails count: ${sentCount}/${DEV_MAX_EMAILS}`);
    
    if (sentCount >= DEV_MAX_EMAILS) {
      console.warn('[DEV MODE] Quota exceeded simulation!');
      // Simulate the exact error structure needed to trigger the modal
      return { 
        success: false, 
        error: 'Monthly email limit reached (DEV SIMULATION).', 
        isQuotaError: true 
      };
    }
  }
  // ---------------------------
  
  // Validate inputs
  if (!cartItems || cartItems.length === 0) {
    console.error('ERROR: Cart is empty');
    return { success: false, error: 'Cart is empty' };
  }
  
  if (!recipientEmail) {
    console.error('ERROR: Recipient email is required');
    return { success: false, error: 'Recipient email is required' };
  }

  // Check if EmailJS is configured
  const isConfigured = isEmailJSConfigured();
  console.log('EmailJS configured check:', isConfigured);
  
  if (!isConfigured) {
    console.error('ERROR: EmailJS is not properly configured. Missing environment variables.');
    return { 
      success: false, 
      error: 'EmailJS is not configured. Please check your environment variables.' 
    };
  }

  // Initialize EmailJS before sending
  console.log('Initializing EmailJS...');
  initializeEmailJS();
  console.log('EmailJS initialization complete');

  // Format cart items for HTML email (images removed to avoid CORB issues)
  // This is now JUST the list of items, not the whole page structure
  const itemsHTML = cartItems.map((item, index) => `
    <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
      <div>
        <h3 style="margin: 0 0 5px 0; color: #2d3748; font-family: Arial, sans-serif;">${index + 1}. ${item.name}</h3>
        <p style="margin: 0 0 5px 0; color: #718096; font-size: 14px; font-family: Arial, sans-serif;">Category: ${item.category}</p>
        <p style="margin: 0 0 5px 0; color: #4a5568; font-family: Arial, sans-serif;">Quantity: ${item.quantity}</p>
        <p style="margin: 0; color: #667eea; font-weight: 600; font-size: 16px; font-family: Arial, sans-serif;">$${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  `).join('');

  // Format cart items as plain text (images removed)
  const itemsText = cartItems.map((item, index) => {
    return `${index + 1}. ${item.name} (${item.category}) - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
  }).join('\n');

  console.log('Attempting to send email via EmailJS...');
  // Don't log sensitive IDs in production
  
  try {
    // Plain text version for email clients that don't support HTML
    const textMessage = `From TansGallery
    
Order Date: ${new Date().toLocaleString()}
Customer: ${customerName}
Email: ${recipientEmail}

Order Details:
${itemsText}

Total: $${totalPrice.toFixed(2)}

${customizationMessage ? `Customization Request:\n${customizationMessage}` : ''}

Thank you for purchasing from TansGallery.
We will get back to you soon !!!! ❤️`;

    // Updated template params to support cleaner separation of data and design
    const templateParams = {
      to_email: recipientEmail,
      customer_name: customerName,
      subject: 'From TansGallery',
      message: textMessage,
      html_message: itemsHTML, // Now contains ONLY the items list
      order_items: itemsText,
      total_price: `$${totalPrice.toFixed(2)}`,
      order_date: new Date().toLocaleString(),
      customization_message: customizationMessage || 'None'
    };

    console.log('Sending email with template params:', templateParams);

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    // --- DEV MODE INCREMENT ---
    if (DEV_TEST_MODE) {
      const currentCount = parseInt(localStorage.getItem('dev_email_sent_count') || '0');
      localStorage.setItem('dev_email_sent_count', (currentCount + 1).toString());
    }
    // -------------------------

    console.log('Email sent successfully!', response);
    return { success: true, response, method: 'emailjs' };
  } catch (error) {
    console.error('EmailJS Error Details:', {
      code: error.code,
      text: error.text,
      message: error.message,
      status: error.status,
      fullError: error
    });
    
    // Provide more helpful error messages
    let errorMessage = 'Failed to send email. ';
    let isQuotaError = false;
    
    // Check for quota exceeded error (usually 412 or specific text)
    if ((error.text && (error.text.includes('limit') || error.text.includes('quota'))) || 
        error.status === 412 || 
        error.status === 403) {
      isQuotaError = true;
      errorMessage = 'Monthly email limit reached.';
    } else if (error.text) {
      errorMessage += error.text;
    } else if (error.message) {
      errorMessage += error.message;
    } else {
      errorMessage += 'Please check your EmailJS configuration.';
    }
    
    console.error('Full error object:', error);
    
    return { success: false, error: errorMessage, isQuotaError };
  }
};
