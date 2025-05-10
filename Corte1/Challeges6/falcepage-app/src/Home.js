// src/Home.js
import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, userName, login, logout } = useAuth();
  const [nameInput, setNameInput] = useState('');

  return (
    <div>
      <h1>Home Page</h1>
      {isAuthenticated ? (
        <div>
          <p>Bienvenido, {userName}</p>
          <button onClick={logout}>Cerrar sesión</button>
          <Link to="/dashboard">Ir al Dashboard</Link>
        </div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Escribe tu nombre"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <button onClick={() => login(nameInput || 'Usuario')}>Iniciar sesión</button>
        </div>
      )}
      <Link to="/private">Ir a Ruta Privada</Link>
    </div>
  );
};

export default Home;
