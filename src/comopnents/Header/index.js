import React from 'react';
import styled from 'styled-components';

import TopBar from './TopBar';
import SideMenu from './SideMenu';
import MainSection from './MainSection';
import BottomBar from './BottomBar';

const Background = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.secondary} 0%, ${({ theme }) => theme.colors.lightSecondary} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px){
    height: 100px;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default function Header() {
  return (
    <>
      <Background>
        <TopBar />
        <MainSection />
        <BottomBar />
      </Background>
      <SideMenu />
    </>
  );
}
