
import React from "react";
import './Titulo.css'

/** TITULO */

export  const Titulo = ()=>{

  
  return(
        
    <>
      <h1>Tienda de remeras <ComicHeros titulo='"Comic-Heros"'/></h1> 
    </>
  )
}

/** NOMBRE DE LA TIENDA */

const ComicHeros = (props)=>{
  
  return(
    <>{props.titulo}</>
  )
}






export default Titulo;