import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Categories from './Pages/Categories/Categories';

function App() {
  return (
    <Router>
    <Nav/>

    <div className="center">
      <Routes>
          <Route path='/' element={<Home/>}/>

          <Route path='/product' element={<Product/>}/>

          <Route path='/categories' element={<Categories/>}/>
      </Routes>
    </div>

    <Footer/>
    </Router>
  );
}

export default App;
