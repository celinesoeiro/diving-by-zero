import { axiosFactory } from 'utils/http/axiosFactory';
import { useState } from 'react';

export type APIContract = {
  categories: [];
  created_at: Date;
  icon_url: string;
  id: string;
  updated_at: Date;
  url: string;
  value: string;
};

export const chuckNorrisAPI = () => {
  const [loading, setLoading] = useState(true);
  const fetcher = axiosFactory();

  const getRandomFact = async () => {
    setLoading(true);

    try {
      const response = await fetcher.get('/random');

      setLoading(false);

      return response.data;
    } catch (err) {
      return err;
    }
  };

  const searchByCategory = async (category: string) => {
    setLoading(true);

    try {
      const response = await fetcher.get(`/random?category=${category}`);

      setLoading(false);

      return response.data;
    } catch (err) {
      return err;
    }
  };

  const searchByKeyword = async (keyword: string) => {
    setLoading(true);

    try {
      const response = await fetcher.get(`/search?query=${keyword}`);

      setLoading(false);

      return response.data;
    } catch (err) {
      return err;
    }
  };

  return {
    loading,
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
