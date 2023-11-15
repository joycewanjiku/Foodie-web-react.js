import React from 'react';
import './style.css'
import First from "../Image-container/first.png";
import Second from "../Image-container/second.png";
import Third from "../Image-container/third.png";

export const MenuList = [
  {
    image: First,
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: Second,
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: Third,
    name: 'French Fries',
    order: 'Order Now',
  },
];

const Menu = () => {
  return (
    <div className="products">
      {MenuList.map((item, index) => (
        <div key={index} className="productkey">
          <img src={item.image} alt={item.name} className="productimage" />
          <p className="productprice">{item.name}</p>
          <p className="productdiscount">{item.order}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;