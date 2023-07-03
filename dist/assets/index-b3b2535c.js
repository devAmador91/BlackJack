(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const u of i)if(u.type==="childList")for(const a of u.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function r(i){const u={};return i.integrity&&(u.integrity=i.integrity),i.referrerPolicy&&(u.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?u.credentials="include":i.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function e(i){if(i.ep)return;i.ep=!0;const u=r(i);fetch(i.href,u)}})();document.querySelector("#app").innerHTML=`
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Blackjack</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
</head>

<body>
<header class="titulo">
    Blackjack
</header>

<div class="row">

    <div class="container-button">

        <button class="btn btn-danger" id="nuevoJuego">Nuevo Juego</button>
        <button class="btn btn-primary" id="pedirCarta">Pedir Carta</button>
        <button class="btn btn-primary" id="detener">Detener</button>

    </div>

</div>

<div class="row">
    <div class="col mt-4">
        <h1>Jugador 1 - <small id="puntuacionJugador">0</small></h1>

        <div id="jugador-usuario">

        </div>
    </div>

</div>

<div class="row">
    <div class="col mt-4">
        <h1>Computadora - <small id="puntuacionComputadora">0</small></h1>

        <div id="jugador-computadora">

        </div>
    </div>

</div>

</body>
`;var Dn="1.13.6",An=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global||Function("return this")()||{},Q=Array.prototype,un=Object.prototype,En=typeof Symbol<"u"?Symbol.prototype:null,Lt=Q.push,V=Q.slice,D=un.toString,St=un.hasOwnProperty,Fn=typeof ArrayBuffer<"u",Dt=typeof DataView<"u",Ft=Array.isArray,On=Object.keys,In=Object.create,Bn=Fn&&ArrayBuffer.isView,Rt=isNaN,Vt=isFinite,Rn=!{toString:null}.propertyIsEnumerable("toString"),Mn=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],zt=Math.pow(2,53)-1;function y(n,t){return t=t==null?n.length-1:+t,function(){for(var r=Math.max(arguments.length-t,0),e=Array(r),i=0;i<r;i++)e[i]=arguments[i+t];switch(t){case 0:return n.call(this,e);case 1:return n.call(this,arguments[0],e);case 2:return n.call(this,arguments[0],arguments[1],e)}var u=Array(t+1);for(i=0;i<t;i++)u[i]=arguments[i];return u[t]=e,n.apply(this,u)}}function M(n){var t=typeof n;return t==="function"||t==="object"&&!!n}function $t(n){return n===null}function Vn(n){return n===void 0}function zn(n){return n===!0||n===!1||D.call(n)==="[object Boolean]"}function Jt(n){return!!(n&&n.nodeType===1)}function d(n){var t="[object "+n+"]";return function(r){return D.call(r)===t}}const an=d("String"),$n=d("Number"),Ut=d("Date"),qt=d("RegExp"),Ht=d("Error"),Jn=d("Symbol"),Un=d("ArrayBuffer");var qn=d("Function"),Wt=An.document&&An.document.childNodes;typeof/./!="function"&&typeof Int8Array!="object"&&typeof Wt!="function"&&(qn=function(n){return typeof n=="function"||!1});const g=qn,Hn=d("Object");var Wn=Dt&&Hn(new DataView(new ArrayBuffer(8))),on=typeof Map<"u"&&Hn(new Map),Gt=d("DataView");function Xt(n){return n!=null&&g(n.getInt8)&&Un(n.buffer)}const W=Wn?Xt:Gt,N=Ft||d("Array");function I(n,t){return n!=null&&St.call(n,t)}var k=d("Arguments");(function(){k(arguments)||(k=function(n){return I(n,"callee")})})();const ln=k;function Qt(n){return!Jn(n)&&Vt(n)&&!isNaN(parseFloat(n))}function Gn(n){return $n(n)&&Rt(n)}function Xn(n){return function(){return n}}function Qn(n){return function(t){var r=n(t);return typeof r=="number"&&r>=0&&r<=zt}}function Yn(n){return function(t){return t==null?void 0:t[n]}}const G=Yn("byteLength"),Yt=Qn(G);var Zt=/\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;function Kt(n){return Bn?Bn(n)&&!W(n):Yt(n)&&Zt.test(D.call(n))}const Zn=Fn?Kt:Xn(!1),w=Yn("length");function xt(n){for(var t={},r=n.length,e=0;e<r;++e)t[n[e]]=!0;return{contains:function(i){return t[i]===!0},push:function(i){return t[i]=!0,n.push(i)}}}function Kn(n,t){t=xt(t);var r=Mn.length,e=n.constructor,i=g(e)&&e.prototype||un,u="constructor";for(I(n,u)&&!t.contains(u)&&t.push(u);r--;)u=Mn[r],u in n&&n[u]!==i[u]&&!t.contains(u)&&t.push(u)}function p(n){if(!M(n))return[];if(On)return On(n);var t=[];for(var r in n)I(n,r)&&t.push(r);return Rn&&Kn(n,t),t}function kt(n){if(n==null)return!0;var t=w(n);return typeof t=="number"&&(N(n)||an(n)||ln(n))?t===0:w(p(n))===0}function xn(n,t){var r=p(t),e=r.length;if(n==null)return!e;for(var i=Object(n),u=0;u<e;u++){var a=r[u];if(t[a]!==i[a]||!(a in i))return!1}return!0}function c(n){if(n instanceof c)return n;if(!(this instanceof c))return new c(n);this._wrapped=n}c.VERSION=Dn;c.prototype.value=function(){return this._wrapped};c.prototype.valueOf=c.prototype.toJSON=c.prototype.value;c.prototype.toString=function(){return String(this._wrapped)};function Nn(n){return new Uint8Array(n.buffer||n,n.byteOffset||0,G(n))}var Pn="[object DataView]";function b(n,t,r,e){if(n===t)return n!==0||1/n===1/t;if(n==null||t==null)return!1;if(n!==n)return t!==t;var i=typeof n;return i!=="function"&&i!=="object"&&typeof t!="object"?!1:kn(n,t,r,e)}function kn(n,t,r,e){n instanceof c&&(n=n._wrapped),t instanceof c&&(t=t._wrapped);var i=D.call(n);if(i!==D.call(t))return!1;if(Wn&&i=="[object Object]"&&W(n)){if(!W(t))return!1;i=Pn}switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!=+n?+t!=+t:+n==0?1/+n===1/t:+n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object Symbol]":return En.valueOf.call(n)===En.valueOf.call(t);case"[object ArrayBuffer]":case Pn:return kn(Nn(n),Nn(t),r,e)}var u=i==="[object Array]";if(!u&&Zn(n)){var a=G(n);if(a!==G(t))return!1;if(n.buffer===t.buffer&&n.byteOffset===t.byteOffset)return!0;u=!0}if(!u){if(typeof n!="object"||typeof t!="object")return!1;var o=n.constructor,f=t.constructor;if(o!==f&&!(g(o)&&o instanceof o&&g(f)&&f instanceof f)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var l=r.length;l--;)if(r[l]===n)return e[l]===t;if(r.push(n),e.push(t),u){if(l=n.length,l!==t.length)return!1;for(;l--;)if(!b(n[l],t[l],r,e))return!1}else{var s=p(n),h;if(l=s.length,p(t).length!==l)return!1;for(;l--;)if(h=s[l],!(I(t,h)&&b(n[h],t[h],r,e)))return!1}return r.pop(),e.pop(),!0}function bt(n,t){return b(n,t)}function z(n){if(!M(n))return[];var t=[];for(var r in n)t.push(r);return Rn&&Kn(n,t),t}function fn(n){var t=w(n);return function(r){if(r==null)return!1;var e=z(r);if(w(e))return!1;for(var i=0;i<t;i++)if(!g(r[n[i]]))return!1;return n!==nt||!g(r[cn])}}var cn="forEach",bn="has",sn=["clear","delete"],jn=["get",bn,"set"],jt=sn.concat(cn,jn),nt=sn.concat(jn),nr=["add"].concat(sn,cn,bn);const tr=on?fn(jt):d("Map"),rr=on?fn(nt):d("WeakMap"),er=on?fn(nr):d("Set"),ur=d("WeakSet");function L(n){for(var t=p(n),r=t.length,e=Array(r),i=0;i<r;i++)e[i]=n[t[i]];return e}function ir(n){for(var t=p(n),r=t.length,e=Array(r),i=0;i<r;i++)e[i]=[t[i],n[t[i]]];return e}function tt(n){for(var t={},r=p(n),e=0,i=r.length;e<i;e++)t[n[r[e]]]=r[e];return t}function j(n){var t=[];for(var r in n)g(n[r])&&t.push(r);return t.sort()}function vn(n,t){return function(r){var e=arguments.length;if(t&&(r=Object(r)),e<2||r==null)return r;for(var i=1;i<e;i++)for(var u=arguments[i],a=n(u),o=a.length,f=0;f<o;f++){var l=a[f];(!t||r[l]===void 0)&&(r[l]=u[l])}return r}}const rt=vn(z),X=vn(p),et=vn(z,!0);function ar(){return function(){}}function ut(n){if(!M(n))return{};if(In)return In(n);var t=ar();t.prototype=n;var r=new t;return t.prototype=null,r}function or(n,t){var r=ut(n);return t&&X(r,t),r}function lr(n){return M(n)?N(n)?n.slice():rt({},n):n}function fr(n,t){return t(n),n}function it(n){return N(n)?n:[n]}c.toPath=it;function $(n){return c.toPath(n)}function pn(n,t){for(var r=t.length,e=0;e<r;e++){if(n==null)return;n=n[t[e]]}return r?n:void 0}function at(n,t,r){var e=pn(n,$(t));return Vn(e)?r:e}function cr(n,t){t=$(t);for(var r=t.length,e=0;e<r;e++){var i=t[e];if(!I(n,i))return!1;n=n[i]}return!!r}function hn(n){return n}function F(n){return n=X({},n),function(t){return xn(t,n)}}function dn(n){return n=$(n),function(t){return pn(t,n)}}function J(n,t,r){if(t===void 0)return n;switch(r??3){case 1:return function(e){return n.call(t,e)};case 3:return function(e,i,u){return n.call(t,e,i,u)};case 4:return function(e,i,u,a){return n.call(t,e,i,u,a)}}return function(){return n.apply(t,arguments)}}function ot(n,t,r){return n==null?hn:g(n)?J(n,t,r):M(n)&&!N(n)?F(n):dn(n)}function gn(n,t){return ot(n,t,1/0)}c.iteratee=gn;function _(n,t,r){return c.iteratee!==gn?c.iteratee(n,t):ot(n,t,r)}function sr(n,t,r){t=_(t,r);for(var e=p(n),i=e.length,u={},a=0;a<i;a++){var o=e[a];u[o]=t(n[o],o,n)}return u}function lt(){}function vr(n){return n==null?lt:function(t){return at(n,t)}}function pr(n,t,r){var e=Array(Math.max(0,n));t=J(t,r,1);for(var i=0;i<n;i++)e[i]=t(i);return e}function nn(n,t){return t==null&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))}const R=Date.now||function(){return new Date().getTime()};function ft(n){var t=function(u){return n[u]},r="(?:"+p(n).join("|")+")",e=RegExp(r),i=RegExp(r,"g");return function(u){return u=u==null?"":""+u,e.test(u)?u.replace(i,t):u}}const ct={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},hr=ft(ct),dr=tt(ct),gr=ft(dr),mr=c.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Z=/(.)^/,yr={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},wr=/\\|'|\r|\n|\u2028|\u2029/g;function _r(n){return"\\"+yr[n]}var Ar=/^\s*(\w|\$)+\s*$/;function Er(n,t,r){!t&&r&&(t=r),t=et({},t,c.templateSettings);var e=RegExp([(t.escape||Z).source,(t.interpolate||Z).source,(t.evaluate||Z).source].join("|")+"|$","g"),i=0,u="__p+='";n.replace(e,function(l,s,h,U,T){return u+=n.slice(i,T).replace(wr,_r),i=T+l.length,s?u+=`'+
((__t=(`+s+`))==null?'':_.escape(__t))+
'`:h?u+=`'+
((__t=(`+h+`))==null?'':__t)+
'`:U&&(u+=`';
`+U+`
__p+='`),l}),u+=`';
`;var a=t.variable;if(a){if(!Ar.test(a))throw new Error("variable is not a bare identifier: "+a)}else u=`with(obj||{}){
`+u+`}
`,a="obj";u=`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
`+u+`return __p;
`;var o;try{o=new Function(a,"_",u)}catch(l){throw l.source=u,l}var f=function(l){return o.call(this,l,c)};return f.source="function("+a+`){
`+u+"}",f}function Or(n,t,r){t=$(t);var e=t.length;if(!e)return g(r)?r.call(n):r;for(var i=0;i<e;i++){var u=n==null?void 0:n[t[i]];u===void 0&&(u=r,i=e),n=g(u)?u.call(n):u}return n}var Ir=0;function Br(n){var t=++Ir+"";return n?n+t:t}function Mr(n){var t=c(n);return t._chain=!0,t}function st(n,t,r,e,i){if(!(e instanceof t))return n.apply(r,i);var u=ut(n.prototype),a=n.apply(u,i);return M(a)?a:u}var S=y(function(n,t){var r=S.placeholder,e=function(){for(var i=0,u=t.length,a=Array(u),o=0;o<u;o++)a[o]=t[o]===r?arguments[i++]:t[o];for(;i<arguments.length;)a.push(arguments[i++]);return st(n,e,this,this,a)};return e});S.placeholder=c;const vt=y(function(n,t,r){if(!g(n))throw new TypeError("Bind must be called on a function");var e=y(function(i){return st(n,e,t,this,r.concat(i))});return e}),A=Qn(w);function P(n,t,r,e){if(e=e||[],!t&&t!==0)t=1/0;else if(t<=0)return e.concat(n);for(var i=e.length,u=0,a=w(n);u<a;u++){var o=n[u];if(A(o)&&(N(o)||ln(o)))if(t>1)P(o,t-1,r,e),i=e.length;else for(var f=0,l=o.length;f<l;)e[i++]=o[f++];else r||(e[i++]=o)}return e}const Nr=y(function(n,t){t=P(t,!1,!1);var r=t.length;if(r<1)throw new Error("bindAll must be passed function names");for(;r--;){var e=t[r];n[e]=vt(n[e],n)}return n});function Pr(n,t){var r=function(e){var i=r.cache,u=""+(t?t.apply(this,arguments):e);return I(i,u)||(i[u]=n.apply(this,arguments)),i[u]};return r.cache={},r}const pt=y(function(n,t,r){return setTimeout(function(){return n.apply(null,r)},t)}),Tr=S(pt,c,1);function Cr(n,t,r){var e,i,u,a,o=0;r||(r={});var f=function(){o=r.leading===!1?0:R(),e=null,a=n.apply(i,u),e||(i=u=null)},l=function(){var s=R();!o&&r.leading===!1&&(o=s);var h=t-(s-o);return i=this,u=arguments,h<=0||h>t?(e&&(clearTimeout(e),e=null),o=s,a=n.apply(i,u),e||(i=u=null)):!e&&r.trailing!==!1&&(e=setTimeout(f,h)),a};return l.cancel=function(){clearTimeout(e),o=0,e=i=u=null},l}function Lr(n,t,r){var e,i,u,a,o,f=function(){var s=R()-i;t>s?e=setTimeout(f,t-s):(e=null,r||(a=n.apply(o,u)),e||(u=o=null))},l=y(function(s){return o=this,u=s,i=R(),e||(e=setTimeout(f,t),r&&(a=n.apply(o,u))),a});return l.cancel=function(){clearTimeout(e),e=u=o=null},l}function Sr(n,t){return S(t,n)}function mn(n){return function(){return!n.apply(this,arguments)}}function Dr(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}}function Fr(n,t){return function(){if(--n<1)return t.apply(this,arguments)}}function ht(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),n<=1&&(t=null),r}}const Rr=S(ht,2);function dt(n,t,r){t=_(t,r);for(var e=p(n),i,u=0,a=e.length;u<a;u++)if(i=e[u],t(n[i],i,n))return i}function gt(n){return function(t,r,e){r=_(r,e);for(var i=w(t),u=n>0?0:i-1;u>=0&&u<i;u+=n)if(r(t[u],u,t))return u;return-1}}const yn=gt(1),mt=gt(-1);function yt(n,t,r,e){r=_(r,e,1);for(var i=r(t),u=0,a=w(n);u<a;){var o=Math.floor((u+a)/2);r(n[o])<i?u=o+1:a=o}return u}function wt(n,t,r){return function(e,i,u){var a=0,o=w(e);if(typeof u=="number")n>0?a=u>=0?u:Math.max(u+o,a):o=u>=0?Math.min(u+1,o):u+o+1;else if(r&&u&&o)return u=r(e,i),e[u]===i?u:-1;if(i!==i)return u=t(V.call(e,a,o),Gn),u>=0?u+a:-1;for(u=n>0?a:o-1;u>=0&&u<o;u+=n)if(e[u]===i)return u;return-1}}const _t=wt(1,yn,yt),Vr=wt(-1,mt);function tn(n,t,r){var e=A(n)?yn:dt,i=e(n,t,r);if(i!==void 0&&i!==-1)return n[i]}function zr(n,t){return tn(n,F(t))}function O(n,t,r){t=J(t,r);var e,i;if(A(n))for(e=0,i=n.length;e<i;e++)t(n[e],e,n);else{var u=p(n);for(e=0,i=u.length;e<i;e++)t(n[u[e]],u[e],n)}return n}function B(n,t,r){t=_(t,r);for(var e=!A(n)&&p(n),i=(e||n).length,u=Array(i),a=0;a<i;a++){var o=e?e[a]:a;u[a]=t(n[o],o,n)}return u}function At(n){var t=function(r,e,i,u){var a=!A(r)&&p(r),o=(a||r).length,f=n>0?0:o-1;for(u||(i=r[a?a[f]:f],f+=n);f>=0&&f<o;f+=n){var l=a?a[f]:f;i=e(i,r[l],l,r)}return i};return function(r,e,i,u){var a=arguments.length>=3;return t(r,J(e,u,4),i,a)}}const K=At(1),Tn=At(-1);function C(n,t,r){var e=[];return t=_(t,r),O(n,function(i,u,a){t(i,u,a)&&e.push(i)}),e}function $r(n,t,r){return C(n,mn(_(t)),r)}function Cn(n,t,r){t=_(t,r);for(var e=!A(n)&&p(n),i=(e||n).length,u=0;u<i;u++){var a=e?e[u]:u;if(!t(n[a],a,n))return!1}return!0}function Ln(n,t,r){t=_(t,r);for(var e=!A(n)&&p(n),i=(e||n).length,u=0;u<i;u++){var a=e?e[u]:u;if(t(n[a],a,n))return!0}return!1}function E(n,t,r,e){return A(n)||(n=L(n)),(typeof r!="number"||e)&&(r=0),_t(n,t,r)>=0}const Jr=y(function(n,t,r){var e,i;return g(t)?i=t:(t=$(t),e=t.slice(0,-1),t=t[t.length-1]),B(n,function(u){var a=i;if(!a){if(e&&e.length&&(u=pn(u,e)),u==null)return;a=u[t]}return a==null?a:a.apply(u,r)})});function wn(n,t){return B(n,dn(t))}function Ur(n,t){return C(n,F(t))}function Et(n,t,r){var e=-1/0,i=-1/0,u,a;if(t==null||typeof t=="number"&&typeof n[0]!="object"&&n!=null){n=A(n)?n:L(n);for(var o=0,f=n.length;o<f;o++)u=n[o],u!=null&&u>e&&(e=u)}else t=_(t,r),O(n,function(l,s,h){a=t(l,s,h),(a>i||a===-1/0&&e===-1/0)&&(e=l,i=a)});return e}function qr(n,t,r){var e=1/0,i=1/0,u,a;if(t==null||typeof t=="number"&&typeof n[0]!="object"&&n!=null){n=A(n)?n:L(n);for(var o=0,f=n.length;o<f;o++)u=n[o],u!=null&&u<e&&(e=u)}else t=_(t,r),O(n,function(l,s,h){a=t(l,s,h),(a<i||a===1/0&&e===1/0)&&(e=l,i=a)});return e}var Hr=/[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;function Ot(n){return n?N(n)?V.call(n):an(n)?n.match(Hr):A(n)?B(n,hn):L(n):[]}function It(n,t,r){if(t==null||r)return A(n)||(n=L(n)),n[nn(n.length-1)];var e=Ot(n),i=w(e);t=Math.max(Math.min(t,i),0);for(var u=i-1,a=0;a<t;a++){var o=nn(a,u),f=e[a];e[a]=e[o],e[o]=f}return e.slice(0,t)}function Bt(n){return It(n,1/0)}function Wr(n,t,r){var e=0;return t=_(t,r),wn(B(n,function(i,u,a){return{value:i,index:e++,criteria:t(i,u,a)}}).sort(function(i,u){var a=i.criteria,o=u.criteria;if(a!==o){if(a>o||a===void 0)return 1;if(a<o||o===void 0)return-1}return i.index-u.index}),"value")}function Y(n,t){return function(r,e,i){var u=t?[[],[]]:{};return e=_(e,i),O(r,function(a,o){var f=e(a,o,r);n(u,a,f)}),u}}const Gr=Y(function(n,t,r){I(n,r)?n[r].push(t):n[r]=[t]}),Xr=Y(function(n,t,r){n[r]=t}),Qr=Y(function(n,t,r){I(n,r)?n[r]++:n[r]=1}),Yr=Y(function(n,t,r){n[r?0:1].push(t)},!0);function Zr(n){return n==null?0:A(n)?n.length:p(n).length}function Kr(n,t,r){return t in r}const Mt=y(function(n,t){var r={},e=t[0];if(n==null)return r;g(e)?(t.length>1&&(e=J(e,t[1])),t=z(n)):(e=Kr,t=P(t,!1,!1),n=Object(n));for(var i=0,u=t.length;i<u;i++){var a=t[i],o=n[a];e(o,a,n)&&(r[a]=o)}return r}),xr=y(function(n,t){var r=t[0],e;return g(r)?(r=mn(r),t.length>1&&(e=t[1])):(t=B(P(t,!1,!1),String),r=function(i,u){return!E(t,u)}),Mt(n,r,e)});function Nt(n,t,r){return V.call(n,0,Math.max(0,n.length-(t==null||r?1:t)))}function x(n,t,r){return n==null||n.length<1?t==null||r?void 0:[]:t==null||r?n[0]:Nt(n,n.length-t)}function H(n,t,r){return V.call(n,t==null||r?1:t)}function kr(n,t,r){return n==null||n.length<1?t==null||r?void 0:[]:t==null||r?n[n.length-1]:H(n,Math.max(0,n.length-t))}function br(n){return C(n,Boolean)}function jr(n,t){return P(n,t,!1)}const Pt=y(function(n,t){return t=P(t,!0,!0),C(n,function(r){return!E(t,r)})}),ne=y(function(n,t){return Pt(n,t)});function rn(n,t,r,e){zn(t)||(e=r,r=t,t=!1),r!=null&&(r=_(r,e));for(var i=[],u=[],a=0,o=w(n);a<o;a++){var f=n[a],l=r?r(f,a,n):f;t&&!r?((!a||u!==l)&&i.push(f),u=l):r?E(u,l)||(u.push(l),i.push(f)):E(i,f)||i.push(f)}return i}const te=y(function(n){return rn(P(n,!0,!0))});function re(n){for(var t=[],r=arguments.length,e=0,i=w(n);e<i;e++){var u=n[e];if(!E(t,u)){var a;for(a=1;a<r&&E(arguments[a],u);a++);a===r&&t.push(u)}}return t}function en(n){for(var t=n&&Et(n,w).length||0,r=Array(t),e=0;e<t;e++)r[e]=wn(n,e);return r}const ee=y(en);function ue(n,t){for(var r={},e=0,i=w(n);e<i;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r}function ie(n,t,r){t==null&&(t=n||0,n=0),r||(r=t<n?-1:1);for(var e=Math.max(Math.ceil((t-n)/r),0),i=Array(e),u=0;u<e;u++,n+=r)i[u]=n;return i}function ae(n,t){if(t==null||t<1)return[];for(var r=[],e=0,i=n.length;e<i;)r.push(V.call(n,e,e+=t));return r}function _n(n,t){return n._chain?c(t).chain():t}function Tt(n){return O(j(n),function(t){var r=c[t]=n[t];c.prototype[t]=function(){var e=[this._wrapped];return Lt.apply(e,arguments),_n(this,r.apply(c,e))}}),c}O(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=Q[n];c.prototype[n]=function(){var r=this._wrapped;return r!=null&&(t.apply(r,arguments),(n==="shift"||n==="splice")&&r.length===0&&delete r[0]),_n(this,r)}});O(["concat","join","slice"],function(n){var t=Q[n];c.prototype[n]=function(){var r=this._wrapped;return r!=null&&(r=t.apply(r,arguments)),_n(this,r)}});const oe=Object.freeze(Object.defineProperty({__proto__:null,VERSION:Dn,after:Fr,all:Cn,allKeys:z,any:Ln,assign:X,before:ht,bind:vt,bindAll:Nr,chain:Mr,chunk:ae,clone:lr,collect:B,compact:br,compose:Dr,constant:Xn,contains:E,countBy:Qr,create:or,debounce:Lr,default:c,defaults:et,defer:Tr,delay:pt,detect:tn,difference:Pt,drop:H,each:O,escape:hr,every:Cn,extend:rt,extendOwn:X,filter:C,find:tn,findIndex:yn,findKey:dt,findLastIndex:mt,findWhere:zr,first:x,flatten:jr,foldl:K,foldr:Tn,forEach:O,functions:j,get:at,groupBy:Gr,has:cr,head:x,identity:hn,include:E,includes:E,indexBy:Xr,indexOf:_t,initial:Nt,inject:K,intersection:re,invert:tt,invoke:Jr,isArguments:ln,isArray:N,isArrayBuffer:Un,isBoolean:zn,isDataView:W,isDate:Ut,isElement:Jt,isEmpty:kt,isEqual:bt,isError:Ht,isFinite:Qt,isFunction:g,isMap:tr,isMatch:xn,isNaN:Gn,isNull:$t,isNumber:$n,isObject:M,isRegExp:qt,isSet:er,isString:an,isSymbol:Jn,isTypedArray:Zn,isUndefined:Vn,isWeakMap:rr,isWeakSet:ur,iteratee:gn,keys:p,last:kr,lastIndexOf:Vr,map:B,mapObject:sr,matcher:F,matches:F,max:Et,memoize:Pr,methods:j,min:qr,mixin:Tt,negate:mn,noop:lt,now:R,object:ue,omit:xr,once:Rr,pairs:ir,partial:S,partition:Yr,pick:Mt,pluck:wn,property:dn,propertyOf:vr,random:nn,range:ie,reduce:K,reduceRight:Tn,reject:$r,rest:H,restArguments:y,result:Or,sample:It,select:C,shuffle:Bt,size:Zr,some:Ln,sortBy:Wr,sortedIndex:yt,tail:H,take:x,tap:fr,template:Er,templateSettings:mr,throttle:Cr,times:pr,toArray:Ot,toPath:it,transpose:en,unescape:gr,union:te,uniq:rn,unique:rn,uniqueId:Br,unzip:en,values:L,where:Ur,without:ne,wrap:Sr,zip:ee},Symbol.toStringTag,{value:"Module"}));var Sn=Tt(oe);Sn._=Sn;(()=>{let n=[];const t=["C","D","H","S"],r=["A","J","Q","K"];let e=0,i=0;const u=document.getElementById("pedirCarta"),a=document.getElementById("nuevoJuego"),o=document.getElementById("detener"),f=()=>{n=[];for(let m of t)for(let v=2;v<=10;v++)n.push(v+m);for(let m of t)for(let v of r)n.push(v+m);n=Bt(n)},l=()=>{f()},s=()=>{if(n.length===0)throw"No hay cartas en el mazo";return n.pop()},h=m=>{const v=m.substring(0,m.length-1);return isNaN(v)?v==="A"?11:10:parseInt(v)},U=(m,v)=>{v==="usuario"?(e+=m,document.getElementById("puntuacionJugador").textContent=e):(i+=m,document.getElementById("puntuacionComputadora").textContent=i),v==="usuario"?e>21?(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Perdiste")},1e3),T("computadora")):e===21&&(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Haz Ganado")},1e3)):v==="computadora"&&(i===21?(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Perdiste")},1e3)):i>=e&&(i===e?(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Empate")},1e3)):i<21?(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Perdiste")},1e3)):(u.disabled=!0,o.disabled=!0,setTimeout(()=>{alert("Haz Ganado")},1e3))))},T=m=>{let v=s(),q=document.createElement("img");q.src=`./assets/cartas/${v}.png`,q.classList.add("carta"),m==="usuario"?document.getElementById("jugador-usuario").appendChild(q):document.getElementById("jugador-computadora").appendChild(q),U(h(v),m)},Ct=()=>{do T("computadora");while(i<e)};a.addEventListener("click",()=>{const m=document.getElementById("jugador-usuario"),v=document.getElementById("jugador-computadora");m.innerHTML="",v.innerHTML="",e=0,i=0,document.getElementById("puntuacionJugador").textContent=e,document.getElementById("puntuacionComputadora").textContent=i,u.disabled=!1,o.disabled=!1,l()}),u.addEventListener("click",()=>T("usuario")),o.addEventListener("click",Ct)})();