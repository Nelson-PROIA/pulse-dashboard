import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TaskBoard from './pages/TaskBoard';
import TeamPage from './pages/TeamPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useKeyboard } from './hooks/useKeyboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage<string>('pulse-page', 'dashboard');
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('pulse-theme-dark', false);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      darkMode ? 'dark' : 'light'
    );
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev: boolean) => !prev);
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
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
