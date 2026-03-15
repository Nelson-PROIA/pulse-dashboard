import type { TeamMember } from '../data/types';
import './MemberCard.css';

interface MemberCardProps {
  member: TeamMember;
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="member-card">
      <div className="member-avatar">{member.avatar}</div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <span className="member-role">{member.role}</span>
      </div>
      <div className="member-stats">
        <div className="member-stat">
          <span className="member-stat-value">{member.tasksCompleted}</span>
          <span className="member-stat-label">Done</span>
        </div>
        <div className="member-stat">
          <span className="member-stat-value">{member.tasksInProgress}</span>
          <span className="member-stat-label">Active</span>
        </div>
        <div className="member-stat">
          <span className="member-stat-value">{member.streak}d</span>
          <span className="member-stat-label">Streak</span>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
