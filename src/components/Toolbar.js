import React from 'react';
import logo from './images/logo.jpg'; // Ensure the logo image is in the correct path

function Toolbar() {
  return (
    <header className="toolbar">
      <img src={logo} alt="SmartFix Logo" className="logo" />
      <div className="search-bar">
        <input type="text" placeholder="Search for mobiles, accessories & More" />
      </div>
      <div className="location">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
          <path d="M12.166 8.94c-.276.526-.625 1.09-1.053 1.69-1.041 1.46-2.396 3.164-4.059 5.106A.5.5 0 0 1 6 16.098a.5.5 0 0 1-.195-.362c-1.663-1.943-3.018-3.646-4.059-5.106C1.46 10.03 1.11 9.466.834 8.94A6.959 6.959 0 0 1 .5 8C.5 3.887 3.887.5 8 .5s7.5 3.387 7.5 7.5c0 .787-.09 1.526-.334 2.44ZM8 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
        </svg>
        Gurgaon
      </div>
      <button className="login-button">Login</button>
    </header>
  );
}

export default Toolbar;
