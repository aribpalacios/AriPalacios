import {useState} from "react" 

const ItemCount = ({initial, stock, onAdd}) => {
const [count, setCount] = useState(initial)

function Sumar (){
  if(count<stock)
  setCount(count + 1)
}
function Restar (){
  if(count<stock)
  setCount(count - 1)
}
function Agregar(){
  onAdd(count)
  setCount(1)
}


  return (
    <>
      <section>
        <button onClick={Sumar}>+</button>
        {count}
        <button onClick={Restar}>-</button>
        <button onClick={Agregar}>Agregar al Carrito</button>
      </section>
    </>
  )
}

export default ItemCount
