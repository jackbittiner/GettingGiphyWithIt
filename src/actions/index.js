import request from 'superagent';

export const REQUEST_GIFS = 'REQUEST_GIFS';

const API_URL = 'https://api.giphy.com/v1/gifs/search?q=';
const API_KEY = '&api_key=2cf60892033b43d4a1e577e721b99d41';

export function requestGifs(term = null) {
  const data = request.get(`${API_URL}${term.replace(/\s/g, '+')}${API_KEY}`);

  return {
    type: REQUEST_GIFS,
    payload: data
  }
}
