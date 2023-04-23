import{s as F,j as v,r as x,g as Ht}from"./index-10043f65.js";function it(e,t){return function(){return e.apply(t,arguments)}}const{toString:zt}=Object.prototype,{getPrototypeOf:_e}=Object,he=(e=>t=>{const r=zt.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),q=e=>(e=e.toLowerCase(),t=>he(t)===e),me=e=>t=>typeof t===e,{isArray:G}=Array,Z=me("undefined");function Vt(e){return e!==null&&!Z(e)&&e.constructor!==null&&!Z(e.constructor)&&I(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const at=q("ArrayBuffer");function $t(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&at(e.buffer),t}const Wt=me("string"),I=me("function"),lt=me("number"),je=e=>e!==null&&typeof e=="object",Jt=e=>e===!0||e===!1,oe=e=>{if(he(e)!=="object")return!1;const t=_e(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Yt=q("Date"),Kt=q("File"),Gt=q("Blob"),Qt=q("FileList"),Xt=e=>je(e)&&I(e.pipe),Zt=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||I(e.append)&&((t=he(e))==="formdata"||t==="object"&&I(e.toString)&&e.toString()==="[object FormData]"))},er=q("URLSearchParams"),tr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ee(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,s;if(typeof e!="object"&&(e=[e]),G(e))for(n=0,s=e.length;n<s;n++)t.call(null,e[n],n,e);else{const o=r?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let a;for(n=0;n<i;n++)a=o[n],t.call(null,e[a],a,e)}}function ct(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,s;for(;n-- >0;)if(s=r[n],t===s.toLowerCase())return s;return null}const ut=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),ft=e=>!Z(e)&&e!==ut;function Ae(){const{caseless:e}=ft(this)&&this||{},t={},r=(n,s)=>{const o=e&&ct(t,s)||s;oe(t[o])&&oe(n)?t[o]=Ae(t[o],n):oe(n)?t[o]=Ae({},n):G(n)?t[o]=n.slice():t[o]=n};for(let n=0,s=arguments.length;n<s;n++)arguments[n]&&ee(arguments[n],r);return t}const rr=(e,t,r,{allOwnKeys:n}={})=>(ee(t,(s,o)=>{r&&I(s)?e[o]=it(s,r):e[o]=s},{allOwnKeys:n}),e),nr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),sr=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},or=(e,t,r,n)=>{let s,o,i;const a={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!n||n(i,e,t))&&!a[i]&&(t[i]=e[i],a[i]=!0);e=r!==!1&&_e(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},ir=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},ar=e=>{if(!e)return null;if(G(e))return e;let t=e.length;if(!lt(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},lr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&_e(Uint8Array)),cr=(e,t)=>{const n=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=n.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},ur=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},fr=q("HTMLFormElement"),dr=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,s){return n.toUpperCase()+s}),Ve=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),pr=q("RegExp"),dt=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};ee(r,(s,o)=>{t(s,o,e)!==!1&&(n[o]=s)}),Object.defineProperties(e,n)},hr=e=>{dt(e,(t,r)=>{if(I(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(I(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},mr=(e,t)=>{const r={},n=s=>{s.forEach(o=>{r[o]=!0})};return G(e)?n(e):n(String(e).split(t)),r},yr=()=>{},gr=(e,t)=>(e=+e,Number.isFinite(e)?e:t),xe="abcdefghijklmnopqrstuvwxyz",$e="0123456789",pt={DIGIT:$e,ALPHA:xe,ALPHA_DIGIT:xe+xe.toUpperCase()+$e},br=(e=16,t=pt.ALPHA_DIGIT)=>{let r="";const{length:n}=t;for(;e--;)r+=t[Math.random()*n|0];return r};function wr(e){return!!(e&&I(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const xr=e=>{const t=new Array(10),r=(n,s)=>{if(je(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[s]=n;const o=G(n)?[]:{};return ee(n,(i,a)=>{const u=r(i,s+1);!Z(u)&&(o[a]=u)}),t[s]=void 0,o}}return n};return r(e,0)},c={isArray:G,isArrayBuffer:at,isBuffer:Vt,isFormData:Zt,isArrayBufferView:$t,isString:Wt,isNumber:lt,isBoolean:Jt,isObject:je,isPlainObject:oe,isUndefined:Z,isDate:Yt,isFile:Kt,isBlob:Gt,isRegExp:pr,isFunction:I,isStream:Xt,isURLSearchParams:er,isTypedArray:lr,isFileList:Qt,forEach:ee,merge:Ae,extend:rr,trim:tr,stripBOM:nr,inherits:sr,toFlatObject:or,kindOf:he,kindOfTest:q,endsWith:ir,toArray:ar,forEachEntry:cr,matchAll:ur,isHTMLForm:fr,hasOwnProperty:Ve,hasOwnProp:Ve,reduceDescriptors:dt,freezeMethods:hr,toObjectSet:mr,toCamelCase:dr,noop:yr,toFiniteNumber:gr,findKey:ct,global:ut,isContextDefined:ft,ALPHABET:pt,generateString:br,isSpecCompliantForm:wr,toJSONObject:xr};function S(e,t,r,n,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),s&&(this.response=s)}c.inherits(S,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:c.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ht=S.prototype,mt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{mt[e]={value:e}});Object.defineProperties(S,mt);Object.defineProperty(ht,"isAxiosError",{value:!0});S.from=(e,t,r,n,s,o)=>{const i=Object.create(ht);return c.toFlatObject(e,i,function(u){return u!==Error.prototype},a=>a!=="isAxiosError"),S.call(i,e.message,t,r,n,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const Er=null;function ve(e){return c.isPlainObject(e)||c.isArray(e)}function yt(e){return c.endsWith(e,"[]")?e.slice(0,-2):e}function We(e,t,r){return e?e.concat(t).map(function(s,o){return s=yt(s),!r&&o?"["+s+"]":s}).join(r?".":""):t}function Or(e){return c.isArray(e)&&!e.some(ve)}const Sr=c.toFlatObject(c,{},null,function(t){return/^is[A-Z]/.test(t)});function ye(e,t,r){if(!c.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=c.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,T){return!c.isUndefined(T[w])});const n=r.metaTokens,s=r.visitor||f,o=r.dots,i=r.indexes,u=(r.Blob||typeof Blob<"u"&&Blob)&&c.isSpecCompliantForm(t);if(!c.isFunction(s))throw new TypeError("visitor must be a function");function l(y){if(y===null)return"";if(c.isDate(y))return y.toISOString();if(!u&&c.isBlob(y))throw new S("Blob is not supported. Use a Buffer instead.");return c.isArrayBuffer(y)||c.isTypedArray(y)?u&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function f(y,w,T){let P=y;if(y&&!T&&typeof y=="object"){if(c.endsWith(w,"{}"))w=n?w:w.slice(0,-2),y=JSON.stringify(y);else if(c.isArray(y)&&Or(y)||(c.isFileList(y)||c.endsWith(w,"[]"))&&(P=c.toArray(y)))return w=yt(w),P.forEach(function($,ne){!(c.isUndefined($)||$===null)&&t.append(i===!0?We([w],ne,o):i===null?w:w+"[]",l($))}),!1}return ve(y)?!0:(t.append(We(T,w,o),l(y)),!1)}const h=[],E=Object.assign(Sr,{defaultVisitor:f,convertValue:l,isVisitable:ve});function b(y,w){if(!c.isUndefined(y)){if(h.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));h.push(y),c.forEach(y,function(P,k){(!(c.isUndefined(P)||P===null)&&s.call(t,P,c.isString(k)?k.trim():k,w,E))===!0&&b(P,w?w.concat(k):[k])}),h.pop()}}if(!c.isObject(e))throw new TypeError("data must be an object");return b(e),t}function Je(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function Fe(e,t){this._pairs=[],e&&ye(e,this,t)}const gt=Fe.prototype;gt.append=function(t,r){this._pairs.push([t,r])};gt.toString=function(t){const r=t?function(n){return t.call(this,n,Je)}:Je;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function Ar(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function bt(e,t,r){if(!t)return e;const n=r&&r.encode||Ar,s=r&&r.serialize;let o;if(s?o=s(t,r):o=c.isURLSearchParams(t)?t.toString():new Fe(t,r).toString(n),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class vr{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){c.forEach(this.handlers,function(n){n!==null&&t(n)})}}const Ye=vr,wt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Rr=typeof URLSearchParams<"u"?URLSearchParams:Fe,Nr=typeof FormData<"u"?FormData:null,Cr=typeof Blob<"u"?Blob:null,Tr=(()=>{let e;return typeof navigator<"u"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),Pr=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),L={isBrowser:!0,classes:{URLSearchParams:Rr,FormData:Nr,Blob:Cr},isStandardBrowserEnv:Tr,isStandardBrowserWebWorkerEnv:Pr,protocols:["http","https","file","blob","url","data"]};function Dr(e,t){return ye(e,new L.classes.URLSearchParams,Object.assign({visitor:function(r,n,s,o){return L.isNode&&c.isBuffer(r)?(this.append(n,r.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function _r(e){return c.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function jr(e){const t={},r=Object.keys(e);let n;const s=r.length;let o;for(n=0;n<s;n++)o=r[n],t[o]=e[o];return t}function xt(e){function t(r,n,s,o){let i=r[o++];const a=Number.isFinite(+i),u=o>=r.length;return i=!i&&c.isArray(s)?s.length:i,u?(c.hasOwnProp(s,i)?s[i]=[s[i],n]:s[i]=n,!a):((!s[i]||!c.isObject(s[i]))&&(s[i]=[]),t(r,n,s[i],o)&&c.isArray(s[i])&&(s[i]=jr(s[i])),!a)}if(c.isFormData(e)&&c.isFunction(e.entries)){const r={};return c.forEachEntry(e,(n,s)=>{t(_r(n),s,r,0)}),r}return null}const Fr={"Content-Type":void 0};function kr(e,t,r){if(c.isString(e))try{return(t||JSON.parse)(e),c.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(r||JSON.stringify)(e)}const ge={transitional:wt,adapter:["xhr","http"],transformRequest:[function(t,r){const n=r.getContentType()||"",s=n.indexOf("application/json")>-1,o=c.isObject(t);if(o&&c.isHTMLForm(t)&&(t=new FormData(t)),c.isFormData(t))return s&&s?JSON.stringify(xt(t)):t;if(c.isArrayBuffer(t)||c.isBuffer(t)||c.isStream(t)||c.isFile(t)||c.isBlob(t))return t;if(c.isArrayBufferView(t))return t.buffer;if(c.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let a;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dr(t,this.formSerializer).toString();if((a=c.isFileList(t))||n.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return ye(a?{"files[]":t}:t,u&&new u,this.formSerializer)}}return o||s?(r.setContentType("application/json",!1),kr(t)):t}],transformResponse:[function(t){const r=this.transitional||ge.transitional,n=r&&r.forcedJSONParsing,s=this.responseType==="json";if(t&&c.isString(t)&&(n&&!this.responseType||s)){const i=!(r&&r.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(a){if(i)throw a.name==="SyntaxError"?S.from(a,S.ERR_BAD_RESPONSE,this,null,this.response):a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:L.classes.FormData,Blob:L.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};c.forEach(["delete","get","head"],function(t){ge.headers[t]={}});c.forEach(["post","put","patch"],function(t){ge.headers[t]=c.merge(Fr)});const ke=ge,Lr=c.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ur=e=>{const t={};let r,n,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),r=i.substring(0,s).trim().toLowerCase(),n=i.substring(s+1).trim(),!(!r||t[r]&&Lr[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Ke=Symbol("internals");function X(e){return e&&String(e).trim().toLowerCase()}function ie(e){return e===!1||e==null?e:c.isArray(e)?e.map(ie):String(e)}function Br(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const Ir=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ee(e,t,r,n,s){if(c.isFunction(n))return n.call(this,t,r);if(s&&(t=r),!!c.isString(t)){if(c.isString(n))return t.indexOf(n)!==-1;if(c.isRegExp(n))return n.test(t)}}function Mr(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function qr(e,t){const r=c.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(s,o,i){return this[n].call(this,t,s,o,i)},configurable:!0})})}class be{constructor(t){t&&this.set(t)}set(t,r,n){const s=this;function o(a,u,l){const f=X(u);if(!f)throw new Error("header name must be a non-empty string");const h=c.findKey(s,f);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||u]=ie(a))}const i=(a,u)=>c.forEach(a,(l,f)=>o(l,f,u));return c.isPlainObject(t)||t instanceof this.constructor?i(t,r):c.isString(t)&&(t=t.trim())&&!Ir(t)?i(Ur(t),r):t!=null&&o(r,t,n),this}get(t,r){if(t=X(t),t){const n=c.findKey(this,t);if(n){const s=this[n];if(!r)return s;if(r===!0)return Br(s);if(c.isFunction(r))return r.call(this,s,n);if(c.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=X(t),t){const n=c.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Ee(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let s=!1;function o(i){if(i=X(i),i){const a=c.findKey(n,i);a&&(!r||Ee(n,n[a],a,r))&&(delete n[a],s=!0)}}return c.isArray(t)?t.forEach(o):o(t),s}clear(t){const r=Object.keys(this);let n=r.length,s=!1;for(;n--;){const o=r[n];(!t||Ee(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const r=this,n={};return c.forEach(this,(s,o)=>{const i=c.findKey(n,o);if(i){r[i]=ie(s),delete r[o];return}const a=t?Mr(o):String(o).trim();a!==o&&delete r[o],r[a]=ie(s),n[a]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return c.forEach(this,(n,s)=>{n!=null&&n!==!1&&(r[s]=t&&c.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(s=>n.set(s)),n}static accessor(t){const n=(this[Ke]=this[Ke]={accessors:{}}).accessors,s=this.prototype;function o(i){const a=X(i);n[a]||(qr(s,i),n[a]=!0)}return c.isArray(t)?t.forEach(o):o(t),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);c.freezeMethods(be.prototype);c.freezeMethods(be);const B=be;function Oe(e,t){const r=this||ke,n=t||r,s=B.from(n.headers);let o=n.data;return c.forEach(e,function(a){o=a.call(r,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function Et(e){return!!(e&&e.__CANCEL__)}function te(e,t,r){S.call(this,e??"canceled",S.ERR_CANCELED,t,r),this.name="CanceledError"}c.inherits(te,S,{__CANCEL__:!0});function Hr(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new S("Request failed with status code "+r.status,[S.ERR_BAD_REQUEST,S.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}const zr=L.isStandardBrowserEnv?function(){return{write:function(r,n,s,o,i,a){const u=[];u.push(r+"="+encodeURIComponent(n)),c.isNumber(s)&&u.push("expires="+new Date(s).toGMTString()),c.isString(o)&&u.push("path="+o),c.isString(i)&&u.push("domain="+i),a===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Vr(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function $r(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Ot(e,t){return e&&!Vr(t)?$r(e,t):t}const Wr=L.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");let n;function s(o){let i=o;return t&&(r.setAttribute("href",i),i=r.href),r.setAttribute("href",i),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return n=s(window.location.href),function(i){const a=c.isString(i)?s(i):i;return a.protocol===n.protocol&&a.host===n.host}}():function(){return function(){return!0}}();function Jr(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Yr(e,t){e=e||10;const r=new Array(e),n=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(u){const l=Date.now(),f=n[o];i||(i=l),r[s]=u,n[s]=l;let h=o,E=0;for(;h!==s;)E+=r[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const b=f&&l-f;return b?Math.round(E*1e3/b):void 0}}function Ge(e,t){let r=0;const n=Yr(50,250);return s=>{const o=s.loaded,i=s.lengthComputable?s.total:void 0,a=o-r,u=n(a),l=o<=i;r=o;const f={loaded:o,total:i,progress:i?o/i:void 0,bytes:a,rate:u||void 0,estimated:u&&i&&l?(i-o)/u:void 0,event:s};f[t?"download":"upload"]=!0,e(f)}}const Kr=typeof XMLHttpRequest<"u",Gr=Kr&&function(e){return new Promise(function(r,n){let s=e.data;const o=B.from(e.headers).normalize(),i=e.responseType;let a;function u(){e.cancelToken&&e.cancelToken.unsubscribe(a),e.signal&&e.signal.removeEventListener("abort",a)}c.isFormData(s)&&(L.isStandardBrowserEnv||L.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let l=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",y=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(b+":"+y))}const f=Ot(e.baseURL,e.url);l.open(e.method.toUpperCase(),bt(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function h(){if(!l)return;const b=B.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),w={data:!i||i==="text"||i==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:b,config:e,request:l};Hr(function(P){r(P),u()},function(P){n(P),u()},w),l=null}if("onloadend"in l?l.onloadend=h:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(h)},l.onabort=function(){l&&(n(new S("Request aborted",S.ECONNABORTED,e,l)),l=null)},l.onerror=function(){n(new S("Network Error",S.ERR_NETWORK,e,l)),l=null},l.ontimeout=function(){let y=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||wt;e.timeoutErrorMessage&&(y=e.timeoutErrorMessage),n(new S(y,w.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,e,l)),l=null},L.isStandardBrowserEnv){const b=(e.withCredentials||Wr(f))&&e.xsrfCookieName&&zr.read(e.xsrfCookieName);b&&o.set(e.xsrfHeaderName,b)}s===void 0&&o.setContentType(null),"setRequestHeader"in l&&c.forEach(o.toJSON(),function(y,w){l.setRequestHeader(w,y)}),c.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),i&&i!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",Ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",Ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(a=b=>{l&&(n(!b||b.type?new te(null,e,l):b),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(a),e.signal&&(e.signal.aborted?a():e.signal.addEventListener("abort",a)));const E=Jr(f);if(E&&L.protocols.indexOf(E)===-1){n(new S("Unsupported protocol "+E+":",S.ERR_BAD_REQUEST,e));return}l.send(s||null)})},ae={http:Er,xhr:Gr};c.forEach(ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Qr={getAdapter:e=>{e=c.isArray(e)?e:[e];const{length:t}=e;let r,n;for(let s=0;s<t&&(r=e[s],!(n=c.isString(r)?ae[r.toLowerCase()]:r));s++);if(!n)throw n===!1?new S(`Adapter ${r} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(c.hasOwnProp(ae,r)?`Adapter '${r}' is not available in the build`:`Unknown adapter '${r}'`);if(!c.isFunction(n))throw new TypeError("adapter is not a function");return n},adapters:ae};function Se(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new te(null,e)}function Qe(e){return Se(e),e.headers=B.from(e.headers),e.data=Oe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qr.getAdapter(e.adapter||ke.adapter)(e).then(function(n){return Se(e),n.data=Oe.call(e,e.transformResponse,n),n.headers=B.from(n.headers),n},function(n){return Et(n)||(Se(e),n&&n.response&&(n.response.data=Oe.call(e,e.transformResponse,n.response),n.response.headers=B.from(n.response.headers))),Promise.reject(n)})}const Xe=e=>e instanceof B?e.toJSON():e;function K(e,t){t=t||{};const r={};function n(l,f,h){return c.isPlainObject(l)&&c.isPlainObject(f)?c.merge.call({caseless:h},l,f):c.isPlainObject(f)?c.merge({},f):c.isArray(f)?f.slice():f}function s(l,f,h){if(c.isUndefined(f)){if(!c.isUndefined(l))return n(void 0,l,h)}else return n(l,f,h)}function o(l,f){if(!c.isUndefined(f))return n(void 0,f)}function i(l,f){if(c.isUndefined(f)){if(!c.isUndefined(l))return n(void 0,l)}else return n(void 0,f)}function a(l,f,h){if(h in t)return n(l,f);if(h in e)return n(void 0,l)}const u={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:a,headers:(l,f)=>s(Xe(l),Xe(f),!0)};return c.forEach(Object.keys(e).concat(Object.keys(t)),function(f){const h=u[f]||s,E=h(e[f],t[f],f);c.isUndefined(E)&&h!==a||(r[f]=E)}),r}const St="1.3.6",Le={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Le[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Ze={};Le.transitional=function(t,r,n){function s(o,i){return"[Axios v"+St+"] Transitional option '"+o+"'"+i+(n?". "+n:"")}return(o,i,a)=>{if(t===!1)throw new S(s(i," has been removed"+(r?" in "+r:"")),S.ERR_DEPRECATED);return r&&!Ze[i]&&(Ze[i]=!0,console.warn(s(i," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(o,i,a):!0}};function Xr(e,t,r){if(typeof e!="object")throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let s=n.length;for(;s-- >0;){const o=n[s],i=t[o];if(i){const a=e[o],u=a===void 0||i(a,o,e);if(u!==!0)throw new S("option "+o+" must be "+u,S.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new S("Unknown option "+o,S.ERR_BAD_OPTION)}}const Re={assertOptions:Xr,validators:Le},H=Re.validators;class de{constructor(t){this.defaults=t,this.interceptors={request:new Ye,response:new Ye}}request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=K(this.defaults,r);const{transitional:n,paramsSerializer:s,headers:o}=r;n!==void 0&&Re.assertOptions(n,{silentJSONParsing:H.transitional(H.boolean),forcedJSONParsing:H.transitional(H.boolean),clarifyTimeoutError:H.transitional(H.boolean)},!1),s!=null&&(c.isFunction(s)?r.paramsSerializer={serialize:s}:Re.assertOptions(s,{encode:H.function,serialize:H.function},!0)),r.method=(r.method||this.defaults.method||"get").toLowerCase();let i;i=o&&c.merge(o.common,o[r.method]),i&&c.forEach(["delete","get","head","post","put","patch","common"],y=>{delete o[y]}),r.headers=B.concat(i,o);const a=[];let u=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(r)===!1||(u=u&&w.synchronous,a.unshift(w.fulfilled,w.rejected))});const l=[];this.interceptors.response.forEach(function(w){l.push(w.fulfilled,w.rejected)});let f,h=0,E;if(!u){const y=[Qe.bind(this),void 0];for(y.unshift.apply(y,a),y.push.apply(y,l),E=y.length,f=Promise.resolve(r);h<E;)f=f.then(y[h++],y[h++]);return f}E=a.length;let b=r;for(h=0;h<E;){const y=a[h++],w=a[h++];try{b=y(b)}catch(T){w.call(this,T);break}}try{f=Qe.call(this,b)}catch(y){return Promise.reject(y)}for(h=0,E=l.length;h<E;)f=f.then(l[h++],l[h++]);return f}getUri(t){t=K(this.defaults,t);const r=Ot(t.baseURL,t.url);return bt(r,t.params,t.paramsSerializer)}}c.forEach(["delete","get","head","options"],function(t){de.prototype[t]=function(r,n){return this.request(K(n||{},{method:t,url:r,data:(n||{}).data}))}});c.forEach(["post","put","patch"],function(t){function r(n){return function(o,i,a){return this.request(K(a||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}de.prototype[t]=r(),de.prototype[t+"Form"]=r(!0)});const le=de;class Ue{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(o){r=o});const n=this;this.promise.then(s=>{if(!n._listeners)return;let o=n._listeners.length;for(;o-- >0;)n._listeners[o](s);n._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(a=>{n.subscribe(a),o=a}).then(s);return i.cancel=function(){n.unsubscribe(o)},i},t(function(o,i,a){n.reason||(n.reason=new te(o,i,a),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}static source(){let t;return{token:new Ue(function(s){t=s}),cancel:t}}}const Zr=Ue;function en(e){return function(r){return e.apply(null,r)}}function tn(e){return c.isObject(e)&&e.isAxiosError===!0}const Ne={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ne).forEach(([e,t])=>{Ne[t]=e});const rn=Ne;function At(e){const t=new le(e),r=it(le.prototype.request,t);return c.extend(r,le.prototype,t,{allOwnKeys:!0}),c.extend(r,t,null,{allOwnKeys:!0}),r.create=function(s){return At(K(e,s))},r}const C=At(ke);C.Axios=le;C.CanceledError=te;C.CancelToken=Zr;C.isCancel=Et;C.VERSION=St;C.toFormData=ye;C.AxiosError=S;C.Cancel=C.CanceledError;C.all=function(t){return Promise.all(t)};C.spread=en;C.isAxiosError=tn;C.mergeConfig=K;C.AxiosHeaders=B;C.formToJSON=e=>xt(c.isHTMLForm(e)?new FormData(e):e);C.HttpStatusCode=rn;C.default=C;const Be=C;Be.defaults.baseURL="https://6443c62a90738aa7c077683c.mockapi.io/tweets";async function nn(){return(await Be.get("/users")).data}async function et(e,t){return(await Be.put(`/users/${e}`,t)).data}const vt=F.button`
width: 196px;
height: 50px;
margin: 0 auto;
background-color:${e=>e.followToggle&&!e.isLoading?"#5CD3A8":"#EBD8FF"};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`,Rt=F.p`
font-weight: 600;
font-size: 18px;
line-height: 22px;

text-transform: uppercase;
color: #373737;
`,sn=({setPage:e})=>v.jsx(vt,{onClick:()=>e(t=>++t),style:{marginBottom:50,marginTop:30},children:v.jsx(Rt,{children:"load more"})});let on={data:""},an=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||on,ln=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,cn=/\/\*[^]*?\*\/|  +/g,tt=/\n+/g,z=(e,t)=>{let r="",n="",s="";for(let o in e){let i=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+i+";":n+=o[1]=="f"?z(i,o):o+"{"+z(i,o[1]=="k"?"":t)+"}":typeof i=="object"?n+=z(i,t?t.replace(/([^,])+/g,a=>o.replace(/(^:.*)|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):o):i!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=z.p?z.p(o,i):o+":"+i+";")}return r+(t&&s?t+"{"+s+"}":s)+n},U={},Nt=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+Nt(e[r]);return t}return e},un=(e,t,r,n,s)=>{let o=Nt(e),i=U[o]||(U[o]=(u=>{let l=0,f=11;for(;l<u.length;)f=101*f+u.charCodeAt(l++)>>>0;return"go"+f})(o));if(!U[i]){let u=o!==e?e:(l=>{let f,h,E=[{}];for(;f=ln.exec(l.replace(cn,""));)f[4]?E.shift():f[3]?(h=f[3].replace(tt," ").trim(),E.unshift(E[0][h]=E[0][h]||{})):E[0][f[1]]=f[2].replace(tt," ").trim();return E[0]})(e);U[i]=z(s?{["@keyframes "+i]:u}:u,r?"":"."+i)}let a=r&&U.g?U.g:null;return r&&(U.g=U[i]),((u,l,f,h)=>{h?l.data=l.data.replace(h,u):l.data.indexOf(u)===-1&&(l.data=f?u+l.data:l.data+u)})(U[i],t,n,a),i},fn=(e,t,r)=>e.reduce((n,s,o)=>{let i=t[o];if(i&&i.call){let a=i(r),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;i=u?"."+u:a&&typeof a=="object"?a.props?"":z(a,""):a===!1?"":a}return n+s+(i??"")},"");function we(e){let t=this||{},r=e.call?e(t.p):e;return un(r.unshift?r.raw?fn(r,[].slice.call(arguments,1),t.p):r.reduce((n,s)=>Object.assign(n,s&&s.call?s(t.p):s),{}):r,an(t.target),t.g,t.o,t.k)}let Ct,Ce,Te;we.bind({g:1});let M=we.bind({k:1});function dn(e,t,r,n){z.p=t,Ct=e,Ce=r,Te=n}function V(e,t){let r=this||{};return function(){let n=arguments;function s(o,i){let a=Object.assign({},o),u=a.className||s.className;r.p=Object.assign({theme:Ce&&Ce()},a),r.o=/ *go\d+/.test(u),a.className=we.apply(r,n)+(u?" "+u:""),t&&(a.ref=i);let l=e;return e[0]&&(l=a.as||e,delete a.as),Te&&l[0]&&Te(a),Ct(l,a)}return t?t(s):s}}var pn=e=>typeof e=="function",pe=(e,t)=>pn(e)?e(t):e,hn=(()=>{let e=0;return()=>(++e).toString()})(),Tt=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),mn=20,ce=new Map,yn=1e3,rt=e=>{if(ce.has(e))return;let t=setTimeout(()=>{ce.delete(e),W({type:4,toastId:e})},yn);ce.set(e,t)},gn=e=>{let t=ce.get(e);t&&clearTimeout(t)},Pe=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,mn)};case 1:return t.toast.id&&gn(t.toast.id),{...e,toasts:e.toasts.map(o=>o.id===t.toast.id?{...o,...t.toast}:o)};case 2:let{toast:r}=t;return e.toasts.find(o=>o.id===r.id)?Pe(e,{type:1,toast:r}):Pe(e,{type:0,toast:r});case 3:let{toastId:n}=t;return n?rt(n):e.toasts.forEach(o=>{rt(o.id)}),{...e,toasts:e.toasts.map(o=>o.id===n||n===void 0?{...o,visible:!1}:o)};case 4:return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(o=>o.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let s=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ue=[],fe={toasts:[],pausedAt:void 0},W=e=>{fe=Pe(fe,e),ue.forEach(t=>{t(fe)})},bn={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},wn=(e={})=>{let[t,r]=x.useState(fe);x.useEffect(()=>(ue.push(r),()=>{let s=ue.indexOf(r);s>-1&&ue.splice(s,1)}),[t]);let n=t.toasts.map(s=>{var o,i;return{...e,...e[s.type],...s,duration:s.duration||((o=e[s.type])==null?void 0:o.duration)||(e==null?void 0:e.duration)||bn[s.type],style:{...e.style,...(i=e[s.type])==null?void 0:i.style,...s.style}}});return{...t,toasts:n}},xn=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(r==null?void 0:r.id)||hn()}),re=e=>(t,r)=>{let n=xn(t,e,r);return W({type:2,toast:n}),n.id},D=(e,t)=>re("blank")(e,t);D.error=re("error");D.success=re("success");D.loading=re("loading");D.custom=re("custom");D.dismiss=e=>{W({type:3,toastId:e})};D.remove=e=>W({type:4,toastId:e});D.promise=(e,t,r)=>{let n=D.loading(t.loading,{...r,...r==null?void 0:r.loading});return e.then(s=>(D.success(pe(t.success,s),{id:n,...r,...r==null?void 0:r.success}),s)).catch(s=>{D.error(pe(t.error,s),{id:n,...r,...r==null?void 0:r.error})}),e};var En=(e,t)=>{W({type:1,toast:{id:e,height:t}})},On=()=>{W({type:5,time:Date.now()})},Sn=e=>{let{toasts:t,pausedAt:r}=wn(e);x.useEffect(()=>{if(r)return;let o=Date.now(),i=t.map(a=>{if(a.duration===1/0)return;let u=(a.duration||0)+a.pauseDuration-(o-a.createdAt);if(u<0){a.visible&&D.dismiss(a.id);return}return setTimeout(()=>D.dismiss(a.id),u)});return()=>{i.forEach(a=>a&&clearTimeout(a))}},[t,r]);let n=x.useCallback(()=>{r&&W({type:6,time:Date.now()})},[r]),s=x.useCallback((o,i)=>{let{reverseOrder:a=!1,gutter:u=8,defaultPosition:l}=i||{},f=t.filter(b=>(b.position||l)===(o.position||l)&&b.height),h=f.findIndex(b=>b.id===o.id),E=f.filter((b,y)=>y<h&&b.visible).length;return f.filter(b=>b.visible).slice(...a?[E+1]:[0,E]).reduce((b,y)=>b+(y.height||0)+u,0)},[t]);return{toasts:t,handlers:{updateHeight:En,startPause:On,endPause:n,calculateOffset:s}}},An=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,vn=M`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Rn=M`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Nn=V("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${An} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${vn} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Rn} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Cn=M`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Tn=V("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Cn} 1s linear infinite;
`,Pn=M`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Dn=M`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,_n=V("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Pn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Dn} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,jn=V("div")`
  position: absolute;
`,Fn=V("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,kn=M`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ln=V("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${kn} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Un=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return t!==void 0?typeof t=="string"?x.createElement(Ln,null,t):t:r==="blank"?null:x.createElement(Fn,null,x.createElement(Tn,{...n}),r!=="loading"&&x.createElement(jn,null,r==="error"?x.createElement(Nn,{...n}):x.createElement(_n,{...n})))},Bn=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,In=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,Mn="0%{opacity:0;} 100%{opacity:1;}",qn="0%{opacity:1;} 100%{opacity:0;}",Hn=V("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,zn=V("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Vn=(e,t)=>{let r=e.includes("top")?1:-1,[n,s]=Tt()?[Mn,qn]:[Bn(r),In(r)];return{animation:t?`${M(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${M(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$n=x.memo(({toast:e,position:t,style:r,children:n})=>{let s=e.height?Vn(e.position||t||"top-center",e.visible):{opacity:0},o=x.createElement(Un,{toast:e}),i=x.createElement(zn,{...e.ariaProps},pe(e.message,e));return x.createElement(Hn,{className:e.className,style:{...s,...r,...e.style}},typeof n=="function"?n({icon:o,message:i}):x.createElement(x.Fragment,null,o,i))});dn(x.createElement);var Wn=({id:e,className:t,style:r,onHeightUpdate:n,children:s})=>{let o=x.useCallback(i=>{if(i){let a=()=>{let u=i.getBoundingClientRect().height;n(e,u)};a(),new MutationObserver(a).observe(i,{subtree:!0,childList:!0,characterData:!0})}},[e,n]);return x.createElement("div",{ref:o,className:t,style:r},s)},Jn=(e,t)=>{let r=e.includes("top"),n=r?{top:0}:{bottom:0},s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:Tt()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...n,...s}},Yn=we`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,se=16,Kn=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:n,children:s,containerStyle:o,containerClassName:i})=>{let{toasts:a,handlers:u}=Sn(r);return x.createElement("div",{style:{position:"fixed",zIndex:9999,top:se,left:se,right:se,bottom:se,pointerEvents:"none",...o},className:i,onMouseEnter:u.startPause,onMouseLeave:u.endPause},a.map(l=>{let f=l.position||t,h=u.calculateOffset(l,{reverseOrder:e,gutter:n,defaultPosition:t}),E=Jn(f,h);return x.createElement(Wn,{id:l.id,key:l.id,onHeightUpdate:u.updateHeight,className:l.visible?Yn:"",style:E},l.type==="custom"?pe(l.message,l):s?s(l):x.createElement($n,{toast:l,position:f}))}))},nt=D;const Gn=F.div`
  position: relative;
  width: 308px;
  height: 404px;

  padding: 28px 36px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`,Qn=F.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 72px;
  height: 22px;
`,Xn=F.img`
  width: 308px;
  height: 168px;
  margin-bottom: 88px;
`,Zn=F.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 64px;
  height: 64px;
  margin: 0 auto;
  border: 8px solid #ebd8ff;
  border-radius: 85.9232px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;

  z-index: 1;
  overflow: hidden;
`,es=F.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`,ts=F.img`
  width: 100%;
`,st=F.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;
  color: #ebd8ff;

  :nth-child(1) {
    margin-bottom: 16px;
  }

  :nth-child(2) {
    margin-bottom: 26px;
  }
`,rs=({onClick:e,followToggle:t,isLoading:r})=>v.jsx(vt,{type:"button",onClick:e,followToggle:t,isLoading:r,disabled:r,children:v.jsx(Rt,{children:r?"loading...":t?"following":"follow"})}),ns="/test-task-goit/assets/card-img-4e3d3f1c.png",ss="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",os=({user:e,followStatus:t,togglStatus:r})=>{const[n,s]=x.useState(e),[o,i]=x.useState(!1),[a,u]=x.useState(t),l=()=>{if(i(!0),u(({id:f,status:h})=>({id:f,status:!h})),a.status){const f={...n,followers:n.followers-1};et(n.id,f).then(h=>{s(h),r({id:a.id,status:!a.status})}).catch(h=>{nt.error("Sorry, an error occurred.",{duration:2e3}),u(({id:E,status:b})=>({id:E,status:!b}))}).finally(()=>i(!1))}if(!a.status){const f={...n,followers:n.followers+1};et(n.id,f).then(h=>{s(h),r({id:a.id,status:!a.status})}).catch(h=>{nt.error("Sorry, an error occurred.",{duration:2e3}),u(({id:E,status:b})=>({id:E,status:!b}))}).finally(()=>i(!1))}};return v.jsxs(Gn,{children:[v.jsx(Qn,{src:ss,alt:"goit"}),v.jsx(Xn,{src:ns,alt:"img"}),v.jsx(es,{}),v.jsx(Zn,{children:v.jsx(ts,{src:n.avatar})}),v.jsxs("div",{children:[v.jsxs(st,{children:[v.jsxs("span",{children:[n.tweets.toLocaleString()," "]}),"Tweets"]}),v.jsxs(st,{children:[v.jsxs("span",{children:[n.followers.toLocaleString()," "]}),"Folowers"]})]}),v.jsx(rs,{onClick:l,followToggle:a.status,isLoading:o})]})},is=F.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content:center;
align-items: : center; 
gap: 30px;
padding: 0;
`,Pt="FOLLOW__USERS",as=e=>{try{return localStorage.setItem(Pt,JSON.stringify(e)),!0}catch(t){return t}},ls=()=>{try{return JSON.parse(localStorage.getItem(Pt))}catch(e){return e}},cs=({users:e,allTweets:t,curentParam:r})=>{const[n,s]=x.useState(()=>ls()),o=()=>{const a=e.filter((l,f)=>l.id===n[f].id&&n[f].status),u=e.filter((l,f)=>l.id===n[f].id&&!n[f].status);return r==="Follow"?u:r==="Followings"?a:e},i=a=>{const u=n.map(l=>l.id===a.id?a:l);s(u)};return x.useEffect(()=>{if(n!==null&&n.length>0)return;const a=t.map(({id:u})=>({id:u,status:!1}));s(a)},[e]),x.useEffect(()=>{as(n)},[n]),n&&n.length>0&&v.jsx(is,{children:o().map(a=>v.jsx("li",{children:v.jsx(os,{user:a,followStatus:n.filter(u=>u.id===a.id)[0],togglStatus:i})},a.id))})};var Dt={},De={},us={get exports(){return De},set exports(e){De=e}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var n=[],s=0;s<arguments.length;s++){var o=arguments[s];if(o){var i=typeof o;if(i==="string"||i==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var a=r.apply(null,o);a&&n.push(a)}}else if(i==="object"){if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]")){n.push(o.toString());continue}for(var u in o)t.call(o,u)&&o[u]&&n.push(u)}}}return n.join(" ")}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(us);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=o(x),r=n(De);function n(p){return p&&p.__esModule?p:{default:p}}function s(){if(typeof WeakMap!="function")return null;var p=new WeakMap;return s=function(){return p},p}function o(p){if(p&&p.__esModule)return p;if(p===null||i(p)!=="object"&&typeof p!="function")return{default:p};var g=s();if(g&&g.has(p))return g.get(p);var m={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in p)if(Object.prototype.hasOwnProperty.call(p,O)){var A=d?Object.getOwnPropertyDescriptor(p,O):null;A&&(A.get||A.set)?Object.defineProperty(m,O,A):m[O]=p[O]}return m.default=p,g&&g.set(p,m),m}function i(p){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?i=function(m){return typeof m}:i=function(m){return m&&typeof Symbol=="function"&&m.constructor===Symbol&&m!==Symbol.prototype?"symbol":typeof m},i(p)}function a(){return a=Object.assign||function(p){for(var g=1;g<arguments.length;g++){var m=arguments[g];for(var d in m)Object.prototype.hasOwnProperty.call(m,d)&&(p[d]=m[d])}return p},a.apply(this,arguments)}function u(p,g){var m=Object.keys(p);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(p);g&&(d=d.filter(function(O){return Object.getOwnPropertyDescriptor(p,O).enumerable})),m.push.apply(m,d)}return m}function l(p){for(var g=1;g<arguments.length;g++){var m=arguments[g]!=null?arguments[g]:{};g%2?u(m,!0).forEach(function(d){f(p,d,m[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(p,Object.getOwnPropertyDescriptors(m)):u(m).forEach(function(d){Object.defineProperty(p,d,Object.getOwnPropertyDescriptor(m,d))})}return p}function f(p,g,m){return g in p?Object.defineProperty(p,g,{value:m,enumerable:!0,configurable:!0,writable:!0}):p[g]=m,p}function h(p,g){if(!(p instanceof g))throw new TypeError("Cannot call a class as a function")}function E(p,g){for(var m=0;m<g.length;m++){var d=g[m];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(p,d.key,d)}}function b(p,g,m){return g&&E(p.prototype,g),m&&E(p,m),p}function y(p,g){return g&&(i(g)==="object"||typeof g=="function")?g:T(p)}function w(p){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(m){return m.__proto__||Object.getPrototypeOf(m)},w(p)}function T(p){if(p===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return p}function P(p,g){if(typeof g!="function"&&g!==null)throw new TypeError("Super expression must either be null or a function");p.prototype=Object.create(g&&g.prototype,{constructor:{value:p,writable:!0,configurable:!0}}),g&&k(p,g)}function k(p,g){return k=Object.setPrototypeOf||function(d,O){return d.__proto__=O,d},k(p,g)}var $="Select...",ne=function(p){P(g,p);function g(m){var d;return h(this,g),d=y(this,w(g).call(this,m)),d.state={selected:d.parseValue(m.value,m.options)||{label:typeof m.placeholder>"u"?$:m.placeholder,value:""},isOpen:!1},d.dropdownRef=(0,t.createRef)(),d.mounted=!0,d.handleDocumentClick=d.handleDocumentClick.bind(T(d)),d.fireChangeEvent=d.fireChangeEvent.bind(T(d)),d}return b(g,[{key:"componentDidUpdate",value:function(d){if(this.props.value!==d.value)if(this.props.value){var O=this.parseValue(this.props.value,this.props.options);O!==this.state.selected&&this.setState({selected:O})}else this.setState({selected:{label:typeof this.props.placeholder>"u"?$:this.props.placeholder,value:""}})}},{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1)}},{key:"componentWillUnmount",value:function(){this.mounted=!1,document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleMouseDown",value:function(d){this.props.onFocus&&typeof this.props.onFocus=="function"&&this.props.onFocus(this.state.isOpen),!(d.type==="mousedown"&&d.button!==0)&&(d.stopPropagation(),d.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}},{key:"parseValue",value:function(d,O){var A;if(typeof d=="string")for(var R=0,_=O.length;R<_;R++)if(O[R].type==="group"){var N=O[R].items.filter(function(j){return j.value===d});N.length&&(A=N[0])}else typeof O[R].value<"u"&&O[R].value===d&&(A=O[R]);return A||d}},{key:"setValue",value:function(d,O){var A={selected:{value:d,label:O},isOpen:!1};this.fireChangeEvent(A),this.setState(A)}},{key:"fireChangeEvent",value:function(d){d.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(d.selected)}},{key:"renderOption",value:function(d){var O,A=d.value;typeof A>"u"&&(A=d.label||d);var R=d.label||d.value||d,_=A===this.state.selected.value||A===this.state.selected,N=(O={},f(O,"".concat(this.props.baseClassName,"-option"),!0),f(O,d.className,!!d.className),f(O,"is-selected",_),O),j=(0,r.default)(N),J=Object.keys(d.data||{}).reduce(function(Y,Q){return l({},Y,f({},"data-".concat(Q),d.data[Q]))},{});return t.default.createElement("div",a({key:A,className:j,onMouseDown:this.setValue.bind(this,A,R),onClick:this.setValue.bind(this,A,R),role:"option","aria-selected":_?"true":"false"},J),R)}},{key:"buildMenu",value:function(){var d=this,O=this.props,A=O.options,R=O.baseClassName,_=A.map(function(N){if(N.type==="group"){var j=t.default.createElement("div",{className:"".concat(R,"-title")},N.name),J=N.items.map(function(Y){return d.renderOption(Y)});return t.default.createElement("div",{className:"".concat(R,"-group"),key:N.name,role:"listbox",tabIndex:"-1"},j,J)}else return d.renderOption(N)});return _.length?_:t.default.createElement("div",{className:"".concat(R,"-noresults")},"No options found")}},{key:"handleDocumentClick",value:function(d){this.mounted&&(this.dropdownRef.current.contains(d.target)||this.state.isOpen&&this.setState({isOpen:!1}))}},{key:"isValueSelected",value:function(){return typeof this.state.selected=="string"||this.state.selected.value!==""}},{key:"render",value:function(){var d,O,A,R,_,N=this.props,j=N.baseClassName,J=N.controlClassName,Y=N.placeholderClassName,Q=N.menuClassName,Ie=N.arrowClassName,Me=N.arrowClosed,qe=N.arrowOpen,He=N.className,ze=this.props.disabled?"Dropdown-disabled":"",Ft=typeof this.state.selected=="string"?this.state.selected:this.state.selected.label,kt=(0,r.default)((d={},f(d,"".concat(j,"-root"),!0),f(d,He,!!He),f(d,"is-open",this.state.isOpen),d)),Lt=(0,r.default)((O={},f(O,"".concat(j,"-control"),!0),f(O,J,!!J),f(O,ze,!!ze),O)),Ut=(0,r.default)((A={},f(A,"".concat(j,"-placeholder"),!0),f(A,Y,!!Y),f(A,"is-selected",this.isValueSelected()),A)),Bt=(0,r.default)((R={},f(R,"".concat(j,"-menu"),!0),f(R,Q,!!Q),R)),It=(0,r.default)((_={},f(_,"".concat(j,"-arrow"),!0),f(_,Ie,!!Ie),_)),Mt=t.default.createElement("div",{className:Ut},Ft),qt=this.state.isOpen?t.default.createElement("div",{className:Bt,"aria-expanded":"true"},this.buildMenu()):null;return t.default.createElement("div",{ref:this.dropdownRef,className:kt},t.default.createElement("div",{className:Lt,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),"aria-haspopup":"listbox"},Mt,t.default.createElement("div",{className:"".concat(j,"-arrow-wrapper")},qe&&Me?this.state.isOpen?qe:Me:t.default.createElement("span",{className:It}))),qt)}}]),g}(t.Component);ne.defaultProps={baseClassName:"Dropdown"};var jt=ne;e.default=jt})(Dt);const fs=Ht(Dt);const ds=F.div`
  width: 1200px;
  margin: 0 auto;
`,ps=F(fs)`
  width: 200px;
  margin: 0 auto;

  .Dropdown-control {
    border-radius: 10px;
    background-color: #fff05;
    padding: 10px 52px 10px 10px;
    color: #5736a3;

    :hover {
      background-color: #fdda0d;
    }
  }

  .Dropdown-arrow {
    top: 16px;
  }
  .Dropdown-menu {
    border-radius: 10px;
  }

  .Dropdown-option {
    color: #5736a3;

    :hover {
      background-color: #ebd8ff;
      color: #5736a3;
    }
  }

  .Dropdown-option.is-selected {
    background-color: #ebd8ff;
    color: #5736a3;
  }
`,_t=["All","Follow","Followings"],ot=_t[0],hs=({page:e,setPage:t,...r})=>{const[n,s]=x.useState(ot);return v.jsxs(ds,{children:[v.jsx(ps,{options:_t,onChange:({value:o})=>s(o),value:ot,placeholder:"Select an option"}),v.jsx(cs,{...r,curentParam:n}),e!==2&&v.jsx(sn,{setPage:t})]})},ys=()=>{const[e,t]=x.useState([]),[r,n]=x.useState([]),[s,o]=x.useState(""),[i,a]=x.useState(1);return x.useEffect(()=>{nn().then(u=>t(u)).catch(u=>o(u.message))},[]),x.useEffect(()=>{if(i>1)return;const u=e.filter(l=>l.id<=e.length/2);n(u)},[e]),x.useEffect(()=>{if(i===1)return;const u=e.filter(l=>l.id>e.length/2);n(l=>[...l,...u])},[i]),v.jsxs("section",{children:[s?v.jsx("p",{style:{textAlign:"center"},children:s}):e&&v.jsx(hs,{page:i,setPage:a,users:r,allTweets:e}),v.jsx(Kn,{position:"top-right",reverseOrder:!1})]})};export{ys as default};
