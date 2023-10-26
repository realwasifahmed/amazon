import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import Footer from './components/Footer/Footer.jsx';
import Checkout from './components/checkout/Checkout';
import Products from './components/Products/Products';
import ProductPage from './components/Products/SingleProduct/SingleProduct';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product' element={<ProductPage />}>
            <Route path=':title' element={<ProductPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
