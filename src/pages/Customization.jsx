/**
 * CUSTOMIZATION PAGE
 * 
 * This page explains how customization works at TansGallery.
 * It provides information about the customization process, benefits, and options.
 */

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Customization.css';

const Customization = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleStartCustomizing = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleProceed = () => {
    setShowModal(false);
    navigate('/products'); // Redirect to products so they can browse
  };

  return (
    <div className="customization-page">
      {/* INSTRUCTION MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>How to Order Custom Cards</h2>
              <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-body">
              <ol className="instruction-list">
                <li>
                  <span className="instruction-icon">🔍</span>
                  <div>
                    <strong>Browse Products</strong>
                    <p>Choose your desired card design from our collection.</p>
                  </div>
                </li>
                <li>
                  <span className="instruction-icon">🛒</span>
                  <div>
                    <strong>Add to Cart</strong>
                    <p>Select options and add the card to your shopping cart.</p>
                  </div>
                </li>
                <li>
                  <span className="instruction-icon">💳</span>
                  <div>
                    <strong>Proceed to Checkout</strong>
                    <p>Go to your cart and click "Proceed to Checkout".</p>
                  </div>
                </li>
                <li>
                  <span className="instruction-icon">✍️</span>
                  <div>
                    <strong>Add Customization</strong>
                    <p>Enter your custom details (names, messages) in the checkout popup.</p>
                  </div>
                </li>
              </ol>
            </div>
            <div className="modal-footer">
              <button className="cta-button primary" onClick={handleProceed}>
                Browse Products Now
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="customization-container">
        {/* HERO SECTION */}
        <section className="customization-hero">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="sparkle">🌟</span> CUSTOMIZATION MADE EASY
            </h1>
            <p className="hero-description">
              At TansGallery, we believe every message becomes more meaningful when it's personal.
            </p>
            <p className="hero-subdescription">
              That's why we offer simple, stress-free customization on all our cards — designed exactly the way you want.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="how-it-works">
          <h2 className="section-title">
            How Customization Works <span className="sparkle">✨</span>
          </h2>
          
          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Choose Your Card</h3>
                <p>
                  Select any design you love from our collection — Wedding, Birthday, Thank You, Graduation, or Christmas.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Share Your Details</h3>
                <p>
                  Send us your custom message, names, dates, or special instructions.
                  You can also request:
                </p>
                <ul className="request-list">
                  <li>Color changes</li>
                  <li>Font/style preferences</li>
                  <li>Photo additions</li>
                  <li>Completely new wording</li>
                </ul>
                <p className="note">We keep the process flexible and easy.</p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>We Create a Draft for You</h3>
                <p>
                  Our designer creates a preview/digital mockup of your customized card.
                  You get to review it and request changes — free of cost.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Approve & Print</h3>
                <p>
                  Once you're happy with the design, we print it on premium-quality paper with beautiful finish.
                </p>
              </div>
            </div>

            <div className="step-item">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Delivered with Care</h3>
                <p>
                  Your customized card is packed safely and delivered right to your doorstep.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CUSTOMERS LOVE SECTION */}
        <section className="why-love">
          <h2 className="section-title">
            Why Customers Love Our Customization
          </h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <span className="checkmark">✔</span>
              <p>Simple and quick process</p>
            </div>
            <div className="benefit-item">
              <span className="checkmark">✔</span>
              <p>Unlimited small edits until you love it</p>
            </div>
            <div className="benefit-item">
              <span className="checkmark">✔</span>
              <p>Premium printing & colors</p>
            </div>
            <div className="benefit-item">
              <span className="checkmark">✔</span>
              <p>Option to add personal photos</p>
            </div>
            <div className="benefit-item">
              <span className="checkmark">✔</span>
              <p>Perfect for gifting and special moments</p>
            </div>
          </div>
        </section>

        {/* WHAT YOU CAN CUSTOMIZE SECTION */}
        <section className="customize-options">
          <h2 className="section-title">
            What You Can Customize
          </h2>
          <div className="options-grid">
            <div className="option-card">
              <div className="option-icon">✍️</div>
              <h3>Your personal message</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">📅</div>
              <h3>Names & dates</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">💭</div>
              <h3>Quotes or greetings</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">📄</div>
              <h3>Front cover / Inside text</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">📸</div>
              <h3>Photos & layouts</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">🎨</div>
              <h3>Colors / Themes</h3>
            </div>
            <div className="option-card">
              <div className="option-icon">✨</div>
              <h3>Symbols / Graphics</h3>
            </div>
          </div>
          <p className="imagine-text">
            If you imagine it, we can create it.
          </p>
        </section>

        {/* HELP SECTION */}
        <section className="help-section">
          <div className="help-card">
            <h2 className="section-title">
              We're Here to Help
            </h2>
            <p className="help-text">
              Not sure what to write or how to design it?
              We guide you with suggestions so your card carries the emotion exactly the way you want.
            </p>
            <div className="cta-buttons">
              <Link to="/products" className="cta-button primary">
                Browse Our Cards
              </Link>
              <button className="cta-button secondary" onClick={handleStartCustomizing}>
                Start Customizing
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Customization;

