import React from 'react';
import styled from 'styled-components';
import ButtonComponent from './ButtonComponent';

const ContentStyled = styled.section`
  display: flex;
  flex-flow: column;
  align-items: center;
  max-width: 555px;
  margin-bottom: 60px;

  h2 {
    text-transform: uppercase;
    font-size: 30px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 60px;
    cursor: default;

    &:after {
      position: relative;
      top: 14px;
      display: block;
      content: '';
      height: 4px;
      margin: 0 auto;
      width: 71px;
      background: #D24A43;
      transition: 0.25s;
    }

    &:hover:after {
		  width: 100%;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: 15px;

    &.shifted-red {
      color: #D24A43;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

function Content(props: any) {
  return (
    <ContentStyled>
      <h2>{props.title}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <b>dolore magna aliqua</b>.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      <p className="shifted-red">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
      <ButtonComponent />
    </ContentStyled>
  );
}

export default Content;
