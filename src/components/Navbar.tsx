import './Navbar.css';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isDark, setIsDark] = useLocalStorage('pulse-dark-mode', false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev: boolean) => !prev);
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
          <div className="theme-toggle" data-theme={isDark ? 'dark' : 'light'} onClick={toggleTheme}>
            <div className="theme-toggle-dot"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
