# 🎨 TansGallery

> A beautiful, modern e-commerce gallery for premium printed cards. Built with React and Vite for a fast, responsive shopping experience.

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React%20Router-7.10.1-CA4245?logo=react-router)](https://reactrouter.com/)

---

## ✨ Features

- 🛍️ **Product Catalog** - Browse through a curated collection of premium printed cards
- 🔍 **Product Details** - Detailed product pages with images and descriptions
- 🛒 **Shopping Cart** - Add items to cart and manage your selections
- 📧 **Email Integration** - Order confirmation emails via EmailJS
- ⭐ **Customer Reviews** - Read testimonials and reviews from customers
- 📱 **Responsive Design** - Beautiful UI that works on all devices
- 🎯 **Category Filtering** - Filter products by category
- ⚡ **Fast Performance** - Optimized with Vite for lightning-fast load times

---

## 🚀 Tech Stack

- **Frontend Framework:** React 19.2.0
- **Build Tool:** Vite 7.2.4
- **Routing:** React Router DOM 7.10.1
- **Email Service:** EmailJS 4.4.1
- **Styling:** CSS3 with modern design patterns
- **State Management:** React Context API

---

## 📦 Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/TansGallery.git
   cd TansGallery
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 🎯 Usage

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

### Production Build

```bash
# Create optimized production build
npm run build

# The build files will be in the 'dist' directory
# Deploy the 'dist' folder to your hosting service
```

---

## 📁 Project Structure

```
TansGallery/
├── public/                 # Static assets
│   └── vite.png
├── src/
│   ├── assets/            # Images and media files
│   │   └── TansGalleryLogo.png
│   ├── components/        # Reusable UI components
│   │   ├── Header.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer section
│   │   ├── ProductCard.jsx # Product display card
│   │   └── ScrollToTop.jsx # Scroll to top utility
│   ├── context/           # React Context providers
│   │   └── CartContext.jsx # Shopping cart state management
│   ├── data/              # Static data files
│   │   └── products.js    # Product catalog data
│   ├── pages/             # Page components (routes)
│   │   ├── Home.jsx       # Landing page
│   │   ├── Products.jsx   # Product listing page
│   │   ├── ProductDetail.jsx # Single product view
│   │   ├── Cart.jsx       # Shopping cart page
│   │   └── Reviews.jsx    # Customer reviews page
│   ├── services/          # External service integrations
│   │   └── emailService.js # EmailJS integration
│   ├── App.jsx            # Root component with routing
│   ├── App.css            # Global app styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Base CSS styles
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

---

## 🔧 Configuration

### EmailJS Setup

To enable email functionality for order confirmations:

1. **Sign up for EmailJS**
   - Visit [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a free account

2. **Configure Email Service**
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

3. **Update Configuration**
   - Open `src/services/emailService.js`
   - Replace the placeholder values:
     ```javascript
     const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
     const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
     const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
     ```

4. **Detailed Setup Guide**
   - See `EMAILJS_SETUP.md` for step-by-step instructions

> **Note:** If EmailJS is not configured, the app will use `mailto:` links as a fallback.

---

## 🛣️ Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with hero section and featured products |
| `/products` | Product listing page with category filters |
| `/products/:id` | Individual product detail page |
| `/cart` | Shopping cart with checkout functionality |
| `/reviews` | Customer reviews and testimonials |

---

## 🎨 Customization

### Adding Products

Edit `src/data/products.js` to add or modify products:

```javascript
{
  id: 1,
  name: "Product Name",
  category: "Category",
  price: 29.99,
  image: "/path/to/image.jpg",
  description: "Product description"
}
```

### Styling

- Global styles: `src/index.css`
- Component styles: Individual `.css` files in each component directory
- App-wide styles: `src/App.css`

### Adding New Pages

1. Create a new component in `src/pages/`
2. Import it in `src/App.jsx`
3. Add a route in the `<Routes>` component
4. Add navigation link in `src/components/Header.jsx` (if needed)

---

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**TansGallery Team**

- GitHub: [@yourusername](https://github.com/yourusername)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite for the blazing-fast build tool
- EmailJS for email service integration
- All contributors and users of this project

---

## 📸 Screenshots

> _Add screenshots of your application here_

<!--
![Home Page](screenshots/home.png)
![Products Page](screenshots/products.png)
![Cart Page](screenshots/cart.png)
-->

---

## 🔗 Links

- [Live Demo](https://your-demo-url.com) _(Add your deployment URL)_
- [Documentation](https://your-docs-url.com) _(If available)_
- [Issue Tracker](https://github.com/yourusername/TansGallery/issues)

---

<div align="center">

**Made with ❤️ using React and Vite**

⭐ Star this repo if you find it helpful!

</div>
