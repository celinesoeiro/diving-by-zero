import { useState } from 'react';
import { useRouter } from 'next/router';

import { axiosFactory } from 'utils/http/axiosFactory';

export type APIContract = {
  categories: [];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
};

export const useChuckNorrisAPI = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [fact, setFact] = useState<APIContract>();
  const [selectedCategory, setSelectedCategory] = useState('random');
  const [facts, setFacts] = useState<APIContract[]>([]);
  const fetcher = axiosFactory();

  const getRandomFact = async () => {
    setLoading(true);

    try {
      const response = await fetcher.get('/random');

      setFact(response.data);

      setLoading(false);

      return response.data;
    } catch (err) {
      router.push('/500');

      return err;
    }
  };

  const searchByCategory = async (category: string) => {
    setLoading(true);

    setSelectedCategory(category);

    try {
      const response = await fetcher.get(`/random?category=${category}`);

      setFact(response.data);

      setLoading(false);

      return response.data;
    } catch (err) {
      router.push('/500');

      return err;
    }
  };

  const searchByKeyword = async (keyword: string) => {
    setLoading(true);

    try {
      const response = await fetcher.get(`/search?query=${keyword}`);

      setFacts(response.data.result);

      setLoading(false);

      return response.data.result;
    } catch (err) {
      router.push('/500');

      return err;
    }
  };

  return {
    loading,
    fact,
    selectedCategory,
    facts,
    setFacts,
    setSelectedCategory,
    getRandomFact,
    searchByCategory,
    searchByKeyword,
  };
};

export async function listCategories() {
  const fetcher = axiosFactory();

  try {
    const response = await fetcher.get('/categories');

    return response.data;
  } catch (err) {
    return err;
  }
}
