// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
});

// const apiParams =
const apiCountry = 'country=kr';
const apiKey = 'apiKey=';

const getTopHeadline = api.get('/top-headlines?' + apiCountry + '&' + apiKey);
const getByCategory = (category) =>
  api.get('/everything?q=' + category + '&' + apiKey);

export default { getTopHeadline, getByCategory };
