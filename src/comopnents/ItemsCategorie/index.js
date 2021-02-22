import React from 'react';
import styled from 'styled-components';

import ProductCard from '../ProductCard';

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 50px 0px;
`;

const CategorieHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  header{
    display: flex;
    align-items: center;
    justify-content: left;
  }
  h1{
    margin-right: 30px;
  }

  button{
    display: flex;
    align-items: center;
    background: none;
    border: none;
    font-family: ${({ theme }) => theme.fontFamily};
    cursor: pointer;
    :hover{
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary}
    }
    img{
      width: 27px;
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 1350px){
      h2{
        display: none;
      }
  }
  @media screen and (max-width: 900px){
    .ver-mais{
      display: none;
    }
  }
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  grid-gap: 20px;
  list-style: none;
  margin-top: 30px;

  @media screen and (max-width: 1350px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 900px){
    grid-template-columns: 1fr;
  }
`;

export default function ItemsCategorie({ products, header }) {
  return (
    <Container>
      <CategorieHeader>
        <header>
          <h1>{header.title.toUpperCase()}</h1>
          <h2>{header.subTitle}</h2>
        </header>
        <button type="button">
          <img src="/plus-icon.svg" alt="Botao para ver mais icones" />
          <span className="ver-mais">Ver mais</span>
        </button>
      </CategorieHeader>
      <ItemsList>
        {products.data.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </ItemsList>
    </Container>
  );
}
