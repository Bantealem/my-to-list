(self.webpackChunkmy_to_list=self.webpackChunkmy_to_list||[]).push([[179],{426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>i});var r=t(81),a=t.n(r),o=t(645),s=t.n(o)()(a());s.push([e.id,"*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: lightcyan;\r\n}\r\n\r\nheader {\r\n  height: 4em;\r\n}\r\n\r\nfooter {\r\n  margin-top: 3em;\r\n  height: 3em;\r\n  padding-left: 1em;\r\n}\r\n\r\nheader,\r\nfooter {\r\n  display: flex;\r\n  align-items: center;\r\n  background-color: lightseagreen;\r\n}\r\n\r\nheader h1 {\r\n  padding-left: 40%;\r\n}\r\n\r\nfooter a {\r\n  text-decoration: none;\r\n  color: blue;\r\n}\r\n\r\n.container {\r\n  display: table;\r\n  width: 100%;\r\n  padding-top: 3%;\r\n}\r\n\r\n.list-container {\r\n  /* center verticaly */\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n#todo-list {\r\n  width: 40%;\r\n  min-width: 320px;\r\n  margin: auto;\r\n  border: 1px solid grey;\r\n  border-radius: 8px;\r\n  box-shadow: rgba(0, 0, 0, 0.3) 0 19px 38px, rgba(0, 0, 0, 0.22) 0 15px 12px;\r\n}\r\n\r\nul {\r\n  padding-left: 0;\r\n}\r\n\r\nul li {\r\n  list-style-type: none;\r\n  width: 100%;\r\n  height: max-content;\r\n  min-height: 3em;\r\n  padding: 0 8px;\r\n  border-bottom: 1px solid grey;\r\n\r\n  /* center verticaly */\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\np {\r\n  font-size: larger;\r\n  font-weight: bold;\r\n}\r\n\r\ninput.add-input {\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: inherit;\r\n  border: none;\r\n  outline: none;\r\n  font-size: large;\r\n}\r\n\r\ninput.checkbox {\r\n  /* Double-sized Checkboxes */\r\n  -ms-transform: scale(1.5);\r\n  /* IE */\r\n  -moz-transform: scale(1.5);\r\n  /* FF */\r\n  -webkit-transform: scale(1.5);\r\n  /* Safari and Chrome */\r\n  -o-transform: scale(1.5);\r\n  /* Opera */\r\n  transform: scale(1.5);\r\n  width: 2em;\r\n}\r\n\r\nlabel {\r\n  font-size: larger;\r\n}\r\n\r\n.label-Container {\r\n  word-wrap: break-word;\r\n  max-width: 80%;\r\n}\r\n\r\n.clear-list {\r\n  padding: 0 35%;\r\n  background-color: aliceblue;\r\n  font-weight: 500;\r\n  font-size: large;\r\n}\r\n\r\n.clear-list a {\r\n  color: black;\r\n}\r\n\r\nsvg,\r\nlabel {\r\n  cursor: pointer;\r\n}\r\n\r\nsvg.three-dots:hover {\r\n  cursor: move;\r\n}\r\n\r\nsvg .trash:hover {\r\n  fill: red;\r\n}\r\n\r\n.completed {\r\n  text-decoration: line-through;\r\n  color: green;\r\n  font-weight: 600;\r\n}",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&s[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},s=[],i=0;i<e.length;i++){var l=e[i],c=r.base?l[0]+r.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:h,references:1})}s.push(p)}return s}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var i=t(o[s]);n[i].references--}for(var l=r(e,a),c=0;c<o.length;c++){var d=t(o[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}o=l}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},286:(e,n,t)=>{"use strict";var r=t(379),a=t.n(r),o=t(795),s=t.n(o),i=t(569),l=t.n(i),c=t(565),d=t.n(c),p=t(216),u=t.n(p),m=t(589),h=t.n(m),f=t(426),g={};g.styleTagTransform=h(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=u(),a()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals;class v{static set=e=>{localStorage.setItem("TODO-LIST",JSON.stringify(e))};static get=()=>JSON.parse(localStorage.getItem("TODO-LIST"))||[]}const b=v.get()||[],y=document.getElementById("todo-box"),x=document.querySelector(".clear-btn"),w=document.querySelector(".add-input");class k{static displayTasks=e=>{y.innerHTML="";for(let n=0;n<e.length;n++){const t=document.createElement("li");t.setAttribute("id",`${n}`),t.setAttribute("class","item"),t.innerHTML=`\n      <div class="${e[n].completed?"completed":""} label-Container">\n        <input\n          type="checkbox"\n          class="checkbox"\n          ${e[n].completed?"checked":""}\n        />\n        <label class="description">${e[n].description}</label>\n      </div>\n      <span>\n        <svg\n          xmlns="http://www.w3.org/2000/svg"\n          width="1.5em"\n          height="1.5em"\n          viewBox="0 0 16 16"\n        >\n          <path\n          class="trash"\n            fill="grey"\n            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"\n          />\n        </svg>\n        <svg\n        xmlns="http://www.w3.org/2000/svg"\n        width="1.5em"\n        height="1.5em"\n        viewBox="0 0 16 16"\n        class="three-dots"\n      >\n        <path\n          fill="grey"\n          d="M9.5 13a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z"\n        />\n      </svg>\n    </span>\n      `,y.appendChild(t)}};static addTask=e=>e?(b.push(e),v.set(b),b):null;static removeTask=e=>(b.splice(e,1),class{static updateIndex=()=>{let e=0;b.forEach((n=>{0===e?n.id=1:b[e].id=b[e-1].id+1,e++}))}}.updateIndex(),v.set(b),b);static editTask=(e,n)=>(b[e].description=n.value,v.set(b),n.value="",b)}var T=t(507),E=t.n(T);class C{static toggleCompleted=()=>{y.addEventListener("change",(e=>{if("checkbox"===e.target.className){const n=e.target.parentElement.parentElement;b[n.id].completed=!b[n.id].completed,v.set(b),e.target.parentElement.classList.toggle("completed")}}))};static updateStatus=e=>(b[e].completed=!b[e].completed,v.set(b),b);static deleteAllCompleted=()=>{x.addEventListener("click",(()=>{const e=b.filter((e=>!0===e.completed));for(let n=0;n<e.length;n++)k.removeTask(e[n].id-1);k.displayTasks(b)}))};static clearAllCompleted=()=>b.filter((e=>!1===e.completed))}let S,L=!1;window.addEventListener("load",(()=>{k.displayTasks(b)})),w.addEventListener("keyup",(e=>{if(13===e.keyCode&&w.value)if(L)k.editTask(S),L=!1;else{e.preventDefault();const n=new(E())(w);k.addTask(n),k.displayTasks(b),w.value=""}})),y.addEventListener("click",(e=>{if(e.target.classList.contains("trash")){w.value="";const n=e.target.parentElement.parentElement.parentElement.id;k.removeTask(n),k.displayTasks(b)}else if(e.target.classList.contains("description")){w.focus();const n=y.childNodes;for(let e=0;e<n.length;e++)n[e].style.backgroundColor="lightcyan";e.target.parentElement.parentElement.style.backgroundColor="lightyellow",w.value=e.target.textContent,S=e.target.parentElement.parentElement.id,L=!0}})),C.toggleCompleted(),C.deleteAllCompleted()},507:()=>{}},e=>{e(e.s=286)}]);