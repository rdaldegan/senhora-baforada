import React from 'react';
import styled from 'styled-components';

import ProductCard from '../ProductCard';

const Container = styled.div`
  width: 80%;
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
      width: 30px;
      padding-right: 10px;
    }
  }

  @media screen and (max-width: 1350px){
      flex-direction: column;
      align-items: flex-start;
      h2{
        display: none;
      }
  }
`;

const ItemsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin-top: 30px;

  @media screen and (max-width: 1350px){
    flex-direction: column;
    justify-content: space-around;
  }
`;

const productList = [
  { id: 1, nome: 'Seda Bem Bolado oo oo o o o o o soooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.', preco: 200, promocao: { status: false }, emEstoque: 300, src: '/bem-bolado.jpg' },
  { id: 2, nome: 'Filtro Smoking', descricao: 'Descricao do item', preco: 500, promocao: { status: false }, emEstoque: 5, src: '/filtro.jpg' },
  { id: 3, nome: 'Dichavador', descricao: 'Descricao do item', preco: 500, promocao: { status: false }, emEstoque: 0, src: '/dichavador.jpg' },
  { id: 4, nome: 'Bong', descricao: 'Descricao do item', preco: 500, promocao: { status: true }, emEstoque: 13, src: '/bong.jpg' },
];

export default function HomeCategorie() {
  return (
    <Container>
      <CategorieHeader>
        <header>
          <h1>PROMOÇÕES</h1>
          <h2>O melhor custo benefício pra você</h2>
        </header>
        <button type="button">
          <img src="/plus-icon.svg" alt="Botao para ver mais icones" />
          <span>Mais produtos</span>
        </button>
      </CategorieHeader>
      <ItemsList>
        {productList.map((item) => (
          <ProductCard
            key={item.id}
            nome={item.nome}
            descricao={item.descricao}
            preco={item.preco}
            promocao={item.promocao}
            emEstoque={item.emEstoque}
            src={item.src}
          />
        ))}
      </ItemsList>
    </Container>
  );
}
