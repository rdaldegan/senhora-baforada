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
    border: 2px solid ${({ theme }) => theme.colors.headerMainButtons};
    border-radius: ${({ theme }) => theme.borderRadius};
    width: 200px;
    height: 20px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:  ${({ theme }) => theme.colors.headerMainButtons};
    text-decoration: none;
    font-weight: bold;
  }
`;

function MenuItem({ name, href, variants }) {
  return (
    <Li
      as={motion.li}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={href}>
        {name}
      </Link>
    </Li>
  );
}

export default MenuItem;
