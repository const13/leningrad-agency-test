import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Content from './Content'; 
import Reviews from './Reviews'; 
import OpeningHours from './OpeningHours'; 

const MainStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex: 1;
  padding: 60px 7.65vw;
`;

function Main() {
  return (
    <MainStyled>
      <Switch>
          <Route path="/" exact={true}>
            <Content title="О компании"/>
          </Route>
          <Route path="/1">
            <Content title="Услуги"/>
          </Route>
          <Route path="/2">
            <Content title="О проекте"/>
          </Route>
          <Route path="/3">
            <Content title="Контакты"/>
          </Route>
        </Switch>
      <Reviews />
      <OpeningHours />
    </MainStyled>
  );
}

export default Main;
