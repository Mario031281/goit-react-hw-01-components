import { FriendListItem } from './FriendListItem';
import { List, ListItem } from './FriendList.styled';

// };
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id} $isonline={friend.isOnline.toString()}>
          <FriendListItem friend={friend} />
        </ListItem>
      ))}
    </List>
  );
};
