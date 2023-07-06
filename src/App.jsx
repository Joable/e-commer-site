import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
    <Nav/>

    <div className="center">
      <Routes>
          <Route path='/' element={<Home/>}/>
      </Routes>
    </div>

    <Footer/>
    </Router>
  );
}

export default App;
