import React from 'react';
import styled from 'styled-components';

import Carousel from '../src/comopnents/Carousel';
import ItemsCategorie from '../src/comopnents/ItemsCategorie';
import InstagramFeed from '../src/comopnents/InstagramFeed';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <Container>
      <Carousel />
      {/* {categories.map((categorie) => (
        <ItemsCategorie
          key={categorie.id}
          product={categorie}
        />
      ))} */}
      <InstagramFeed />
    </Container>
  );
}
