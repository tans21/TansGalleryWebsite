# EmailJS Setup Instructions

To enable email functionality for the checkout process, you need to set up EmailJS (free service).

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions to connect your email
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. **Important:** Make sure to select "HTML" format (not plain text)
4. Use this HTML template structure:

**Subject:** `{{subject}}`

**Content (HTML):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #667eea; margin-bottom: 20px;">New Order from TansGallery</h2>
  <p style="color: #4a5568; margin-bottom: 10px;"><strong>Order Date:</strong> {{order_date}}</p>
  <hr style="border: none; border-top: 2px solid #e2e8f0; margin: 20px 0;">
  <h3 style="color: #2d3748; margin-bottom: 15px;">Order Details:</h3>
  {{html_message}}
  <div style="margin-top: 20px; padding: 15px; background: #f7fafc; border-radius: 8px;">
    <p style="margin: 0; font-size: 18px; font-weight: 600; color: #2d3748;">
      Total: <span style="color: #667eea;">{{total_price}}</span>
    </p>
  </div>
  <p style="margin-top: 20px; color: #718096;">Thank you for your order!</p>
</div>
```

**Note:** The `{{html_message}}` variable contains the formatted product list with images. Make sure your template is set to HTML format to display images properly.

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (also called API Key)

## Step 5: Update Configuration

Open `src/services/emailService.js` and replace:

- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID  
- `YOUR_PUBLIC_KEY` with your Public Key

## Step 6: Test

1. Add items to cart
2. Click "Proceed to Checkout"
3. Check your email inbox (tanuchauhan212002@gmail.com)

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- Perfect for small businesses

If you need more, consider upgrading to a paid plan.

