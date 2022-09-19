import type { NextPage } from 'next';
import Head from 'next/head';

import { Hero } from '../templates/Home';

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 overflow-hidden ">
      <Head>
        <title>Diving by zero - A Chuck Norris facts application</title>
        <meta name="description" content="Diving by zero - A Chuck Norris facts application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
    </div>
  );
};

export default Home;
