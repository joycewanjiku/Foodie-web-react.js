import React from 'react';
import './style.css';
import Brown from "../Image-container/brown.png";
import Star from "../Image-container/star.png";
import Yellow from "../Image-container/yellow.png";

export const MenuList = [
  {
    image: Star,
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: Brown,
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: Yellow,
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Allmenu = () => {
  return (
    <div className="productes">
      <div className="larger-image">
        <img src={Star} alt="" className="productimageslarger" />
      </div>
      <div className="productkeys">
        {MenuList.slice(1).map((item, index) => (
          <div key={index} className="product-item">
            <img src={item.image} alt={item.name} className="productimages"/>
            <div className="product-details">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allmenu;