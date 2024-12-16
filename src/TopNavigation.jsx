// components/TopNavigation.jsx
import { Link } from 'react-router-dom';
import './TopNavigation.css';

function TopNavigation() {
  return (
    <nav className="top-navigation">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default TopNavigation;
