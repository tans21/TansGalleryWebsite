# EmailJS Setup Instructions

The email template needs to be updated to support the new checkout features and fix the HTML display issue.

## Step 1: Login to EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/) and log in.
2. Go to **"Email Templates"**.
3. Click on your existing template (e.g., `template_xxxxxxxxx`) to edit it.

## Step 2: Configure Recipients (CRITICAL)

To ensure **BOTH** you (the store owner) and the customer receive the order confirmation:

1. **To Email:** Set this to `{{to_email}}`
   * This sends the email to the customer.

2. **BCC:** Set this to your email address: `tanuchauhan212002@gmail.com`
   * This sends a hidden copy to you so you know when an order is placed.
   * *Note: You can also use the "CC" field if you want the customer to see that you were copied.*

3. **Reply To:** Set this to `{{to_email}}`
   * This allows you to click "Reply" in your email client to write back to the customer directly.

## Step 3: Update Template Content (CRITICAL FIX)

1. Click the **"Source Code"** button (usually looks like `< >` icon) in the toolbar.
2. **DELETE EVERYTHING** in the source code window.
3. **COPY AND PASTE** the following HTML code exactly:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px;">
  <!-- HEADER -->
  <div style="background-color: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
    <h2 style="color: #667eea; margin: 0 0 20px 0; text-align: center;">From TansGallery</h2>
    
    <!-- ORDER INFO -->
    <div style="border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 15px;">
      <p style="color: #4a5568; margin: 5px 0;"><strong>Order Date:</strong> {{order_date}}</p>
      <p style="color: #4a5568; margin: 5px 0;"><strong>Customer:</strong> {{customer_name}}</p>
      <p style="color: #4a5568; margin: 5px 0;"><strong>Email:</strong> {{to_email}}</p>
    </div>

    <!-- ORDER DETAILS HEADER -->
    <h3 style="color: #2d3748; margin-bottom: 15px;">Order Details:</h3>
    
    <!-- ITEMS LIST (Dynamically inserted) -->
    <!-- Use triple braces {{{ }}} if available to prevent escaping, otherwise double braces usually work if variable is safe -->
    <div>
      {{{html_message}}}
    </div>

    <!-- TOTAL -->
    <div style="margin-top: 20px; padding: 15px; background: #f7fafc; border-radius: 8px; text-align: right;">
      <p style="margin: 0; font-size: 18px; font-weight: 600; color: #2d3748;">
        Total: <span style="color: #667eea;">{{total_price}}</span>
      </p>
    </div>

    <!-- CUSTOMIZATION REQUEST -->
    <div style="margin-top: 30px; padding: 20px; background: #fff5f5; border-left: 4px solid #667eea; border-radius: 8px;">
      <h4 style="margin: 0 0 10px 0; color: #2d3748;">Customization Request:</h4>
      <p style="margin: 0; color: #2d3748; line-height: 1.6;">
        {{customization_message}}
      </p>
    </div>

    <!-- FOOTER -->
    <div style="margin-top: 30px; text-align: center; color: #718096; font-size: 14px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
      <p>Thank you for purchasing from TansGallery.</p>
      <p>We will get back to you soon !!!! ❤️</p>
    </div>
  </div>
</div>
```

4. **Important:** If your email client still shows raw HTML tags, try replacing `{{{html_message}}}` with `{{html_message}}` in the code above, or vice-versa.
   - Note: The variable `html_message` now ONLY contains the list of items, so the rest of the layout (header, footer, etc.) is handled safely by this template.

## Step 4: Save
Click **"Save"** in the EmailJS dashboard.

## Step 5: Test
Go back to your website, refresh the page, and try placing an order again. The email should now be beautifully formatted!
