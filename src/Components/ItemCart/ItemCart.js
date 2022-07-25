import React from "react";
import "./ItemCart.css"
import { useCartContext } from "../../context/CartContext";
import Button from "react-bootstrap/Button"



export const ItemCart = ({product})=>{
    const {removeProduct} = useCartContext()
    return (

        <div className="itemCart">
        <img src={product.pictureUrl} alt={product.name}/>
        
            <p>Nombre : {product.name}</p>
            <p>Cantidad : {product.quantity}</p>
            <p>Precio U. : {product.price}</p>
            <p>Subtotal : ${product.quantity * product.price}</p>
            <Button variant="primary" onClick={()=> removeProduct(product.id)}>Eliminar</Button>
           
           
            

        

        </div>



    )




}