import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;

  list-style: none;
`;

export const Button = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;

  font-size: 14px;
  font-weight: 600;

  &:active {
    background-color: blue;
  }
`;
