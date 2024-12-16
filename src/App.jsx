import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TopNavigation from './TopNavigation.jsx';
import MainPage from './MainPage.jsx';

function App() {
  return (
    <Router>
      <div id="root">
        <TopNavigation />
        <Routes>
          <Route path="/" element={<MainPage page="Home" />} />
          <Route path="/about" element={<MainPage page="About" />} />
          <Route path="/contact" element={<MainPage page="Contact" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;