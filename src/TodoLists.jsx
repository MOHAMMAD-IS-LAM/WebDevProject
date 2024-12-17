import { useState } from 'react';
import { Link } from 'react-router-dom';
import './TodoLists.css'

function TodoLists() {
  const [lists, setLists] = useState([]);
  const [newListName, setNewListName] = useState('');

  const handleAddList = () => {
    if (newListName.trim()) {
      setLists([...lists, { id: Date.now(), name: newListName, tasks: [] }]);
      setNewListName('');
    }
  };

  return (
    <div>
      <h1>Todo Lists</h1>
      <input
        type="text"
        placeholder="New List Name"
        value={newListName}
        onChange={(e) => setNewListName(e.target.value)}
      />
      <button onClick={handleAddList}>Add List</button>

      <ul>
        {lists.map((list) => (
          <li key={list.id}>
            <Link to={`/todolist/${list.id}`}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoLists;