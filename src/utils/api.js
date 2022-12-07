import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://pear-excited-ox.cyclic.app/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.article;
  });
};

export const getSingleArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article[0];
  });
};

// export const getSingleArticle = (article_id) => {
//   return newsApi
//     .get(`/articles/${article_id}`, {
//       params: { article_id },
//     })
//     .then(({ data: { article } }) => {
//       console.log(article.body);
//       return article.article;
//     });
// };
