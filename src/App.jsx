import './App.css';

import { 
  useState
} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { CartContext } from './Context/CartContext';

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Categories from './Pages/Categories/Categories';


function App() {
  const cartProducts = [];

  return (
    <Router>

      <CartContext.Provider value={cartProducts}>
        <Nav/>

        <div className="center">
          <Routes>
              <Route path='/' element={<Home/>}/>

              <Route path='/product/:id' element={<Product/>}/>

              <Route path='/categories/:category' element={<Categories/>}/>
          </Routes>
        </div>
      </CartContext.Provider>

      <Footer/>

    </Router>
  );
}

export default App;
