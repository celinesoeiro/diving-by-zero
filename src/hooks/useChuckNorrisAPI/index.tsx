import { useEffect, useState } from 'react';
import { getRandomFact, listCategories, searchByCategory } from 'services/chuckNorris';

export const useChuckNorrisAPI = () => {
  const [content, setContent] = useState('');
  const [factCategories, setFactCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(false);

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
      setSelectedCategory(data[0]);
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
    handleRandomFact,
    handleListCategories,
    handleFilterByCategory,
  };
};
