import {useState} from 'react'
import CartContext from './CartContext'

function CartContextProvider({children}) {
    const [items,setItem]=useState([]);
  return (
    <CartContext.Provider value={{items,setItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
