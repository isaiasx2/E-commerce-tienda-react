import React from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import {BsPhoneVibrate} from 'react-icons/all'
import {IoIosPeople} from 'react-icons/all'
import {GiPunchBlast} from 'react-icons/all'
import {GiFrogPrince} from 'react-icons/all'








export const NavBar  = ()=> {
  
    return (
      
    
      <>
      <a href='#' target="_blank"><GiFrogPrince/>Dc Team</a>
      <a href='#' target="_blank"><GiPunchBlast/>Marvel Team</a> 
      <a href='#' target="_blank"><IoIosPeople/>Nosotros </a> 
      <a href='#' target="_blank"><BsPhoneVibrate/>Contacto</a>
      <a href='#' target="_blank"><CartWidget/>Carrito</a>
      
      </>
      
      
    )
}

export default NavBar;


