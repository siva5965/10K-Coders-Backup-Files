import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import NavBar from './Components/NavBar';
import Aboutus from './Components/Aboutus';
import Contactus from './Components/Contactus';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>

    
      </BrowserRouter>

      
    </div>
  );
}

export default App;
