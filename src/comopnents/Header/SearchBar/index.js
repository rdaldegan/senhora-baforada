import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputDiv = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.greyBg};
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding-left: 20px;
  padding-right: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.greyBg};
  :focus{
    outline: none;
  }
`;

const SearchButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: none;
  width: 50px;
  :focus{
    outline: none;
  }
  :hover{
    cursor: pointer;
  }

  img{
    width:30px;
  }
`;

const searchIconStates = {
  MOUSE_OUT: '/sherlock-holmes.svg',
  MOUSE_OVER: '/sherlock-holmes-clicked.svg',
};

export default function SearchBar() {
  const [searchIconRef, setSearchIconRef] = useState(searchIconStates.MOUSE_OUT);

  return (
    <InputDiv>
      <Input type="text" placeholder="E ai? Quer baforar o que?" />
      <SearchButton
        type="button"
        onMouseOver={() => setSearchIconRef(searchIconStates.MOUSE_OVER)}
        onMouseOut={() => setSearchIconRef(searchIconStates.MOUSE_OUT)}
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <img src={searchIconRef} alt="Icone da barra de pesquisa" />
      </SearchButton>
    </InputDiv>
  );
}
