(()=>{var e={66:e=>{e.exports={controlCarrusel:(e,t,n)=>{const r=document.getElementById(e),o=document.getElementById(t),i=document.getElementById(n),s=document.documentElement.style;let a=r.querySelectorAll(".cards"),c=!1,l=0;const u="LEFT",d="RIGHT",f=()=>Number(r.style.getPropertyValue("--card-transform").replace("px","")),p=()=>{const e=f();s.setProperty("--transition","none"),l===a.length-5?(r.appendChild(r.firstElementChild),r.style.setProperty("--card-transform",`${e+a[l].scrollWidth}px`),l--):0===l&&(r.prepend(r.lastElementChild),r.style.setProperty("--card-transform",e-a[l].scrollWidth+"px"),l++),c=!1},h=e=>{if(c)return;const t=f();s.setProperty("--transition","transform 0.5s"),c=!0,e===d?l++:e===u&&l--,r.style.setProperty("--card-transform",`${t+(e===u?1:-1)*a[0].scrollWidth}px`)};o.addEventListener("click",(()=>h(u))),i.addEventListener("click",(()=>h(d))),r.addEventListener("transitionend",p),p(),c=!1}}},989:(e,t,n)=>{const r=n(425),o=(e,t)=>{const n=document.getElementById(t),r="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sit id perferendis excepturi expedita ratione, vitae quaerat aperiam optio, et aliquam voluptatum possimus placeat quia natus dolores.";if(n){n.classList.add("d-flex");const o=document.createElement("div");o.className="cards",o.innerHTML="mas_vistos"===t?`\n            \n                <h3 class= "mb-3">${e.title}</h3>\n            <div class="cards_popular">\n                <div class="container_img">\n                    <img src='https://image.tmdb.org/t/p/w500/${e.poster_path}'>\n                </div>\n                <div class="container_data">\n                    <p class= "overview ${e.overview.length>161?"scroll":""}">${e.overview.length>0?e.overview:r}</p>\n                    <p>Popularidad: ${e.popularity}</p>\n                    <p>Cantidad de votos: ${e.vote_count}</p>\n                    <p> Fecha de lanzamiento: ${e.release_date}</p>\n                </div>\n            </div>`:`\n            <div class="content">\n                <div class="front" style="background-image: url('https://image.tmdb.org/t/p/w500/${e.poster_path}')">\n                </div>\n                <div class="back" style="background-image: url('https://image.tmdb.org/t/p/w500/${e.poster_path}')">\n                    <div class="opacity">\n                        <span class="title_film">${e.title}</span>\n                        <p class= "overview ${e.overview.length>161?"scroll":""}">${e.overview.length>0?e.overview:r}</p>\n                        <p>${e.release_date}</p>\n                    </div>\n                </div>\n            </div>\n        `,n.appendChild(o)}};e.exports={processMovies:async(e,t)=>{try{(await r.get(`https://api.themoviedb.org/3/discover/movie?api_key=633b5d2151e75abd9ef188f9ef2de1c0&language=es&with_genres=${e}`)).data.results.forEach((e=>{o(e,t)}))}catch(e){console.log(e)}},posterElement:()=>{const e=document.getElementById("container_poster");e.className="container-xl mt-3",e.innerHTML='<img src="../assets/img/66923.jpg" width=100% alt="Poster main">'},renderElement:o}},737:e=>{e.exports={renderSection:(e,t,n)=>{const r=document.getElementById("main"),o=document.createElement("section");o.className="container-xl",o.innerHTML=`<h2 class="mt-5"> ${n}</h2> \n        <div class="d-flex flex-row align-items-stretch justify-content-between mt-3">\n            <button id="btn_left${e}" class="col arrow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"\n                fill="#020412" class="bi bi-arrow-left-short" viewBox="0 0 16 16">\n                <path fill-rule="evenodd"\n                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5" />\n            </svg></button>\n            <div id="container_carrusel" class=" overflow-hidden">\n                <div id=${t}>\n                </div>\n\n            </div>\n            <button id="btn_right${e}" class="col ms-3 arrow"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"\n                fill="#020412" class="bi bi-arrow-right-short" viewBox="0 0 16 16">\n                <path fill-rule="evenodd"\n                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8" />\n            </svg></button>\n        </div>`,r.appendChild(o)}}},425:(e,t,n)=>{"use strict";function r(e,t){return function(){return e.apply(t,arguments)}}const{toString:o}=Object.prototype,{getPrototypeOf:i}=Object,s=(a=Object.create(null),e=>{const t=o.call(e);return a[t]||(a[t]=t.slice(8,-1).toLowerCase())});var a;const c=e=>(e=e.toLowerCase(),t=>s(t)===e),l=e=>t=>typeof t===e,{isArray:u}=Array,d=l("undefined"),f=c("ArrayBuffer"),p=l("string"),h=l("function"),m=l("number"),g=e=>null!==e&&"object"==typeof e,y=e=>{if("object"!==s(e))return!1;const t=i(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},b=c("Date"),w=c("File"),E=c("Blob"),v=c("FileList"),O=c("URLSearchParams");function S(e,t,{allOwnKeys:n=!1}={}){if(null==e)return;let r,o;if("object"!=typeof e&&(e=[e]),u(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function R(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;for(;o-- >0;)if(r=n[o],t===r.toLowerCase())return r;return null}const A="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:n.g,T=e=>!d(e)&&e!==A,_=(x="undefined"!=typeof Uint8Array&&i(Uint8Array),e=>x&&e instanceof x);var x;const j=c("HTMLFormElement"),C=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),N=c("RegExp"),P=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};S(n,((n,o)=>{let i;!1!==(i=t(n,o,e))&&(r[o]=i||n)})),Object.defineProperties(e,r)},L="abcdefghijklmnopqrstuvwxyz",B="0123456789",F={DIGIT:B,ALPHA:L,ALPHA_DIGIT:L+L.toUpperCase()+B},U=c("AsyncFunction");var k={isArray:u,isArrayBuffer:f,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&h(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{let t;return e&&("function"==typeof FormData&&e instanceof FormData||h(e.append)&&("formdata"===(t=s(e))||"object"===t&&h(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&f(e.buffer),t},isString:p,isNumber:m,isBoolean:e=>!0===e||!1===e,isObject:g,isPlainObject:y,isUndefined:d,isDate:b,isFile:w,isBlob:E,isRegExp:N,isFunction:h,isStream:e=>g(e)&&h(e.pipe),isURLSearchParams:O,isTypedArray:_,isFileList:v,forEach:S,merge:function e(){const{caseless:t}=T(this)&&this||{},n={},r=(r,o)=>{const i=t&&R(n,o)||o;y(n[i])&&y(r)?n[i]=e(n[i],r):y(r)?n[i]=e({},r):u(r)?n[i]=r.slice():n[i]=r};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&S(arguments[e],r);return n},extend:(e,t,n,{allOwnKeys:o}={})=>(S(t,((t,o)=>{n&&h(t)?e[o]=r(t,n):e[o]=t}),{allOwnKeys:o}),e),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),inherits:(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:(e,t,n,r)=>{let o,s,a;const c={};if(t=t||{},null==e)return t;do{for(o=Object.getOwnPropertyNames(e),s=o.length;s-- >0;)a=o[s],r&&!r(a,e,t)||c[a]||(t[a]=e[a],c[a]=!0);e=!1!==n&&i(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:c,endsWith:(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!m(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},forEachEntry:(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let r;for(;(r=n.next())&&!r.done;){const n=r.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{let n;const r=[];for(;null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:j,hasOwnProperty:C,hasOwnProp:C,reduceDescriptors:P,freezeMethods:e=>{P(e,((t,n)=>{if(h(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];h(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},toObjectSet:(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return u(e)?r(e):r(String(e).split(t)),n},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:R,global:A,isContextDefined:T,ALPHABET:F,generateString:(e=16,t=F.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n},isSpecCompliantForm:function(e){return!!(e&&h(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),n=(e,r)=>{if(g(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=u(e)?[]:{};return S(e,((e,t)=>{const i=n(e,r+1);!d(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)},isAsyncFn:U,isThenable:e=>e&&(g(e)||h(e))&&h(e.then)&&h(e.catch)};function D(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}k.inherits(D,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const I=D.prototype,q={};function M(e){return k.isPlainObject(e)||k.isArray(e)}function H(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function $(e,t,n){return e?e.concat(t).map((function(e,t){return e=H(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{q[e]={value:e}})),Object.defineProperties(D,q),Object.defineProperty(I,"isAxiosError",{value:!0}),D.from=(e,t,n,r,o,i)=>{const s=Object.create(I);return k.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),D.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const z=k.toFlatObject(k,{},null,(function(e){return/^is[A-Z]/.test(e)}));function J(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData;const r=(n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!k.isUndefined(t[e])}))).metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=(n.Blob||"undefined"!=typeof Blob&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function c(e){if(null===e)return"";if(k.isDate(e))return e.toISOString();if(!a&&k.isBlob(e))throw new D("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(e)||k.isTypedArray(e)?a&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"==typeof e)if(k.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(k.isArray(e)&&function(e){return k.isArray(e)&&!e.some(M)}(e)||(k.isFileList(e)||k.endsWith(n,"[]"))&&(a=k.toArray(e)))return n=H(n),a.forEach((function(e,r){!k.isUndefined(e)&&null!==e&&t.append(!0===s?$([n],r,i):null===s?n:n+"[]",c(e))})),!1;return!!M(e)||(t.append($(o,n,i),c(e)),!1)}const u=[],d=Object.assign(z,{defaultVisitor:l,convertValue:c,isVisitable:M});if(!k.isObject(e))throw new TypeError("data must be an object");return function e(n,r){if(!k.isUndefined(n)){if(-1!==u.indexOf(n))throw Error("Circular reference detected in "+r.join("."));u.push(n),k.forEach(n,(function(n,i){!0===(!(k.isUndefined(n)||null===n)&&o.call(t,n,k.isString(i)?i.trim():i,r,d))&&e(n,r?r.concat(i):[i])})),u.pop()}}(e),t}function W(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function V(e,t){this._pairs=[],e&&J(e,this,t)}const K=V.prototype;function G(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function X(e,t,n){if(!t)return e;const r=n&&n.encode||G,o=n&&n.serialize;let i;if(i=o?o(t,n):k.isURLSearchParams(t)?t.toString():new V(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}K.append=function(e,t){this._pairs.push([e,t])},K.toString=function(e){const t=e?function(t){return e.call(this,t,W)}:W;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var Q=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){k.forEach(this.handlers,(function(t){null!==t&&e(t)}))}},Z={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Y={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:V,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const ee="undefined"!=typeof window&&"undefined"!=typeof document,te=(ne="undefined"!=typeof navigator&&navigator.product,ee&&["ReactNative","NativeScript","NS"].indexOf(ne)<0);var ne;const re="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts;var oe={...Object.freeze({__proto__:null,hasBrowserEnv:ee,hasStandardBrowserWebWorkerEnv:re,hasStandardBrowserEnv:te}),...Y};function ie(e){function t(e,n,r,o){let i=e[o++];if("__proto__"===i)return!0;const s=Number.isFinite(+i),a=o>=e.length;return i=!i&&k.isArray(r)?r.length:i,a?(k.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&k.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&k.isArray(r[i])&&(r[i]=function(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}(r[i])),!s)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,((e,r)=>{t(function(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}(e),r,n,0)})),n}return null}const se={transitional:Z,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=k.isObject(e);if(o&&k.isHTMLForm(e)&&(e=new FormData(e)),k.isFormData(e))return r?JSON.stringify(ie(e)):e;if(k.isArrayBuffer(e)||k.isBuffer(e)||k.isStream(e)||k.isFile(e)||k.isBlob(e))return e;if(k.isArrayBufferView(e))return e.buffer;if(k.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let i;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return J(e,new oe.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return oe.isNode&&k.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((i=k.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return J(i?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),function(e,t,n){if(k.isString(e))try{return(0,JSON.parse)(e),k.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){const t=this.transitional||se.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&k.isString(e)&&(n&&!this.responseType||r)){const n=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(n){if("SyntaxError"===e.name)throw D.from(e,D.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oe.classes.FormData,Blob:oe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],(e=>{se.headers[e]={}}));var ae=se;const ce=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),le=Symbol("internals");function ue(e){return e&&String(e).trim().toLowerCase()}function de(e){return!1===e||null==e?e:k.isArray(e)?e.map(de):String(e)}function fe(e,t,n,r,o){return k.isFunction(r)?r.call(this,t,n):(o&&(t=n),k.isString(t)?k.isString(r)?-1!==t.indexOf(r):k.isRegExp(r)?r.test(t):void 0:void 0)}class pe{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=ue(t);if(!o)throw new Error("header name must be a non-empty string");const i=k.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=de(e))}const i=(e,t)=>k.forEach(e,((e,n)=>o(e,n,t)));return k.isPlainObject(e)||e instanceof this.constructor?i(e,t):k.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&ce[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t})(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=ue(e)){const n=k.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return function(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}(e);if(k.isFunction(t))return t.call(this,e,n);if(k.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=ue(e)){const n=k.findKey(this,e);return!(!n||void 0===this[n]||t&&!fe(0,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=ue(e)){const o=k.findKey(n,e);!o||t&&!fe(0,n[o],o,t)||(delete n[o],r=!0)}}return k.isArray(e)?e.forEach(o):o(e),r}clear(e){const t=Object.keys(this);let n=t.length,r=!1;for(;n--;){const o=t[n];e&&!fe(0,this[o],o,e,!0)||(delete this[o],r=!0)}return r}normalize(e){const t=this,n={};return k.forEach(this,((r,o)=>{const i=k.findKey(n,o);if(i)return t[i]=de(r),void delete t[o];const s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}(o):String(o).trim();s!==o&&delete t[o],t[s]=de(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return k.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&k.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=(this[le]=this[le]={accessors:{}}).accessors,n=this.prototype;function r(e){const r=ue(e);t[r]||(function(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return k.isArray(e)?e.forEach(r):r(e),this}}pe.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),k.reduceDescriptors(pe.prototype,(({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}})),k.freezeMethods(pe);var he=pe;function me(e,t){const n=this||ae,r=t||n,o=he.from(r.headers);let i=r.data;return k.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function ge(e){return!(!e||!e.__CANCEL__)}function ye(e,t,n){D.call(this,null==e?"canceled":e,D.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(ye,D,{__CANCEL__:!0});var be=oe.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),k.isString(r)&&s.push("path="+r),k.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read:()=>null,remove(){}};function we(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var Ee=oe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=k.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return!0};function ve(e,t){let n=0;const r=function(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),l=r[s];o||(o=c),n[i]=a,r[i]=c;let u=s,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const f=l&&c-l;return f?Math.round(1e3*d/f):void 0}}(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a);n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&i<=s?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const Oe={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(e){return new Promise((function(t,n){let r=e.data;const o=he.from(e.headers).normalize();let i,s,{responseType:a,withXSRFToken:c}=e;function l(){e.cancelToken&&e.cancelToken.unsubscribe(i),e.signal&&e.signal.removeEventListener("abort",i)}if(k.isFormData(r))if(oe.hasStandardBrowserEnv||oe.hasStandardBrowserWebWorkerEnv)o.setContentType(!1);else if(!1!==(s=o.getContentType())){const[e,...t]=s?s.split(";").map((e=>e.trim())).filter(Boolean):[];o.setContentType([e||"multipart/form-data",...t].join("; "))}let u=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const d=we(e.baseURL,e.url);function f(){if(!u)return;const r=he.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new D("Request failed with status code "+n.status,[D.ERR_BAD_REQUEST,D.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),l()}),(function(e){n(e),l()}),{data:a&&"text"!==a&&"json"!==a?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}if(u.open(e.method.toUpperCase(),X(d,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=f:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(f)},u.onabort=function(){u&&(n(new D("Request aborted",D.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new D("Network Error",D.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Z;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new D(t,r.clarifyTimeoutError?D.ETIMEDOUT:D.ECONNABORTED,e,u)),u=null},oe.hasStandardBrowserEnv&&(c&&k.isFunction(c)&&(c=c(e)),c||!1!==c&&Ee(d))){const t=e.xsrfHeaderName&&e.xsrfCookieName&&be.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in u&&k.forEach(o.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),k.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),a&&"json"!==a&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",ve(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",ve(e.onUploadProgress)),(e.cancelToken||e.signal)&&(i=t=>{u&&(n(!t||t.type?new ye(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(i),e.signal&&(e.signal.aborted?i():e.signal.addEventListener("abort",i)));const p=function(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}(d);p&&-1===oe.protocols.indexOf(p)?n(new D("Unsupported protocol "+p+":",D.ERR_BAD_REQUEST,e)):u.send(r||null)}))}};k.forEach(Oe,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}));const Se=e=>`- ${e}`,Re=e=>k.isFunction(e)||null===e||!1===e;var Ae=e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){let t;if(n=e[i],r=n,!Re(n)&&(r=Oe[(t=String(n)).toLowerCase()],void 0===r))throw new D(`Unknown adapter '${t}'`);if(r)break;o[t||"#"+i]=r}if(!r){const e=Object.entries(o).map((([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")));throw new D("There is no suitable adapter to dispatch the request "+(t?e.length>1?"since :\n"+e.map(Se).join("\n"):" "+Se(e[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r};function Te(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ye(null,e)}function _e(e){return Te(e),e.headers=he.from(e.headers),e.data=me.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ae(e.adapter||ae.adapter)(e).then((function(t){return Te(e),t.data=me.call(e,e.transformResponse,t),t.headers=he.from(t.headers),t}),(function(t){return ge(t)||(Te(e),t&&t.response&&(t.response.data=me.call(e,e.transformResponse,t.response),t.response.headers=he.from(t.response.headers))),Promise.reject(t)}))}const xe=e=>e instanceof he?{...e}:e;function je(e,t){t=t||{};const n={};function r(e,t,n){return k.isPlainObject(e)&&k.isPlainObject(t)?k.merge.call({caseless:n},e,t):k.isPlainObject(t)?k.merge({},t):k.isArray(t)?t.slice():t}function o(e,t,n){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!k.isUndefined(t))return r(void 0,t)}function s(e,t){return k.isUndefined(t)?k.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(xe(e),xe(t),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);k.isUndefined(s)&&i!==a||(n[r]=s)})),n}const Ce={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Ce[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const Ne={};Ce.transitional=function(e,t,n){function r(e,t){return"[Axios v1.6.8] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new D(r(o," has been removed"+(t?" in "+t:"")),D.ERR_DEPRECATED);return t&&!Ne[o]&&(Ne[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Pe={assertOptions:function(e,t,n){if("object"!=typeof e)throw new D("options must be an object",D.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new D("option "+i+" must be "+n,D.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new D("Unknown option "+i,D.ERR_BAD_OPTION)}},validators:Ce};const Le=Pe.validators;class Be{constructor(e){this.defaults=e,this.interceptors={request:new Q,response:new Q}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t;Error.captureStackTrace?Error.captureStackTrace(t={}):t=new Error;const n=t.stack?t.stack.replace(/^.+\n/,""):"";e.stack?n&&!String(e.stack).endsWith(n.replace(/^.+\n.+\n/,""))&&(e.stack+="\n"+n):e.stack=n}throw e}}_request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},t=je(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;void 0!==n&&Pe.assertOptions(n,{silentJSONParsing:Le.transitional(Le.boolean),forcedJSONParsing:Le.transitional(Le.boolean),clarifyTimeoutError:Le.transitional(Le.boolean)},!1),null!=r&&(k.isFunction(r)?t.paramsSerializer={serialize:r}:Pe.assertOptions(r,{encode:Le.function,serialize:Le.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();let i=o&&k.merge(o.common,o[t.method]);o&&k.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=he.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let u,d=0;if(!a){const e=[_e.bind(this),void 0];for(e.unshift.apply(e,s),e.push.apply(e,c),u=e.length,l=Promise.resolve(t);d<u;)l=l.then(e[d++],e[d++]);return l}u=s.length;let f=t;for(d=0;d<u;){const e=s[d++],t=s[d++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=_e.call(this,f)}catch(e){return Promise.reject(e)}for(d=0,u=c.length;d<u;)l=l.then(c[d++],c[d++]);return l}getUri(e){return X(we((e=je(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}k.forEach(["delete","get","head","options"],(function(e){Be.prototype[e]=function(t,n){return this.request(je(n||{},{method:e,url:t,data:(n||{}).data}))}})),k.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(je(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Be.prototype[e]=t(),Be.prototype[e+"Form"]=t(!0)}));var Fe=Be;class Ue{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-- >0;)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new ye(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;return{token:new Ue((function(t){e=t})),cancel:e}}}var ke=Ue;const De={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(De).forEach((([e,t])=>{De[t]=e}));var Ie=De;const qe=function e(t){const n=new Fe(t),o=r(Fe.prototype.request,n);return k.extend(o,Fe.prototype,n,{allOwnKeys:!0}),k.extend(o,n,null,{allOwnKeys:!0}),o.create=function(n){return e(je(t,n))},o}(ae);qe.Axios=Fe,qe.CanceledError=ye,qe.CancelToken=ke,qe.isCancel=ge,qe.VERSION="1.6.8",qe.toFormData=J,qe.AxiosError=D,qe.Cancel=qe.CanceledError,qe.all=function(e){return Promise.all(e)},qe.spread=function(e){return function(t){return e.apply(null,t)}},qe.isAxiosError=function(e){return k.isObject(e)&&!0===e.isAxiosError},qe.mergeConfig=je,qe.AxiosHeaders=he,qe.formToJSON=e=>ie(k.isHTMLForm(e)?new FormData(e):e),qe.getAdapter=Ae,qe.HttpStatusCode=Ie,qe.default=qe,e.exports=qe}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{const{controlCarrusel:e}=n(66),{processMovies:t,posterElement:r}=n(989),{renderSection:o}=n(737),i=[{id:12,containerId:"container_aventure",genre:"Aventura"},{id:35,containerId:"container_comedia",genre:"Comedia"},{id:28,containerId:"container_accion",genre:"Acción"},{id:18,containerId:"container_drama",genre:"Drama"},{id:27,containerId:"container_terror",genre:"Terror"},{id:878,containerId:"container_ficcion",genre:"Ficción"},{id:10749,containerId:"container_romance",genre:"Romance"},{id:99,containerId:"container_documental",genre:"Documental"},{id:16,containerId:"container_animacion",genre:"Animados"},{id:80,containerId:"container_crimen",genre:"Crimen"}];window.addEventListener("load",(async()=>{try{r(),await Promise.all(i.map((async n=>{o(n.id,n.containerId,n.genre),await t(n.id,n.containerId),e(n.containerId,`btn_left${n.id}`,`btn_right${n.id}`)})))}catch(e){window.alert(e)}}))})()})();