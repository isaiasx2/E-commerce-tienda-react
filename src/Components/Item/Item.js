import React from "react";
import "./Item.css";



export const Item = ({info})=>{
    return(
        <div href="/#" className="remera">
            <img src={info.pictureUrl} alt="imagen-remera"></img>
            <p>{info.nombre}</p>
            <span>Precio: {info.price}$</span>
            <button>Descripcion</button>
        </div>
    );
}