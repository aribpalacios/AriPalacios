import React from 'react';
import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getFeched } from '../getFeched';
import { useParams } from 'react-router-dom';


const ItemListContainer = () =>{

    const [productos, setProductos]= useState([]);
    const [loading, setLoading] = useState(true);
   
    const { catIdParams } = useParams(); 
      useEffect(() => {
          const promesa = new Promise ((res, rej)=> {
              setLoading(true);
              setTimeout(()=> {
                  res(getFeched)
              }, 2000)
          })
          if(catIdParams){
          promesa.then((getFeched)=>{
              console.log('OK el filtrado');
              setProductos(getFeched.filter(producto => producto.categoria === catIdParams))
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        } else {
            promesa.then((getFeched)=>{
                console.log('OK sin filtrar');
                setProductos(getFeched)
            })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            })
        }}, [catIdParams])
    console.log(productos)
    

    return(
   
        
        <div >
            {loading 
                ? 
            <h2>Loading..</h2> 
                : 
            <ItemList lista={productos}/> }
        </div>
   
    )
    };

export default ItemListContainer