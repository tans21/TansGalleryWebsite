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
 * 5. Replace the values below with your credentials
 * 
 * FALLBACK METHOD:
 * If EmailJS is not configured, the system will use mailto: links
 * This opens the user's email client with pre-filled order information
 * 
 * EMAIL TEMPLATE VARIABLES:
 * The following variables are sent to your email template:
 * - to_email: Recipient email address
 * - subject: Email subject line
 * - message: Plain text version of order
 * - html_message: HTML version of order (with images)
 * - order_items: Formatted list of items
 * - total_price: Total order price
 * - order_date: Date and time of order
 * 
 * CUSTOMIZATION:
 * - Modify email HTML template in htmlMessage variable
 * - Change email subject and content
 * - Add additional order information
 * - Customize email styling
 */

import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION
// Replace these with your actual EmailJS credentials from https://www.emailjs.com/
// Step-by-step setup guide: See EMAILJS_SETUP.md file
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Get from EmailJS Dashboard > Email Services
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Get from EmailJS Dashboard > Email Templates
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Get from EmailJS Dashboard > Account > API Keys

// Check if EmailJS is configured
const isEmailJSConfigured = () => {
  return EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
         EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
         EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';
};

// Initialize EmailJS if configured
if (isEmailJSConfigured()) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

export const sendOrderEmail = async (cartItems, totalPrice, recipientEmail) => {
  // Format cart items with images for HTML email
  const itemsHTML = cartItems.map((item, index) => `
    <div style="margin-bottom: 20px; padding: 15px; border: 1px solid #e2e8f0; border-radius: 8px;">
      <div style="display: flex; gap: 15px;">
        <img src="${item.image}" alt="${item.name}" style="width: 120px; height: 120px; object-fit: cover; border-radius: 8px;" />
        <div>
          <h3 style="margin: 0 0 5px 0; color: #2d3748;">${index + 1}. ${item.name}</h3>
          <p style="margin: 0 0 5px 0; color: #718096; font-size: 14px;">Category: ${item.category}</p>
          <p style="margin: 0 0 5px 0; color: #4a5568;">Quantity: ${item.quantity}</p>
          <p style="margin: 0; color: #667eea; font-weight: 600; font-size: 16px;">$${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Format cart items as plain text (for mailto fallback)
  const itemsText = cartItems.map((item, index) => {
    const imageUrl = `Image: ${item.image}`;
    return `${index + 1}. ${item.name} (${item.category}) - Qty: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n   ${imageUrl}`;
  }).join('\n');

  // CUSTOM MESSAGE
  // Customize this message that appears in order emails
  // This message is shown to customers in their order confirmation
  const customMessage = `You can write here if you want a customization. Thank you for purchasing from TansGallery.

We will be get back to you soon !!!! ❤️`;

  // Check if EmailJS is configured
  if (!isEmailJSConfigured()) {
    // Fallback: Use mailto link with image URLs
    const subject = encodeURIComponent('New Order from TansGallery');
    const body = encodeURIComponent(
      `New Order from TansGallery\n\nOrder Details:\n${itemsText}\n\nTotal: $${totalPrice.toFixed(2)}\n\nOrder Date: ${new Date().toLocaleString()}\n\n${customMessage}`
    );

    // Open email client with pre-filled information
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    
    return { 
      success: true, 
      method: 'mailto',
      message: 'Email client opened. Please send the email to complete your order.' 
    };
  }

  try {
    // Create HTML email content
    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #667eea; margin-bottom: 20px;">New Order from TansGallery</h2>
        <p style="color: #4a5568; margin-bottom: 10px;"><strong>Order Date:</strong> ${new Date().toLocaleString()}</p>
        <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 20px 0;">
        <h3 style="color: #2d3748; margin-bottom: 15px;">Order Details:</h3>
        ${itemsHTML}
        <div style="margin-top: 20px; padding: 15px; background: #f7fafc; border-radius: 8px;">
          <p style="margin: 0; font-size: 18px; font-weight: 600; color: #2d3748;">
            Total: <span style="color: #667eea;">$${totalPrice.toFixed(2)}</span>
          </p>
        </div>
        <div style="margin-top: 30px; padding: 20px; background: #fff5f5; border-left: 4px solid #667eea; border-radius: 8px;">
          <p style="margin: 0; color: #2d3748; line-height: 1.6;">
            You Can write here if you want a customization. Thankyou for purchasing from TansGallery.<br><br>
            We will be get back to you soon !!!! ❤️
          </p>
        </div>
      </div>
    `;

    // Plain text version for email clients that don't support HTML
    const textMessage = `New Order from TansGallery\n\nOrder Date: ${new Date().toLocaleString()}\n\nOrder Details:\n${itemsText}\n\nTotal: $${totalPrice.toFixed(2)}\n\n${customMessage}`;

    const templateParams = {
      to_email: recipientEmail,
      subject: 'New Order from TansGallery',
      message: textMessage,
      html_message: htmlMessage,
      order_items: itemsText,
      total_price: `$${totalPrice.toFixed(2)}`,
      order_date: new Date().toLocaleString(),
    };

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response, method: 'emailjs' };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message || 'Failed to send email' };
  }
};

