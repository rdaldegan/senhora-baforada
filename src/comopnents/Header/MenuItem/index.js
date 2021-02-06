import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const Li = styled.li`
  list-style: none;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  a {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
    width: 200px;
    height: 20px;
    flex: 1;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:  ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fontFamily};
    font-weight: bolder;
  }
`;

function MenuItem({ itemName, href, variants }) {
  return (
    <Li
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        <a href={href}>
          {itemName}
        </a>
      </Link>
    </Li>
  );
}

export default MenuItem;
