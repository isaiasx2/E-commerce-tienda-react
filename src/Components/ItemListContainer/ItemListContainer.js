import React, {useState, useEffect} from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { ItemList } from "../ItemList/ItemList";

const remeras = [
    {id:1, pictureUrl: "https://tap-multimedia-1172.nyc3.digitaloceanspaces.com/productimage/19722/3720000000224.jpg", nombre:"Remera iconos avengers", price: 2000, description: "Remera con iconos Avengers en circulo"},
    {id:2, pictureUrl: "https://d3ugyf2ht6aenh.cloudfront.net/stores/608/580/products/muestra-hombre3-93f1e1425ba98d8b8715249532129887-1024-1024.jpg", nombre: "Remera hulk", price: 1500, description: "Remera con tematica de Hulk"},
    {id:3, pictureUrl: "https://http2.mlstatic.com/D_NQ_NP_641262-MLA31351999365_072019-O.jpg", nombre: "Remera infinito", price: 1500, description: "Remera con tematica saga del infinito"}
]







export const ItemListContainer = (props)=>{
   
    const [item, setItem] = useState([]);



    useEffect(()=>{
        const getItem = new Promise(resolve => {
            setTimeout(()=>{
                resolve(remeras)
            }, 2000);
        });
        
        getItem.then(res => setItem(res));

    }, [])


    const onAdd = (cantidad)=>{
        alert(`Sumaste ${cantidad} unidades `);
    }

    

    return(
        <section>
        <h1>{props.mensaje}</h1>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        <ItemList item={item}/>
       
        </section>
    )
}