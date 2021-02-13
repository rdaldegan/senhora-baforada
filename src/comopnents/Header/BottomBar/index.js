import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.headerMainButtons};
  }
`;

export const NavBarItems = [
  { slug: 'sedas', name: 'Sedas' },
  { slug: 'bongs', name: 'Bongs' },
  { slug: 'tabacos', name: 'Tabacos' },
  { slug: 'cachimbos', name: 'Cachimbos' },
  { slug: 'acess-rios', name: 'Acessórios' },
  { slug: 'todas-as-categorias', name: 'Todas as Categorias' },
];

export default function BottomBar() {
  return (
    <Container>
      <Nav>
        <ul>
          {NavBarItems.map((item) => (
            <motion.li
              key={item.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={`/categorie/${item.slug}`}>
                {item.name.toUpperCase()}
              </Link>
            </motion.li>
          ))}
        </ul>
      </Nav>
    </Container>
  );
}
