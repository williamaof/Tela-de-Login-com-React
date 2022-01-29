import React, {useState} from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <span className="navbar-brand " >Navbar</span>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
          </ul>
        </div>
  </div>
</nav>
    )
}

export default Navbar;