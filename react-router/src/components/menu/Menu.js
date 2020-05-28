import React from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';

function Menu() {
	const navStyle = {
		color:"white",
		textDecoration:"none"
	}
  return (
    <nav>
	    <h3>Logo</h3>
      <ul className="nav-links">
        <li><Link style={navStyle} to="/about">About</Link></li>
        <li><Link style={navStyle}  to="/shop">Shop</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
