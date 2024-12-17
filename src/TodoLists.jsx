import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RandomFact from './components/RandomFact.jsx';
import './TodoLists.css';

function TodoLists() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  // Load lists from localStorage when the component mounts
  useEffect(() => {
    const storedLists = localStorage.getItem('todolists');
    if (storedLists) {
      setLists(JSON.parse(storedLists));
    }
  }, []);

  // Update localStorage whenever the lists change
  useEffect(() => {
    localStorage.setItem('todolists', JSON.stringify(lists));
  }, [lists]);

  const handleAddList = () => {
    if (newListName.trim()) {
      const newList = { id: Date.now(), name: newListName, tasks: [] };
      setLists([...lists, newList]);
      setNewListName('');
    }
  };

  return (
    <div className="todolists-page">
      {/* Main Todo Lists Section */}
      <div className="todolists-container">
        <h1 className="todolists-title">Todo Lists</h1>
        <div className="todolists-input-container">
          <input
            type="text"
            placeholder="New List Name"
            value={newListName}
            className="todolists-input"
            onChange={(e) => setNewListName(e.target.value)}
          />
          <button onClick={handleAddList} className="todolists-add-button">
            Add List
          </button>
        </div>

        <ul className="todolists-list">
          {lists.map((list) => (
            <li key={list.id} className="todolists-list-item">
              <Link
                to={`/todolist/${list.id}`}
                state={{ listName: list.name }}
                className="todolists-link"
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Random Fact Section */}
      <div className="randomfact-container">
        <RandomFact />
      </div>
    </div>
  );
}

export default TodoLists;
