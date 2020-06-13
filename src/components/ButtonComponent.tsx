import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  width: 167px;
  height: 41px;
  background-color: #D24A43;
  color: white;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid #D24A43;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 1px black;
  font-weight: 600;
  user-select: none;

  &:active, &:focus {
    outline: 0 solid black;
  }

  &:active {
    transform: translateY(1px);
    background-color: #c45751;
  }
`;

function ButtonComponent() {
  return (
    <ButtonStyled>Купить продукт</ButtonStyled>
  );
}

export default ButtonComponent;
