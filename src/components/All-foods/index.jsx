import React from 'react';
import './style.css'
import Circle from '../Image-container/circle.png';
import Circle1 from '../Image-container/circle1.png';
import Circle2 from '../Image-container/circle2.png';
import Circle3 from '../Image-container/circle3.png';
import Circle4 from '../Image-container/circle.png';
import Circle5 from '../Image-container/circle5.png';
import {FaStar} from 'react-icons/fa'

const MenuList = [
  {
    image: Circle,
    name: 'Chicken Burger',
    order: 'Order Now',
  },
  {
    image: Circle1,
    name: 'Chicken Pizza',
    order: 'Order Now',
  },
  {
    image: Circle2,
    name: 'French Fries',
    order: 'Order Now',
  },
  {
    image: Circle3,
    name: 'French Fries',
   
  },
  {
    image: Circle4,
    name: 'French Fries',
    
  },
  {
    image: Circle5,
    name: 'French Fries',
    
  },
];

const Manual = () => {
  return (
    <div className="product">
      <h1>Our <span>Regular</span> Menu</h1>
      <p className='p'>These Are Our Regular Menus. You Can<br />Order Anything You Like</p>
      <div className="product-container">
        {MenuList.map((item, index) => (
          <div key={index} className="product-item">
            <div className="product-image-container">
              <img src={item.image} alt={item.name} className="product-image" />
            </div>
            <div className="product-details">
              <p className="product-name">{item.name}</p>
             <p className='star'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/> <span>(112)</span></p> 
            <p>$4.80 &nbsp; &nbsp; &nbsp;<button className="buy-button">Buy Now</button></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manual;