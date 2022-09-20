import { useEffect, useState } from 'react';
import { chuckNorrisAPI, APIContract } from 'services/chuckNorris';

export const useChuckNorrisAPI = () => {
  const [fact, setFact] = useState<APIContract>();
  const [selectedCategory, setSelectedCategory] = useState('random');
  const [facts, setFacts] = useState<APIContract[]>([]);

  const { loading, getRandomFact, searchByCategory, searchByKeyword } = chuckNorrisAPI();

  const handleRandomFact = () => {
    const res = getRandomFact();

    res.then((data) => {
      setFact(data);
    });
  };

  const handleFilterByCategory = (category: string) => {
    setSelectedCategory(category);

    const res = searchByCategory(category);

    res.then((data) => {
      setFact(data);
    });
  };

  const handleFilterByKeyword = (keyword: string) => {
    const res = searchByKeyword(keyword);

    res.then((data) => {
      setFacts(data.result);
    });
  };

  useEffect(() => {
    handleRandomFact();
  }, []);

  return {
    loading,
    selectedCategory,
    facts,
    fact,
    setFacts,
    setSelectedCategory,
    handleRandomFact,
    handleFilterByCategory,
    handleFilterByKeyword,
  };
};
