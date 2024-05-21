import{S as m,i as l}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d=t=>t.map(({webformatURL:o,largeImageURL:s,tags:i,likes:e,views:r,comments:a,downloads:u})=>`
  <li class="gallery-item">
  <a class="gallery-link" href="${s}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${i}"
    />
  </a>
    <div class="small-content">
        <small class="text-body-likes">Likes: ${e}</small>
        <small class="text-body-views">Views: ${r}</small>
        <small class="text-body-comments">Comments: ${a}</small>
        <small class="text-body-downloads">Dowloads: ${u}</small>
    </div>
 
    </li>s
`).join("");new m(".gallery a",{captionsData:"alt",captionDelay:250});const h="https://pixabay.com/api/",f="43986398-7aebe9ccd4be5011cdf2b223e",y=t=>{const o=new URLSearchParams({key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}?${o}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})},n=document.querySelector(".js-gallery"),p=document.querySelector(".js-search-form"),c=document.querySelector(".js-loader");p.addEventListener("submit",g);function g(t){t.preventDefault();const o=t.target.elements.searchKeyword.value.trim();if(o===""){L(t);return}w(),b(),y(o).then(S).catch(P).finally(()=>{t.target.reset(),E()})}function L(t){n.innerHTML="",t.target.reset(),l.error({title:"Error",message:"Illegal operation",position:"topRight",timeout:2e3})}function w(){n.innerHTML=""}function b(){c.classList.remove("is-hidden")}function E(){c.classList.add("is-hidden")}function S(t){t.totalHits===0?l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"red"}):n.innerHTML=d(t.hits)}function P(t){console.error(t),l.error({title:"Error",message:"Something went wrong, please try again later.",position:"topRight",timeout:2e3})}
//# sourceMappingURL=commonHelpers.js.map
