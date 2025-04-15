import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Register from './components/Register';
import Login from './components/Login';
import React from 'react';
import Crud from './components/Crud';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Provider store={store}>
      <div className="App">
        <h1>Firebase Autotenticacion</h1>
        <Register />
        <Login />
        <h2>Firestore CRUD</h2>
        <Crud />
      </div>
    </Provider>
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
