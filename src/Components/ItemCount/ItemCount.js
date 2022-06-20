import React, {useState} from "react";
import "./ItemCount.css";


const useCounter = ()=>{
    const [counter, setCounter] = useState(1);

    const sumar = () => setCounter(counter + 1);
    const restar = () => setCounter(counter -1);
    

    return(
        {
        counter,
        sumar,
        restar,
        
        }
)}


export const ItemCount = ({initial, stock, onAdd})=>{
    
    
    const {
        counter,
        sumar,
        restar,
        } = useCounter(initial);
    
    
    
    return (
        
        <div className="contador" >
            
        
            <button className="bot1" disabled={counter <= 1} onClick={restar}>-</button>
            <span>  {counter}  </span>
            <button className="bot2" disabled={counter >= stock} onClick={sumar}>+</button>
            <>
                <button className="botConf" disabled={stock <= 0} onClick={()=>onAdd(counter)}>Agregar al Carrito</button>
            </>
            
        </div>   
        
    )
    

}