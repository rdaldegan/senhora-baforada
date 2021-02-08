import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 23%;
  height: 30vw;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;

  :hover{
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition: 0.2s;
  }
  .hoverDiv{
    visibility: hidden;
    opacity: 0;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    bottom: 0;
    left:0;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;

    input{
      margin:auto;
      text-align: center;
      border: none;
      line-height: 42px;
    }

    .addToCart{
      height: 100%;
      width: 50%;
      background-color: ${({ theme }) => theme.colors.headerTopBg};
      border: none;
      border-radius: ${({ theme }) => theme.borderRadius};
      color: #FFFFFF;
      font-size: 100%;
      font-family: ${({ theme }) => theme.fontFamily};
      font-weight: bold;
    }
  }

  :hover .hoverDiv{
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }

  .infos{
    margin-top: auto;
    height: 40%;
    width: 80%;
  }

  .itemName{
    width: 100%;
    max-width: 250px;
    white-space: nowrap; 
    text-overflow: ellipsis;
    overflow: hidden; 
  }
`;

const Promo = styled.span`
  position: absolute;
  top: 5%;
  left: 5%;
  padding: 8px;
  background-color: #B53737;
  color: #FFFFFF;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: ${(props) => props.display};
  pointer-events: none;
`;

const ImgDiv = styled.div`
  position: relative;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 15px 5px 5px 5px;
  height: 55%;
  width: 100%;

  img{
    max-height: 100%;
    max-width: 100%;
  }  
  .description{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: #000000;
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;

    p{
      color: #FFFFFF;
      opacity: 1;
      font-family: ${({ theme }) => theme.fontFamily};
      margin: 30px;
      width: 100%;
      word-wrap: normal;
      text-overflow: ellipsis;
      overflow: hidden; 
      font-size: 30px;
      max-height: 290px;

    }
  }
  :hover .description{
    visibility: visible;
    opacity: 0.8;
    transition: 0.8s;
  }
`;

export default function ProductCard({
  nome, descricao, preco, promocao, emEstoque, src,
}) {
  return (
    <Card>
      <ImgDiv>
        <img src={src} alt={nome} />
        <Promo display={promocao.status ? 'inline' : 'none'}>PROMOÇÃO</Promo>
        <div className="description">
          <p>{descricao}</p>
        </div>
      </ImgDiv>
      <div className="infos">
        <h1 className="itemName">{nome}</h1>
        <h2>{`R$ ${(preco / 100).toFixed(2)}`}</h2>
        <div className="hoverDiv">
          <input type="number" defaultValue={1} min={1} max={emEstoque} />
          {emEstoque === 0
            ? <button className="addToCart" type="button" disabled>Fora de estoque</button>
            : <button className="addToCart" type="button" style={{ cursor: 'pointer' }}>Adicionar ao carrinho</button>}
        </div>
      </div>
    </Card>
  );
}
