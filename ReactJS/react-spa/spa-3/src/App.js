
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './Components/NavBar';
import AboutCollege from './Components/AboutCollege';
import Home from './Components/Home';
import Register from './Components/Register';
import StudentDetails from './Components/StudentDetails';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutCollege' element={<AboutCollege/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Studentdetails' element={<StudentDetails/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
