import React from 'react';
import {NavBar} from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import {Cart} from './Components/Cart/Cart';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import "./App.css"
import CartProvider from './context/CartContext';






function App() {
  
  return (
  <>
    <BrowserRouter>
    <CartProvider >
     <NavBar/>
     <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
     </Routes>
     </CartProvider>
     </BrowserRouter>
  </>
  )
}

export default App;

