import React  from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';
import { Formulario } from '../Formulario/Formulario';
import "./Cart.css"










export const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  
  

  

  if (cart.length === 0) {
    return (
      <div className="mensaje_volver">
      <p  className='back'>No hay elementos en el carrito</p>
      <Link to="/" ><h2 className='back'>¡Volver a comprar!</h2></Link>
      </div>
    )
  }

  return (
    <>
    {
      cart.map(product=><ItemCart key={product.id} product={product}/>)
    }
    <p>
      Total: {totalPrice()}
    </p>
    <Formulario />
    </>
  )
}

export default Cart;