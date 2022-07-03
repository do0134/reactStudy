import { useState } from "react"
import './App.css';

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase= () =>{
    counter =  counter++ 
    setCounter2(counter2+1);
    return counter
  }
  return (
    <div className="App">
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
