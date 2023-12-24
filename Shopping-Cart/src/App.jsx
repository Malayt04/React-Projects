import Cart from "./Components/Cart"
import Item from "./Components/Item"


function App() {
  return(
  <>
  <Item name="Mac-Book" price={100000}/>
  <Item name="hp-laptop" price={120000}/>
  <Item name="lenevo-ideapad-gaming" price={130000}/>
  <Item name="television" price={140000}/>
  <Item name="Iphone" price={1000}/>
  <Cart/>
  </>
  )
}

export default App
