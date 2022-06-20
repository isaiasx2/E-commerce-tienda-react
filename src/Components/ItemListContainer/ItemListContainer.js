import React, {useState, useEffect} from "react";

import { ItemList } from "../ItemList/ItemList";
import { Articulos } from "../Articulos/Articulos";
import {useParams} from "react-router-dom";
import "./ItemistContainer.css";








export const ItemListContainer = ()=>{
   
    const [item, setItem] = useState([]);

    const {categoriaId} = useParams();

    const getItem = new Promise(resolve => {
        setTimeout(()=>{
            resolve(Articulos)
        }, 2000);
    });

    useEffect(()=>{
        if(categoriaId){
            getItem.then(res => setItem(res.filter(Articulos=>Articulos.category===categoriaId)));
        }
        else {
            getItem.then(res=>setItem(res))
            }

    }, [categoriaId])


    
    

    return(
        <section className="catalogo">
        
        <ItemList item={item}/>
       
        </section>
    )
}