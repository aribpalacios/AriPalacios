import {useState} from "react";
import {Button} from 'react-bootstrap'


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
                
                <p><Button variant="success" onClick={agregarCarrito}>Agregar al carrito</Button></p>
                <Button variant="success" onClick={sumarContador}>+</Button>
                {Count}              
                <Button variant="danger" onClick={restarContador}>-</Button>

            </div>
        )
    }
