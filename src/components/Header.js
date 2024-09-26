// Header.js
import React, { useEffect, useState } from 'react';
import '../pages/HomePage.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom';

const Header = ({ scrollContainer }) => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (scrollContainer) {
      const isScrolled = scrollContainer.scrollTop > 0.1; // Adjust this value as needed
      setScrolled(isScrolled);
    }
  };

  useEffect(() => {
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [scrollContainer]);

  return (
    <header className={`header-section ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src='/images/cropped-Final-Rozana-2-255x225.png' alt="Rozana Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Home</Link></li> {/* Link to Home page */}
          <li><Link to="/menu">Menu</Link></li> {/* Link to Menu page */}
          <li><a href="#">Location</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
