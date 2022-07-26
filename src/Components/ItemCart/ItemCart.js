import React from "react";
import "./ItemCart.css"
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button"
import  Card  from "react-bootstrap/Card";



export const ItemCart = ({product})=>{
    const {removeProduct} = useCartContext();
    








    return (
        <div className="producto__carrito">

        <Card style={{style:"18rem", width:"200px", height:"auto" }}>
        <Card.Img  variant="top" src={product.pictureUrl} alt={product.name}/>
        <Card.Body>
            <Card.Title>Nombre : {product.name}</Card.Title>
            <Card.Subtitle>Cantidad : {product.quantity}</Card.Subtitle>
            <Card.Text>Precio : {product.price}</Card.Text>
            <Card.Text>Subtotal : ${product.quantity * product.price}</Card.Text>
            <Button variant="primary" onClick={()=> removeProduct(product.id)}>Eliminar</Button>
           
        </Card.Body>
            

        

        </Card></div>



    )




}