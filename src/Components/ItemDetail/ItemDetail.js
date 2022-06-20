import React from 'react';
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';


export const ItemDetail = ({item}) => {
  const onAdd = (cantidad)=>{
    alert(`Sumaste ${cantidad} unidades `);
}


  return (
    <div className="container">
        <div className="detail">
            <img className="detail__image" src={item.pictureUrl} alt=""/>
            <div className="contents">
                <h2>{item.nombre}</h2>
                <p>"{item.description}"</p>
                <span>Precio : {item.price}$</span>
            </div>
            <div className="boton__carrito">
            <ItemCount  initial={1} stock={5} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

