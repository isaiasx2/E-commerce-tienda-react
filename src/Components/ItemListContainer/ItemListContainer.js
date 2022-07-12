import React, {useState, useEffect} from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ItemList } from "../ItemList/ItemList";
import {useParams} from "react-router-dom";
import "./ItemistContainer.css";








export const ItemListContainer = ()=>{
   
    const [item, setItem] = useState([]);

    const {categoriaId} = useParams();

    

    
    
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "articulos");





    useEffect(()=>{
        

        if(categoriaId){
            const queryFilter = query(queryCollection, where('category', '==', categoriaId));
            getDocs(queryFilter)
            .then(res => setItem(res.docs.map(articulo => ({id: articulo.id, ...articulo.data()}))))
            .catch(err => console.log(err))
        }
            else {
            getDocs(queryCollection)
            .then(res => setItem(res.docs.map(articulo => ({id:articulo.id, ...articulo.data()}))))
            .catch(err => console.log(err))
            }

    }, [categoriaId])


    
    

    return(
        <section className="catalogo">
        
        <ItemList item={item}/>
       
        </section>
    )
}