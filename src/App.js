import {useState, useEffect} from 'react'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer  from './ItemListContainer/ItemListContainer';
import Boton from './components/Boton/Boton';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getFetch} from './helpers/getFetch';



function App() {


  return (

    <div className="App"> 
      <NavBar />      
      <ItemListContainer />
      
      <Boton/>
     
      
    </div>
  );
}

export default App;
