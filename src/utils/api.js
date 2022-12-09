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

export const getArticleComments = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchVotesById = (article_id, voteValue) => {
  const patchBody = {
    inc_votes: voteValue,
  };
  return newsApi.patch(`/articles/${article_id}`, patchBody);
};
