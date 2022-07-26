import React  from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';
import { Formulario } from '../Formulario/Formulario';
import "./Cart.css"
import { Grid } from '@mui/material';










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
    <Grid container spacing={{xs:2, md:2,}} columns={{xs: 2, sm: 8, md: 12}}>
    
    {
      cart.map(product=><Grid item xs={4} sm={4} md={4}><ItemCart key={product.id} product={product}/></Grid>)
    }
    </Grid>
    <p>Total: {totalPrice()}</p>
    <Formulario />
    
    </>
  )
}

export default Cart;