import React from 'react';
import styled from 'styled-components';
import Review from './Review'; 

const ReviewsStyled = styled.section`
  display: flex;
  flex-flow: column;

  .reviews-wrapper {
    display: flex;

    @media (max-width: 992px) {
      flex-flow: column;
    }
  }
`;

function Reviews() {
  return (
    <ReviewsStyled>
      <h3>Отзывы наших покупателей</h3>
      <div className='reviews-wrapper'>
        <Review />
        <Review />
      </div>
    </ReviewsStyled>
  );
}

export default Reviews;
