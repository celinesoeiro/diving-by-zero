import { useEffect, useState } from 'react';
import {
  getRandomFact,
  searchByCategory,
  searchByKeyword,
  APIContract,
} from 'services/chuckNorris';

export const useChuckNorrisAPI = () => {
  const [fact, setFact] = useState<APIContract>();
  const [selectedCategory, setSelectedCategory] = useState('random');
  const [loading, setLoading] = useState(false);
  const [facts, setFacts] = useState<APIContract[]>([]);

  const handleRandomFact = () => {
    const res = getRandomFact();

    res.then((data) => {
      setFact(data);
    });

    setLoading(false);
  };

  const handleFilterByCategory = (category: string) => {
    setSelectedCategory(category);

    const res = searchByCategory(category);

    res.then((data) => {
      setFact(data);
    });

    setLoading(false);
  };

  const handleFilterByKeyword = (keyword: string) => {
    const res = searchByKeyword(keyword);

    res.then((data) => {
      setFacts(data.result);
    });

    setLoading(false);
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
