import React from "react";
import { Item } from "../Item";
import { ItemListContainer } from "../ItemListContainer";




export const Children = ()=>{
    return(<section>
        <ItemListContainer >
            <Item mensaje='Articulos para la venta'/>
        </ItemListContainer>
        </section>
    )

}