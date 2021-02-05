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
  flex-wrap: wrap;
  justify-content: space-between;

  .searchDiv{
    width: 40%;
    
    @media screen and (max-width: 900px){
      display: none;
    }
  }
  
  @media screen and (max-width: 1425px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 900px){
    height: 200px;
    flex-direction: row-reverse;
    justify-content: right;
  }
`;

const HomeLink = styled.span` 
  img{
    width: 250px;
  }
  @media screen and (max-width: 900px) {
    img{
      width: 150px;
    };
  }
`;

const Icon = styled.img`
  width: 50px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li{
  }
  
  button{
    background: none;
    border: none;
    font-family: 'Lato', sans-serif;
    margin: 0px 30px;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 20px;
    font-weight: bolder;
    :hover{
      cursor: pointer;
      border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
      border-radius: 15%;
      transition: 0.2s;
    }
  }

  @media screen and (max-width: 900px){
    display: none;
  }
`;

const cartIconStates = {
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
      <div className="searchDiv">
        <SearchBar />
      </div>
      <List>
        <motion.li
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          onMouseOver={() => setCartIconRef(cartIconStates.MOUSE_OVER)}
          onMouseOut={() => setCartIconRef(cartIconStates.MOUSE_OUT)}
        >
          <button type="button">
            <Icon src={cartIconRef} alt="Icone do botão de caarrinho" />
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
