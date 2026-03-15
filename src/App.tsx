import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import TaskBoard from './pages/TaskBoard';
import TeamPage from './pages/TeamPage';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useKeyboard } from './hooks/useKeyboard';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useLocalStorage('pulse-page', 'dashboard');

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
      />
      <main className="main-content">
        {renderPage()}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Pulse. All rights reserved.</p>
        <div className="footer-links">
          <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
