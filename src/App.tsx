import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TaskBoard from './pages/TaskBoard';
import TeamPage from './pages/TeamPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useKeyboard } from './hooks/useKeyboard';
import type { Theme } from './data/types';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage('pulse-page', 'dashboard');

  // Theme state — defaults to 'light', persists across sessions
  const [theme, setTheme] = useLocalStorage<Theme>('pulse-theme', 'light');

  // Sync theme to <html> data attribute synchronously to avoid flash of wrong theme
  const validTheme: Theme = theme === 'dark' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', validTheme);

  // Toggle handler — passed down to Navbar
  const handleThemeToggle = () => {
    setTheme((prev: Theme) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Keyboard shortcuts
  useKeyboard({
    '1': () => setCurrentPage('dashboard'),
    '2': () => setCurrentPage('tasks'),
    '3': () => setCurrentPage('team'),
  });

  const renderPage = () => {
    switch (currentPage) {
      case 'tasks':
        return <TaskBoard />;
      case 'team':
        return <TeamPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="app">
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        isDarkMode={validTheme === 'dark'}
        onThemeToggle={handleThemeToggle}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
