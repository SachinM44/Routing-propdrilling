import { useState } from "react";
function App(){
    cont [count, setCount] = useState(0)
    return(
        <div>
        <Count count={count} setCount={setCount}/>  
        </div>
    )
}

function Count({count ,setCount}){
    return(
        <div>
            <countrender count={count}/>
            <button count ={count} setCount={setCount}/>
        </div>
    )
}
function countrender(){
    return(
        <div>
            {count}
        </div>
    )
}
function button(){
    return (
        <div>
            <button onClick={()=>{
              setCount(count+1);
            }}>increase</button>
            <button onClick={()=>{
                setCount(count-1);
            }}>Decrease</button>
        </div>
    )
}
export default App