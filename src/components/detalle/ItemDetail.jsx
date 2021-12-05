import React from 'react';
import ItemCount from '../ItemCount';
import { useState, useContext} from 'react';
import { CartContext } from '../../context/CartContext';

export const ItemDetail = ({item}) => {

    const [count, setCount] =useState (0)

    const { cartList, agregarProducto} = useContext (CartContext)

    function onAdd(cantidad){
        setCount(cantidad)
        agregarProducto(item)
    }
    console.log (cartList)
    return (
        
         <div>
            <img src={item.pictureURL} alt={item.title} />
            <h3>{item.title}</h3> 
            <p>{item.description}</p>
            <p>{item.price}</p>
            <ItemCount stock={item.stock} id={item.id} onAdd={onAdd} />
        </div>
                
    )
}
