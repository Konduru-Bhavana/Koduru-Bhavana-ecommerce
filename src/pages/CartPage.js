import React from 'react';
import '../components/cart.css';

const CartPage = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p className="price">${item.price}</p>
                <p className="description">{item.description}</p>
                <button className="btn-buy">Buy Now</button>
                <button className="btn-add-cart" disabled>Added to Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
