import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import LinkedListPage from "./LinkedListPage";
import DoublyLinkedListPage from "./DoublyLinkedListPage";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul>
              <li><Link to="/linked-list">Lista Enlazada</Link></li>
              <li><Link to="/doubly-linked-list">Lista Doblemente Enlazada</Link></li>
            </ul>
          </nav>        
          <Routes>
          <Route path="/linked-list" element={<LinkedListPage />} />
          <Route path="/doubly-linked-list" element={<DoublyLinkedListPage />} />
        </Routes>
        </header>

      </div>
    </Router>
  );
}

export default App;