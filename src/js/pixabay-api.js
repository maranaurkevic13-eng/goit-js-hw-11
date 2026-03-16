import axios from "axios";

export function getImagesByQuery(query) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const API_KEY = '55046139-0926bc9d71fa83e7a7b72101e'
     
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: "true",
    });

    const url = BASE_URL + END_POINT + '?' + params;
    
    const options = {
    method: "GET",
  };
    
  return fetch(url, options)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => {
      return data;  
    })
    .catch((error) => {
      throw error;
    });
}