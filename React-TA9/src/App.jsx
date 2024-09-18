import Counter from "./components/Counter";
import './App.css'
import React, {useEffect, useState} from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Contador es ${count}`;
  }, [count]);

  return (
    <>
      <div className='app'>
        <h1>Contador es {count}</h1>
        <Counter count={count} setCount={setCount} />
      </div>
    </>
  )
}

export default App
