import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const refs = {
    loaderEl: document.querySelector('.loader'),
    galleryEl: document.querySelector('.gallery'),
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});



export function createGallery(images) {
    const markup = images
        .map((img) =>
            `
      <li class="gallery-item">
        <a href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${img.likes}</p>
          <p>Views: ${img.views}</p>
          <p>Comments: ${img.comments}</p>
          <p>Downloads: ${img.downloads}</p>
        </div>
      </li>`
        )
        .join("")
    
    galleryEl.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
};


export function clearGallery() {
    galleryEl.innerHTML("");
};

export function showLoader() {
    loader.classList.remove("hidden");
};

export function hideLoader() {
    loader.classList.add("hidden");
};