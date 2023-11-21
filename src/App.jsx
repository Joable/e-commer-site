import './App.css';

import { 
  useEffect, 
  useState
} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import { CartContext } from './Context/CartContext';
import { getCartInventory } from './Services/getCartInventory';

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Categories from './Pages/Categories/Categories';

function App() {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const getData = async () =>{
      try{
        const response = await getCartInventory();

        setCartProducts(response);
      }catch(e){
        console.log(e);
      };
    };

    getData();
  }, []);

  return (
    <Router>
      <CartContext.Provider value={{
        cartProducts,
        setCartProducts
      }}>

      <Nav/>

      <div className="center">
        <Routes>
            <Route path='ecommerceBuild/' element={<Home/>}/>

            <Route path='ecommerceBuild/product/:id' element={<Product/>}/>

            <Route path='ecommerceBuild/categories/:category' element={<Categories/>}/>
        </Routes>
      </div>
      </CartContext.Provider>


      <Footer/>

    </Router>
  );
}

export default App;
