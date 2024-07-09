import{a as c,s as d,i as l}from"./assets/vendor-da73009b.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();c.defaults.baseURL="https://pixabay.com/api";function m(t){const o=atob(t);return Uint8Array.from(o,s=>s.codePointAt(0))}const p=new TextDecoder().decode(m("NDQ3MzQwMDItYzM5MDBlYjc0MWM2MjEzYzdlYzI5NTNlMw=="));async function f(t){return(await c.get("/",{params:{key:p,q:encodeURIComponent(t),image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}function g(t){return t.map(({webformatURL:o,largeImageURL:s,tags:n,likes:e,views:r,comments:i,downloads:u})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${s}">
            <img class="gallery-image" src="${o}" alt="${n}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="accent">Likes </span>${e}
              </li>
              <li class="description-items">
                <span class="accent">Views </span>${r}
              </li>
              <li class="description-items">
                <span class="accent">Comments </span>${i}
              </li>
              <li class="description-items">
                <span class="accent">Downloads </span>${u}
              </li>
            </ul>
          </a>
        </li>`).join("")}function y(t){t.classList.remove("hidden")}function h(t){t.classList.add("hidden")}const a={form:document.querySelector(".js-search-form"),input:document.querySelector(".js-search-input"),gallery:document.querySelector(".js-gallery"),loadMoreBtn:document.querySelector(".js-load-more-btn"),loader:document.querySelector(".js-loader")},b=new d(".js-gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});a.form.addEventListener("submit",w);async function w(t){t.preventDefault(),a.gallery.innerHTML="";const o=a.input.value.trim();if(o==="")return l.error({message:"Search field can not be empty!",position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"});y(a.loader);try{const s=await f(o);s.hits.length===0?(a.input.value="",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})):(a.input.value="",a.gallery.innerHTML=g(s.hits),b.refresh())}catch(s){l.error({message:`Something went wrong... Error: ${s}`,position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})}finally{h(a.loader)}}
//# sourceMappingURL=commonHelpers.js.map
