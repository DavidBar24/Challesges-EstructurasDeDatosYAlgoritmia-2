import logo from './logo.svg';
import './App.css';
import { Graph } from './Grafo.js';
import GraphVisualizer from './Visualizaciongrafo';
import React, { useState } from 'react';

function App() {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [cityFilter, setCityFilter] = useState('');
    const [peopleInCity, setPeopleInCity] = useState([]);

    const [newPerson, setNewPerson] = useState({ name: '', age: '', city: '' });
    const [newFriendship, setNewFriendship] = useState({ from: '', to: '' });
    const [socialGraph] = useState(new Graph());
    const [allPeople, setAllPeople] = useState([]);

    const handleAddPerson = (e) => {
        e.preventDefault();
        if (newPerson.name && newPerson.age && newPerson.city) {
            socialGraph.addNode(newPerson.name, 'person', { 
                age: parseInt(newPerson.age) 
            });
            socialGraph.addNode(newPerson.city, 'city');
            socialGraph.addEdge(newPerson.name, newPerson.city);
            
            setAllPeople([...allPeople, newPerson.name]);
            setGraphData(socialGraph.getGraphData());
            setNewPerson({ name: '', age: '', city: '' });
        }
    };

    const handleAddFriendship = (e) => {
        e.preventDefault();
        if (newFriendship.from && newFriendship.to) {
            socialGraph.addEdge(newFriendship.from, newFriendship.to);
            setGraphData(socialGraph.getGraphData());
            setNewFriendship({ from: '', to: '' });
        }
    };

    const handleSearchCity = () => {
        if (cityFilter) {
            setPeopleInCity(socialGraph.getPeopleInCity(cityFilter));
        }
    };


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Gestor de Amigos y Ciudades</h1>
            
            <div className="form-section">
                <h2>Agregar Nueva Persona</h2>
                <form onSubmit={handleAddPerson}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={newPerson.name}
                        onChange={(e) => setNewPerson({...newPerson, name: e.target.value})}
                    />
                    <input
                        type="number"
                        placeholder="Edad"
                        value={newPerson.age}
                        onChange={(e) => setNewPerson({...newPerson, age: e.target.value})}
                    />
                    <input
                        type="text"
                        placeholder="Ciudad"
                        value={newPerson.city}
                        onChange={(e) => setNewPerson({...newPerson, city: e.target.value})}
                    />
                    <button type="submit">Agregar Persona</button>
                </form>
            </div>

            <div className="form-section">
                <h2>Conectar Amigos</h2>
                <form onSubmit={handleAddFriendship}>
                    <select
                        value={newFriendship.from}
                        onChange={(e) => setNewFriendship({...newFriendship, from: e.target.value})}
                    >
                        <option value="">Seleccionar amigo 1</option>
                        {allPeople.map(person => (
                            <option key={person} value={person}>{person}</option>
                        ))}
                    </select>
                    
                    <select
                        value={newFriendship.to}
                        onChange={(e) => setNewFriendship({...newFriendship, to: e.target.value})}
                    >
                        <option value="">Seleccionar amigo 2</option>
                        {allPeople.map(person => (
                            <option key={person} value={person}>{person}</option>
                        ))}
                    </select>
                    <button type="submit">Crear Amistad</button>
                </form>
            </div>

            <div className="search-section">
                <h2>Buscar Residentes por Ciudad</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Nombre de ciudad"
                        value={cityFilter}
                        onChange={(e) => setCityFilter(e.target.value)}
                    />
                    <button onClick={handleSearchCity}>Buscar</button>
                </div>
                
                {peopleInCity.length > 0 && (
                    <div className="results">
                        <h3>Personas en {cityFilter}</h3>
                        <ul>
                            {peopleInCity.map((person, index) => (
                                <li key={index}>
                                    {person.name} (Edad: {person.age})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="graph-container">
                <GraphVisualizer data={graphData} />
            </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
