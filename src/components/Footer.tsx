import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  background-color: #dddddd;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  span{
    display:inline-block;
    border-bottom:1px solid rgba(85, 85, 85, 0.4);
    padding-bottom:2px;
    
    a {
      color: #555555;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <span><a href="tel:+7(960)970-84-24">+7 (960) 970 84 24</a></span>
    </FooterStyled>
  );
}

export default Footer;
