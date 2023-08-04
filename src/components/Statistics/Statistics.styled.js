import styled from 'styled-components';

export const UserStatistics = styled.section`
  display: block;
  text-align: center;
  margin-top: 100px;
  background: azure;
  padding: 20px;
`;
export const UserTitle = styled.h2`
  padding-bottom: 16px;
`;
export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;
const getNumberRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getColorRandom = () => {
  const red = getNumberRandom(0, 255);
  const green = getNumberRandom(0, 255);
  const blue = getNumberRandom(0, 255);
  return `rgb(${red}, ${green}, ${blue})`;
};
export const StatItem = styled.li`
  height: 60px;
  width: 60px;
  display: grid;
  gap: 10px;
  background: ${getColorRandom};
`;

export const StatText = styled.span``;
