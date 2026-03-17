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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filter, setFilter] = useState<string>('all');

  const filteredTasks = TASKS
    .filter((task) => {
      if (filter === 'all') return true;
      return task.tags.includes(filter) || task.assignee === filter;
    })
    .filter((task) => {
      if (searchQuery.trim() === '') return true;
      return task.title.toLowerCase().includes(searchQuery.trim().toLowerCase());
    });

  const allTags = [...new Set(TASKS.flatMap((t) => t.tags))];

  return (
    <div className="task-board">
      <header className="page-header">
        <h2>Task Board</h2>
        <div className="taskboard-search-wrapper">
          <input
            type="text"
            className="taskboard-search-input"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search tasks by title"
          />
          {searchQuery && (
            <button
              className="taskboard-search-clear"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search"
            >
              ✕
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
