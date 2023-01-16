function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequired7c6=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("04jNI",(function(t,n){e(t.exports,"default",(function(){return o}));class o{enable(){this.overlay.classList.remove("is-hidden"),this.spinner.classList.add("spinner--on")}disable(){this.overlay.classList.add("is-hidden"),this.spinner.classList.remove("spinner--on")}constructor(){this.overlay=document.querySelector(".spinner__overlay"),this.spinner=document.querySelector(".spinner")}}})),i.register("hbpud",(function(t,n){e(t.exports,"openModal",(function(){return f}));var o=i("9TCtp"),r=i("exKmb"),a=i("a85TQ"),l=i("45IZH"),s=i("kwJfa");const c=new(0,i("04jNI").default);var d=i("9B8F0");async function u(e){const t=await JSON.parse(localStorage.getItem(e)),n=!(!t||t==[]);return console.log(n),!!n&&(console.log(t),t)}function f(e,t){if(!e.target.parentNode.classList.contains(t))return;c.enable();const n=e.target.parentNode.dataset.filmId;(0,o.searchMovieById)(n).then((({poster_path:e,title:t,genres:o,vote_count:i,vote_average:f,popularity:m,original_title:p,overview:_})=>{const b=o?o.map((e=>e.name)).join(", "):"Unknown",h={onShow:()=>{document.body.classList.add("hide-scroll")},onClose:()=>{document.body.classList.remove("hide-scroll"),g.removeEventListener("click",(()=>{watchBtn.removeEventListener("click",a.addWatch),queueBtn.removeEventListener("click",a.addQueue),v.close()}))}},v=d.create(`\n        <div class="film-modal">\n                <button class="film-modal__close-btn" type="button"></button>\n                <div class="film-modal__poster-wrapper"><img class="film-modal__poster" src="${e?"https://image.tmdb.org/t/p/w500"+e:""}" alt="Movie ${t||"Unknown title"} poster" /></div>\n                <div class="film-modal__wrapper">\n                  <div class="film-modal__info-wrapper">\n                    <h2 class="film-modal__title">${t||"Unknown title"}</h2>\n                    <ul class="film-modal__info-list">\n                        <li class="film-modal__info-item">\n                            <h3 class="film-modal__info-title">Vote/Votes</h3>\n                            <p class="film-modal__info-text"><span class="film-modal__info-text--vote">${f?f.toFixed(1):"--"}</span>  <span class="film-modal__info-text--slash">/</span> <span class="film-modal__info-text--vote film-modal__info-text--vote-count">${i||"--"}</p></span>\n                        </li>\n                        <li class="film-modal__info-item">\n                            <h3 class="film-modal__info-title">Popularity</h3>\n                            <p class="film-modal__info-text">${m?m.toFixed(1):"--"}</p>\n                        </li>\n                        <li class="film-modal__info-item">\n                            <h3 class="film-modal__info-title">Original Title</h3>\n                            <p class="film-modal__info-text">${p||"Unknown"}</p>\n                        </li>\n                        <li class="film-modal__info-item">\n                            <h3 class="film-modal__info-title">Genre</h3>\n                            <p class="film-modal__info-text">${b}</p>\n                        </li>\n                        <li class="film-modal__info-item">\n                            <h3 class="film-modal__info-title">Trailer</h3>\n\n                            <p id="trailerBtns-wrapper" class="film-modal__info-text"><button class="film-modal__trailer-btn" type="button" data-id="${n}">Watch trailer<span class="triangle-right"></span></button></p>\n\n                        </li>\n                    </ul>\n                    <h3 class="film-modal__title-about">About</h3>\n                    <p class="film-modal__text-about">${_||"No description"}</p>\n                    </div>  \n                <div class="film-modal__add-btns-wrapper">\n                  <button class="film-modal__add-btns btn-add-watched hover-modal-btn trailer-btn" type="button" data-id="${n}">Add to Watched</button>\n                  <button class="film-modal__add-btns btn-add-queue film-modal__add-btns--seconadry-btn hover-modal-btn" type="button" data-id="${n}">Add to queue</button>\n                </div>\n                </div>\n        </div>`,h);if(v.show(),c.disable(),(0,r.buildTrailerBtns)(n,v),e||(document.querySelector(".film-modal__poster").remove(),document.querySelector(".film-modal__poster-wrapper").appendChild(l.defaultPoster).classList.add("film-modal__poster")),v.visible()){const e=document.querySelector("button.btn-add-watched"),t=document.querySelector("button.btn-add-queue");e.addEventListener("click",a.addWatch),t.addEventListener("click",a.addQueue),u(s.WATCHED_LIST).then((e=>{console.log(e,"watched"),e&&e!==[]&&e.forEach((e=>{e.id!==+n||function(){const e=document.querySelector("button.btn-add-watched");e.textContent="REMOVE FROM WATCHED"}()}))})),u(s.QUEUE_LIST).then((e=>{e&&e!==[]&&e.map((e=>{console.log(e.id!==n,"item.id !== filmId"),e.id!==+n||function(){const e=document.querySelector("button.btn-add-queue");e.textContent="REMOVE FROM QUEUE"}()}))}))}const g=document.querySelector(".film-modal__close-btn");g.appendChild(l.iconCross),g.addEventListener("click",(()=>v.close()))}))}document.querySelector(".main-section__allcards").addEventListener("click",(e=>{f(e,"main-section__card")}))})),i.register("exKmb",(function(n,o){e(n.exports,"buildTrailerBtns",(function(){return s}));var r=i("9TCtp"),a=i("9B8F0"),l=i("cgdCD");document.querySelector(".main-section__allcards");async function s(e,n){const o=await(0,r.searchTrailerById)(e),i=document.querySelector("#trailerBtns-wrapper");if(0===o.results.length)return void(i.innerHTML="No trailers are found");const s=o.results.slice(0,1).map(((e,o)=>{const r=document.createElement("button");return r.innerHTML='Watch trailer<span class="triangle-right"></span>',r.classList.add("film-modal__trailer-btn"),r.addEventListener("click",(()=>function(e,n){n.close();const o=a.create(`\n  <div id="trailer-modal" data-modal>\n  <button class="film-modal__close-btn" type="button" trailer-modal-close>\n   <img class="cross-button__icon" src="${t(l)}" />\n  </button>\n  <iframe\n    id="trailer-iframe"\n   \n    title="YouTube video player"\n    frameborder="0"\n    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\n    allowfullscreen\n  ></iframe>  \n</div>`);o.show(),document.querySelector("#trailer-iframe").src=`https://www.youtube.com/embed/${e}`,document.querySelector("[trailer-modal-close]").addEventListener("click",(()=>{o.close(),n.show()}))}(e.key,n))),r}));i.innerHTML="",i.append(...s)}})),i.register("9B8F0",(function(e,t){e.exports=function e(t,n,o){function r(a,l){if(!n[a]){if(!t[a]){var s=void 0;if(!l&&s)return s(a,!0);if(i)return i(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var d=n[a]={exports:{}};t[a][0].call(d.exports,(function(e){return r(t[a][1][e]||e)}),d,d.exports,e,t,n,o)}return n[a].exports}for(var i=void 0,a=0;a<o.length;a++)r(o[a]);return r}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var o=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},r=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},i=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=i,n.create=function(e,t){var n=function(e,t){var n=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),i=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return i.appendChild(e)}));var a=r(i,"IMG"),l=r(i,"VIDEO"),s=r(i,"IFRAME");return!0===a&&n.classList.add("basicLightbox--img"),!0===l&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),a=function(e){return!1!==t.onClose(l)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===i(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(l)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&a()}));var l={element:function(){return n},visible:function(){return i(n)},show:function(e){return!1!==t.onShow(l)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(l)}))},close:a};return l}},{}]},{},[1])(1)})),i.register("cgdCD",(function(e,t){e.exports=new URL(i("kyEFX").resolve("dFWAL"),import.meta.url).toString()})),i.register("a85TQ",(function(t,n){e(t.exports,"addWatch",(function(){return a})),e(t.exports,"addQueue",(function(){return l}));var o=i("9TCtp"),r=i("kwJfa");async function a(e){const t=e.currentTarget.dataset.id;try{const n=await s(t);if(!n)return;const o=JSON.parse(localStorage.getItem(r.WATCHED_LIST))||[];let i=!1;o.forEach((t=>{if(t.id===n.id){const n=o.indexOf(t);o.splice(n,1),i=!0,e.target.textContent="ADD TO WATCHED"}})),i||(o.push(n),e.target.textContent="REMOVE FROM WATCHED"),localStorage.setItem(r.WATCHED_LIST,JSON.stringify(o))}catch(e){console.log(e)}}async function l(e){const t=e.currentTarget.dataset.id;try{const n=await s(t);if(!n)return;const o=JSON.parse(localStorage.getItem(r.QUEUE_LIST))||[];let i=!1;o.forEach((t=>{if(t.id===n.id){const n=o.indexOf(t);o.splice(n,1),i=!0,e.target.textContent="ADD TO QUEUE"}})),i||(o.push(n),e.target.textContent="REMOVE FROM QUEUE"),localStorage.setItem(r.QUEUE_LIST,JSON.stringify(o))}catch(e){console.log(e)}}async function s(e){try{const t="https://image.tmdb.org/t/p/w500",n=await(0,o.searchMovieById)(e);return{id:n.id,title:`${n.title?n.title:"Unknown"}`,poster_path:`${n.poster_path?t+n.poster_path:"../images/default-poster.jpg"}`,genres:`${n.genres?c(n.genres):"Unknown"}`,vote_average:`${n.vote_average?n.vote_average.toFixed(1):"0"}`,release_date:`${n.release_date?n.release_date.slice(0,4):"n/a"}`}}catch(e){throw e}}function c(e){const t=e.map((e=>e.name)).join(", ").split(",");return t.length>3?`${t.slice(1)}, Other`:t}})),i("kyEFX").register(JSON.parse('{"5ZPII":"index.15d7356d.js","dFWAL":"close-modal-film-icon.d349cae7.svg","6rv6i":"library.abdff2f4.js"}')),i("kwJfa"),i("9TCtp"),i("04jNI"),i("hbpud"),i("2nhTy"),i("exKmb"),i("fUBad"),i("a85TQ");
//# sourceMappingURL=index.15d7356d.js.map
