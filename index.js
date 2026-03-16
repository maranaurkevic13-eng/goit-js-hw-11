import{S as u,i as l}from"./assets/vendor-5ObWk2rO.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();function d(t){const a="https://pixabay.com",o="/api/",s="55046139-0926bc9d71fa83e7a7b72101e",e=new URLSearchParams({key:s,q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),r=a+o+"?"+e;return fetch(r,{method:"GET"}).then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()}).then(n=>res.data).catch(n=>{throw n})}document.querySelector(".loader"),document.querySelector(".gallery");const f=new u(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){const a=t.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${o.likes}</p>
          <p>Views: ${o.views}</p>
          <p>Comments: ${o.comments}</p>
          <p>Downloads: ${o.downloads}</p>
        </div>
      </li>`).join("");galleryEl.insertAdjacentHTML("beforeend",a),f.refresh()}function p(){galleryEl.innerHTML("")}function h(){loader.classList.remove("hidden")}function c(){loader.classList.add("hidden")}const y=document.querySelector(".form");y.addEventListener("submit",t=>{if(t.preventDefault(),!new FormData(t.target).get("search-text")){l.error({message:"Please enter a search term"});return}});p();h();d(value).then(t=>{if(c(),t.hits.length===0){l.info({message:"Sorry, there are no images matching your search query. Please try again!"});return}m(t.hits)}).catch(t=>{c(),l.error({message:"Something went wrong. Please try again later."}),console.error(t)});
//# sourceMappingURL=index.js.map
