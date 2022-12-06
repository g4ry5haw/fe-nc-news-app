import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://pear-excited-ox.cyclic.app/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.article;
  });
};
