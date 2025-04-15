import React, { useState } from 'react';
// Categoria es la hija de App.js 
const CategoryInput = ({ onAddCategory }) => {
  const [category, setCategory] = useState("");

  const handleInputChange = (event) => {
    setCategory(event.target.value);
  };

  const handleAddClick = () => {
    onAddCategory(category);
    setCategory(""); // Limpiar el campo de entrada
  };

  return (
    <div>
      <input
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Escribe una categoría"
      />
      <button onClick={handleAddClick}>Agregar Categoría</button>
    </div>
  );
};

export default CategoryInput;
