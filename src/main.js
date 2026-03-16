import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./js/pixabay-api";
import {
    createGallery,
    clearGallery,
    showLoader,
    hideLoader,
} from "./js/render-functions.js";


const formEl = document.querySelector('.form');


formEl.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const value = formData.get('search-text');

    if (!value) {
        iziToast.error({
         message: 'Please enter a search term',
        });
        return;
    }
});

clearGallery();
showLoader();

getImagesByQuery(value)
  .then(data => {
    hideLoader();

    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    createGallery(data.hits);
  })
  .catch(error => {
    hideLoader();
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
    });
    console.error(error);
  });


