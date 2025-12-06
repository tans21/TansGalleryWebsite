/**
 * BUTTERFLY MAGIC COMPONENT
 * 
 * This component creates animated butterflies that flutter around text
 * with magical sparkle effects.
 */

import './ButterflyMagic.css';

const ButterflyMagic = ({ children }) => {
  return (
    <div className="butterfly-magic-container">
      {children}
      {/* Animated butterflies */}
      <div className="butterfly butterfly-1">🦋</div>
      <div className="butterfly butterfly-2">🦋</div>
      <div className="butterfly butterfly-3">🦋</div>
      <div className="butterfly butterfly-4">🦋</div>
      
      {/* Sparkle effects */}
      <div className="sparkle sparkle-1">✨</div>
      <div className="sparkle sparkle-2">✨</div>
      <div className="sparkle sparkle-3">✨</div>
      <div className="sparkle sparkle-4">✨</div>
      <div className="sparkle sparkle-5">✨</div>
      <div className="sparkle sparkle-6">✨</div>
    </div>
  );
};

export default ButterflyMagic;

