import {
  Table,
  Thead,
  Tr,
  Tbody,
  Th,
  TrItem,
} from './TransactionHistory.styled';
export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </Tr>
      </Thead>
      {items.map(item => (
        <Tbody key={item.id}>
          <TrItem>
            <Th>{item.type}</Th>
            <Th>{item.amount}</Th>
            <Th>{item.currency}</Th>
          </TrItem>
        </Tbody>
      ))}
    </Table>
  );
};
