import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43986398-7aebe9ccd4be5011cdf2b223e';

export const fetchPhotosByQuery = query => {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};