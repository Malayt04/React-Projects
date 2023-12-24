import {useContext} from 'react'
import CartContext from '../Context/CartContext'

function Cart() {
    const cart=useContext(CartContext);
    const total=cart.items.reduce((a,b)=>a+b.price, 0)

  return (
    <div>
      <h1>Cart</h1>
      <ul>
      {
        cart.items.map((item)=>(
            <li>
            {item.name}  -  ${item.price}
            </li>
        ))
      }
      </ul>
      <h2>Total Price: {total}</h2>
    </div>
  )
}

export default Cart
