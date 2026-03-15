import Icon from './Icon';
import './Navbar.css';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  notifications: number;
  onClearNotifications: () => void;
}

function Navbar({ currentPage, onNavigate, notifications, onClearNotifications }: NavbarProps) {
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
      </ul>
      <div className="navbar-actions">
        <div className="notification-bell" onClick={onClearNotifications} aria-label={`You have ${notifications} new notifications`}>
          <Icon name="bell" />
          {notifications > 0 && <span className="notification-badge">{notifications}</span>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
