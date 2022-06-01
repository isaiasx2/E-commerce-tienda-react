import React from 'react';
import "./NavBar.css"
import "./images/iphone.png"

export default function NavBar() {
return (
  <div className="contenedor_nav_padre"> 
    <div>  
    <h1 className='titulo__nombre'>Tienda de remeras     "Comic-Heros" </h1>
    </div>
    <div className="contenedor_nav">
      
      <nav className="nav-primario">
      <a href="#" id="boton_dc">¡DC-Team!</a>
      <a href="#" id="boton_marvel">¡MARVEL-Team!</a>
      <a href="#" id="boton_nosotros">Nosotros</a>
      <a href="#" id="boton_contacto">Contacto</a>
      </nav>
      

    </div>
  </div>
)
};
  
