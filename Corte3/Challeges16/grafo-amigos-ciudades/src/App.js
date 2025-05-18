import logo from './logo.svg';
import './App.css';
import { Graph } from './Grafo.js';
import GraphVisualizer from './Visualizaciongrafo';
import React, { useState, useEffect } from 'react';

function App() {
    const [graphData, setGraphData] = useState({ nodes: [], links: [] });
    const [cityFilter, setCityFilter] = useState('Brazil');
    const [peopleInCity, setPeopleInCity] = useState([]);

    useEffect(() => {
        const initializeGraph = () => {
            const socialGraph = new Graph();
            
            // Añadir personas y ciudades
            socialGraph.addNode('Mano', 'person', { age: 30 });
            socialGraph.addNode('Brazil', 'city');
            socialGraph.addEdge('Mano', 'Brazil');

            socialGraph.addNode('Chamo', 'person', { age: 25 });
            socialGraph.addNode('Venezuela', 'city');
            socialGraph.addEdge('Chamo', 'Venezuela');

            socialGraph.addNode('Parce', 'person', { age: 35 });
            socialGraph.addEdge('Parce', 'Brazil');

            // Añadir amistades
            socialGraph.addEdge('Mano', 'Chamo');
            socialGraph.addEdge('Mano', 'Parce');

            setGraphData(socialGraph.getGraphData());
            setPeopleInCity(socialGraph.getPeopleInCity(cityFilter));
        };

        initializeGraph();
    }, [cityFilter]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Grafo Social de Amigos y Ciudades</h1>
            
            <div className="controls">
                <input
                    type="text"
                    value={cityFilter}
                    onChange={(e) => setCityFilter(e.target.value)}
                    placeholder="Filtrar por ciudad"
                />
            </div>

            <div className="content">
                <div className="graph-container">
                    <GraphVisualizer data={graphData} />
                </div>
                
                <div className="city-list">
                    <h2>Personas en {cityFilter}</h2>
                    <ul>
                        {peopleInCity.map((person, index) => (
                            <li key={index}>
                                {person.name} - Edad: {person.age}
                            </li>
                        ))}
                    </ul>
                </div>
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
