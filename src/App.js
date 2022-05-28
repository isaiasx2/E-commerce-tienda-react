
import './App.css';



function Titulo() {
  return (<div><h1 className='titulo__nombre'>Tienda de remeras "Comic-Heros"</h1></div>);
  }



function App() {
  return (
    <div className='titulo'><Titulo/></div>
  )
}

export default App;
