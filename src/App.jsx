import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <ProductList products={products} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
