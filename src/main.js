import { createMarkupItem } from './js/render-functions.js';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.js-gallery');
const searchFormEl = document.querySelector('.js-search-form');
const loaderEl = document.querySelector('.js-loader');

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = event.target.elements.searchKeyword.value.trim();
  if (searchQuery === '') {
    showEmptyQueryError(event);
    return;
  }

  clearGallery();
  showLoader();

  fetchPhotosByQuery(searchQuery)
    .then(handleFetchSuccess)
    .catch(handleFetchError)
    .finally(() => {
      event.target.reset();
      hideLoader();
    });
}

function showEmptyQueryError(event) {
  galleryEl.innerHTML = '';
  event.target.reset();
  iziToast.error({
    title: 'Error',
    message: 'Illegal operation',
    position: 'topRight',
    timeout: 2000,
  });
}

function clearGallery() {
  galleryEl.innerHTML = '';
}

function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

function handleFetchSuccess(imagesData) {
  if (imagesData.totalHits === 0) {
    iziToast.show({
      message: 'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      timeout: 2000,
      color: 'red',
    });
  } else {
    galleryEl.innerHTML = createMarkupItem(imagesData.hits);
  }
}

function handleFetchError(error) {
  console.error(error);
  iziToast.error({
    title: 'Error',
    message: 'Something went wrong, please try again later.',
    position: 'topRight',
    timeout: 2000,
  });
}