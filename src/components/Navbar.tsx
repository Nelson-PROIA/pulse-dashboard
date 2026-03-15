import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

function Navbar({ currentPage, onNavigate, isDarkMode, toggleDarkMode }: NavbarProps) {
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
          <button className="theme-toggle" onClick={toggleDarkMode} title="Toggle dark mode">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.529 9.916a.75.75 0 1 0 0 1.5l1.647-.234a7.502 7.502 0 0 1 5.373 5.373l-.234 1.647a.75.75 0 0 0 1.5 0l.234-1.647a9 9 0 0 0-6.42-6.42l-1.647-.234Z" clipRule="evenodd" />
                <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.657 7.657a.75.75 0 0 0-1.06 1.06l1.59 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.59ZM16.343 7.657l1.59 1.59a.75.75 0 0 0 1.06-1.06l-1.59-1.59a.75.75 0 0 0-1.06 1.06ZM18.75 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5h-2.25a.75.75 0 0 1-.75-.75ZM4.218 19.532a.75.75 0 0 0 1.06 1.06l1.59-1.59a.75.75 0 0 0-1.06-1.06l-1.59 1.59ZM12 18a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V18a.75.75 0 0 1 .75-.75ZM3 12a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .152 1.485A.75.75 0 0 0 9.75 4.5c0 1.258.17 2.37.525 3.37.058.16-.148.293-.298.152C8.36 6.908 6.745 5.23 4.5 5.23c-1.572 0-2.926 1.084-3.52 2.585-.145.367.132.744.492.661C5.901 7.228 10.5 8.1 10.5 12a.75.75 0 0 1-1.5 0c0-3.35-3.32-4.316-5.8-.93L3 11.25a.75.75 0 0 0-.22.518c0 .351.27.644.62.613l2.87-1.127A7.5 7.5 0 0 0 18.75 12c0 3.376-.87 6.183-2.396 8.35a.75.75 0 0 1-1.112-.66L15 19.25a.75.75 0 0 0-.825.962 7.502 7.502 0 0 1-5.373-5.373l-.234 1.647a.75.75 0 0 1-.724.629C2.7 18.528 1.5 21 1.5 21.002h21c-.495-5.955-5.127-10.741-11.252-11.248a.75.75 0 0 1-.72-.625Z" clipRule="evenodd" />
              </svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
