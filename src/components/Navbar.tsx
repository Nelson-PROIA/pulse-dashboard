import { useEffect } from 'react';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const isDarkMode = localStorage.getItem('theme') === 'dark';

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span className="navbar-logo">P</span>
        <h1>Pulse</h1>
      </div>
      <ul className="navbar-links">
        <li>
          <a
            href="#dashboard"
            className={currentPage === 'dashboard' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#tasks"
            className={currentPage === 'tasks' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onNavigate('tasks'); }}
          >
            Tasks
          </a>
        </li>
        <li>
          <a
            href="#team"
            className={currentPage === 'team' ? 'active' : ''}
            onClick={(e) => { e.preventDefault(); onNavigate('team'); }}
          >
            Team
          </a>
        </li>
         <li>
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m4.93 19.07 1.41-1.41"></path><path d="m17.66 6.34 1.41-1.41"></path></svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
