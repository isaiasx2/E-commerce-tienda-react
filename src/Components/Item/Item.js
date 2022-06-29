import React from "react";
import "./Item.css";
import {Link} from "react-router-dom";




export const Item = ({info})=>{

    

    return(
        <Link to={`/detalle/${info.id}`}className="remera">
            <img src={info.pictureUrl} alt="imagen-remera"></img>
            <p>{info.nombre}</p>
            
            <button>Click en la imagen para ver detalles</button>
        </Link>
    );
}