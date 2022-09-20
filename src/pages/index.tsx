import Head from 'next/head';

import { Hero } from '../templates/Home';

import { listCategories } from 'services/chuckNorris';

import { NextPage } from 'next';

interface HeroProps {
  categories: string[];
}

const Home: NextPage<HeroProps> = ({ categories }) => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden ">
      <Head>
        <title>Diving by zero - A Chuck Norris facts application</title>
        <meta name="description" content="Diving by zero - A Chuck Norris facts application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero categories={categories} />
    </div>
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

export default Home;
