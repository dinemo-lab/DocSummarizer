

import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="home-header">
      <div className="logo-container">
        <h1 className="logo">DocSummarizer</h1>
      </div>
      <nav className="nav-container">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/upload">Upload Document</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
