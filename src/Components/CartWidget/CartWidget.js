import React from "react";
import {FaOpencart} from 'react-icons/all'
import { useCartContext } from "../../context/CartContext";



export const CartWidget = ()=>{
    const { totalProducts } = useCartContext();
    return(
        <>
        <FaOpencart />
       
        {console.log("productos :", totalProducts())}
        </>
        
       
    )
}


