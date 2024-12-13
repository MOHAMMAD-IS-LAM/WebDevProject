import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './TodoListDetail.css'

function TodoListDetail() {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTaskName }]);
      setNewTaskName('');
    }
  };

  return (
    <div>
      <h1>Tasks for List {id}</h1>
      <input
        type="text"
        placeholder="New Task Name"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>

      <Link to="/todolists">Back to Todo Lists</Link>
    </div>
  );
}

export default TodoListDetail;
