import styled from 'styled-components';

export const Table = styled.table`
  display: block;
  justify-content: center;
  text-align: center;
  /* flex-direction: column; */
`;
export const Thead = styled.thead`
  display: inline-grid;
  border: 1px solid DimGray;
`;
export const Tr = styled.tr`
  display: flex;
  color: white;
  background-color: rgb(0, 174, 255);
`;
export const TrItem = styled.tr`
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const Th = styled.th`
  text-align: center;
  align-items: center;
  display: grid;
  width: 200px;
  height: 40px;
  border: 1px solid DimGray;
`;
export const Tbody = styled.tbody`
  display: block;
  text-align: center;
`;
