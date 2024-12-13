import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from './TopNavigation.jsx';
import Login from './Login.jsx';
import TodoLists from './TodoLists.jsx';
import TodoListDetail from './TodoListsDetail.jsx';

function App() {
  return (
    <Router>
      <div id="root">
        <TopNavigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todolists" element={<TodoLists />} />
          <Route path="/todolist/:id" element={<TodoListDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;