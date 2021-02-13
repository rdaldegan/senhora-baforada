import Head from 'next/head';
import React, { useState } from 'react';
import styled from 'styled-components';

import Commerce from '@chec/commerce.js';

import ProductCard from '../../src/comopnents/ProductCard';

const Container = styled.div`
  width: 80%;
  max-width: ${({ theme }) => theme.maxWidth};
  min-height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 590px){
    min-height: 550px;
  }

  header{
    width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    margin: 40px 0px;
    padding: 10px 20px;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    h1{
      font-size: 100%;
    }
  }

  main{
    width: 100%;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;

    @media screen and (max-width: 1180px){
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-width: 875px){
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 590px){
      grid-template-columns: 1fr;
      min-height: 100px;
    }
  }
`;

const PagesControler = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export async function getStaticPaths() {
  const commerce = new Commerce(process.env.REACT_APP_COMMERCE_PUBLIC_KEY, true);

  const response = await commerce.categories.list();

  const paths = response.data.map((cat) => ({
    params: {
      categorie: cat.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const commerce = new Commerce(process.env.REACT_APP_COMMERCE_PUBLIC_KEY, true);

  const categorySlug = params.categorie;

  const data = await commerce.products.list({
    category_slug: categorySlug,
  });

  return {
    props: {
      data,
      slug: categorySlug,
    },
  };
}

export default function Search({ data, slug }) {
  const products = data.data;
  const { meta } = data;

  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(meta.pagination.per_page);
  const hasData = meta.pagination.count !== 0;

  const totalItems = meta.pagination.total;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  function handleChangePage(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  }

  return (
    <>
      <Head>
        <title>{totalPages > 0 ? `Categoria ${slug}` : `Nem um produto com a categoria ${slug}`}</title>
      </Head>
      <Container>
        <header>
          <h1>{totalPages > 0 ? `Categoria ${slug}` : `Nem um produto com a categoria ${slug}`}</h1>
          <input type="number" defaultValue={5} min={1} max={totalItems} onChange={(e) => setItemsPerPage(e.target.value)} />
          <PagesControler>
            <button type="button" onClick={() => handleChangePage(page - 1)} disabled={page <= 1}>Anterior</button>
            <button type="button" disabled>{page}</button>
            <button type="button" onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>Proxima</button>
          </PagesControler>
        </header>
        <main>
          {hasData && products.slice(
            page * itemsPerPage - itemsPerPage, page * itemsPerPage,
          ).map((item) => (
            <ProductCard
              key={item.id}
              product={item}
            />
          ))}
        </main>
        <PagesControler>
          <button type="button" onClick={() => handleChangePage(page - 1)} disabled={page <= 1}>Anterior</button>
          <button type="button" disabled>{page}</button>
          <button type="button" onClick={() => handleChangePage(page + 1)} disabled={page === totalPages}>Proxima</button>
        </PagesControler>
      </Container>
    </>
  );
}
