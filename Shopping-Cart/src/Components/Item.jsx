import { useContext } from "react"
import CartContext from "../Context/CartContext";

function Cart({name, price}) {

    const cart=useContext(CartContext);
    console.log(cart);
  return (
    <div>
      <h2>{name}</h2>
      <p>${price}</p>
      <button onClick={()=>cart.setItem([...cart.items,{name: name, price: price}])}>Add to Cart</button>
    </div>
  )
}

export default Cart
