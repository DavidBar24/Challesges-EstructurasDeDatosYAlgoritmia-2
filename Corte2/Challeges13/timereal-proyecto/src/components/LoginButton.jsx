import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { 
  signUpWithEmail, 
  signInWithEmail, 
  signInWithGoogle 
} from '../features/firebase/firebaseSlice';

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authLoading, error } = useSelector((state) => state.firebase);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      await dispatch(signInWithEmail({ email, password }));
    } else {
      await dispatch(signUpWithEmail({ email, password }));
    }
    navigate('/messages');
  };

  const handleGoogleLogin = async () => {
    await dispatch(signInWithGoogle());
    navigate('/messages');
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'ingresar' : 'registrate'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="correo"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="contraseña"
          required
        />
        <button type="submit" disabled={authLoading}>
          {authLoading ? 'espere...' : isLogin ? 'ingrese' : 'ingreando'}
        </button>
      </form>
      
      <button 
        onClick={handleGoogleLogin} 
        className="google-btn"
        disabled={authLoading}
      >
        hacelo con Google
      </button>

      <p>
        {isLogin ? "registrate " : "ya tenes cuenta "}
        <button 
          type="button" 
          onClick={() => setIsLogin(!isLogin)}
          className="switch-mode"
        >
          {isLogin ? 'registrate' : 'Login'}
        </button>
      </p>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default AuthComponent;