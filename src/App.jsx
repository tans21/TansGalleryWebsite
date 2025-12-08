/**
 * MAIN APP COMPONENT
 * 
 * This is the root component that sets up routing and provides cart context.
 * 
 * STRUCTURE:
 * - CartProvider: Wraps entire app to provide cart functionality
 * - Router: Enables navigation between pages
 * - ScrollToTop: Scrolls to top when navigating to new page
 * - Header: Navigation bar (appears on all pages)
 * - Routes: Defines all pages/routes in the application
 * - Footer: Footer section (appears on all pages)
 * 
 * ROUTES:
 * - "/" - Home page (landing page)
 * - "/products" - Products listing page (all products)
 * - "/products/:id" - Product detail page (single product view)
 * - "/cart" - Shopping cart page
 * - "/reviews" - Customer reviews page
 * 
 * TO ADD A NEW PAGE:
 * 1. Create new component in src/pages/ folder
 * 2. Import it above: import NewPage from './pages/NewPage';
 * 3. Add route: <Route path="/newpage" element={<NewPage />} />
 * 4. Add link in Header.jsx navigation if needed
 * 
 * CUSTOMIZATION:
 * - Modify routes to change URLs
 * - Add/remove pages by adding/removing Route components
 * - Change page order by reordering Route components
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import CartNotification from './components/CartNotification';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Reviews from './pages/Reviews';
import Customization from './pages/Customization';
import AboutMe from './pages/AboutMe';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          {/* HEADER - Appears on all pages */}
          <Header />
          
          {/* MAIN CONTENT - Page content changes based on route */}
          <main className="main-content">
            <Routes>
              {/* HOME PAGE - Landing page */}
              <Route path="/" element={<Home />} />
              
              {/* PRODUCTS PAGE - Shows all products with category filters */}
              <Route path="/products" element={<Products />} />
              
              {/* PRODUCT DETAIL PAGE - Shows single product details */}
              {/* :id is a dynamic parameter (e.g., /products/1, /products/2) */}
              <Route path="/products/:id" element={<ProductDetail />} />
              
              {/* CART PAGE - Shopping cart with checkout */}
              <Route path="/cart" element={<Cart />} />
              
              {/* REVIEWS PAGE - Customer reviews and testimonials */}
              <Route path="/reviews" element={<Reviews />} />
              
              {/* CUSTOMIZATION PAGE - Information about customization process */}
              <Route path="/customization" element={<Customization />} />

              {/* ABOUT ME PAGE - Personal story */}
              <Route path="/about" element={<AboutMe />} />
              
              {/* ADD NEW ROUTES HERE:
              <Route path="/your-page" element={<YourPage />} />
              */}
            </Routes>
          </main>
          
          {/* FOOTER - Appears on all pages */}
          <Footer />
          
          {/* CART NOTIFICATION - Animated notification when item is added */}
          <CartNotification />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
