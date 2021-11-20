import Item from "../Item/Item";
import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemCount from "../components/ItemCount/ItemCount";
import { getFetch } from "../helpers/getFetch";

const ItemListContainer =() => {
const [string, setString] = useState('')
const [products, setProducts]= useState([])
const [loading, setLoading]=useState(true)
const [bool, setBool]=useState(true)



function mostrarElDiv(){
  setString('hola me inserte')
}
function onAdd(cantidad){
  console.log(cantidad)
}

useEffect(()=>{
  getFetch //api
  .then(data =>{
    console.log('llamada Api')
    setProducts(data)
  })
  .catch(error => console.log(error))
  .finally(()=> setLoading(false))
  return () =>{
    console.log('clean')
  }
    },[])


  return(
    <div>
      <div className='card-columns'>
      { loading ? <h1> Cargando...</h1>: products.map(prod => <div key={prod.id} className="card w-50 mt-5">
                    <div className="card-header">
                      {prod.name}
                     </div> 
                      <div className="card-body">
                        <img src={prod.foto} alt="foto"/>
                        {prod.age}
                        </div>
                       <div className="card-footer">
                          <button className="btn btn-outline-primary btn-block">
                            detalle persona
                          </button>
                         </div>
                    </div> 
      )}
      </div>
      
      <div> 
        {string !=='' && <label>{string}</label>}
      </div>
      <button onClick={mostrarElDiv}> Click</button>

      <ItemCount initial={1} stock={6} onAdd={onAdd} />
    </div>
  )
}

export default ItemListContainer;