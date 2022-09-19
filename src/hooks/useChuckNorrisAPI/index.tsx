import { useEffect, useState } from 'react';
import {
  getRandomFact,
  listCategories,
  searchByCategory,
  searchByKeyword,
  APIContract,
} from 'services/chuckNorris';

export const useChuckNorrisAPI = () => {
  const [content, setContent] = useState('');
  const [factCategories, setFactCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('random');
  const [loading, setLoading] = useState(false);
  const [facts, setFacts] = useState<APIContract[]>([]);

  const handleRandomFact = () => {
    const res = getRandomFact();

    res.then((data) => {
      setContent(data.value);
      setFactCategories(data.categories);
    });

    setLoading(false);
  };

  const handleListCategories = () => {
    const res = listCategories();

    res.then((data) => {
      setCategories(data);
    });

    setLoading(false);
  };

  const handleFilterByCategory = (category: string) => {
    setSelectedCategory(category);

    const res = searchByCategory(category);

    res.then((data) => {
      setFactCategories(data.categories);
      setContent(data.value);
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
    setLoading(true);

    handleRandomFact();
    handleListCategories();
  }, []);

  return {
    loading,
    content,
    factCategories,
    categories,
    selectedCategory,
    facts,
    setFacts,
    setSelectedCategory,
    handleRandomFact,
    handleListCategories,
    handleFilterByCategory,
    handleFilterByKeyword,
  };
};
