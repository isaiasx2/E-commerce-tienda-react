
import React from "react";
import { Item } from "../Item/Item";



export const ItemList = ({item = []})=>{
   return(
    item.map(remera=><Item key={remera.id} info={remera}/>)
   );
}