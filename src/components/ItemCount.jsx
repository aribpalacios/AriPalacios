import {useState} from "react";


export default function ItemCount(props) {
    
    const [Count, setCount] = useState(0);

    const sumarContador = () => {
        if (Count < props.stock) {
            setCount(Count + 1)
        } else {
            alert('La Cantidad supera el stock disponible');
        }
    }

    const restarContador = () => {
        if (Count > 1) {
            setCount(Count - 1)
        } else {
            alert('¿Desea eliminar el producto del carrito?'); 
            setCount(0);
                }
}
    
    const agregarCarrito = () => {
        }
           
        return(
            <div>

                <button onClick={sumarContador}>+</button>
                {Count}                
                <button onClick={restarContador}>-</button>
                <button onClick={agregarCarrito}>Agregar al carrito</button>

            </div>
        )
    }
