import styled from 'styled-components';


export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  padding: 0;
  margin: 150px;
`;
const getBackgroundColor = props => {
  switch (props.$isonline) {
    case 'true':
      return 'green';
    case 'false':
      return 'red';
    default:
      return 'black';
  }
};
export const ListItem = styled.li`
  padding: 20px;
  display: flex;
  text-align: center;
  margin-top: 40px;
  background: white;
  background: ${getBackgroundColor};
  border-radius: 5px;
  gap: 30px;
`;

export const FriendStatus = styled.span``;

export const FriendName = styled.p``;
