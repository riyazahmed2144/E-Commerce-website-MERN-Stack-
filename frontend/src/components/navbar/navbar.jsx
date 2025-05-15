import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");

  const handleMenuClick = (item) => {
    setMenu(item);
  };

  return (
    <div className='navbar'>
      <div className="navbar-icon">
        <p>Nemo</p>
      </div>
      <ul className="nav-menu">
        {["Home", "Mens", "Womens", "Kids"].map((item) => (
          <li
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => handleMenuClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="login">
        <button>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
