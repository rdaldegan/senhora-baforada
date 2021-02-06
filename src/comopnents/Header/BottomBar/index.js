import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center; 
  border-top: 3px solid ${({ theme }) => theme.colors.primary};

  @media screen and (max-width: 900px){
    display: none;
  }
`;

const Nav = styled.nav`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  ul{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    
  }
  li{
    font-family: 'Lato', sans-serif;
    padding-bottom: 10px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bolder;
    :hover{
      cursor: pointer;
    }
  }
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
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.itemName}
            </motion.li>
          ))}
        </ul>
      </Nav>
    </Container>
  );
}