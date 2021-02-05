import React, { useContext } from 'react';
import { motion, useCycle } from 'framer-motion';
import styled, { ThemeContext } from 'styled-components';

import MenuButton from '../MenuButton';
import SearchBar from '../SearchBar';
import MenuItem from '../MenuItem';

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 900px){
      display: none;
  }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 300px;
  }

  .menuList {
    margin: 0;
    padding: 0;
    padding: 25px;
    position: absolute;
    top: 100px;
    width: 230px;
  }

  .menusDivisor{
    margin: 30px 0px 30px 0px;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const SearchDiv = styled.div`
  position: absolute;
  top: 70px;
  width: 70%;
`;

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
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

const MainItems = [
  { itemName: 'Minha Conta', href: '/' },
  { itemName: 'Carrinho', href: '/' },
];

const NavBarItems = [
  { itemName: 'Sedas', href: '/' },
  { itemName: 'Bongs', href: '/' },
  { itemName: 'Tabacos', href: '/' },
  { itemName: 'Cachimbos', href: '/' },
  { itemName: 'Acessórios', href: '/' },
];

export default function SideMenu() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const themeContext = useContext(ThemeContext);

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
      backgroundColor: themeContext.colors.secondary,
    }),
    closed: {
      clipPath: 'circle(30px at 40px 40px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <Nav as={motion.nav} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.div className="background" variants={sidebar} />
      <SearchDiv as={motion.div} variants={variants}>
        <SearchBar />
      </SearchDiv>
      <motion.ul className="menuList" variants={ulVariants}>
        {MainItems.map((item) => (
          <MenuItem
            itemName={item.itemName}
            key={item.itemName}
            href={item.href}
            variants={variants}
          />
        ))}
        <motion.hr className="menusDivisor" variants={variants} />
        {NavBarItems.map((item) => (
          <MenuItem
            itemName={item.itemName}
            key={item.itemName}
            href={item.href}
            variants={variants}
          />
        ))}
      </motion.ul>

      <MenuButton toggle={() => toggleOpen()} variants={isOpen} />
    </Nav>
  );
}
