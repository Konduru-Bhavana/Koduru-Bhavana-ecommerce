import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <h1>Flipkart</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            className="search-bar"
          />
        </nav>
        <Routes>
          <Route path="/" element={<Home products={filteredProducts} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
