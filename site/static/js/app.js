!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="/",e(0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t){var e=document.querySelector("nav");0===window.scrollY?e.classList.remove("scroll"):e.classList.add("scroll")}var i=r(2),s=n(i),a=r(3),c=n(a),u=r(4),l=n(u),f=r(10),d=n(f),h=r(11),p=n(h),y=function(){return"upframe.co"!==window.location.hostname?"http://"+window.location.hostname+":3002":"https://api.upframe.co"}();document.addEventListener("DOMContentLoaded",function(){switch(s.init({offset:150,speed:1e3}),o(),window.addEventListener("scroll",o),window.location.pathname){case"/":p.init(y);break;case"/mentors":c.init();break;case"/apply":l.init(y);break;case"/pay/do":d.pay();break;case"/pay/cancel":d.cancel();break;case"/pay/confirm":d.confirm()}Array.from(document.querySelectorAll(".writing-effect")).forEach(function(t){var e=t.parentElement;t.addEventListener("focus",function(t){e.classList.remove("written"),e.classList.add("writing")}),t.addEventListener("blur",function(t){e.classList.remove("writing"),""!==t.currentTarget.value?e.classList.add("written"):e.classList.remove("written")})})})},function(t,e,r){var n,o,i;(function(r){/*! smooth-scroll v10.2.1 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(r,s){o=[],n=s(r),i="function"==typeof n?n.apply(e,o):n,!(void 0!==i&&(t.exports=i))}("undefined"!=typeof r?r:this.window||this.global,function(t){"use strict";var e,r,n,o,i,s,a,c={},u="querySelector"in document&&"addEventListener"in t,l={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},f=function(){var t={},e=!1,r=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(var o=function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e&&"[object Object]"===Object.prototype.toString.call(r[n])?t[n]=f(!0,t[n],r[n]):t[n]=r[n])};r<n;r++){var i=arguments[r];o(i)}return t},d=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},h=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},p=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,r=String(t),n=r.length,o=-1,i="",s=r.charCodeAt(0);++o<n;){if(e=r.charCodeAt(o),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=e>=1&&e<=31||127==e||0===o&&e>=48&&e<=57||1===o&&e>=48&&e<=57&&45===s?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?r.charAt(o):"\\"+r.charAt(o)}return"#"+i},y=function(t,e){var r;return"easeInQuad"===t&&(r=e*e),"easeOutQuad"===t&&(r=e*(2-e)),"easeInOutQuad"===t&&(r=e<.5?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(r=e*e*e),"easeOutCubic"===t&&(r=--e*e*e+1),"easeInOutCubic"===t&&(r=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(r=e*e*e*e),"easeOutQuart"===t&&(r=1- --e*e*e*e),"easeInOutQuart"===t&&(r=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(r=e*e*e*e*e),"easeOutQuint"===t&&(r=1+--e*e*e*e*e),"easeInOutQuint"===t&&(r=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),r||e},m=function(t,e,r){var n=0;if(t.offsetParent)do n+=t.offsetTop,t=t.offsetParent;while(t);return n=Math.max(n-e-r,0),Math.min(n,b()-v())},v=function(){return Math.max(document.documentElement.clientHeight,t.innerHeight||0)},b=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},w=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},g=function(t){return t?d(t)+t.offsetTop:0},_=function(e,r,n){n||(e.focus(),document.activeElement.id!==e.id&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,r))};c.animateScroll=function(r,n,s){var c=w(n?n.getAttribute("data-options"):null),u=f(e||l,s||{},c),d="[object Number]"===Object.prototype.toString.call(r),h=d||!r.tagName?null:r;if(d||h){var p=t.pageYOffset;u.selectorHeader&&!o&&(o=document.querySelector(u.selectorHeader)),i||(i=g(o));var v,E,S=d?r:m(h,i,parseInt(u.offset,10)),T=S-p,A=b(),L=0,O=function(e,o,i){var s=t.pageYOffset;(e==o||s==o||t.innerHeight+s>=A)&&(clearInterval(i),_(r,o,d),u.callback(r,n))},x=function(){L+=16,v=L/parseInt(u.speed,10),v=v>1?1:v,E=p+T*y(u.easing,v),t.scrollTo(0,Math.floor(E)),O(E,S,a)},j=function(){clearInterval(a),a=setInterval(x,16)};0===t.pageYOffset&&t.scrollTo(0,0),j()}};var E=function(e){var o;try{o=p(decodeURIComponent(t.location.hash))}catch(e){o=p(t.location.hash)}r&&(r.id=r.getAttribute("data-scroll-id"),c.animateScroll(r,n),r=null,n=null)},S=function(o){if(0===o.button&&!o.metaKey&&!o.ctrlKey&&(n=h(o.target,e.selector),n&&"a"===n.tagName.toLowerCase()&&n.hostname===t.location.hostname&&n.pathname===t.location.pathname&&/#/.test(n.href))){var i;try{i=p(decodeURIComponent(n.hash))}catch(t){i=p(n.hash)}if("#"===i){o.preventDefault(),r=document.body;var s=r.id?r.id:"smooth-scroll-top";return r.setAttribute("data-scroll-id",s),r.id="",void(t.location.hash.substring(1)===s?E():t.location.hash=s)}r=document.querySelector(i),r&&(r.setAttribute("data-scroll-id",r.id),r.id="",n.hash===t.location.hash&&(o.preventDefault(),E()))}},T=function(t){s||(s=setTimeout(function(){s=null,i=g(o)},66))};return c.destroy=function(){e&&(document.removeEventListener("click",S,!1),t.removeEventListener("resize",T,!1),e=null,r=null,n=null,o=null,i=null,s=null,a=null)},c.init=function(r){u&&(c.destroy(),e=f(l,r||{}),o=e.selectorHeader?document.querySelector(e.selectorHeader):null,i=g(o),document.addEventListener("click",S,!1),t.addEventListener("hashchange",E,!1),o&&t.addEventListener("resize",T,!1))},c})}).call(e,function(){return this}())},function(t,e){"use strict";function r(){s=document.querySelector(".overlay"),a=document.querySelector(".mentor-popup"),s.addEventListener("click",i),document.querySelector(".mentor-popup .close-icon").addEventListener("click",i),window.addEventListener("keydown",i),n();var t=document.querySelectorAll("#mentors-container .mentor img"),e=!0,r=!1,c=void 0;try{for(var u,l=t[Symbol.iterator]();!(e=(u=l.next()).done);e=!0){var f=u.value;f.addEventListener("click",o)}}catch(t){r=!0,c=t}finally{try{!e&&l.return&&l.return()}finally{if(r)throw c}}if(""!==window.location.hash){var d=document.getElementById(window.location.hash.substring(1));if(null==d)return;d.querySelector("img").click()}}function n(){for(var t=[],e=document.querySelector("#mentors-container").children,r=0;r<e.length;r++)t.push(e[r].cloneNode(!0));t.sort(function(){return.5-Math.random()});for(var n=0;n<e.length;n++)e[n].parentNode.replaceChild(t[n],e[n])}function o(t){t.preventDefault();var e=t.currentTarget.parentElement;window.history.pushState("",document.title,window.location.pathname+"#"+e.id),a.querySelector("img").src=e.querySelector("img").src,a.querySelector(".name").innerHTML=e.querySelector(".name").innerHTML,a.querySelector(".role").innerHTML=e.querySelector(".role").innerHTML,a.querySelector(".description").innerHTML=e.querySelector(".description").innerHTML,s.classList.add("active"),a.classList.add("active"),document.querySelector("body").classList.add("no-scroll")}function i(t){"overlay active"!==t.target.className&&"close-icon"!==t.target.className&&"Escape"!==t.key||(s.classList.add("disappear"),a.classList.add("disappear"),setTimeout(function(){s.classList.remove("active"),s.classList.remove("disappear"),a.classList.remove("active"),a.classList.remove("disappear")},250),document.querySelector("body").classList.remove("no-scroll"),window.history.pushState("",document.title,window.location.pathname))}Object.defineProperty(e,"__esModule",{value:!0}),e.init=r;var s=null,a=null},function(t,e,r){(function(t){"use strict";function n(t){l=t,c=document.querySelector(".overlay"),u=document.querySelector("div#terms-and-conditions"),document.getElementById("tac-link").addEventListener("click",o),document.getElementById("tac-close").addEventListener("click",i),document.querySelector(".overlay").addEventListener("click",i),document.querySelector("form").addEventListener("submit",s)}function o(t){t.preventDefault(),u.classList.add("active"),c.classList.add("active"),document.body.classList.add("no-scroll")}function i(t){t.preventDefault(),u.classList.add("disappear"),c.classList.add("disappear"),setTimeout(function(){u.classList.remove("disappear"),c.classList.remove("disappear"),u.classList.remove("active"),c.classList.remove("active")},250),document.body.classList.remove("no-scroll")}function s(e){e.preventDefault();var r=e.currentTarget;t(l+"/apply",{method:"POST",mode:"cors",body:new window.FormData(r)}).then(a.handleErrors).then(function(t){console.log(t),r.classList.add("success"),r.querySelector("p").style.display="block",r.querySelector(".btn").style.display="none"}).catch(function(t){r.classList.add("error"),r.querySelector(".btn").value="Something went wrong",console.log(t)})}Object.defineProperty(e,"__esModule",{value:!0}),e.init=n;var a=r(9),c=null,u=null,l=""}).call(e,r(5))},function(t,e,r){(function(e){!function(t){"use strict";function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){return t.bodyUsed?e.reject(new TypeError("Already read")):void(t.bodyUsed=!0)}function a(t){return new e(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function l(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&g(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return E.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if("string"==typeof t)this.url=t;else{if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new i;return t.split("\r\n").forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=n(e);var o=this.map[t];o||(o=[],this.map[t]=o),o.push(e)},i.prototype.delete=function(t){delete this.map[r(t)]},i.prototype.get=function(t){var e=this.map[r(t)];return e?e[0]:null},i.prototype.getAll=function(t){return this.map[r(t)]||[]},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=[n(e)]},i.prototype.forEach=function(t,e){Object.getOwnPropertyNames(this.map).forEach(function(r){this.map[r].forEach(function(n){t.call(e,n,r,this)},this)},this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},d.call(p.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var S=[301,302,303,307,308];v.redirect=function(t,e){if(S.indexOf(e)===-1)throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=p,t.Response=v,t.fetch=function(t,r){return new e(function(e,n){var o=new p(t,r),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;e(new v(r,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"==typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=self.fetch}).call(e,r(6))},function(t,e,r){(function(e,n,o){/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   4.1.0
	 */
!function(e,r){t.exports=r()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function i(t){V=t}function s(t){X=t}function a(){return function(){return e.nextTick(d)}}function c(){return"undefined"!=typeof K?function(){K(d)}:f()}function u(){var t=0,e=new Z(d),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}function l(){var t=new MessageChannel;return t.port1.onmessage=d,function(){return t.port2.postMessage(0)}}function f(){var t=setTimeout;return function(){return t(d,1)}}function d(){for(var t=0;t<G;t+=2){var e=rt[t],r=rt[t+1];e(r),rt[t]=void 0,rt[t+1]=void 0}G=0}function h(){try{var t=r(8);return K=t.runOnLoop||t.runOnContext,c()}catch(t){return f()}}function p(t,e){var r=arguments,n=this,o=new this.constructor(m);void 0===o[ot]&&k(o);var i=n._state;return i?!function(){var t=r[i-1];X(function(){return I(i,o,t,n._result)})}():x(n,o,t,e),o}function y(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(m);return T(r,t),r}function m(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function w(t){try{return t.then}catch(t){return ct.error=t,ct}}function g(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function _(t,e,r){X(function(t){var n=!1,o=g(r,e,function(r){n||(n=!0,e!==r?T(t,r):L(t,r))},function(e){n||(n=!0,O(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,O(t,o))},t)}function E(t,e){e._state===st?L(t,e._result):e._state===at?O(t,e._result):x(e,void 0,function(e){return T(t,e)},function(e){return O(t,e)})}function S(t,e,r){e.constructor===t.constructor&&r===p&&e.constructor.resolve===y?E(t,e):r===ct?(O(t,ct.error),ct.error=null):void 0===r?L(t,e):n(r)?_(t,e,r):L(t,e)}function T(e,r){e===r?O(e,v()):t(r)?S(e,r,w(r)):L(e,r)}function A(t){t._onerror&&t._onerror(t._result),j(t)}function L(t,e){t._state===it&&(t._result=e,t._state=st,0!==t._subscribers.length&&X(j,t))}function O(t,e){t._state===it&&(t._state=at,t._result=e,X(A,t))}function x(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+st]=r,o[i+at]=n,0===i&&t._state&&X(j,t)}function j(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?I(r,n,o,i):o(i);t._subscribers.length=0}}function B(){this.error=null}function q(t,e){try{return t(e)}catch(t){return ut.error=t,ut}}function I(t,e,r,o){var i=n(r),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if(s=q(r,o),s===ut?(u=!0,a=s.error,s.error=null):c=!0,e===s)return void O(e,b())}else s=o,c=!0;e._state!==it||(i&&c?T(e,s):u?O(e,a):t===st?L(e,s):t===at&&O(e,s))}function P(t,e){try{e(function(e){T(t,e)},function(e){O(t,e)})}catch(e){O(t,e)}}function M(){return lt++}function k(t){t[ot]=lt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function H(t,e){this._instanceConstructor=t,this.promise=new t(m),this.promise[ot]||k(this.promise),J(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?L(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&L(this.promise,this._result))):O(this.promise,D())}function D(){return new Error("Array Methods must be provided an Array")}function U(t){return new H(this,t).promise}function C(t){var e=this;return new e(J(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function R(t){var e=this,r=new e(m);return O(r,t),r}function F(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function Q(t){this[ot]=M(),this._result=this._state=void 0,this._subscribers=[],m!==t&&("function"!=typeof t&&F(),this instanceof Q?P(this,t):N())}function Y(){var t=void 0;if("undefined"!=typeof o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=Q}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var J=z,G=0,K=void 0,V=void 0,X=function(t,e){rt[G]=t,rt[G+1]=e,G+=2,2===G&&(V?V(d):nt())},W="undefined"!=typeof window?window:void 0,$=W||{},Z=$.MutationObserver||$.WebKitMutationObserver,tt="undefined"==typeof self&&"undefined"!=typeof e&&"[object process]"==={}.toString.call(e),et="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,rt=new Array(1e3),nt=void 0;nt=tt?a():Z?u():et?l():void 0===W?h():f();var ot=Math.random().toString(36).substring(16),it=void 0,st=1,at=2,ct=new B,ut=new B,lt=0;return H.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===it&&r<t;r++)this._eachEntry(e[r],r)},H.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===y){var o=w(t);if(o===p&&t._state!==it)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===Q){var i=new r(m);S(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},H.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===it&&(this._remaining--,t===at?O(n,r):this._result[e]=r),0===this._remaining&&L(n,this._result)},H.prototype._willSettleAt=function(t,e){var r=this;x(t,void 0,function(t){return r._settledAt(st,e,t)},function(t){return r._settledAt(at,e,t)})},Q.all=U,Q.race=C,Q.resolve=y,Q.reject=R,Q._setScheduler=i,Q._setAsap=s,Q._asap=X,Q.prototype={constructor:Q,then:p,catch:function(t){return this.then(null,t)}},Q.polyfill=Y,Q.Promise=Q,Q}),t.exports=o.Promise}).call(e,r(7),r(6),function(){return this}())},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){y&&h&&(y=!1,h.length?p=h.concat(p):m=-1,p.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var h,p=[],y=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new c(t,e)),1!==p.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){},function(t,e){"use strict";function r(t){if(!t.ok)throw Error(t.statusText);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.handleErrors=r},function(t,e){"use strict";function r(){}function n(){}function o(){}Object.defineProperty(e,"__esModule",{value:!0}),e.pay=r,e.cancel=n,e.confirm=o},function(t,e,r){(function(t){"use strict";function n(t){a=t,document.querySelector("#newsletter form").addEventListener("submit",i),o(JSON.parse(document.getElementById("mentors-data").innerHTML))}function o(t){for(var e=t.length-1,r=new Set,n=0,o=0;r.size<4;)n=Math.floor(Math.random()*(e+1)),r.add(n);var i=!0,s=!1,a=void 0;try{for(var c,u=document.querySelectorAll("#our-mentors div img")[Symbol.iterator]();!(i=(c=u.next()).done);i=!0){var l=c.value;o=r.keys().next().value,l.src="/img/mentors/"+t[o].Slug+".jpg",r.delete(o)}}catch(t){s=!0,a=t}finally{try{!i&&u.return&&u.return()}finally{if(s)throw a}}}function i(e){e.preventDefault(),t(a+"/newsletter",{method:"POST",mode:"cors",body:new window.FormData(e.currentTarget)}).then(s.handleErrors).then(function(t){window.location.reload()}).catch(function(t){console.log(t)})}Object.defineProperty(e,"__esModule",{value:!0}),e.init=n;var s=r(9),a=""}).call(e,r(5))}]);