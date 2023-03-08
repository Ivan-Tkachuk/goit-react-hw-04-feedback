import styled from '@emotion/styled';

export const StatisticsList = styled.ul`
  list-style: none;
  padding: 0px;
`;

export const StatisticsItem = styled.li`
  font-size: 16px;

  &:not(:last-child) {
    padding-bottom: 4px;
  }
`;
