import{s as u,i as l}from"./assets/vendor-5c957d73.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d="https://pixabay.com/api/";function m(s){const r=atob(s);return Uint8Array.from(r,o=>o.codePointAt(0))}const p=new TextDecoder().decode(m("NDQ3MzQwMDItYzM5MDBlYjc0MWM2MjEzYzdlYzI5NTNlMw=="));function f(s){return fetch(`${d}?key=${p}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(s){return s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:c})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${o}">
            <img class="gallery-image" src="${r}" alt="${a}" width="360" height="152" />
            <ul class="description">
              <li class="description-items">
                <span class="accent">Likes </span>${e}
              </li>
              <li class="description-items">
                <span class="accent">Views </span>${t}
              </li>
              <li class="description-items">
                <span class="accent">Comments </span>${n}
              </li>
              <li class="description-items">
                <span class="accent">Downloads </span>${c}
              </li>
            </ul>
          </a>
        </li>`).join("")}const i={form:document.querySelector(".search-form"),input:document.querySelector(".search-input"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")},h=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});i.form.addEventListener("submit",y);function y(s){s.preventDefault(),i.gallery.innerHTML="";const r=i.input.value.trim();if(r==="")return l.error({message:"Search field can not be empty!",position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"});i.loader.classList.remove("visually-hidden"),f(r).then(o=>{i.input.value="",o.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"}):(i.gallery.innerHTML=g(o.hits),h.refresh())}).catch(o=>{console.log(o),l.error({message:`Something went wrong... Error: ${o}`,position:"topCenter",timeout:3e3,messageColor:"#fafafb",backgroundColor:"#ef4040",iconUrl:"./error.svg",progressBarColor:"#b51b1b",maxWidth:"432px"})}).finally(()=>i.loader.classList.add("visually-hidden"))}
//# sourceMappingURL=commonHelpers.js.map
