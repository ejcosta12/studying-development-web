import React, {useState, useEffect} from "react";
import api from './services/api'

import "./styles.css";

function App() {

  const [repositories, setRepositories] = useState([]);

  const list = () => {
    api.get('repositories').then(response => {
      setRepositories(response.data)
    })
  };

  useEffect(list, []);

  async function handleAddRepository() {
    
    const response = await api.post('repositories', {
      "title": "Be The Hero",
	    "url": "https://github.com/ejcosta12/be-the-hero.git",
	    "techs": ["Node.js","Express","Cors"]
    });

    const repositorie = response.data;

    setRepositories([...repositories, repositorie]);
    
  }

  async function handleRemoveRepository(id) {

    const repositorieIndex = repositories.findIndex(repositorie => repositorie.id === id);
    const copyRepositories = repositories;
    copyRepositories.splice(repositorieIndex, 1);
    setRepositories([...copyRepositories])

    await api.delete(`repositories/${id}`);
    
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repositorie) =>
          <li key={repositorie.id}>
            {repositorie.title}
            <button onClick={() => handleRemoveRepository(repositorie.id)}>
              Remover
            </button>
          </li>
        )}
      </ul>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
