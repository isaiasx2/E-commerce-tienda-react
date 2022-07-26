import React, {useState} from "react";
import "./ItemCount.css";
import Button from "react-bootstrap/Button"


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
            
        
            <Button variant="outline-dark" className="bot1" disabled={counter <= 1} onClick={restar}>-</Button>
            <span>  {counter}  </span>
            <Button className="bot2" disabled={counter >= stock} onClick={sumar}>+</Button>
            <>
                <Button variant="outline-dark" className="botConf" disabled={stock <= 0} onClick={()=>onAdd(counter)}>Agregar al Carrito</Button>
            </>
            
        </div>   
        
    )
    

}