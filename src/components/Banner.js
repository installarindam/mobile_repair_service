import React, { useState, useEffect } from 'react';
import banner1 from './images/casifybanner2.jpg';
import banner2 from './images/casifybanner.jpg';

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="slides">
        <div className="slide" style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
          <img src={banner1} alt="Banner 1" />
        </div>
        <div className="slide" style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
          <img src={banner2} alt="Banner 2" />
        </div>
      </div>
      <button className="prev" onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + 2) % 2)}>&#10094;</button>
      <button className="next" onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % 2)}>&#10095;</button>
      <div className="dots">
        <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></span>
        <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></span>
      </div>
    </div>
  );
}

export default Banner;
