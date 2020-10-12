import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HbEcHDiwjL2tS4Xevnj5xa1hhMRT81eXRRyunQGkoZfWyNf9OPs5N84KPYpjFQJ9Kf6H033VfxBtXJRyRNJ2pNV00kafaOIIr";
  const onToken = (token) => {
    console.log(token);
    alert("Pay successful");
  };
  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
