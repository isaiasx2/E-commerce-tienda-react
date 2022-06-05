import React from 'react';
import Titulo from './Components/Titulo'
import {NavBar} from './Components/NavBar'
import {Children} from './Components/Children/Children'




function App() {
  return (
  <>
    
    <header className='titulo'><Titulo/></header>
    <section className='navegacion'><NavBar/></section>
    <Children />
    

  </>
  )
}

export default App;

