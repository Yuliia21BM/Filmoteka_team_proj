var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("9TCtp"),a=o("hbpud"),i=o("8WMlc");const c=document.querySelector(".swiper-wrapper");!async function(){try{const{results:e}=await(0,r.searchUpcomimgFilms)();if(!e||e===[])return;const t=e.map((e=>`\n      <li class="upcoming-card swiper-slide" data-film-id="${e.id}">\n        <img\n          src="${e.poster_path?"https://image.tmdb.org/t/p/w500"+e.poster_path:"../images/default-poster.jpg"}"\n          alt="${e.title?e.title:"Not known"}"\n          class="upcoming-img"\n          loading="lazy"\n        />\n        <p class="upcoming-card-title">Release date <br/>\n${e.release_date?e.release_date:"Not known"}</p>\n      </li>`)).join("");(0,i.renderSkeletonSlider)(),setTimeout((()=>{c.innerHTML="",c.insertAdjacentHTML("afterbegin",t);new Swiper(".swiper",{direction:"horizontal",slidesPerView:"auto",loopedSlides:e.length,spaceBetween:20,loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},speed:1500,autoplay:{delay:3e3,disableOnInteraction:!1}})}),600)}catch(e){console.log(e)}}(),c.addEventListener("click",(e=>{(0,a.openModal)(e,"upcoming-card")}));r=o("9TCtp");var s=o("7X0WP");const l=document.querySelector('[data-index="1"]'),d=document.querySelector('[data-index="2"]'),u=document.querySelector('[data-index="3"]'),m=document.querySelector('[data-index="4"]'),g=document.querySelector('[data-index="5"]'),p=document.querySelector(".first-button"),h=document.querySelector(".last-button"),x=document.querySelector(".pagination-container"),C=document.querySelector(".arrow-right"),f=document.querySelector(".arrow-left"),b=document.querySelector("#previous"),y=document.querySelector("#after"),v=document.querySelector(".main-container");x.addEventListener("click",(function(e){if("BUTTON"===e.target.tagName){Number(e.target.textContent)&&(w=Number(e.target.textContent)),b.hidden=!0,y.hidden=!0,e.target.classList.contains("pagination-button")&&(L.forEach((e=>e.classList.remove("pagination--current"))),e.target.classList.add("pagination--current")),e.target.classList.contains("arrow-right")&&w<S&&(L.forEach((e=>e.classList.remove("pagination--current"))),l.classList.add("pagination--current"),l.textContent=Number(l.textContent)+5,d.textContent=Number(d.textContent)+5,u.textContent=Number(u.textContent)+5,m.textContent=Number(m.textContent)+5,g.textContent=Number(g.textContent)+5,w=Number(l.textContent)),e.target.classList.contains("arrow-left")&&w>=5&&(L.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=Number(l.textContent)-5,d.textContent=Number(d.textContent)-5,u.textContent=Number(u.textContent)-5,m.textContent=Number(m.textContent)-5,g.textContent=Number(g.textContent)-5,g.classList.add("pagination--current"),w=Number(g.textContent)),e.target.classList.contains("first-button")&&(L.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=1,d.textContent=2,u.textContent=3,m.textContent=4,g.textContent=5,l.classList.add("pagination--current"),w=Number(l.textContent),f.hidden=!0,b.hidden=!0,p.hidden=!0),e.target.classList.contains("last-button")&&(L.forEach((e=>e.classList.remove("pagination--current"))),l.textContent=Number(h.textContent)-4,d.textContent=Number(h.textContent)-3,u.textContent=Number(h.textContent)-2,m.textContent=Number(h.textContent)-1,g.textContent=h.textContent,g.classList.add("pagination--current"),w=Number(g.textContent),C.hidden=!0,y.hidden=!0,h.hidden=!0),Number(w)>5?(f.hidden=!1,b.hidden=!1,p.hidden=!1):(f.hidden=!0,b.hidden=!0,p.hidden=!0),Number(w)<S-4&&(C.hidden=!1,y.hidden=!1,h.hidden=!1),v.scrollIntoView({behavior:"smooth"}),N&&N()}}));let N,w=1,S=1e3,L=document.querySelectorAll(".pagination-button");function E(e){w=e,L.forEach((e=>e.classList.remove("pagination--current"))),l.classList.add("pagination--current")}function q(e){S=e,h.textContent=S}function _(){return isNaN(w)&&(w=1),console.log("currentPage",w),+w}function T(e){N=e}b.hidden=!0,f.hidden=!0,p.hidden=!0,console.log("paginationInit"),console.log("subscriber",N),console.log("CurrentPage",w);var M=o("45IZH");const k=document.querySelector(".search__input"),H=(document.querySelector(".search__button"),document.querySelector(".search")),I=document.querySelector(".warning-notification"),F=document.querySelector(".main-section__allcards");async function W(e){if(""===e)return I.textContent="No matches found for your query. Enter the correct movie name.";I.textContent="";try{const t=await(0,r.searchMovieByName)(e,_());q(t.total_pages);const n=t.results;if(console.log(t),console.log(n),0===n.length)return I.textContent="No matches found for your query. Enter the correct movie name.",F.innerHTML=" ",F.innerHTML='<div class="wrong-box"> <p class="not-found-text">Not Found</p></div>',document.querySelector(".wrong-box").appendChild(M.notFoundFilm).classList.add("film-not-found"),document.querySelector(".pagination-container").classList.add("visually-hidden");I.textContent="",document.querySelector(".pagination-container").classList.remove("visually-hidden"),(0,s.renderFilmCards)(n)}catch(e){console.log(e)}}H.addEventListener("submit",(async function(e){e.preventDefault(),F.scrollIntoView({behavior:"smooth"});const t=e.currentTarget.searchQuery.value.trim();console.log(t),await W(t),E(),T((()=>{W(k.value),console.log(k.value,k.text,"subscriberTextContent")}))}));var P=o("kwJfa");P=o("kwJfa"),s=o("7X0WP");const A=`${P.BASE_URL}/discover/movie?api_key=${P.API_KEY}`,O=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],R=document.querySelector(".genres-list"),j=document.querySelector(".genres-button-mobile");let $=[];function D(e,t){e=e+"&page="+t,console.log("ссылка",e),console.log("страница",t),fetch(e).then((e=>e.json())).then((e=>{console.log(e),console.log(e.page),0!==e.results.length&&((0,s.renderFilmCards)(e.results),e.total_pages>500?q(500):q(e.total_pages))}))}O.forEach((e=>{const t=document.createElement("button");t.classList.add("genres-button"),t.id=e.id,t.innerText=e.name,t.addEventListener("click",(()=>{0==$.length&&$.push(e.id),console.log("selectedGenre"+$),D(A+"&with_genres="+e.id,1),E(),T((()=>{D(A+"&with_genres="+e.id,_())})),$=[]})),R.append(t)})),j.addEventListener("click",(function(){R.classList.toggle("is-active")?j.textContent="HIDE GENRES":j.textContent="SHOW GENRES"}));r=o("9TCtp");o("krGWQ");s=o("7X0WP");o("8WMlc");const G=new(0,o("04jNI").default),J=()=>{G.enable(),(0,r.getPopularFilm)(_()).then((({page:e,results:t,total_pages:n,total_results:o})=>{(0,s.renderFilmCards)(t),G.disable()}))};J(),T(J),o("4GINZ");P=o("kwJfa");var U=o("jIH7J");const B=document.querySelector(".change-color");let V=JSON.parse(localStorage.getItem(P.THEME));B.addEventListener("click",(()=>{V=!V,localStorage.setItem(P.THEME,V),(0,U.changeColorThemeMain)(V)})),(0,U.changeColorThemeMain)(V=V||!1);
//# sourceMappingURL=index.59af140f.js.map