import React, { useState } from 'react';
import { db } from '../firebase/config';
import { useCollection } from '../hooks/useCollection';
import { 
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

const Crud = () => {
  const { data: items, loading, error } = useCollection('items');
  const [newItem, setNewItem] = useState('');
  const [updatedText, setUpdatedText] = useState({});

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'items'), {
        text: newItem,
        createdAt: new Date()
      });
      setNewItem('');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleUpdate = async (id) => {
    if (!updatedText[id]) return;
    try {
      const itemRef = doc(db, 'items', id);
      await updateDoc(itemRef, { text: updatedText[id] });
      setUpdatedText(prev => ({ ...prev, [id]: '' }));
    } catch (error) {
      alert(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const itemRef = doc(db, 'items', id);
      await deleteDoc(itemRef);
    } catch (error) {
      alert(error.message);
    }
  };

  if (loading) return <p>cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Ingrese algo"
        />
        <button type="submit">ingrese</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="text"
              value={updatedText[item.id] || item.text}
              onChange={(e) => setUpdatedText(prev => ({
                ...prev,
                [item.id]: e.target.value
              }))}
            />
            <button onClick={() => handleUpdate(item.id)}>actualiza(automatico)</button>
            <button onClick={() => handleDelete(item.id)}>elimina</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crud;