
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Orders from './Components/Orders';
import Wishlist from './Components/Wishlist';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
