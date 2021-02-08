import React, { useRef } from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CarouselItem = styled.div`
  position: relative;
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #FFFFFF;
  font-size: 4em;

  img{
    width: 100%;
    pointer-events: none;
  }
  header{
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;

    h1{
      font-size: 30px;
    }
    h2{
      font-size: 20px;
    }
    h1, h2{
      margin-left: 20px;
    }
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

export const carouselItems = [
  {
    id: 1,
    nome: 'Tabaco Amsterdam',
    descricao: 'Tabaco Amsterdam',
    src: '/Amsterdam.jpg',
  },
  {
    id: 2,
    nome: 'Cigarro de Palha Souza',
    descricao: 'Cigarro de Palha Souza',
    src: '/Souza.jpg',
  },
  {
    id: 3,
    nome: 'Cigarro de Palha Piracanjuba',
    descricao: 'Cigarro de Palha Piracanjuba',
    src: '/Piracanjuba.jpg',
  },
];

const carouselTimeStep = 4000;
const carouselTransitionSpeed = 2000;

export default function HomeCarousel() {
  const carouselRef = useRef(null);

  return (
    <Container>
      <Carousel
        ref={carouselRef}
        breakPoints={breakPoints}
        enableAutoPlay
        autoPlaySpeed={carouselTimeStep}
        transitionMs={carouselTransitionSpeed}
        preventDefaultTouchmoveEvent
        showArrows={false}
        pagination={false}
        onNextEnd={({ index }) => (
          index + 1 === carouselItems.length
          && setTimeout(() => {
            carouselRef.current.goTo(0);
          }, carouselTimeStep - carouselTransitionSpeed)
        )}
      >
        {carouselItems.map((item) => (
          <CarouselItem key={item.id}>
            <header>
              <h1>{item.nome}</h1>
              <h2>{item.descricao}</h2>
            </header>
            <img src={item.src} alt={item.descricao} />
          </CarouselItem>
        ))}
      </Carousel>
    </Container>
  );
}
