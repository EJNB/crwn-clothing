import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-container">
        <img alt="" />
      </div>
      <span className="name">{cartItem.name}</span>
      <span className="quantity">{cartItem.quantity}</span>
      <span className="price">{cartItem.price}</span>
      <div className="remove-button">&#1005;</div>
    </div>
  );
};

export default CheckoutItem;
