import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center; 
  border-top: 3px solid ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 900px){
    display: none;
  }
`;

const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const MainTopics = [
  {topicName: }
]

export default function BottomBar() {
  return (
    <Container>
      <Nav>
        <li>oi</li>
        <li>tchau</li>
      </Nav>
    </Container>
  );
}
