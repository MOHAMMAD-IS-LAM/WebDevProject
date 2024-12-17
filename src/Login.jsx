import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem('username', username);
      navigate('/todolists');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>What is your name?</h1>
        <input
          type="text"
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}>Create tasks</button>
      </div>
    </div>
  );
}

export default Login;
