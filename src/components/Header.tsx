import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


const HeaderStyled = styled.header`
  display: flex;
  align-content: center;
  flex-flow: column;

  div {
    text-transform: uppercase;
    padding: 19px 7.65vw;
    transition: 0.25s;

    a {
      width: 281px;
      height: 103px;
      background-color: #DDDDDD;
      text-decoration: none;
    }

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }
  }

  nav {
    display: flex;
    align-items: center;
    background-color: #DDDDDD;
    min-height: 51px;

    ul {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      padding: 0 7.65vw;
      margin: 0;

      a {
        
        flex: 1;
        color: #555555;

        &:active, &.active {
          color: white !important;
          background-color: #D24A43;

        }
        
        &:hover {
          background-color: #c45751;
          color: white !important;
        }
      }

      @media (max-width: 480px) {
        flex-flow: column;
        padding: 0;
      }
    }

    @media (min-width: 480px) {
      height: 51px;
    }
  }
`;


function Header() {
  return (
    <HeaderStyled>
      <div className="logo-wrapper">
        <a href="/">Лого</a>
      </div>
      <nav>
        <ul>
          <NavLink exact={true} activeClassName='active' to='/'>О компании</NavLink>
          <NavLink to='/1'>Услуги</NavLink> 
          <NavLink to='/2'>О продукте</NavLink>
          <NavLink to='/3'>Контакты</NavLink>
        </ul>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
