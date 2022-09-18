import axios from "axios";

export const axiosFactory = () => {
  return axios.create({
    baseURL: "https://api.chucknorris.io/jokes/",
  });
};
