import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from './features/counterSlice';
import { push, shift, clear } from './features/stackSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  const stackItems = useSelector((state) => state.stack.items);
  const [stackInput, setStackInput] = useState('');

  const handleIncrementBy = () => {
    const value = prompt('Valor a incrementar:');
    if (value && !isNaN(value)) {
      dispatch(incrementBy(Number(value)));
    }
  };

  const handlePushToStack = () => {
    if (stackInput.trim()) {
      dispatch(push(stackInput.trim()));
      setStackInput('');
    }
  };

  return (
    <div className="App">
      <h1>Contador: {count}</h1>
      <button onClick={() => dispatch(increment())}>Incrementar</button>
      <button onClick={() => dispatch(decrement())}>Decrementar</button>
      <button onClick={handleIncrementBy}>cuanto quiere inclementar</button>

      <div>
        <h2>Objetos(Pila)</h2>
        <input
          type="text"
          value={stackInput}
          onChange={(e) => setStackInput(e.target.value)}
          placeholder="objeto a agregar"
        />
        <button onClick={handlePushToStack}>Agregar</button>
        
        <button onClick={() => dispatch(shift())} style={{ marginLeft: '5px' }}>
          Quitar uno
        </button>
        <button onClick={() => dispatch(clear())} style={{ marginLeft: '5px' }}>
          Borrar todo
        </button>

        <ul>
          {stackItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;