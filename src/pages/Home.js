import React from 'react';
import '../App.css';

const Home = ({ products, addToCart }) => {
  if (!products.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="products-container">
      {products.map(product => (
        <div className="product-card" key={product.id}>
          <div className="product-image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            <button className="btn-buy">Buy Now</button>
            <button className="btn-add-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
