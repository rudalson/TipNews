// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
});

const apiParams = '?country=kr&apiKey=';
const apiKey = '';

const getTopHeadline = api.get('/top-headlines' + apiParams + apiKey);

export default { getTopHeadline };
