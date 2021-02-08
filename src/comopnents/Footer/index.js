import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  height: 300px;
  width: 100%;
  margin-top: 50px;
  background: ${({ theme }) => theme.colors.headerMainBg};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px){
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid ${({ theme }) => theme.colors.headerMainButtons};
  }
`;

export default function Footer() {
  return (
    <>
      <Background>
        bataata
      </Background>
    </>
  );
}
