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
  const [search, setSearch] = useState<string>('');

  const allTags = [...new Set(TASKS.flatMap((t) => t.tags))];

  return (
    <div className="task-board">
      <header className="page-header">
        <h2>Task Board</h2>
        <div className="search-bar">
          <svg className="search-icon" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8.5" cy="8.5" r="5.5" stroke="currentColor" strokeWidth="1.75" />
            <path d="M13.5 13.5L17 17" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            className="search-input"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search tasks by title"
          />
          {search && (
            <button
              className="search-clear"
              onClick={() => setSearch('')}
              aria-label="Clear search"
            >
              &times;
            </button>
          )}
        </div>
        <div className="task-filters">
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
          const tasks = TASKS.filter((task) =>
            task.status === col.key &&
            (filter === 'all' || task.tags.includes(filter) || task.assignee === filter) &&
            (search.trim() === '' || task.title.toLowerCase().includes(search.trim().toLowerCase()))
          );
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
                  <div className="column-empty">No tasks</div>
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
