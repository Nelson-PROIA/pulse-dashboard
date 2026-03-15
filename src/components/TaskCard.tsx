import type { Task } from '../data/types';
import './TaskCard.css';

interface TaskCardProps {
  task: Task;
}

const PRIORITY_COLORS: Record<string, string> = {
  high: '#ef4444',
  medium: '#f59e0b',
  low: '#22c55e',
};

function TaskCard({ task }: TaskCardProps) {
  return (
    <div className="task-card">
      <div className="task-header">
        <span
          className="task-priority"
          style={{ background: PRIORITY_COLORS[task.priority] }}
          title={task.priority}
        />
        <span className="task-assignee">{task.assignee.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <h4 className="task-title">{task.title}</h4>
      <p className="task-desc">{task.description}</p>
      <div className="task-tags">
        {task.tags.map((tag) => (
          <span key={tag} className="task-tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

export default TaskCard;
