import { NextPage } from 'next';
import Head from 'next/head';
import { listCategories } from 'services/chuckNorris';

import { Home } from '../templates/Home';

interface HomeProps {
  categories: string[];
}

const HomePage: React.FC<HomeProps> = ({ categories }) => {
  return (
    <>
      <Head>
        <title>Diving by zero - A Chuck Norris facts application</title>

        <meta name="description" content="Diving by zero - A Chuck Norris facts application" />

        <link rel="icon" href="/favicon.ico" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        <link rel="manifest" href="/site.webmanifest" />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#da532c" />

        <meta name="theme-color" content="#ffffff" />
      </Head>

      <Home categories={categories} />
    </>
  );
};

export async function getStaticProps() {
  const categories = await listCategories();

  return {
    props: {
      categories,
    },
  };
}

export default HomePage;
