import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

function Navbar({ currentPage, onNavigate, isDarkMode, onToggleDarkMode }: NavbarProps) {
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
          <button className="theme-toggle" onClick={onToggleDarkMode} title="Toggle theme (Ctrl/Cmd+K)">
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.472 7.025a.75.75 0 0 1 1.06-.05c.304.288.329.76.05 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 .05-1.06ZM12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM18.53 7.025a.75.75 0 0 1 .05 1.06l-1.59 1.59a.75.75 0 0 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06.05Zm-4.28 11.2a.75.75 0 0 1-.05 1.06l-1.59 1.59a.75.75 0 1 1-1.06-1.06l1.59-1.59a.75.75 0 0 1 1.06-.05ZM5.204 18.25a.75.75 0 0 1-.05-1.06l1.59-1.59a.75.75 0 0 1 1.06 1.06l-1.59 1.59a.75.75 0 0 1-1.06-.05ZM12 16.5a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-.75.75Zm5.25.75a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25a.75.75 0 0 1-.75.75ZM3 12a.75.75 0 0 1-.75-.75v-2.25a.75.75 0 0 1 1.5 0v2.25A.75.75 0 0 1 3 12Z" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.725 10.3c-.482-.888-.987-1.746-1.517-2.57C17.037 3.738 12.063 1.002 7.7 2.186 3.141 3.49-1.07 8.528 1.48 13.916c2.827 5.952 9.07 8.325 15.012 5.498 1.637-.768 3.109-1.895 4.313-3.327.9-.997 1.602-2.193 2.05-3.559-.724.3-1.484.5-2.26.5-.472 0-.933-.047-1.378-.135Zm-1.408 2.073c.319 1.155.088 2.373-.623 3.41-.664.97-1.58 1.76-2.658 2.33-.06-.027-.123-.053-.186-.08.685-1.285 1.077-2.735 1.077-4.223 0-1.026-.233-2.001-.65-2.887.893.385 1.704.88 2.404 1.455Z" /></svg>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
