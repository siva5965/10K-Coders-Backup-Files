import React from 'react'
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
          
        </li>
        <li className="nav-item">
        <Link to={"/aboutus"} className="nav-link">
          AboutUs
        </Link>
       
        </li>
        <li className="nav-item">
        <Link to={"/contactus"} className="nav-link">
          Contactus
        </Link>
         
        </li>
        <li className="nav-item">
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
         </li>
         <li className="nav-item">
         <Link to={"/register"} className="nav-link">
          Register
         </Link>
         
         </li>       
         
    
      </ul>
    </div>
  </div>
</nav>
 

    </div>
  )
}

export default NavBar