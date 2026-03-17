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
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    // Clear search when switching tag filter to avoid confusing compound-filter state
    setSearchQuery('');
  };

  const tagFilteredTasks = filter === 'all'
    ? TASKS
    : TASKS.filter((t) => t.tags.includes(filter) || t.assignee === filter);

  const filteredTasks = searchQuery.trim() === ''
    ? tagFilteredTasks
    : tagFilteredTasks.filter((task) =>
        task.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );

  const allTags = [...new Set(TASKS.flatMap((t) => t.tags))];

  return (
    <div className="task-board">
      <header className="page-header">
        <h2>Task Board</h2>
        <div className="task-filters">
          {/* Search input */}
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search tasks by title"
            />
            {searchQuery && (
              <button
                className="search-clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>

          {/* Tag / assignee filter buttons */}
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          {allTags.slice(0, 6).map((tag) => (
            <button
              key={tag}
              className={`filter-btn ${filter === tag ? 'active' : ''}`}
              onClick={() => handleFilterChange(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </header>

      <div className="columns">
        {COLUMNS.map((col) => {
          const columnTasks = filteredTasks.filter((t) => t.status === col.key);
          return (
            <div key={col.key} className="column">
              <div className="column-header">
                <h3>{col.label}</h3>
                <span className="column-count">{columnTasks.length}</span>
              </div>
              <div className="column-tasks">
                {columnTasks.length === 0 ? (
                  <div className="column-empty">
                    {searchQuery.trim() !== '' ? 'No tasks match your search.' : 'No tasks'}
                  </div>
                ) : (
                  columnTasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))
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
