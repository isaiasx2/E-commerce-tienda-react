import React from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const Cart = () => {
  const {cart, totalPrice} = useCartContext();



  const order = {
    buyer: {
      
      name: "Isaias",
      email: "isaias@gmail.com",
      phone: "224426",
    },

    items: cart.map(product => ({id: product.id, name: product.name, price: product.price, quantity: product.quantity})),
    total: totalPrice()

      
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order).then(({id})=>console.log(id)).catch(err =>console.log(err) )
    
    
  }

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
    <button onClick={handleClick}>Generar orden</button>
    </>
  )
}

export default Cart;