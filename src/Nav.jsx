import logo from './PS0_746661b01c04-mobile.jpg';
import shop from './shop.jpg';
import hamburger from './hamburger.jpg';
import { useState, useEffect, useRef } from 'react';

const Nav = () => {
  const [toggleDown, setToggleDown] = useState(false);
  const dropdownRef = useRef(null); // Create a reference for the dropdown

  const handleClickOutside = (event) => {
    // Check if the clicked element is outside the dropdown and hamburger menu
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggleDown(false); // Close the dropdown
    }
  };

  useEffect(() => {
    if (toggleDown) {
      // Add event listener to detect clicks outside
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      // Remove event listener when the dropdown is closed
      document.removeEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleDown]);

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="PlayStation logo" className="icon" />
        <div className="nav_link_container">
          <a href="#products" className="nav_link">Products</a>
          <a href="#games" className="nav_link">Games</a>
          <a href="#service" className="nav_link">Service</a>
          <a href="#contact" className="nav_link">Contact</a>
        </div>
        <div className="icon_container">
          <img src={shop} alt="Shop Icon" className="icon" />
          <img
            src={hamburger}
            alt="Hamburger Menu"
            className="hamburger"
            onClick={() => setToggleDown((prev) => !prev)}
          />
        </div>
      </nav>
      {toggleDown && (
        <div className="dropdown" ref={dropdownRef}>
          <a href="#products" className="dropdown_link">Products</a>
          <a href="#games" className="dropdown_link">Games</a>
          <a href="#service" className="dropdown_link">Service</a>
          <a href="#contact" className="dropdown_link">Contact</a>
        </div>
      )}
    </header>
  );
};

export default Nav;
