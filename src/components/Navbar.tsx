import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

function Navbar({ currentPage, onNavigate, isDark, onToggleTheme }: NavbarProps) {
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
          <button className="theme-toggle" onClick={onToggleTheme} title="Toggle theme (T)">
            {isDark ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
