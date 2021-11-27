import React from 'react';
import { useEffect, useState } from 'react';
import { getFeched } from '../getFeched';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';

const ItemListContainer = () =>{

    const [productoIndividual, setProductoIndividual]= useState({}); 
    const [loading, setLoading] = useState(true);

    const { itemIdParams } = useParams(); 
   

      useEffect(() => {
          const promesaIndividual = new Promise ((res, rej)=> {
              setTimeout(()=> {
                  res(getFeched.find(producto => producto.id === itemIdParams)) 
              }, 2000)
          })
          promesaIndividual.then((prodEncontrado)=>{
              console.log('OK');
              setProductoIndividual(prodEncontrado) 
          })
            .catch((error)=>{
                console.log('ERROR');
            })
            .finally(()=>{
                setLoading(false)
            }
            )
        }, [itemIdParams])

    console.log(productoIndividual);
    


    return(
    <>
        <div >
            {loading 
                ? 
            <h2>Loading..</h2> 
                : 
            <ItemDetail item={productoIndividual}/> }
        </div>
    </>
    )
    };

export default ItemListContainer