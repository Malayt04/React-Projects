import { useContext } from "react"
import { CounterContext } from "./Context/CounterContext"
import Counter from "./Components/Counter";

function App() {
  
  const counterContext=useContext(CounterContext);

  return (
    <>
    <h1>Count:{counterContext.count}</h1>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    <Counter/>
    </>
  )
}

export default App
