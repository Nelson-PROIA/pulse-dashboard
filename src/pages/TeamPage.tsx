import MemberCard from '../components/MemberCard';
import { TEAM } from '../data/mock';
import './TeamPage.css';

function TeamPage() {
  const totalCompleted = TEAM.reduce((sum, m) => sum + m.tasksCompleted, 0);
  const totalActive = TEAM.reduce((sum, m) => sum + m.tasksInProgress, 0);

  return (
    <div className="team-page">
      <header className="page-header">
        <h2>Team</h2>
        <p>{TEAM.length} members &middot; {totalCompleted} tasks completed &middot; {totalActive} active</p>
      </header>

      <div className="team-grid">
        {TEAM.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
