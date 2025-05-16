import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
       <li onClick={() => setMenu('shop')}>
        <Link to ='/' className={menu === "shop" ? "active": ""}>shop</Link>
       </li>
       <li onClick={() => setMenu('mens')}>
        <Link to ='/mens' className={menu === "mens" ? "active": ""}>mens</Link> 
       </li>
       <li onClick={() => setMenu('womens')}>
        <Link to = '/womens' className={menu === "womens" ? "active": ""}>womens</Link>
       </li>
       <li onClick={() => setMenu('kids')}>
        <Link to = '/kids' className={menu === "kids" ? "active": ""}>kids</Link>
       </li>
      </ul>
      <div className="login">
        <Link to = '/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
