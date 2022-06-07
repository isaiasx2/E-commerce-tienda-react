import React from 'react';
import Titulo from './Components/Titulo/Titulo'
import {NavBar} from './Components/NavBar/NavBar'
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
/**import {Children} from './Components/Children/Children'*/




function App() {
  return (
  <>
    
    <header className='titulo'><Titulo/></header>
    <><NavBar/></>
    <ItemListContainer/>
    
    

  </>
  )
}

export default App;

