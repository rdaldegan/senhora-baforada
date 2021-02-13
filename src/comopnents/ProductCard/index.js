import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 30vw;
  border-radius: ${({ theme }) => theme.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .infos{
    margin-top: auto;
    height: 40%;
    width: 80%;
    .itemName{
      font-size: 20px;
      width: 100%;
      max-width: 250px;
      white-space: nowrap; 
      text-overflow: ellipsis;
      overflow: hidden; 
    }
  }

  :hover{
    border: 2px solid ${({ theme }) => theme.colors.primary};
    transition: 0.2s;
  }
  
  :hover .hoverDiv{
    visibility: visible;
    opacity: 1;
    transition: 0.5s;
  }
  
  @media screen and (max-width: 1350px){
    width: 250px;
    height: 500px;
  }
`;

const Preco = styled.h2`
  color: ${(props) => props.color};
`;

const Tag = styled.span`
  position: absolute;
  top: 5%;
  left: 5%;
  padding: 8px;
  background-color: ${(props) => props.backGroundColor};
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

  :hover .description{
    visibility: visible;
    opacity: 0.8;
    transition: 0.8s;
  }
`;

const HoverDescription = styled.div`
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

  p{
    color: #FFFFFF;
    opacity: 1;
    font-family: ${({ theme }) => theme.fontFamily};
    margin: 30px;
    width: 100%;
    word-wrap: normal;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 25px; 
    max-height: 250px;
  }
`;

const HoverDiv = styled.div`
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

  .addToCart, .semEstoque{
    height: 100%;
    background-color: ${({ theme }) => theme.colors.headerTopBg};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    color: #FFFFFF;
    font-size: 100%;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: bold;
  }
  .addToCart{
    width: 50%;
    cursor: pointer;
    :hover{
      opacity: 0.8;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .semEstoque{
    width: 100%;
  }
`;

export default function ProductCard({ product }) {
  let promocao = false;
  const hasCategories = Object.prototype.hasOwnProperty.call(product, 'categories');
  if (hasCategories) {
    if (product.categories.find((categorie) => categorie.slug.toUpperCase() === 'PROMOCAO')) {
      promocao = true;
    }
  }
  return (
    <Card>
      <ImgDiv>
        <img src={product.media.source} alt={product.nome} />
        <Tag display={promocao ? 'inline' : 'none'} backGroundColor="#B53737">PROMOÇÃO</Tag>
        <Tag display={product.quantity === 0 ? 'inline' : 'none'} backGroundColor="#444444">Fora de estoque</Tag>
        <HoverDescription className="description">
          <p>{product.description}</p>
        </HoverDescription>
      </ImgDiv>
      <div className="infos">
        <h1 className="itemName">{product.name}</h1>
        <Preco color={promocao ? '#08DB0F' : '#000000'}>{product.price.formatted_with_symbol}</Preco>
        <HoverDiv className="hoverDiv">
          {product.quantity === 0 && <button className="semEstoque" type="button" disabled>Fora de estoque</button>}
          {product.quantity !== 0 && <input type="number" defaultValue={1} min={1} max={product.quantity} />}
          {product.quantity !== 0 && <button className="addToCart" type="button" style={{ cursor: 'pointer' }}>Adicionar ao carrinho</button>}
        </HoverDiv>
      </div>
    </Card>
  );
}
