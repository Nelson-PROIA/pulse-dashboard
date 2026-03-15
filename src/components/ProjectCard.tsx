import type { Project } from '../data/types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="project-card">
      <div className="project-header">
        <h4 className="project-name">{project.name}</h4>
        <span className="project-progress-label">{project.progress}%</span>
      </div>
      <p className="project-desc">{project.description}</p>
      <div className="project-bar-track">
        <div
          className="project-bar-fill"
          style={{ width: `${project.progress}%` }}
        />
      </div>
      <div className="project-meta">
        <span>{project.completedTasks}/{project.totalTasks} tasks</span>
        <span>{project.members.length} members</span>
      </div>
    </div>
  );
}

export default ProjectCard;
