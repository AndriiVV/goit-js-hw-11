const URL = 'https://pixabay.com/api/';
const KEY = '25271966-e84b12380dfdddc75d181e677';
const PER_PAGE = 40;

const axios = require('axios').default;

/* ===== ===== function with async/await axios.get() ===== ===== */

const fetchImagesNew = async (request, page = 1) => {
  const params = {
    key: KEY,
    q: request,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: PER_PAGE,
  };

  const response = await axios.get(URL, { params });
  return response.data;
};

export { fetchImagesNew, PER_PAGE };

/* ===== ===== function with async/await fetch() ===== ===== */

// const fetchImagesNew = async (request, page = 1) => {
//   const response = await fetch(
//     `${URL}?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`,
//   );
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

/* ===== ===== function with fetch().then() ===== ===== */

// function fetchImages(request, page = 1) {
//   return fetch(
//     `${URL}?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${PER_PAGE}`,
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

/* ===== ===== ===== ===== ===== */
