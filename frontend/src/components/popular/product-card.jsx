import React from 'react';
import { Link } from 'react-router-dom';

const Productcard = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={image} alt={name} className="product-image" />
      </Link>
      <h3>{name}</h3>
      <p>
        <span className="new_price">₹{new_price}</span>{' '}
        <span className="old_price">₹{old_price}</span>
      </p>
    </div>
  );
};

export default Productcard;
