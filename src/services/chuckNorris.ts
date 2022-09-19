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

export async function getRandomFact() {
  const fetcher = axiosFactory();

  try {
    const response = await fetcher.get('/random');

    return response.data;
  } catch (err) {
    return err;
  }
}

export async function listCategories() {
  const fetcher = axiosFactory();

  try {
    const response = await fetcher.get('/categories');

    return response.data;
  } catch (err) {
    return err;
  }
}

export async function searchByCategory(category: string) {
  const fetcher = axiosFactory();

  try {
    const response = await fetcher.get(`/random?category=${category}`);

    return response.data;
  } catch (err) {
    return err;
  }
}

export async function searchByKeyword(keyword: string) {
  const fetcher = axiosFactory();

  try {
    const response = await fetcher.get(`/search?query=${keyword}`);

    return response.data;
  } catch (err) {
    return err;
  }
}
