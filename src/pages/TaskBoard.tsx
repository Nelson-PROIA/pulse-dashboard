import { useState } from 'react';
import TaskCard from '../components/TaskCard';
import { TASKS } from '../data/mock';
import type { Task, TaskStatus } from '../data/types';
import './TaskBoard.css';

const COLUMNS: { key: TaskStatus; label: string }[] = [
  { key: 'todo', label: 'To Do' },
  { key: 'in-progress', label: 'In Progress' },
  { key: 'done', label: 'Done' },
];

function TaskBoard() {
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const matchesSearch = (task: Task): boolean =>
    normalizedSearch === '' ||
    task.title.toLowerCase().includes(normalizedSearch);

  const matchesFilter = (task: Task): boolean =>
    filter === 'all' ||
    task.tags.includes(filter) ||
    task.assignee === filter;

  const allTags = [...new Set(TASKS.flatMap((t) => t.tags))];

  return (
    <div className="task-board">
      <header className="page-header">
        <h2>Task Board</h2>
        <div className="task-filters">
          <div className="search-wrapper">
            <input
              type="search"
              className="search-input"
              placeholder="Search tasks…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search tasks by title"
            />
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
          const tasks = TASKS.filter(
            (t) => t.status === col.key && matchesFilter(t) && matchesSearch(t)
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
