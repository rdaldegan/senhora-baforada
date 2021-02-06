import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';

import SearchBar from '../SearchBar';

const Container = styled.nav`
  height: 230px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 900px){
    height: 200px;
    flex-direction: row-reverse;
    justify-content: right;
    padding: 50px;
  }
`;

const HomeLink = styled.span`
  width: 30%;
  img{
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    img{
      width: 150px;
      position: absolute;
      top: 25px;
      left: 50%;
      margin-left: -75px;
    };
  }
`;

const SearchDiv = styled.div`
  width: 30%;
  @media screen and (max-width: 900px){
    display: none;
  }
`;

const List = styled.ul`
  width: 30%;
  padding-left: 0px;
  
  display: flex;
  flex-direction: row;
  list-style: none;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-around;

  img{
    width: 50px;
  }
  
  button{
    background: none;
    border: none;
    font-family: 'Lato', sans-serif;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2vh;
    font-weight: bolder;
    :hover{
      cursor: pointer;
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      border-radius: 15%;
      transition: 0.2s;
    }    
    :focus{
      outline: none;
    }
  }

  @media screen and (max-width: 900px){
    display: none;
  }
`;

export const cartIconStates = {
  MOUSE_OUT: '/cart.svg',
  MOUSE_OVER: '/cart-clicked.svg',
};

export default function MainSection() {
  const [cartIconRef, setCartIconRef] = useState(cartIconStates.MOUSE_OUT);

  return (
    <Container>
      <HomeLink>
        <Link href="/">
          <a href="/">
            <img src="/logo-nome.jpg" alt="Logo da Senhora Baforada" />
          </a>
        </Link>
      </HomeLink>
      <SearchDiv>
        <SearchBar />
      </SearchDiv>
      <List>
        <motion.li
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onMouseOver={() => setCartIconRef(cartIconStates.MOUSE_OVER)}
          onMouseOut={() => setCartIconRef(cartIconStates.MOUSE_OUT)}
        >
          <button type="button">
            <img src={cartIconRef} alt="Icone do botão de carrinho" />
          </button>
        </motion.li>
        <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }}>
          <button type="button">
            Minha Conta
          </button>
        </motion.li>
      </List>
    </Container>
  );
}
