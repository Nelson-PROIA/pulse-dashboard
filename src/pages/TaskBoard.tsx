import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import { TASKS } from '../data/mock';
import type { TaskStatus } from '../data/types';
import './TaskBoard.css';

const COLUMNS: { key: TaskStatus; label: string }[] = [
  { key: 'todo', label: 'To Do' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
];

function TaskBoard() {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredTasks = TASKS.filter((t) => {
    if (filter !== 'all' && !t.tags.includes(filter) && t.assignee !== filter) return false;
    if (searchTerm && !t.title.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const allTags = [...new Set(TASKS.flatMap((t) => t.tags))];

  return (
    <div className="task-board">
      <header className="page-header">
        <h2>Task Board</h2>
        <div className="task-filters">
          <div className="task-search">
            <input
              type="text"
              className="search-input"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search tasks by title"
            />
            {searchTerm && (
              <button
                className="search-clear"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          {allTags.slice(0, 6).map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <div className="columns">
        {COLUMNS.map((col) => {
          const tasks = filteredTasks.filter((t) => t.status === col.key);
          return (
            <div key={col.key} className="column">
              <div className="column-header">
                <h3>{col.label}</h3>
                <span className="column-count">{tasks.length}</span>
              </div>
              <div className="column-tasks">
                {tasks.map((task) => (
                  <TaskCard key={task.id} task={task} />
                ))}
                {tasks.length === 0 && (
                  <div className="column-empty">
                    {searchTerm ? `No tasks matching "${searchTerm}"` : 'No tasks'}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TaskBoard;
