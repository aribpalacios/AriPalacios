import { useState, createContext } from "react";

export const CartContext = createContext ([])

function CartContextProvider ({children}) {

  const [cartList, setCarList] = useState([])

  const agregarProducto =(item) =>{
    setCarList(item)
  }

  const vaciarCarrito=()=>{
    setCarList([])
  }

  return(
    <CartContext.Provider value={{cartList, agregarProducto}}>
    { children }
    </CartContext.Provider>
  )

}

export default CartContextProvider