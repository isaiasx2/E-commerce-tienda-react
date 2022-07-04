import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';

export const Cart = () => {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0) {
    return (
      <>
      <p>No hay elementos en el carrito</p>
      <Link to="/">¡Volver al home!</Link>
      </>
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
    </>
  )
}

export default Cart;