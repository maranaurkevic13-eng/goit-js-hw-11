import axios from "axios";

export async function getImagesByQuery(query) {
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
    
     try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
}