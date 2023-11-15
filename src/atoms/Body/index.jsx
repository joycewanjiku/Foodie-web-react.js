import React from "react";
import './style.css';
import Shadow from "../../components/Image-container/shadow.png";
import Buy from "../../components/Image-container/buy.png"
import Person from "../../components/Image-container/person.png"
import Play from "../../components/Image-container/Screenshot_from_2023-08-22_12-05-28-removebg-preview.png"
import Delivery from "../../components/Image-container/wallet.png"
const Body = () => {
  return (
    <>
      <div className="all">
        <div className="allfood">
          <h2 className="we">All Fast Food is <br /> Available at Foodle</h2>
          <div className="man">
          <div><img src={Person} alt="image" className="imageproduct"/></div>
          <div><p>We Are Just A click Away When You <br /> Crave For Delicious Fast Food</p></div>
          </div>
          <div className="playb">
          <img src={Buy} alt="image" className="productesimage" /><img src={Play} alt="image" className="productesimage" />
          </div>
        </div>
        <div>
          <img src={Shadow} alt="image" className="productsssimage" />
        </div>
      </div>
      <div className="fast">
        <div className="dev">
        <div className="deliv">
        <img src={Delivery} alt="image" className="productsimage" />
        </div>
        <div className="fastdeliv">
          <h3>Fast Delivery</h3>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
          </div>
        </div>
        <div className="dev">
          <div className="deliv">
        <img src={Delivery} alt="image" className="productsimage" />
        </div>
        <div className="fastdeliv">
          <h3>Fast Delivery</h3>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
          </div>
        </div>
        <div className="dev">
        <div className="deliv">
        <img src={Delivery} alt="image" className="productsimage" />
        </div>
        <div className="fastdeliv">
          <h3>Fast Delivery</h3>
          <p>The Food will Be Delivered To <br />Your Home Within 1-2 Hours Of <br />Your Ordering</p>
          </div>
        </div>
      </div>
      <div className="best">
        <div className="best2">
          <h2>
            Best 
            <span>Delivered</span>
            <br />
            Categories
          </h2> 
        </div>
        <div className="here">
          <p>Here Are Some Of Our Best Distributed <br />Categories. If You Want You Can Order <br />From Here</p>
        </div>
      </div>
    </>
  );
};

export default Body;