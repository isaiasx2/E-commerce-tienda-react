import React from 'react';
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


export const ItemDetail = ({item}) => {
  
  const [goToCart, setGoToCart] = useState(false);

  const {addItem} = useCartContext();
  
  
  
  
  
  
  const onAdd = (quantity)=>{
    setGoToCart(true);
    addItem(item, quantity);
    
}


  return (
    <div className="container">
        <div className="detail">
            <img className="detail__image" src={item.pictureUrl} alt=""/>
            <div className="contents">
                <h2>{item.name}</h2>
                <p>"{item.description}"</p>
                <span>Precio : {item.price}$</span>
            </div>
            <div className="boton__carrito">
            {
              goToCart
              ?<Link to="/cart" className="terminar__compra">Terminar compra</Link>
              :<ItemCount initial={1} stock={5} onAdd={onAdd}/>
            }
            </div>
        </div>
    </div>
  )
}

