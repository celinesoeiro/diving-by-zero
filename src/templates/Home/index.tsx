import { useEffect, useState } from 'react';

import { useChuckNorrisAPI } from 'hooks/useChuckNorrisAPI';
import { useDebounce } from 'hooks/useDebouce';

import { Card } from 'components/Card';
import { Select } from 'components/Select';
import { Button } from 'components/Button';
import { TextField } from 'components/TextField';

interface HeroProps {
  categories: string[];
}

export const Hero = ({ categories }: HeroProps) => {
  const {
    loading,
    selectedCategory,
    facts,
    fact,
    setFacts,
    setSelectedCategory,
    handleFilterByCategory,
    handleRandomFact,
    handleFilterByKeyword,
  } = useChuckNorrisAPI();

  const [keyword, setKeyword] = useState('');

  const value = useDebounce(keyword, 1000);

  const handleGetFact = () => {
    if (selectedCategory !== 'random' && value === '') {
      setKeyword('');

      handleFilterByCategory(selectedCategory);

      return;
    }

    if (!!value) {
      console.log('keyword');
      setSelectedCategory('random');

      handleFilterByKeyword(value);

      return;
    }

    console.log('random');
    handleRandomFact();
  };

  const handleClearFilterByKeyword = () => {
    setFacts([]);
    setKeyword('');
  };

  const handleClearFilterByCategory = () => {
    setSelectedCategory('random');

    if (selectedCategory !== 'random') {
      handleRandomFact();
    }
  };

  useEffect(() => {
    if (value) {
      handleFilterByKeyword(value);
    }
  }, [value]);

  return (
    <div className="bg-image bg-bottom bg-no-repeat bg-cover flex w-full h-full py-10 px-20 sm:p-20 items-center content-center justify-center overflow-auto">
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
          w-full h-full 
          flex justify-center items-center"
        >
          <h1
            className="
            flex
            text-dark
            lg:text-9xl
            md:text-8xl
            sm:text-7xl
            text-4xl
            h-full
            font-poppins uppercase font-black italic
            text-center md:text-left
            self-center items-center justify-center"
          >
            Chuck Norris Facts
          </h1>
        </div>
        <div className="w-full h-full justify-center items-center flex flex-col gap-5 max-w-lg">
          <div className="w-full h-full max-h-96 overflow-auto py-5">
            {facts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {facts.map((fact) => (
                  <Card categories={fact.categories} content={fact.value} hasToggle />
                ))}
              </div>
            ) : (
              <Card
                categories={fact?.categories}
                content={fact?.value}
                loading={loading}
                hasToggle={false}
              />
            )}
          </div>

          <Button label="Another random fact" onClick={handleGetFact} />

          <div className="w-full justify-center items-center flex flex-col gap-2 mt-8 sm:mt-10">
            <label
              htmlFor="category"
              className="text-md font-poppins font-bold text-dark text-left w-full shadow-dark drop-shadow-2xl"
            >
              Discover more by category
            </label>
            <Select
              id="category"
              options={categories}
              placeholder="Filter by category"
              onChange={(event) => handleFilterByCategory(event.target.value)}
              buttonLabel="clear"
              value={selectedCategory}
              onClick={() => handleClearFilterByCategory()}
            />

            <label
              htmlFor="category"
              className="text-md font-poppins font-bold text-dark text-left w-full shadow-dark drop-shadow-2xl"
            >
              Or find more by keyword
            </label>

            <TextField
              name="ramdom"
              type="text"
              placeholder="Search by keyword"
              onChange={(event) => setKeyword(event.target.value)}
              buttonLabel="clear"
              value={keyword}
              onClick={() => handleClearFilterByKeyword()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
