!function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=4)}([function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",i=n[3];if(!i)return t;if(e&&"function"==typeof btoa){var o=(a=i,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[t].concat(r).concat([o]).join("\n")}var a,c,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(i)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);i&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){var i=t(2),o=t(3);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);n.exports=o.locals||{}},function(n,e,t){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),a=[];function c(n){for(var e=-1,t=0;t<a.length;t++)if(a[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},i=[],o=0;o<n.length;o++){var r=n[o],s=e.base?r[0]+e.base:r[0],d=t[s]||0,l="".concat(s," ").concat(d);t[s]=d+1;var u=c(l),p={css:r[1],media:r[2],sourceMap:r[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:l,updater:b(p,e),references:1}),i.push(l)}return i}function d(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var r=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function f(n,e,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var m=null,h=0;function b(n,e){var t,i,o;if(e.singleton){var r=h++;t=m||(m=d(e)),i=p.bind(null,t,r,!1),o=p.bind(null,t,r,!0)}else t=d(e),i=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var o=c(t[i]);a[o].references--}for(var r=s(n,e),d=0;d<t.length;d++){var l=c(t[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}t=r}}}},function(n,e,t){"use strict";t.r(e);var i=t(0),o=t.n(i)()(!1);o.push([n.i,"* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Roboto', sans-serif;\n}\n\nul {\n  list-style-type: none;\n}\n\nli:hover {\n  cursor: pointer;\n  border-bottom: 5px solid #20de83;\n}\n\na {\n  text-decoration: none;\n}\n\n#container {\n  background: #bf9a9a;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  min-height: 80px;\n}\n\n#header-container {\n  height: 100%;\n  background: #262222;\n  padding: 0 2.9%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n#restaurant-title {\n  font-size: 2rem;\n  color: #fff;\n}\n\n#restaurant-title #kor {\n  color: #e33535;\n}\n\n#nav-bar {\n  display: flex;\n  align-items: center;\n}\n\n#nav-bar li {\n  margin-right: 20px;\n  color: #fff;\n  font-size: 1.2rem;\n}\n\n#nav-bar li:last-child {\n  margin-right: 0;\n}\n\nmain {\n  flex: 8.5 0 0;\n  min-height: 500px;\n}\n\n#home-main-container {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: relative;\n}\n\n#landing-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n\n#phrase-box {\n  position: absolute;\n  width: 66%;\n  max-width: 700px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#main-phrase {\n  color: #fff;\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n#about-main-container {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: relative;\n}\n\n#about-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n\n#about-phrase-box {\n  position: absolute;\n  width: 66%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#phrase-box-span {\n  color: #fff;\n  font-size: 2.5rem;\n  text-align: center;\n}\n\n#phrase-box-p {\n  margin-top: 20px;\n  color: #fff;\n  font-size: 1.5rem;\n  text-align: center;\n}\n\n#menu-main-container {\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  column-gap: 5px;\n  row-gap: 5px;\n}\n\n.menu-items img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n#contact-main-container {\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  position: relative;\n}\n\n#contact-img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0.5;\n}\n\n#contact-section {\n  position: absolute;\n  width: 66%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n#contact-txt {\n  font-size: 2.5rem;\n  color: #fff;\n  text-align: center;\n}\n\n#contact-icons {\n  margin-top: 20px;\n  text-align: center;\n}\n\n.fab,\n.far {\n  font-size: 3rem;\n  margin-right: 20px;\n  color: #fff;\n}\n\n.text-white {\n  color: white;\n}\n",""]),e.default=o},function(n,e,t){"use strict";t.r(e);const i=()=>{const n=document.createElement("div");n.setAttribute("id","home-main-container");const e=document.createElement("img");e.setAttribute("src","https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),e.setAttribute("id","landing-img"),e.setAttribute("alt","landing-page");const t=document.createElement("div");t.setAttribute("id","phrase-box");const i=document.createElement("p");return i.setAttribute("id","main-phrase"),i.innerHTML="WELCOME TO TASTY BITE",t.appendChild(i),n.appendChild(e),n.appendChild(t),n};var o=()=>{const n=document.createElement("div");n.setAttribute("id","about-main-container");const e=document.createElement("img");e.setAttribute("src","https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),e.setAttribute("id","about-img"),e.setAttribute("alt","about-img");const t=document.createElement("div");t.setAttribute("id","about-phrase-box");const i=document.createElement("span");i.setAttribute("id","phrase-box-span"),i.innerHTML="WHO WE ARE";const o=document.createElement("p");return o.setAttribute("id","phrase-box-p"),o.innerHTML="Get the best Nigerian food here",t.appendChild(i),t.appendChild(o),n.appendChild(e),n.appendChild(t),n};var r=()=>{const n=document.createElement("div");n.setAttribute("id","menu-main-container");const e=[];for(let n=0;n<6;n+=1){const t=document.createElement("div");t.setAttribute("class","menu-items");const i=new Image;switch(n){default:case 0:i.src="https://www.allnigerianrecipes.com/wp-content/uploads/2019/03/catfish-pepper-soup.jpg",t.appendChild(i);break;case 1:i.src="https://allnigerianfoods.com/wp-content/uploads/nigerian-dinner-ideas.jpg",t.appendChild(i);break;case 2:i.src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",t.appendChild(i);break;case 3:i.src="https://healthguide.ng/wp-content/uploads/2019/07/IMG_20190729_015830_814.jpg",t.appendChild(i);break;case 4:i.src="https://allnigerianfoods.com/wp-content/uploads/egusi-soup-recipe.jpg",t.appendChild(i);break;case 5:i.src="https://afrotourism.com/wp-content/uploads/2018/06/ofada-sauce1.jpg",t.appendChild(i)}e.push(t)}return e.forEach(e=>n.appendChild(e)),n};var a=()=>{const n=document.createElement("div");n.setAttribute("id","contact-main-container");const e=document.createElement("img");e.setAttribute("src","https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"),e.setAttribute("id","contact-img"),e.setAttribute("alt","contact-img");const t=document.createElement("div");t.setAttribute("id","contact-section");const i=document.createElement("span");i.setAttribute("id","contact-txt"),i.innerHTML="CONTACT US";const o=document.createElement("div");return o.setAttribute("id","contact-icons"),o.className="text-white",o.textContent="\n    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content.\n\n    Company: HostRiver\n    Address: 4435 Berkshire Circle Knoxville\n    Phone: + 879-890-9767\n    Website: www.uny.ro\n    Program: Mon to Sat: 09:30 AM - 10.30 PM\n  ",t.appendChild(i),t.appendChild(o),n.appendChild(e),n.appendChild(t),n};t(1);const c=document.getElementById("content");c.appendChild((()=>{const n=document.createElement("div");n.setAttribute("id","container");const e=document.createElement("header"),t=document.createElement("main"),i=document.createElement("div");i.setAttribute("id","header-container");const o=document.createElement("h1");o.setAttribute("id","restaurant-title"),o.innerHTML='<span id="kor">TASTY</span>BITE';const r=document.createElement("ul");r.setAttribute("id","nav-bar");const a=[];for(let n=0;n<4;n+=1){const e=document.createElement("li");switch(n){default:case 0:e.innerHTML="Home";break;case 1:e.innerHTML="About";break;case 2:e.innerHTML="Menu";break;case 3:e.innerHTML="Contact"}a.push(e)}return a.forEach(n=>r.appendChild(n)),i.appendChild(o),i.appendChild(r),e.appendChild(i),n.appendChild(e),n.appendChild(t),n})());const s=c.querySelector("main");s.appendChild(i());const d=c.querySelector("ul");for(let n=0;n<d.children.length;n+=1){const e=d.children[n],t=()=>{for(let n=0;n<d.children.length;n+=1)d.children[n].style.borderBottom=""};e.addEventListener("click",()=>{switch(e.innerHTML){case"Home":s.innerHTML="",s.appendChild(i()),t(),e.style.borderBottom="5px solid #20de83";break;case"About":s.innerHTML="",s.appendChild(o()),t(),e.style.borderBottom="5px solid #20de83";break;case"Menu":default:s.innerHTML="",s.appendChild(r()),t(),e.style.borderBottom="5px solid #20de83";break;case"Contact":s.innerHTML="",s.appendChild(a()),t(),e.style.borderBottom="5px solid #20de83"}})}}]);
