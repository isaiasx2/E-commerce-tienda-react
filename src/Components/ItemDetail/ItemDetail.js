import React from 'react';
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


export const ItemDetail = ({item}) => {
  
  const [goToCart, setGoToCart] = useState(0);

  const {addItem} = useCartContext();
  
 
  console.log(goToCart)
  
  
  
  
  
  
  const onAdd = (quantity)=>{
    setGoToCart(quantity);
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
              
              goToCart<1
              ?<ItemCount initial={1} stock={5} onAdd={onAdd}/>
              :<Link to="/cart" className="terminar__compra">Terminar compra</Link>
            }
            </div>
        </div>
    </div>
  )
}


