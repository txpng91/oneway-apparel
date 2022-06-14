import React from 'react';
import NavBar from './components/NavBar';
import Main from './Pages/Main';
import About from './Pages/About';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
