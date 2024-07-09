import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

// https://developer.mozilla.org/en-US/docs/Glossary/Base64#the_unicode_problem
function base64ToBytes(base64) {
  const binString = atob(base64);
  return Uint8Array.from(binString, m => m.codePointAt(0));
}

const API_KEY = new TextDecoder().decode(
  base64ToBytes('NDQ3MzQwMDItYzM5MDBlYjc0MWM2MjEzYzdlYzI5NTNlMw==')
);

async function searchImages(str) {
  return (
    await axios.get('/', {
      params: {
        key: API_KEY,
        q: encodeURIComponent(str),
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
  ).data;
}

export { searchImages };
