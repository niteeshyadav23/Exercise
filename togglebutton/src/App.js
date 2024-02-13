import './index.css';
import { useState } from 'react';
function App() {
  const[toggle , setToggle] = useState(false)

  function handleClick(){
    setToggle(!toggle);
  }
  return (
    <div className="App">
      <button onClick={handleClick} className='btn'>{toggle.toString().toUpperCase()}</button>
    </div>
  );
}

export default App;
