!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequired7c6=a),a("iE7OH").register(JSON.parse('{"2Y0K8":"library.cb90f340.js","6ihl4":"default-poster.e76d256b.jpg","5tlci":"not-found-gif.2777c0e4.gif","9dQQ5":"library.0159bc51.js"}'));var n=a("ebqVR");const i={mainContainerEl:document.querySelector(".main-section__allcards"),searchForm:document.querySelector(".search"),input_error:document.querySelector(".warning-notification")};var o=a("sRYpV");a("aNJCr").getBundleURL("2Y0K8"),a("iE7OH").resolve("6ihl4");const l=new Map;(0,o.searchGenres)().then((e=>e.genres.map((({id:e,name:t})=>{l.set(e,t)}))));var s;s=a("aNJCr").getBundleURL("2Y0K8")+a("iE7OH").resolve("5tlci");const c=()=>{let e=document.createElement("img");e.src=new URL(s),e.alt="Travolta from Pulp Fiction is searching for something",i.mainContainerEl.innerHTML=`<div class="no-movies-wrap">\n                ${e.outerHTML}\n                <p>No movies here yet</p>\n            </div>`};localStorage.setItem(n.QUEUE_LIST,JSON.stringify([{id:1,title:"Test Movie1",genre:"Drama, Family, Thriller",poster:"https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-60938694502129.webp",rating:6.2,date:2011},{id:2,title:"Test Movie2",genre:"Comedy, Family, Romance",poster:"https://zolushka.com.ua/content/images/49/490x490l80mc0/miaka-ihrashka-imbyrne-pechyvo-art.tt1008-titatin-32211140489658.webp",rating:7.8,date:2008}]));(e=>{try{const t=localStorage.getItem(e);null===t?c():JSON.parse(t)}catch(e){console.error("Error: ",e.message)}})(n.QUEUE_LIST)}();
//# sourceMappingURL=library.cb90f340.js.map
