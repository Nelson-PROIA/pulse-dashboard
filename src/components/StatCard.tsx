import './StatCard.css';

interface StatCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
}

function StatCard({ label, value, subtitle, trend }: StatCardProps) {
  const trendIcon = trend === 'up' ? '\u2191' : trend === 'down' ? '\u2193' : '';
  const trendClass = trend === 'up' ? 'trend-up' : trend === 'down' ? 'trend-down' : '';

  return (
    <div className="stat-card">
      <span className="stat-label">{label}</span>
      <span className="stat-value">
        {value}
        {trendIcon && <span className={`stat-trend ${trendClass}`}>{trendIcon}</span>}
      </span>
      {subtitle && <span className="stat-subtitle">{subtitle}</span>}
    </div>
  );
}

export default StatCard;
