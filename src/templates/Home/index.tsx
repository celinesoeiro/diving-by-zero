import { useEffect, useState } from 'react';
import { getRandomFact } from 'services/chuckNorris';

import { Card } from 'components/Card';

export const Hero = () => {
  const [content, setContent] = useState('');
  const [categories, setCategories] = useState([]);

  const handleRandomFact = () => {
    const res = getRandomFact();
    res.then((data) => {
      setContent(data.value);
      setCategories(data.categories);
    });
  };

  useEffect(() => {
    handleRandomFact();
  }, []);

  return (
    <div className="bg-image bg-bottom bg-no-repeat bg-cover flex w-full h-full py-10 px-20 sm:p-20 items-center content-center justify-center">
      <div
        className="
        grid
        sm:grid-cols-1 sm:grid-rows-2 
        md:grid-cols-2 md:grid-rows-1
        lg:grid-cols-2 lg:grid-rows-1 
        xl:grid-cols-2 xl:grid-rows-1 
        w-full max-w-7xl 
        gap-10 
        content-center"
      >
        <div
          className="
          text-dark 
          w-full h-full 
          flex justify-center items-center"
        >
          <h1
            className="
            lg:text-9xl
            md:text-8xl
            sm:text-7xl
            text-5xl
            font-poppins uppercase font-black italic
            text-center md:text-left
            self-start"
          >
            Chuck Norris Facts
          </h1>
        </div>
        <div className="w-full h-full justify-center items-center flex">
          <Card categories={categories} content={content} />
        </div>
      </div>
    </div>
  );
};
