import React from 'react';
import styled from 'styled-components';

import commerce from '../src/commerce';

import Carousel from '../src/comopnents/Carousel';
import ItemsCategorie from '../src/comopnents/ItemsCategorie';
import InstagramFeed from '../src/comopnents/InstagramFeed';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const categories = [
  { slug: 'promocao', title: 'Promoções', subTitle: 'O melhor custo benefício pra você' },
  { slug: 'TODAS-AS-CATEGORIAS', title: 'Variedades', subTitle: 'Tudo o que você puder desejar' },
];

export async function getStaticProps() {
  const errors = [];

  const categoriesList = categories.map(async (categorie) => ({
    header: categorie,
    items: await commerce.products.list({
      limit: 4,
      category_slug: categorie.slug,
    })
      .catch((error) => errors.push(error)),
  }));

  const data = await Promise.all(categoriesList);

  console.log('#############################', errors);

  return {
    props: {
      data,
      errors,
    },
    revalidate: 10800,
  };
}

export default function Home({ data, errors }) {
  console.log(errors);
  return (
    <Container>
      <Carousel />
      {/* {data.map((categorie) => (
        <ItemsCategorie
          key={categorie.header.slug}
          header={categorie.header}
          products={categorie.items}
        />
      ))} */}
      {/* <InstagramFeed /> */}
    </Container>
  );
}
