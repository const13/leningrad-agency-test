import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header'; 
import Main from './components/Main'; 
import Footer from './components/Footer'; 

const AppBody = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #555555;

  height: 100vh;
  display: flex;
  flex-flow: column;
  flex: 1;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center; 
    justify-content: center;
    transition: 0.25s;
    font-weight: 600;
    text-decoration: none;
  }

  h3 {
    font-size: 20px;
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 40px;
    font-weight: 600;
  }
`;

function App() {
  return (
    <AppBody>
      <Header />
      <Main />
      <Footer />
    </AppBody>
  );
}

export default App;
