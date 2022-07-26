import React from 'react';
import "./ItemDetail.css"
import { ItemCount } from '../ItemCount/ItemCount';
import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import {Card,Button} from "react-bootstrap";


export const ItemDetail = ({item}) => {
  
  const [goToCart, setGoToCart] = useState(0);

  const {addItem} = useCartContext();
  
 
  console.log(goToCart)
  
  
  
  
  
  
  const onAdd = (quantity)=>{
    setGoToCart(quantity);
    addItem(item, quantity);
    
}


  return (
    <Card className="contenedor__card" style={{ 
    width: "18rem",
    display:"flex",
    justifyItems:"center"}}>
        
      <Card.Img variant="top" src={item.pictureUrl} alt=""/>
        <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>"{item.description}"</Card.Text>
            <Card.Subtitle>Precio : {item.price}$</Card.Subtitle>
        </Card.Body>
         <div className="boton__carrito">
            {
              
            goToCart<1
            ?<ItemCount initial={1} stock={5} onAdd={onAdd}/>
            :<Link to="/cart" ><Button style={{margin: "5px",}} className="outline-primary">Terminar compra</Button></Link>
            }
          </div>
        
    </Card>
  )
}


