import React from 'react';
import styled from 'styled-components';
import Photo from '../img/photo@1X.png';

const ReviewStyled = styled.article`
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

function Review() {
  return (
    <ReviewStyled>
      <img src={Photo} alt="avatar"></img>
      <div>
        <span>Roger Stevenson</span>
        <p>American skeptic producer and author Brian Dunning believes Polybius to be an urban legend that grew out of exaggerated and distorted of an early realese version of Tempest that caused problems with photosensitive epilepsy, motion seickness, and vertigo.</p>
      </div>
    </ReviewStyled>
  );
}

export default Review;
