import React from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';

import MenuButton from './MenuButton';
import SearchBar from '../Header/SearchBar';
import MenuItem from './MenuItem';
import { NavBarItems } from '../Header/BottomBar';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media screen and (min-width: 900px){
      display: none;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  height: 100vmax;
  background-color: ${({ theme }) => theme.colors.headerMainBg};
`;

const SearchDiv = styled.div`
  display: ${(props) => props.display};
  position: absolute;
  top: 70px;
  width: 70%;
`;

const UL = styled.ul`
  display: ${(props) => props.display};
  margin: 0;
  padding: 0;
  padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;

  hr{
    margin: 30px 0px 30px 0px;
    border-color: ${({ theme }) => theme.colors.headerMainButtons};
  }
`;

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const sidebar = {
  open: () => ({
    clipPath: 'circle(120vmax at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 60,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const MainItems = [
  { name: 'Minha Conta', href: '/' },
  { name: 'Carrinho', href: '/' },
];

const categorieItems = NavBarItems;

export default function SideMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <Nav as={motion.nav} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <Background as={motion.div} variants={sidebar} />
      <SearchDiv as={motion.div} variants={variants} display={isOpen ? 'flex' : 'none'}>
        <SearchBar />
      </SearchDiv>
      <UL as={motion.ul} variants={ulVariants} display={isOpen ? 'colum' : 'none'}>
        {MainItems.map((item) => (
          <MenuItem
            name={item.name}
            key={item.name}
            href="/"
            variants={variants}
          />
        ))}
        <motion.hr className="menusDivisor" variants={variants} />
        {categorieItems.map((item) => (
          <MenuItem
            name={item.name}
            key={item.name}
            href={`/categorie/${item.slug}`}
            variants={variants}
          />
        ))}
      </UL>
      <MenuButton toggle={() => toggleOpen()} variants={isOpen} />
    </Nav>
  );
}
