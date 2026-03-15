import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TaskBoard from './pages/TaskBoard';
import TeamPage from './pages/TeamPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useKeyboard } from './hooks/useKeyboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage('pulse-page', 'dashboard');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('pulse-dark-mode', false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  // Keyboard shortcuts
  useKeyboard({
    '1': () => setCurrentPage('dashboard'),
    '2': () => setCurrentPage('tasks'),
    '3': () => setCurrentPage('team'),
    'mod+d': () => setIsDarkMode((prev: boolean) => !prev),
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
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prev: boolean) => !prev)}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
