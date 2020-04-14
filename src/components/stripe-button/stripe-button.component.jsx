import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publichableKey = 'pk_test_oNz0XZOB0al3GXgvjNcnAagw00lk4pT9Hq';

const onToken = token => {
  console.log(token);
  alert('Payment Successful');
}

  return (
    <StripeCheckout
      label='Pay Now'
      name='CROWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publichableKey}
    />
  )
}

export default StripeCheckoutButton;