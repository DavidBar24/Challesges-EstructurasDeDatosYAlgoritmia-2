import './App.css';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginButton from './components/LoginButton';
import MessageComponent from './components/MessageComponent';

const ProtectedRoute = ({ children }) => {
  const user = useSelector(state => state.firebase.user);
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginButton />} />
        <Route
          path="/messages"
          element={
            <ProtectedRoute>
              <MessageComponent />
            </ProtectedRoute>
          }
        />
        <Route
          path="*"
          element={<Navigate to={useSelector(state => state.firebase.user) ? '/messages' : '/login'} replace />}
        />
      </Routes>
    </div>
  );
}

export default App;