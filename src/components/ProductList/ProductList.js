import React from 'react';

export default ({ addToCart, removeFromCart }) => {
  return (
    <div>
      <button onClick={addToCart}>add to cart</button>
      <button onClick={removeFromCart}>remove from cart</button>
    </div>
  );
}