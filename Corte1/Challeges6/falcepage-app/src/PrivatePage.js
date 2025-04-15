// src/PrivatePage.js
import React from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';

const PrivatePage = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <div>
        <h1>No tienes acceso</h1>
        <Link to="/">Volver a la página principal</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Página Privada</h1>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
};

export default PrivatePage;
