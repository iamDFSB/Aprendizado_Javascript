(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>c});var t=e(354),o=e.n(t),a=e(314),i=e.n(a)()(o());i.push([n.id,"*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n}\n\nbody {\n    background-color: antiquewhite;\n    display: flex;\n    justify-content: center;\n}\n\n.container{\n    display: flex;\n    width: 400px;\n    height: 300px;\n    flex-direction: column;\n    background-color: white;\n    align-items: center;\n    justify-content: center;\n    margin-top: 2rem;\n    gap: 1rem;\n}\n\nh2 {\n    color: rgb(83, 214, 214);\n    font-weight: bold;\n    \n}\n\np {\n    color: black;\n    font-size: large;\n}\n\n.requests {\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    border: .5px solid grey;\n    border-radius: 10px;\n    padding: 10px;\n    background-color: rgb(195, 226, 216);\n}\n\nbutton:hover {\n    cursor: pointer;\n    background-color: rgb(188, 235, 235);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wEAAwE;AAC5E;;AAEA;IACI,8BAA8B;IAC9B,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;AACb;;AAEA;IACI,wBAAwB;IACxB,iBAAiB;;AAErB;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,oCAAoC;AACxC;;AAEA;IACI,eAAe;IACf,oCAAoC;AACxC",sourcesContent:["*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\r\n}\r\n\r\nbody {\r\n    background-color: antiquewhite;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.container{\r\n    display: flex;\r\n    width: 400px;\r\n    height: 300px;\r\n    flex-direction: column;\r\n    background-color: white;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin-top: 2rem;\r\n    gap: 1rem;\r\n}\r\n\r\nh2 {\r\n    color: rgb(83, 214, 214);\r\n    font-weight: bold;\r\n    \r\n}\r\n\r\np {\r\n    color: black;\r\n    font-size: large;\r\n}\r\n\r\n.requests {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nbutton {\r\n    border: .5px solid grey;\r\n    border-radius: 10px;\r\n    padding: 10px;\r\n    background-color: rgb(195, 226, 216);\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(188, 235, 235);\r\n}"],sourceRoot:""}]);const c=i},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(i[u]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);t&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),a="/*# ".concat(o," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var u=n[c],s=t.base?u[0]+t.base:u[0],l=a[s]||0,f="".concat(s," ").concat(l);a[s]=l+1;var A=e(f),d={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==A)r[A].references++,r[A].updater(d);else{var p=o(d,t);t.byIndex=c,r.splice(c,0,{identifier:f,updater:p,references:1})}i.push(f)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var u=t(n,o),s=0;s<a.length;s++){var l=e(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=u}}},659:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}function t(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,r){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var t,o,a,i,c=[],u=!0,s=!1;try{if(a=(e=e.call(n)).next,0===r){if(Object(e)!==e)return;u=!1}else for(;!(u=(t=a.call(e)).done)&&(c.push(t.value),c.length!==r);u=!0);}catch(n){s=!0,o=n}finally{try{if(!u&&null!=e.return&&(i=e.return(),Object(i)!==i))return}finally{if(s)throw o}}return c}}(n,r)||function(n,r){if(n){if("string"==typeof n)return o(n,r);var e={}.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,r):void 0}}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var e=0,t=Array(r);e<r;e++)t[e]=n[e];return t}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var a=e(72),i=e.n(a),c=e(825),u=e.n(c),s=e(659),l=e.n(s),f=e(56),A=e.n(f),d=e(540),p=e.n(d),h=e(113),m=e.n(h),v=e(958),b={};b.styleTagTransform=m(),b.setAttributes=A(),b.insert=l().bind(null,"head"),b.domAPI=u(),b.insertStyleElement=p(),i()(v.A,b),v.A&&v.A.locals&&v.A.locals;var g=document.querySelector("div.button-submit button"),y=document.querySelector("p.senha-value"),C=document.querySelector("input[type='number']"),I=document.querySelectorAll("input[type='checkbox']");g.addEventListener("click",(function(n){var r={};I.forEach((function(n){r[n.name]=n.checked}));var e=function(n,r){for(var e=Object.entries(r).filter((function(n){return t(n,2)[1]})).map((function(n){return t(n,1)[0]})),o=function(n,r,e){var t=Array.from({length:26},(function(n,r){return String.fromCharCode(65+r)})),o=t.map((function(n){return n.toLowerCase()})),a=[];if(r&&e)for(var i=0;i<n;i+=2)a.push(t[Math.floor(Math.random()*t.length)]),a.push(o[Math.floor(Math.random()*t.length)]);else if(e)for(var c=0;c<n;c++)a.push(o[Math.floor(Math.random()*t.length)]);else{if(!r)return[];for(var u=0;u<n;u++)a.push(t[Math.floor(Math.random()*t.length)])}return a}(n,e.includes("letraUpper"),e.includes("letraLower")),a=function(n,r){if(r){for(var e=[1,2,3,4,5,6,7,8,9,0],t=[],o=0;o<n;o++)t.push(e[Math.floor(Math.random()*e.length)]);return t}return[]}(n,e.includes("numeros")),i=function(n,r){if(r){for(var e=["^","~","|","=","+","-","*","%","#","&","$","@"],t=[],o=0;o<n;o++)t.push(e[Math.floor(Math.random()*e.length)]);return t}return[]}(n,e.includes("specialDigit")),c=[],u=0;u<n;u++)c.push(o.shift()),c.push(a.shift()),c.push(i.shift());return c.join("").slice(0,n)}(C.value,r);y.textContent=e}))})();
//# sourceMappingURL=bundle.js.map