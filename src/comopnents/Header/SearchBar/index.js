import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const InputForm = styled.form`
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.searchBar};
`;

const Input = styled.input`
  border: none;
  width: 100%;
  padding-left: 20px;
  padding-right: 5px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.searchBar};
`;

const SearchButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: none;
  width: 50px;
  cursor: pointer;

  img{
    width:30px;
  }
`;

const searchIconRef = '/sherlock-holmes.svg';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  function handleChangeInput(e) {
    setSearchText(e.target.value);
  }
  return (
    <InputForm
      onSubmit={(e) => {
        e.preventDefault();
        if (searchText !== '') {
          setSearchText('');
          router.push(`/search/${searchText}`);
        }
      }}
    >
      <Input
        type="text"
        placeholder="Pesquise por nomes, marcas, tipos..."
        value={searchText}
        onChange={(e) => handleChangeInput(e)}
      />
      <SearchButton
        type="submit"
        as={motion.button}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
      >
        <img src={searchIconRef} alt="Icone da barra de pesquisa" />
      </SearchButton>
    </InputForm>
  );
}
