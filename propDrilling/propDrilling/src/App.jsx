import { useState } from "react"
import { context } from "./context";

function App() {
  const [count, setCount] = useState(0);
  
  //wrap it inside the component you want to telephort 
  return (
    <div>
        <context.Provider value={count}>
      <Count count={count} setCount={setCount} />
      </context.Provider>
    </div>
  )
}

function Count({count, setCount}) {
  return <div>
    <CountRenderer count={count} />
    <Buttons count={count} setCount={setCount} />
  </div>
}

function CountRenderer({count}) {
  return <div>
    {count}
  </div>
}

function Buttons({count, setCount}) {
  return <div>
    <button onClick={() => {
      setCount(count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count - 1)
    }}>Decrease</button>
  </div>
}

export default App