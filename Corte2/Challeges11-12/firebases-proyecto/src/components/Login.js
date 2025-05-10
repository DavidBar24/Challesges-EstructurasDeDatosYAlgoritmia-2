import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, googleLogin, logout } from '../features/auth/authSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }))
      .unwrap()
      .then(() => {
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
      });
  };

  const handleGoogleLogin = () => {
    dispatch(googleLogin());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (user) {
    return (
      <div>
        <p>Welcome, {user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleEmailLogin}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="contraseña"
        />
        <button type="submit" disabled={loading}>
          {loading ? 'cargando...' : 'ingrese'}
        </button>
      </form>
      <button onClick={handleGoogleLogin} disabled={loading}>
        {loading ? 'cargando...' : 'metase con google'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;