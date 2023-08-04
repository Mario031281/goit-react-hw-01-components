import {
  UserStatistics,
  UserTitle,
  StatList,
  StatItem,
  StatText,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <UserStatistics>
      {title && <UserTitle>{title}</UserTitle>}

      <StatList>
        {stats.map(({ label, percentage, id }) => (
          <StatItem key={id}>
            <StatText>{label}</StatText>
            <StatText>{percentage}</StatText>
          </StatItem>
        ))}
      </StatList>
    </UserStatistics>
  );
};
