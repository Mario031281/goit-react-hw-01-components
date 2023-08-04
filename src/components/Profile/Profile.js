import {
  UserName,
  Description,
  Text,
  StatsList,
  StatsListItem,
  UserAvatar,
  UserProfile,
  SpanProfile,
} from './Profile.styled';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <UserProfile>
      <Description>
        <UserAvatar src={avatar} width="200" alt="User avatar" />
        <UserName>{username}</UserName>
        <Text>{tag}</Text>
        <Text>{location}</Text>
      </Description>

      <StatsList>
        <StatsListItem>
          <SpanProfile>Followers</SpanProfile>
          <SpanProfile>{stats.followers}</SpanProfile>
        </StatsListItem>
        <StatsListItem>
          <SpanProfile>Views</SpanProfile>
          <SpanProfile>{stats.views}</SpanProfile>
        </StatsListItem>
        <StatsListItem>
          <SpanProfile>Likes</SpanProfile>
          <SpanProfile>{stats.likes}</SpanProfile>
        </StatsListItem>
      </StatsList>
    </UserProfile>
  );
};
