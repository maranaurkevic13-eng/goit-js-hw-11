import{a as d,S as f,i}from"./assets/vendor-DQvd0HNi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();async function m(s){const a="https://pixabay.com/api/",o={key:"55046139-0926bc9d71fa83e7a7b72101e",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await d.get(a,{params:o})).data}catch(e){throw e}}const l=document.querySelector(".loader"),u=document.querySelector(".gallery"),p=new f(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const a=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${t.likes}</p>
          <p>Views: ${t.views}</p>
          <p>Comments: ${t.comments}</p>
          <p>Downloads: ${t.downloads}</p>
        </div>
      </li>`).join("");u.insertAdjacentHTML("beforeend",a),p.refresh()}function y(){u.innerHTML=""}function g(){l.classList.remove("hidden")}function c(){l.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const t=new FormData(s.target).get("search-text");if(!t){i.error({message:"Please enter a search term"});return}y(),g(),m(t).then(o=>{if(c(),o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}).catch(o=>{c(),i.error({message:"Something went wrong. Please try again later."}),console.error(o)})});
//# sourceMappingURL=index.js.map
