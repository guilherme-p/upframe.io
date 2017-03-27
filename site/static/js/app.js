!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.i=function(t){return t},e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=12)}([function(t,e,r){"use strict";function n(t){if(!t.ok)throw Error(t.statusText);return t}Object.defineProperty(e,"__esModule",{value:!0}),e.handleErrors=n},function(t,e,r){(function(e,n,o){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
!function(e,r){t.exports=r()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function n(t){return"function"==typeof t}function i(t){z=t}function s(t){J=t}function a(){return void 0!==Y?function(){Y(u)}:c()}function c(){var t=setTimeout;return function(){return t(u,1)}}function u(){for(var t=0;t<Q;t+=2){(0,$[t])($[t+1]),$[t]=void 0,$[t+1]=void 0}Q=0}function l(t,e){var r=arguments,n=this,o=new this.constructor(d);void 0===o[tt]&&q(o);var i=n._state;return i?function(){var t=r[i-1];J(function(){return x(i,o,t,n._result)})}():T(n,o,t,e),o}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(d);return g(r,t),r}function d(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function y(t){try{return t.then}catch(t){return ot.error=t,ot}}function m(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function v(t,e,r){J(function(t){var n=!1,o=m(r,e,function(r){n||(n=!0,e!==r?g(t,r):E(t,r))},function(e){n||(n=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,S(t,o))},t)}function b(t,e){e._state===rt?E(t,e._result):e._state===nt?S(t,e._result):T(e,void 0,function(e){return g(t,e)},function(e){return S(t,e)})}function w(t,e,r){e.constructor===t.constructor&&r===l&&e.constructor.resolve===f?b(t,e):r===ot?(S(t,ot.error),ot.error=null):void 0===r?E(t,e):n(r)?v(t,e,r):E(t,e)}function g(e,r){e===r?S(e,h()):t(r)?w(e,r,y(r)):E(e,r)}function _(t){t._onerror&&t._onerror(t._result),L(t)}function E(t,e){t._state===et&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(L,t))}function S(t,e){t._state===et&&(t._state=nt,t._result=e,J(_,t))}function T(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=r,o[i+nt]=n,0===i&&t._state&&J(L,t)}function L(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)n=e[s],o=e[s+r],n?x(r,n,o,i):o(i);t._subscribers.length=0}}function A(){this.error=null}function O(t,e){try{return t(e)}catch(t){return it.error=t,it}}function x(t,e,r,o){var i=n(r),s=void 0,a=void 0,c=void 0,u=void 0;if(i){if(s=O(r,o),s===it?(u=!0,a=s.error,s.error=null):c=!0,e===s)return void S(e,p())}else s=o,c=!0;e._state!==et||(i&&c?g(e,s):u?S(e,a):t===rt?E(e,s):t===nt&&S(e,s))}function j(t,e){try{e(function(e){g(t,e)},function(e){S(t,e)})}catch(e){S(t,e)}}function B(){return st++}function q(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function I(t,e){this._instanceConstructor=t,this.promise=new t(d),this.promise[tt]||q(this.promise),N(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?E(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&E(this.promise,this._result))):S(this.promise,P())}function P(){return new Error("Array Methods must be provided an Array")}function M(t){return new I(this,t).promise}function k(t){var e=this;return new e(N(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function H(t){var e=this,r=new e(d);return S(r,t),r}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function U(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function C(t){this[tt]=B(),this._result=this._state=void 0,this._subscribers=[],d!==t&&("function"!=typeof t&&D(),this instanceof C?j(this,t):U())}function F(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=C}var R=void 0;R=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var N=R,Q=0,Y=void 0,z=void 0,J=function(t,e){$[Q]=t,$[Q+1]=e,2===(Q+=2)&&(z?z(u):Z())},G="undefined"!=typeof window?window:void 0,K=G||{},V=K.MutationObserver||K.WebKitMutationObserver,X="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),W="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),Z=void 0;Z=X?function(){return function(){return e.nextTick(u)}}():V?function(){var t=0,e=new V(u),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():W?function(){var t=new MessageChannel;return t.port1.onmessage=u,function(){return t.port2.postMessage(0)}}():void 0===G?function(){try{var t=r(11);return Y=t.runOnLoop||t.runOnContext,a()}catch(t){return c()}}():c();var tt=Math.random().toString(36).substring(16),et=void 0,rt=1,nt=2,ot=new A,it=new A,st=0;return I.prototype._enumerate=function(){for(var t=this.length,e=this._input,r=0;this._state===et&&r<t;r++)this._eachEntry(e[r],r)},I.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===f){var o=y(t);if(o===l&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===C){var i=new r(d);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},I.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===et&&(this._remaining--,t===nt?S(n,r):this._result[e]=r),0===this._remaining&&E(n,this._result)},I.prototype._willSettleAt=function(t,e){var r=this;T(t,void 0,function(t){return r._settledAt(rt,e,t)},function(t){return r._settledAt(nt,e,t)})},C.all=M,C.race=k,C.resolve=f,C.reject=H,C._setScheduler=i,C._setAsap=s,C._asap=J,C.prototype={constructor:C,then:l,catch:function(t){return this.then(null,t)}},C.polyfill=F,C.Promise=C,C}),t.exports=o.Promise}).call(e,r(9),r(1),r(3))},function(t,e,r){(function(e){!function(t){"use strict";function r(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!=typeof t&&(t=String(t)),t}function o(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return b.iterable&&(e[Symbol.iterator]=function(){return e}),e}function i(t){this.map={},t instanceof i?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function s(t){if(t.bodyUsed)return e.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new e(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function c(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function l(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function d(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"==typeof t)this._bodyText=t;else if(b.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(b.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(b.arrayBuffer&&b.blob&&g(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!b.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):b.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},b.blob&&(this.blob=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return e.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return e.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?s(this)||e.resolve(this._bodyArrayBuffer):this.blob().then(c)}),this.text=function(){var t=s(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return e.resolve(l(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return e.resolve(this._bodyText)},b.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function h(t){var e=t.toUpperCase();return E.indexOf(e)>-1?e:t}function p(t,e){e=e||{};var r=e.body;if(t instanceof p){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new i(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new i(e.headers)),this.method=h(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function m(t){var e=new i;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function v(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new i(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var b={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(b.arrayBuffer)var w=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&w.indexOf(Object.prototype.toString.call(t))>-1};i.prototype.append=function(t,e){t=r(t),e=n(e);var o=this.map[t];this.map[t]=o?o+","+e:e},i.prototype.delete=function(t){delete this.map[r(t)]},i.prototype.get=function(t){return t=r(t),this.has(t)?this.map[t]:null},i.prototype.has=function(t){return this.map.hasOwnProperty(r(t))},i.prototype.set=function(t,e){this.map[r(t)]=n(e)},i.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},i.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),o(t)},i.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),o(t)},i.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),o(t)},b.iterable&&(i.prototype[Symbol.iterator]=i.prototype.entries);var E=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];p.prototype.clone=function(){return new p(this,{body:this._bodyInit})},d.call(p.prototype),d.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new i(this.headers),url:this.url})},v.error=function(){var t=new v(null,{status:0,statusText:""});return t.type="error",t};var S=[301,302,303,307,308];v.redirect=function(t,e){if(S.indexOf(e)===-1)throw new RangeError("Invalid status code");return new v(null,{status:e,headers:{location:t}})},t.Headers=i,t.Request=p,t.Response=v,t.fetch=function(t,r){return new e(function(e,n){var o=new p(t,r),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:m(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var r="response"in i?i.response:i.responseText;e(new v(r,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&b.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send(void 0===o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!=typeof self?self:this),t.exports=self.fetch}).call(e,r(1))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function o(t){var e=document.querySelector("nav"),r=document.querySelector("div#early-bird-bar");0===window.scrollY?(e.classList.remove("scroll"),r.classList.remove("scroll")):(e.classList.add("scroll"),r.classList.add("scroll"))}function i(t){t.srcElement.offsetParent.style.visibility="hidden"}var s=r(10),a=n(s),c=r(7),u=n(c),l=r(5),f=n(l),d=r(8),h=n(d),p=r(6),y=n(p),m=function(){return"upframe.co"!==window.location.hostname?"http://"+window.location.hostname+":3002":"https://api.upframe.co"}();document.addEventListener("DOMContentLoaded",function(){switch(a.init({offset:150,speed:1e3}),o(),window.addEventListener("scroll",o),document.querySelector("div#early-bird-bar span").addEventListener("click",i),window.location.pathname){case"/":y.init(m);break;case"/mentors":u.init();break;case"/apply":f.init(m);break;case"/pay":h.pay();break;case"/pay/cancel":h.cancel();break;case"/pay/confirm":h.confirm()}Array.from(document.querySelectorAll(".writing-effect")).forEach(function(t){var e=t.parentElement;t.addEventListener("focus",function(t){e.classList.remove("written"),e.classList.add("writing")}),t.addEventListener("blur",function(t){e.classList.remove("writing"),""!==t.currentTarget.value?e.classList.add("written"):e.classList.remove("written")})})})},function(t,e,r){"use strict";(function(t){function n(t){l=t,c=document.querySelector(".overlay"),u=document.querySelector("div#terms-and-conditions"),document.getElementById("tac-link").addEventListener("click",o),document.getElementById("tac-close").addEventListener("click",i),document.querySelector(".overlay").addEventListener("click",i),document.querySelector("form").addEventListener("submit",s)}function o(t){t.preventDefault(),u.classList.add("active"),c.classList.add("active"),document.body.classList.add("no-scroll")}function i(t){t.preventDefault(),u.classList.add("disappear"),c.classList.add("disappear"),setTimeout(function(){u.classList.remove("disappear"),c.classList.remove("disappear"),u.classList.remove("active"),c.classList.remove("active")},250),document.body.classList.remove("no-scroll")}function s(e){e.preventDefault();var r=e.currentTarget;r.classList.add("sending"),t(l+"/apply",{method:"POST",mode:"cors",body:new window.FormData(r)}).then(a.handleErrors).then(function(t){r.classList.remove("sending"),document.getElementById("success").classList.add("show");for(var e=r.querySelectorAll(".to-hide"),n=0;n<e.length;n++)e[n].style.display="none";r.querySelector("p").style.display="block",r.querySelector(".btn").style.display="none"}).catch(function(t){r.classList.remove("sending"),r.classList.add("error"),r.querySelector(".btn").value="Something went wrong",console.log(t)})}Object.defineProperty(e,"__esModule",{value:!0}),e.init=n;var a=r(0),c=null,u=null,l=""}).call(e,r(2))},function(t,e,r){"use strict";(function(t){function n(t){a=t,document.querySelector("#newsletter form").addEventListener("submit",i),o(JSON.parse(document.getElementById("mentors-data").innerHTML))}function o(t){for(var e=t.length-1,r=new Set,n=0,o=0;r.size<4;)n=Math.floor(Math.random()*(e+1)),r.add(n);for(var i=document.querySelectorAll("#our-mentors div img"),s=0;s<i.length;s++)o=r.keys().next().value,i[s].src="/img/mentors/"+t[o].Slug+".jpg",r.delete(o)}function i(e){e.preventDefault(),t(a+"/newsletter",{method:"POST",mode:"cors",body:new window.FormData(e.currentTarget)}).then(s.handleErrors).then(function(t){window.location.reload()}).catch(function(t){console.log(t)})}Object.defineProperty(e,"__esModule",{value:!0}),e.init=n;var s=r(0),a=""}).call(e,r(2))},function(t,e,r){"use strict";function n(){a=document.querySelector(".overlay"),c=document.querySelector(".mentor-popup"),a.addEventListener("click",s),document.querySelector(".mentor-popup .close-icon").addEventListener("click",s),window.addEventListener("keydown",s),o();var t=document.querySelectorAll("#mentors-container .mentor img"),e=!0,r=!1,n=void 0;try{for(var u,l=t[Symbol.iterator]();!(e=(u=l.next()).done);e=!0){u.value.addEventListener("click",i)}}catch(t){r=!0,n=t}finally{try{!e&&l.return&&l.return()}finally{if(r)throw n}}if(""!==window.location.hash){var f=document.getElementById(window.location.hash.substring(1));if(null==f)return;f.querySelector("img").click()}}function o(){for(var t=[],e=document.querySelector("#mentors-container").children,r=0;r<e.length;r++)t.push(e[r].cloneNode(!0));t.sort(function(){return.5-Math.random()});for(var n=0;n<e.length;n++)e[n].parentNode.replaceChild(t[n],e[n])}function i(t){t.preventDefault();var e=t.currentTarget.parentElement;window.history.pushState("",document.title,window.location.pathname+"#"+e.id),c.querySelector("img").src=e.querySelector("img").src,c.querySelector(".name").innerHTML=e.querySelector(".name").innerHTML,c.querySelector(".role").innerHTML=e.querySelector(".role").innerHTML,c.querySelector(".description").innerHTML=e.querySelector(".description").innerHTML,a.classList.add("active"),c.classList.add("active"),document.querySelector("body").classList.add("no-scroll")}function s(t){"overlay active"!==t.target.className&&"close-icon"!==t.target.className&&"Escape"!==t.key||(a.classList.add("disappear"),c.classList.add("disappear"),setTimeout(function(){a.classList.remove("active"),a.classList.remove("disappear"),c.classList.remove("active"),c.classList.remove("disappear")},250),document.querySelector("body").classList.remove("no-scroll"),window.history.pushState("",document.title,window.location.pathname))}Object.defineProperty(e,"__esModule",{value:!0}),e.init=n;var a=null,c=null},function(t,e,r){"use strict";function n(){}function o(){}function i(){}Object.defineProperty(e,"__esModule",{value:!0}),e.pay=n,e.cancel=o,e.confirm=i},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){y&&h&&(y=!1,h.length?p=h.concat(p):m=-1,p.length&&a())}function a(){if(!y){var t=o(s);y=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,y=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function u(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var h,p=[],y=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new c(t,e)),1!==p.length||y||o(a)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=u,d.addListener=u,d.once=u,d.off=u,d.removeListener=u,d.removeAllListeners=u,d.emit=u,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,r){(function(r){var n,o,i;/*! smooth-scroll v10.2.1 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(r,s){o=[],n=s(r),void 0!==(i="function"==typeof n?n.apply(e,o):n)&&(t.exports=i)}(void 0!==r?r:this.window||this.global,function(t){"use strict";var e,r,n,o,i,s,a,c={},u="querySelector"in document&&"addEventListener"in t,l={selector:"[data-scroll]",selectorHeader:null,speed:500,easing:"easeInOutCubic",offset:0,callback:function(){}},f=function(){var t={},e=!1,r=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],r++);for(;r<n;r++){var o=arguments[r];!function(r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e&&"[object Object]"===Object.prototype.toString.call(r[n])?t[n]=f(!0,t[n],r[n]):t[n]=r[n])}(o)}return t},d=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},h=function(t,e){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(t){for(var e=(this.document||this.ownerDocument).querySelectorAll(t),r=e.length;--r>=0&&e.item(r)!==this;);return r>-1});t&&t!==document;t=t.parentNode)if(t.matches(e))return t;return null},p=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,r=String(t),n=r.length,o=-1,i="",s=r.charCodeAt(0);++o<n;){if(0===(e=r.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=e>=1&&e<=31||127==e||0===o&&e>=48&&e<=57||1===o&&e>=48&&e<=57&&45===s?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?r.charAt(o):"\\"+r.charAt(o)}return"#"+i},y=function(t,e){var r;return"easeInQuad"===t&&(r=e*e),"easeOutQuad"===t&&(r=e*(2-e)),"easeInOutQuad"===t&&(r=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(r=e*e*e),"easeOutCubic"===t&&(r=--e*e*e+1),"easeInOutCubic"===t&&(r=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(r=e*e*e*e),"easeOutQuart"===t&&(r=1- --e*e*e*e),"easeInOutQuart"===t&&(r=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(r=e*e*e*e*e),"easeOutQuint"===t&&(r=1+--e*e*e*e*e),"easeInOutQuint"===t&&(r=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),r||e},m=function(t,e,r){var n=0;if(t.offsetParent)do{n+=t.offsetTop,t=t.offsetParent}while(t);return n=Math.max(n-e-r,0),Math.min(n,b()-v())},v=function(){return Math.max(document.documentElement.clientHeight,t.innerHeight||0)},b=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},w=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},g=function(t){return t?d(t)+t.offsetTop:0},_=function(e,r,n){n||(e.focus(),document.activeElement.id!==e.id&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,r))};c.animateScroll=function(r,n,s){var c=w(n?n.getAttribute("data-options"):null),u=f(e||l,s||{},c),d="[object Number]"===Object.prototype.toString.call(r),h=d||!r.tagName?null:r;if(d||h){var p=t.pageYOffset;u.selectorHeader&&!o&&(o=document.querySelector(u.selectorHeader)),i||(i=g(o));var v,E,S=d?r:m(h,i,parseInt(u.offset,10)),T=S-p,L=b(),A=0,O=function(e,o,i){var s=t.pageYOffset;(e==o||s==o||t.innerHeight+s>=L)&&(clearInterval(i),_(r,o,d),u.callback(r,n))},x=function(){A+=16,v=A/parseInt(u.speed,10),v=v>1?1:v,E=p+T*y(u.easing,v),t.scrollTo(0,Math.floor(E)),O(E,S,a)};0===t.pageYOffset&&t.scrollTo(0,0),function(){clearInterval(a),a=setInterval(x,16)}()}};var E=function(e){try{p(decodeURIComponent(t.location.hash))}catch(e){p(t.location.hash)}r&&(r.id=r.getAttribute("data-scroll-id"),c.animateScroll(r,n),r=null,n=null)},S=function(o){if(0===o.button&&!o.metaKey&&!o.ctrlKey&&(n=h(o.target,e.selector))&&"a"===n.tagName.toLowerCase()&&n.hostname===t.location.hostname&&n.pathname===t.location.pathname&&/#/.test(n.href)){var i;try{i=p(decodeURIComponent(n.hash))}catch(t){i=p(n.hash)}if("#"===i){o.preventDefault(),r=document.body;var s=r.id?r.id:"smooth-scroll-top";return r.setAttribute("data-scroll-id",s),r.id="",void(t.location.hash.substring(1)===s?E():t.location.hash=s)}(r=document.querySelector(i))&&(r.setAttribute("data-scroll-id",r.id),r.id="",n.hash===t.location.hash&&(o.preventDefault(),E()))}},T=function(t){s||(s=setTimeout(function(){s=null,i=g(o)},66))};return c.destroy=function(){e&&(document.removeEventListener("click",S,!1),t.removeEventListener("resize",T,!1),e=null,r=null,n=null,o=null,i=null,s=null,a=null)},c.init=function(r){u&&(c.destroy(),e=f(l,r||{}),o=e.selectorHeader?document.querySelector(e.selectorHeader):null,i=g(o),document.addEventListener("click",S,!1),t.addEventListener("hashchange",E,!1),o&&t.addEventListener("resize",T,!1))},c})}).call(e,r(3))},function(t,e){},function(t,e,r){t.exports=r(4)}]);