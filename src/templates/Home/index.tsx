import { useEffect, useState } from 'react';
import { useChuckNorrisAPI } from 'services/chuckNorris';

import { useDebounce } from 'hooks/useDebouce';

import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Footer } from 'components/Footer';
import { Select } from 'components/Select';
import { TextField } from 'components/TextField';
import { Typography } from 'components/Typography';
import { Wrapper } from 'components/Wrapper';

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
    searchByCategory,
    searchByKeyword,
    getRandomFact,
  } = useChuckNorrisAPI();

  const [keyword, setKeyword] = useState('');

  const value = useDebounce(keyword, 1000);

  const handleGetFact = () => {
    if (selectedCategory !== 'random' && value === '') {
      setKeyword('');

      searchByCategory(selectedCategory);

      return;
    }

    if (value) {
      setSelectedCategory('random');

      searchByKeyword(value);

      return;
    }

    getRandomFact();
  };

  const handleClearFilterByKeyword = () => {
    setFacts([]);

    setKeyword('');
  };

  const handleClearFilterByCategory = () => {
    setSelectedCategory('random');

    if (selectedCategory !== 'random') {
      getRandomFact();
    }
  };

  useEffect(() => {
    getRandomFact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (value) {
      searchByKeyword(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Wrapper>
      <div
        className="
          flex flex-col
          w-full h-full 
          py-10 px-5
          xl:p-20 
          items-center content-center justify-center 
          overflow-hidden
        "
      >
        <div
          className="
            grid
            sm:grid-cols-1 sm:grid-rows-2 
            md:grid-cols-2 md:grid-rows-1
            lg:grid-cols-2 lg:grid-rows-1 
            xl:grid-cols-2 xl:grid-rows-1 
            overflow-auto
            gap-5
            w-full h-full max-w-7xl 
            "
        >
          <Typography variant="heading" weight="bold" color="dark" alignment="center">
            Chuck Norris Facts
          </Typography>

          <div className="w-full h-full overflow-auto flex flex-col pr-2 items-center content-center justify-center ">
            {facts.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 ">
                {facts.map((fact) => (
                  <Card categories={fact.categories} key={fact.id} content={fact.value} hasToggle />
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

            <Button label="Another random fact" onClick={handleGetFact} />

            <Typography alignment="left">Discover more by category</Typography>

            <Select
              id="category"
              options={categories}
              placeholder="Filter by category"
              onChange={(event) => searchByCategory(event.target.value)}
              buttonLabel="clear"
              value={selectedCategory}
              onClick={() => handleClearFilterByCategory()}
            />

            <Typography>Or find more by keyword</Typography>

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

      <Footer />
    </Wrapper>
  );
};
