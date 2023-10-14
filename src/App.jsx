import { useRef, useState } from 'react';
import './App.css';

function App() {
  const title = useRef()
  const [val, setVal] = useState('a')
  console.log(val);
  
  return (
    <div className="App">
      <h1 ref={title}>App</h1>
      <input onChange={(e)=> setVal(e.target.value)} type="text"  placeholder='meva'/>
      <button >send</button>
    </div>
  );
}

export default App;
