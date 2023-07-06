import './App.css';

import Footer from './Components/Footer/Footer';
import Nav from './Components/Nav/Nav';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <Nav/>

    <div className="center">
      <Home/>
    </div>

    <Footer/>
    </>
  );
}

export default App;
