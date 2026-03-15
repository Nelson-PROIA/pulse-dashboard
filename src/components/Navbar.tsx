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
          <button className="theme-toggle" onClick={toggleDarkMode} aria-label="Toggle dark mode">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.44 6.94a.75.75 0 0 1 1.06-1.06l1.59 1.59a.75.75 0 1 1-1.06 1.06l-1.59-1.59ZM4.5 12a.75.75 0 0 1 .75-.75H7.5a.75.75 0 0 1 0 1.5H5.25A.75.75 0 0 1 4.5 12ZM20.25 12a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1 0-1.5H19.5a.75.75 0 0 1 .75.75ZM15.97 8.53a.75.75 0 0 1 1.06-1.06l1.59 1.59a.75.75 0 0 1-1.06 1.06l-1.59-1.59ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM3 13.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V14.25A.75.75 0 0 1 3 13.5ZM19.5 13.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V14.25a.75.75 0 0 1 .75-.75ZM17.06 16.59a.75.75 0 0 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 1.06-1.06l1.59 1.59ZM8.53 15.97a.75.75 0 0 1-1.06 1.06l-1.59-1.59a.75.75 0 0 1 1.06-1.06l1.59 1.59Z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.375 3.003L12 1.5l2.625 1.5H21a.75.75 0 0 1 .75.75v4.5A.75.75 0 0 1 21 9h-7.5l-2.625 1.5L9 9H3a.75.75 0 0 1-.75-.75V3.75A.75.75 0 0 1 3 3h6.375ZM12 4.09l-1.75 1.006-1.125-.646V3.75h2.875Zm1.5 0v.606l-1.125.646L11.25 4.09V3.75h2.25Zm-3.75 1.341v3.159H3V4.5h6v.84Zm-1.5 3.909v.65l1.171.611 1.079-.61V8.253H9V9.25Zm3 0v-.001-.409l.4-.23.85-.49V8.25h-1.25ZM15 4.5v3.159h6V4.5H15v.84ZM21 9h-4.5v.25l-2.625 1.5-2.625-1.5-2.625 1.5-2.625-1.5H3V21h7.5V12.75L12 11.25l1.5 1.5V21H21V9ZM12 12.636l-1.75 1.006-1.125-.646v-.845h2.875Zm1.5 0v.845l-1.125.646L11.25 12.636v-.48h2.25ZM9 13.84v3.16H3v-3.16h6Zm-1.5 3.909v.65l1.171.611 1.079-.61v-.845H9V17.75Zm3 0v-.001-.409l.4-.23.85-.49v-.48h-1.25Z" /></svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
