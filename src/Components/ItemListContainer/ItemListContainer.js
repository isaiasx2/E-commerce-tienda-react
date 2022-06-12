import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";




export const ItemListContainer = (props)=>{
    
    const onAdd = (cantidad)=>{
        alert(`Sumaste ${cantidad} unidades `);
    }

    

    return(
        <section>
        <h1>{props.mensaje}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
       
        </section>
    )
}