import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, fetchMessages } from '../features/firebase/firebaseSlice';

const MessageComponent = () => {
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const { messages, user, loading } = useSelector((state) => state.firebase);

  useEffect(() => {
    const promise = dispatch(fetchMessages());
    return () => promise.then(unsubscribe => unsubscribe());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      dispatch(sendMessage(message));
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <div key={msg.id} className="message">
            <strong>{msg.displayName || msg.email}:</strong>
            <p>{msg.text}</p>
            <small>{new Date(msg.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          disabled={!user}
        />
        <button type="submit" disabled={!message || loading}>
          {loading ? 'enviando...' : 'enviar'}
        </button>
      </form>
    </div>
  );
};

export default MessageComponent;