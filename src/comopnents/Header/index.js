import React from 'react';
import styled from 'styled-components';

import TopBar from './TopBar';
import MainSection from './MainSection';
import BottomBar from './BottomBar';

const Background = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
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

export default function Header() {
  return (
    <Background>
      <TopBar />
      <MainSection />
      <BottomBar />
    </Background>
  );
}
