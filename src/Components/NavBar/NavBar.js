import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {BsPhoneVibrate} from 'react-icons/all'
import {GiPunchBlast} from 'react-icons/all'
import {GiFrogPrince} from 'react-icons/all'
import {NavLink} from "react-router-dom"








export const NavBar  = ()=> {
  
    return (
      
      <header>
    
      <nav className='navegacion'>
      <h1><NavLink className="nav__link" to="/">Tienda de remeras Comic-Heros</NavLink></h1>
      <ul>
      <li>
      <NavLink className="nav__link" to="/categoria/marvel" ><GiPunchBlast/>Marvel Team</NavLink> </li>
      
      <li><NavLink className="nav__link" to="/categoria/dc" ><GiFrogPrince/>Dc Team</NavLink></li>
      
      
      <li><NavLink className="nav__link" to="/contacto" ><BsPhoneVibrate/>Contacto</NavLink></li>
      
      <li><NavLink className="nav__link" to="cart" ><CartWidget/>Carrito</NavLink></li>
      
      </ul>
      
      </nav>
      
      </header>
    )
}

export default NavBar;


