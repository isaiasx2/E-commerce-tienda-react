import React from 'react';
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {BsPhoneVibrate} from 'react-icons/all'
import {IoIosPeople} from 'react-icons/all'
import {GiPunchBlast} from 'react-icons/all'
import {GiFrogPrince} from 'react-icons/all'








export const NavBar  = ()=> {
  
    return (
      
      <section>
    
      <nav className='navegacion'>
      <h1>Tienda de remeras Comic-Heros</h1>
      <ul>
      <li><a href='/#' ><GiFrogPrince/>Dc Team</a></li>
      <li><a href='/#' ><GiPunchBlast/>Marvel Team</a> </li>
      <li><a href='/#' ><IoIosPeople/>Nosotros </a> </li>
      <li><a href='/#' ><BsPhoneVibrate/>Contacto</a></li>
      <li><a href='/#' ><CartWidget/>Carrito</a></li>
      </ul>
      
      </nav>
      
      </section>
    )
}

export default NavBar;


