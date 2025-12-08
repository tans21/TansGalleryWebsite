import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-page">
      <div className="about-container">
        <div className="about-header">
          <span className="flower-icon">🌸</span>
          <h1 className="about-title">About Me</h1>
        </div>

        <div className="about-content">
          <p className="intro-text">
            Hi, I’m <strong>Anshika</strong>, the heart behind TansGallery—a small space where emotions find a home on paper.
          </p>

          <p>
            For as long as I can remember, I’ve loved the magic of handwritten words. The joy of opening a card, the smile it creates, the feeling of being seen and cherished… it all inspired me to build something simple yet meaningful:
          </p>

          <p className="highlight-text">
            a place where every emotion can be expressed beautifully.
          </p>

          <p>
            What started as a quiet love for art and design slowly grew into TansGallery—my personal dream come to life. Every card you see here is thoughtfully designed, carefully refined, and created with the hope that it will bring warmth to someone’s day.
          </p>

          <div className="quote-section">
            <p>I don’t see my cards as just products.</p>
            <p>To me, they are little carriers of love—</p>
            <ul className="meaning-list">
              <li>a moment of happiness,</li>
              <li>a soft reminder,</li>
              <li>a memory someone will keep tucked away forever.</li>
            </ul>
          </div>

          <p>
            Whether it’s a birthday, a wedding, a thank-you, or a simple wish to make someone smile, I want my cards to help you say it in a way that feels true, heartfelt, and unique.
          </p>

          <p>
            And because every person and every bond is different, I offer customization—so your message isn’t just printed, but felt.
          </p>

          <div className="closing-section">
            <p>Thank you for being here.</p>
            <p>Thank you for supporting my small dream.</p>
            <p>And thank you for choosing something handmade, something personal, something created with love.</p>
          </div>

          <p className="final-wish">
            I hope TansGallery becomes a part of your celebrations and memories—one card at a time. 💛
          </p>
          
          <div className="signature-area">
             <Link to="/products" className="browse-button">Browse My Collection</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

