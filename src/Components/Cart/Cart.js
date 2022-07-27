import React  from 'react'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { ItemCart } from '../ItemCart/ItemCart';
import { Formulario } from '../Formulario/Formulario';
import "./Cart.css"
import { Grid } from '@mui/material';
import swal from 'sweetalert';
import {Button, IconButton} from '@mui/material';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"











export const Cart = () => {
  const {cart, totalPrice} = useCartContext();
  
  
  
  

  

  if (cart.length === 0) {
    return (

      swal({
        title:"No hay elementos en el carrito",
        icon: "info",
    }),
      <Link to="/" ><Button variant='contained'><IconButton><AddShoppingCartIcon color='action'/></IconButton>¡Volver a comprar!</Button></Link>
      
    )
  }

  return (
    <div className="carrito-cart">
    <Grid container spacing={{xs:2, md:2,}} columns={{xs: 2, sm: 8, md: 12}}>
    
    {
      cart.map(product=><Grid item xs={4} sm={4} md={4}><ItemCart key={product.id} product={product}/></Grid>)
    }
    </Grid>
    <p>Total: {totalPrice()}</p>
    <Formulario />
    
    </div>
  )
}

export default Cart;