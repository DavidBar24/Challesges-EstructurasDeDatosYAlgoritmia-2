import logo from './logo.svg';
import './App.css';
import TreeVisualizer from './TreeVisualizer';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
                <h1>Árbol Binario (al colocar el primer nuemro aparece arriba-ezquina)</h1>
      <TreeVisualizer />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
