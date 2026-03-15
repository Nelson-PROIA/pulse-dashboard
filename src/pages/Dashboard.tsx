import StatCard from '../components/StatCard';
import ProjectCard from '../components/ProjectCard';
import TaskCard from '../components/TaskCard';
import { TASKS, PROJECTS } from '../data/mock';
import './Dashboard.css';

function Dashboard() {
  const doneTasks = TASKS.filter((t) => t.status === 'done').length;
  const activeTasks = TASKS.filter((t) => t.status === 'in-progress').length;
  const todoTasks = TASKS.filter((t) => t.status === 'todo').length;

  return (
    <div className="dashboard">
      <header className="page-header">
        <h2>Dashboard</h2>
        <p>Overview of your team's activity</p>
      </header>

      <section className="stats-grid">
        <StatCard label="Total Tasks" value={TASKS.length} subtitle="Across all projects" />
        <StatCard label="Completed" value={doneTasks} trend="up" subtitle="This sprint" />
        <StatCard label="In Progress" value={activeTasks} trend="neutral" subtitle="Active now" />
        <StatCard label="To Do" value={todoTasks} trend="down" subtitle="Remaining" />
      </section>

      <section className="dashboard-row">
        <div className="dashboard-section">
          <h3>Projects</h3>
          <div className="projects-list">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Recent Tasks</h3>
          <div className="recent-tasks">
            {TASKS.slice(0, 4).map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
