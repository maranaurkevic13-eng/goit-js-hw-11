import{a as d,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function m(s){const a="https://pixabay.com",r="55046139-0926bc9d71fa83e7a7b72101e",o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"});try{return(await d.get(a,{params:o})).data}catch(e){throw e}}const l=document.querySelector(".loader"),u=document.querySelector(".gallery"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const a=s.map(r=>`
      <li class="gallery-item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",a),p.refresh()}function y(){u.innerHTML=""}function g(){l.classList.remove("hidden")}function c(){l.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const r=new FormData(s.target).get("search-text");if(!r){i.error({message:"Please enter a search term"});return}y(),g(),m(r).then(o=>{if(c(),o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}).catch(o=>{c(),i.error({message:"Something went wrong. Please try again later."}),console.error(o)})});
//# sourceMappingURL=index.js.map
