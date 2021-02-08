import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export default function InstagramFeed() {
  return (
    <Container>
      <script src="https://apps.elfsight.com/p/platform.js" defer />
      <div className="elfsight-app-3bae3aea-2968-44a4-8f6e-2ebd31ef29d7" />
    </Container>
  );
}
