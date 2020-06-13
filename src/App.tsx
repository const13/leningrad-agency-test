import React from 'react';
import {NavLink} from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Photo from './img/photo@1X.png';

const AppBody = styled.div`
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: #555555;

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

const Header = styled.header`
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

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  flex: 1;
  padding: 60px 7.65vw;

`;

const Content = styled.section`
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

const Button = styled.button`
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

const Reviews = styled.section`
  display: flex;
  flex-flow: column;

  .reviews-wrapper {
    display: flex;

    @media (max-width: 992px) {
      flex-flow: column;
    }
  }
`;

const Review = styled.article`
  display: flex;
  flex: 1;
  border: 2px solid #DDDDDD; 
  padding: 40px 45px 35px 40px;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  transition: 0.25s;

  &:not(:last-child) {
    margin-right: 15px;
  }

  &:hover {
    color: #D24A43;
    border-color: #D24A43;

    img {
      border-color: #D24A43;
    }

    div {
      span:after {
        width: 65px;
      }
    }
  }

  img {
    margin-right: 40px;
    border-radius: 50%;
    border: 2px solid #DDDDDD;
    width: 80px;
    height: 80px;
  }

  div {
    display: flex;
    flex-flow: column;
    align-items: flex-start;

    span {
      font-family: MerriweatherSans;
      font-weight: 700;
      /* letter-spacing: 1.1px; */
      margin-bottom: 35px;

      &:after {
        position: relative;
        top: 10px;
        display: block;
        content: '';
        height: 4px;
        width: 36px;
        background: #D24A43;
        transition: 0.25s;
      }
    }

    p {
      font-style: italic;
      text-align: left;
      margin-top: 0;
      margin-bottom: 0;
    }
  } 

  @media (max-width: 992px) {
    &:not(:last-child) {
      margin-right: 0;
      margin-bottom: 15px;
    }
  }

  @media (max-width: 480px) {
    flex-flow: column;
    align-items: center;

    img {
      margin-right: 0;
      margin-bottom: 30px;
    }

    div {
      align-items: center;

      p {
        text-align: justify;
      }
    }
  }
`;

const OpeningHours = styled.section`
  padding-top: 60px;
  width: 241px;
  display: flex;
  flex-flow: column;
  align-items: center;

  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    text-transform: uppercase;

    tr {
      height: 41px;
    }

    tr:nth-child(odd) {
      background-color: #eeeeee;
    }
  }
`;

const Footer = styled.footer`
  background-color: #dddddd;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;

  span{
    display:inline-block;
    border-bottom:1px solid rgba(85, 85, 85, 0.4);
    padding-bottom:2px;
    
    a {
      color: #555555;
    }
  }

  
`;

function App() {
  return (
    <AppBody>
      <Header>
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
      </Header>
      <Main>
        <Content>
          <h2>О компании</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <b>dolore magna aliqua</b>.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p className="shifted-red">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
          <Button>Купить продукт</Button>
        </Content>
        <Reviews>
          <h3>Отзывы наших покупателей</h3>
          <div className='reviews-wrapper'>
            <Review>
              <img src={Photo} alt="avatar"></img>
              <div>
                <span>Roger Stevenson</span>
                <p>American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted of an early realese version of Tempest that caused problems with photosensitive epilepsy, motion seickness, and vertigo.</p>
              </div>
            </Review>
            <Review>
              <img src={Photo} alt="avatar"></img>
              <div>
                <span>Roger Stevenson</span>
                <p>American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted of an early realese version of Tempest that caused problems with photosensitive epilepsy, motion seickness, and vertigo.</p>
              </div>
            </Review>
          </div>
        </Reviews>
        <OpeningHours>
          <h3>Часы работы</h3>
          <table>
            <tbody>
              <tr>
                <td>пн-пт</td>
                <td>10-18</td>
              </tr>
              <tr>
                <td>сб</td>
                <td>10-16</td>
              </tr>
              <tr>
                <td>вс</td>
                <td>12-16</td>
              </tr>
            </tbody>
          </table>
        </OpeningHours>
      </Main>
      <Footer>
        <span><a href="tel:+7(960)970-84-24">+7 (960) 970 84 24</a></span>
      </Footer>
    </AppBody>
  );
}

export default App;
