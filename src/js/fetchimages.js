const URL = 'https://pixabay.com/api/';
const KEY = '25271966-e84b12380dfdddc75d181e677';
const PER_PAGE = 40;

const axios = require('axios').default;

/* Example from https://pixabay.com/api/docs/ */

// var API_KEY = '25271966-e84b12380dfdddc75d181e677';
// var URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + encodeURIComponent('red roses');
// $.getJSON(URL, function (data) {
//   if (parseInt(data.totalHits) > 0)
//     $.each(data.hits, function (i, hit) {
//       console.log(hit.pageURL);
//     });
//   else console.log('No hits');
// });

// https://pixabay.com/api/?key=25271966-e84b12380dfdddc75d181e677&q=yellow+flowers&image_type=photo

/* */

function fetchImages(request) {
  return fetch(
    `${URL}?key=${KEY}&q=${request}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}`,
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export { fetchImages, PER_PAGE };
