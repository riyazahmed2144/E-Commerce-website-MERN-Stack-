import React, { useContext } from 'react';
import { Shopcontext } from '../context/shopcontext';
import './shopcategory.css';
import Icon from '../components/assets/dropdown.png';
import Productcard from '../components/popular/product-card';

const Shopcategory = ({ banner, category }) => {
  const { All_product } = useContext(Shopcontext);

  const filteredProducts = All_product.filter(
    (item) => item.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="shop-category">
      <div className="image">
        <img src={banner} alt="Category banner" />
      </div>

      <div className="product-indexsort">
        <p>
          <span>Showing 1‑{Math.min(90,8)}</span>{' '}
          out of {filteredProducts.length} products
        </p>
      <div className="shop-categoryicon">
        Sort by <img src={Icon} alt="Sort icon" />
      </div>
      </div>
      <div className="shop-sort">
        {filteredProducts.slice(0, 8).map((item) => (
          <Productcard
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-products">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Shopcategory;
