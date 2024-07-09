import { searchImages } from './js/pixabay-api';
import {
  searchResultsMarkup,
  showElement,
  hideElement,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const elements = {
  form: document.querySelector('.js-search-form'),
  input: document.querySelector('.js-search-input'),
  gallery: document.querySelector('.js-gallery'),
  loadMoreBtn: document.querySelector('.js-load-more-btn'),
  loader: document.querySelector('.js-loader'),
};

const photosGallery = new simpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  overlayOpacity: 0.8,
});

elements.form.addEventListener('submit', searchHandler);

async function searchHandler(event) {
  event.preventDefault();
  elements.gallery.innerHTML = '';
  const searchString = elements.input.value.trim();
  if (searchString === '') {
    return iziToast.error({
      message: 'Search field can not be empty!',
      position: 'topCenter',
      timeout: 3000,
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
      iconUrl: './error.svg',
      progressBarColor: '#b51b1b',
      maxWidth: '432px',
    });
  }
  showElement(elements.loader);

  try {
    const data = await searchImages(searchString);
    if (data.hits.length === 0) {
      elements.input.value = '';
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 3000,
        messageColor: '#fafafb',
        backgroundColor: '#ef4040',
        iconUrl: './error.svg',
        progressBarColor: '#b51b1b',
        maxWidth: '432px',
      });
    } else {
      elements.input.value = '';
      elements.gallery.innerHTML = searchResultsMarkup(data.hits);
      photosGallery.refresh();
    }
  } catch (err) {
    iziToast.error({
      message: `Something went wrong... Error: ${err}`,
      position: 'topCenter',
      timeout: 3000,
      messageColor: '#fafafb',
      backgroundColor: '#ef4040',
      iconUrl: './error.svg',
      progressBarColor: '#b51b1b',
      maxWidth: '432px',
    });
  } finally {
    hideElement(elements.loader);
  }
}
