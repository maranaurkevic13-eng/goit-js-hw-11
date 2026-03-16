import{S as d,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function m(s){const n="https://pixabay.com",t="/api/",o="55046139-0926bc9d71fa83e7a7b72101e",e=new URLSearchParams({key:o,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=n+t+"?"+e;return fetch(r,{method:"GET"}).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>a).catch(a=>{throw a})}const u=document.querySelector(".loader"),f=document.querySelector(".gallery"),p=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const n=s.map(t=>`
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
      </li>`).join("");f.insertAdjacentHTML("beforeend",n),p.refresh()}function y(){f.innerHTML=""}function g(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}const L=document.querySelector(".form");L.addEventListener("submit",s=>{s.preventDefault();const t=new FormData(s.target).get("search-text");if(!t){c.error({message:"Please enter a search term"});return}y(),g(),m(t).then(o=>{if(l(),o.hits.length===0){c.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}h(o.hits)}).catch(o=>{l(),c.error({message:"Something went wrong. Please try again later."}),console.error(o)})});
//# sourceMappingURL=index.js.map
