import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {BsPhoneVibrate} from 'react-icons/all'
import {IoIosPeople} from 'react-icons/all'
import {GiPunchBlast} from 'react-icons/all'
import {GiFrogPrince} from 'react-icons/all'








export const NavBar  = ()=> {
  
    return (
      
    
      <nav className='navegacion'>
      <ul>
      <li><a href='#' target="_blank"><GiFrogPrince/>Dc Team</a></li>
      <li><a href='#' target="_blank"><GiPunchBlast/>Marvel Team</a> </li>
      <li><a href='#' target="_blank"><IoIosPeople/>Nosotros </a> </li>
      <li><a href='#' target="_blank"><BsPhoneVibrate/>Contacto</a></li>
      <li><a href='#' target="_blank"><CartWidget/>Carrito</a></li>
      </ul>
      
      </nav>
      
      
    )
}

export default NavBar;


