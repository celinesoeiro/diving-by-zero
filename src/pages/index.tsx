import Head from 'next/head';

import { Hero } from '../templates/Home';
import { Footer } from 'components/Footer';

import { listCategories } from 'services/chuckNorris';

import { NextPage } from 'next';

interface HeroProps {
  categories: string[];
}

const Home: NextPage<HeroProps> = ({ categories }: HeroProps) => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden ">
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

      <Hero categories={categories} />

      <Footer />
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
