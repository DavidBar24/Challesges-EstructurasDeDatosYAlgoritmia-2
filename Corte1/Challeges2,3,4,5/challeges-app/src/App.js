import logo from './logo.svg';
import './App.css';
import FirstApp from './FirstApp';
import FirstCount from './FirstCount';
import CategoryInput from './CategoryInput';
import React, { useState } from 'react';
import { Father } from './Father'; // Importamos el nuevo componente Father

function App() {
  const [categories, setCategories] = useState([]); // Estado para las categorías

  const handleAddCategory = (category) => {
    if (category.trim() !== "") {
      setCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FirstApp />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FirstCount value={0} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* Nueva sección para categorías */}
        <h2>Administrar Categorías</h2>
        <CategoryInput onAddCategory={handleAddCategory} />
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>

        {/* Nueva sección para Father y Son */}
        <h2>Ejemplo de Padre e Hijo</h2>
        <Father />
      </header>
    </div>
  );
}

export default App;
