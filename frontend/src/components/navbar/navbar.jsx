import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import cart from '../assets/cart.png'
import { Shopcontext } from '../../context/shopcontext';

const Navbar = () => {
  const [menu, setMenu] = useState("Home");
  const {gettotalcart} = useContext(Shopcontext)
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
        <Link to = '/login'><button className='button-btn'>Login</button></Link>
        <Link to = '/cart'><img src={cart} alt="" /></Link>
        <div className="nav-count">{gettotalcart()}</div>
      </div>
    </div>
  );
};

export default Navbar;
