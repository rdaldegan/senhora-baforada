import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerTopBg};
  display: flex;
  justify-content: center; 
  align-items: center;
  ul{
    width: 80%;
    list-style: none;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
  li{
    padding: 0 30px;

    & + li{
      border-left: 2px solid #84747c;
    }

    a{
      text-decoration: none;
      color: ${({ theme }) => theme.colors.headerMainButtons};
    }
  }

  @media screen and (max-width: 900px){
    display: none;
  }
`;

export default function TopBar() {
  const themeContext = useContext(ThemeContext);

  return (
    <Nav>
      <ul>
        <li>
          <motion.a
            href={themeContext.mediaConfig.wppLink}
            whileHover={{ color: themeContext.colors.greyBg }}
            whileTap={{ color: themeContext.colors.primary }}
            transition={{ duration: 0 }}
          >
            Whats App: xxxxx-xxxx
          </motion.a>
        </li>
        <li>
          <motion.a
            href="mailto:ra.fa.daldegan@hotmail.com"
            whileHover={{ color: themeContext.colors.greyBg }}
            whileTap={{ color: themeContext.colors.primary }}
            transition={{ duration: 0 }}
          >
            Email: exemplo@email.com
          </motion.a>
        </li>
      </ul>
    </Nav>
  );
}
