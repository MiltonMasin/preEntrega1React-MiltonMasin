
import './App.css';

import Navbar from "./components/Navbar/Navbar"
import ItemList from "./components/ItemListContainer/IntemListContainer";





function App() {

  return (
    <>
   
    <Navbar texto1="Productos" texto2="Indumentaria" texto3="Consejos"/>
  
    <ItemList greeting="Bienvenidos a Barberia Don Jose"/>
    
    
  
    
    </>
  )
}

export default App
