import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center; 
  align-items: center;
  border-top: 3px solid ${({ theme }) => theme.colors.headerMainButtons};
  background-color: ${({ theme }) => theme.colors.headerBottomBg};

  @media screen and (max-width: 900px){
    display: none;
  }
`;

const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  ul{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    
  }
  li{
    color: ${({ theme }) => theme.colors.headerMainButtons};
    font-weight: bolder;
    cursor: pointer;
`;

export const NavBarItems = [
  { itemName: 'Sedas', href: '/' },
  { itemName: 'Bongs', href: '/' },
  { itemName: 'Tabacos', href: '/' },
  { itemName: 'Cachimbos', href: '/' },
  { itemName: 'Acessórios', href: '/' },
  { itemName: 'Todas as Categorias', href: '/' },
];

export default function BottomBar() {
  return (
    <Container>
      <Nav>
        <ul>
          {NavBarItems.map((item) => (
            <motion.li
              key={item.itemName}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.itemName.toUpperCase()}
            </motion.li>
          ))}
        </ul>
      </Nav>
    </Container>
  );
}
