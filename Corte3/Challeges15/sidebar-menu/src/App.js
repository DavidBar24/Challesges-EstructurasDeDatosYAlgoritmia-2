import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarMenu } from './components/SidebarMenu';
import { buildMenuTree } from './data/menuData';

function App() {
  const menuRoot = buildMenuTree();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Router>
      <div style={{ display: 'flex' }}>
        <SidebarMenu rootNode={menuRoot} />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/profile" element={<h1>Profile Page</h1>} />
            <Route path="/messages" element={<h1>Messages Page</h1>} />
            <Route path="/settings" element={<h1>Settings Page</h1>} />
            <Route path="/account" element={<h1>Account Page</h1>} />
            <Route path="/security" element={<h1>Security Page</h1>} />
            <Route path="/help" element={<h1>Help Page</h1>} />
            <Route path="/faq" element={<h1>FAQ Page</h1>} />
            <Route path="/ticket" element={<h1>Ticket Page</h1>} />
            <Route path="/" element={<h1>Home Page</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
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
