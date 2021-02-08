import React from 'react';
import styled from 'styled-components';

import Carousel from '../src/comopnents/Carousel';
import PromotionIteMs from '../src/comopnents/PromotionItems';
import InstagramFeed from '../src/comopnents/InstagramFeed';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Carousel />
      <PromotionIteMs />
      <InstagramFeed />
    </Container>
  );
}
