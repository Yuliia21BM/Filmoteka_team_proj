!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,i.call(a.exports,a,a.exports),a.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=i),i("iE7OH").register(JSON.parse('{"2Y0K8":"library.7015dd71.js","5tlci":"not-found-gif.2777c0e4.gif","dTTGj":"library.6c1b5ab9.js"}'));var a=i("ebqVR");const s={mainContainerEl:document.querySelector(".main-section__allcards"),searchForm:document.querySelector(".search"),input_error:document.querySelector(".warning-notification"),watchedBtn:document.querySelector(".header-lib__btn-watched"),queueBtn:document.querySelector(".header-lib__btn-queue"),paginationWrap:document.querySelector(".pagination-container")};var r=i("sRYpV"),c=i("3dy0j");async function o(e){const t=e.map((e=>function(e){const{poster_path:t,id:n,title:i,genre_ids:a,release_date:s,vote_average:r}=e,o="https://image.tmdb.org/t/p/w500";let d="";const _=()=>`\n  <li class="main-section__card-conteiner">\n  <div class="main-section__card main-section__popup" data-film-id="${e.id}">\n        <img src="${e.poster_path?o+e.poster_path:c.defaultPoster.src}" alt="${e.title?e.title:"Unknown"}" class="main-section__image" loading="lazy">\n  <p class="main-section__popup-title"> <span class = "popUp-title">About</span> <br/>${e.overview?e.overview:"No description"}</p>\n  </div>\n      <div class="main-section__card main-section__cards" data-film-id="${e.id}">\n\t\t\t\t\t<h2 class="main-section__card-title">${e.title?e.title:"Unknown title"}</h2>\n                   \n\t\t\t\t\t<p class="main-section__description">${e.genre_ids?d:"Unknown"} | ${e.release_date?e.release_date.slice(0,4):"n/a"}\n\t\t\t\t\n                <span class="main-section__card-rating">${e.vote_average?e.vote_average.toFixed(1):"0.0"}</span>\n                </p>\n      </div>             \n    </div>`,p=()=>`\n  <li class="main-section__card-conteiner">\n  <div class="main-section__card main-section__popup" data-film-id="${e.id}">\n        <img src="${e.poster_path?o+e.poster_path:c.defaultPoster.src}" alt="${e.title?e.title:"Unknown"}" class="main-section__image" loading="lazy">\n  <p class="main-section__popup-title"> <span class = "popUp-title">About</span> <br/>${e.overview?e.overview:"No description"}</p>\n  </div>\n      <div class="main-section__card main-section__cards" data-film-id="${e.id}">\n\t\t\t\t\t<h2 class="main-section__card-title">${e.title?e.title:"Unknown title"}</h2>\n                   \n\t\t\t\t\t<p class="main-section__description">${e.genre_ids?d:"Unknown"} | ${e.release_date?e.release_date.slice(0,4):"n/a"}\n\t\t\t\t\n                <span class="main-section__card-rating">${e.vote_average?Number(e.vote_average).toFixed(1):"0.0"}</span>\n                </p>\n      </div>             \n    </div>`;if(!a)return d=e.genres,p();d=a.length<=3?a.map((e=>l.get(e))).join(", "):l.get(a[0])+", "+l.get(a[1])+", Other";return _()}(e))).join("");s.mainContainerEl.innerHTML="",s.mainContainerEl.insertAdjacentHTML("beforeend",t)}const l=new Map;(0,r.searchGenres)().then((e=>e.genres.map((({id:e,name:t})=>{l.set(e,t)}))));var d;d=i("aNJCr").getBundleURL("2Y0K8")+i("iE7OH").resolve("5tlci");const _=()=>{const e=document.createElement("img");e.src=new URL(d),e.alt="Travolta from Pulp Fiction is searching for something",e.class="not-found",s.mainContainerEl.innerHTML=`<div class="no-movies-wrap">\n                ${e.outerHTML}\n                <p>No movies here yet</p>\n            </div>`},p=async e=>{try{const t=localStorage.getItem(e);if(!t||t.length<=2)return void _();let n=await JSON.parse(t);return n.length<20&&!s.paginationWrap.classList.contains("visually-hidden")?s.paginationWrap.classList.add("visually-hidden"):s.paginationWrap.classList.remove("visually-hidden"),console.log("movieList:",n),o(n)}catch(e){console.error("Error: ",e.message)}};s.watchedBtn.addEventListener("click",(()=>{s.watchedBtn.classList.contains("header-lib__btn--current")||(p(a.WATCHED_LIST),s.queueBtn.classList.toggle("header-lib__btn--current"),s.watchedBtn.classList.toggle("header-lib__btn--current"))})),s.queueBtn.addEventListener("click",(()=>{s.queueBtn.classList.contains("header-lib__btn--current")||(p(a.QUEUE_LIST),s.watchedBtn.classList.toggle("header-lib__btn--current"),s.queueBtn.classList.toggle("header-lib__btn--current"))})),s.queueBtn.classList.contains("header-lib__btn--current")&&s.watchedBtn.classList.contains("header-lib__btn--current")?s.queueBtn.classList.contains("header-lib__btn--current")?p(a.QUEUE_LIST):s.watchedBtn.classList.contains("header-lib__btn--current")&&p(a.WATCHED_LIST):(s.queueBtn.classList.toggle("header-lib__btn--current"),p(a.QUEUE_LIST)),i("jcFG7"),i("jjmYL"),i("j1lrD")}();
//# sourceMappingURL=library.7015dd71.js.map
