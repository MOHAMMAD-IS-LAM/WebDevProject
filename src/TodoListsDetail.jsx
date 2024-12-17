import { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import './TodoListsDetail.css';

function TodoListDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [listName, setListName] = useState('');

  // Load tasks and list name on component mount
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('todolists')) || [];
    const currentList = storedLists.find((list) => list.id === parseInt(id));

    if (currentList) {
      setListName(currentList.name);
      setTasks(currentList.tasks || []);
    }
  }, [id]);

  // Update tasks in localStorage when tasks change
  useEffect(() => {
    const storedLists = JSON.parse(localStorage.getItem('todolists')) || [];
    const updatedLists = storedLists.map((list) =>
      list.id === parseInt(id) ? { ...list, tasks } : list
    );
    localStorage.setItem('todolists', JSON.stringify(updatedLists));
  }, [tasks, id]);

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTaskName }]);
      setNewTaskName('');
    }
  };

  return (
    <div className="todolist-detail-container">
      <div className="todolist-detail-card">
        <h1>Tasks for "{listName || 'Untitled List'}"</h1>
        <div className="task-input-container">
          <input
            type="text"
            placeholder="New Task Name"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <button onClick={handleAddTask}>Add Task</button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.name}</li>
          ))}
        </ul>

        <Link to="/todolists" className="back-link">
          Back to Todo Lists
        </Link>
      </div>
    </div>
  );
}

export default TodoListDetail;
