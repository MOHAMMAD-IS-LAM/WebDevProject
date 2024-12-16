import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoItem from "./TodoItem.jsx";
import './App.css'

function App() {
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do App</h1>
      </div>

      <div className="form">
        <input type="text"></input>
        <button>
          <span>Add</span>
        </button>
      </div>

      <div className="todolist">
        <TodoItem />
      </div>
    </div>
  );
}

export default App
