/* jshint ignore:start */
/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-draganddrop-audio-video-localstorage-sessionstorage-websockets-geolocation-hasevent-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){i.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}var d="2.8.3",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l="Webkit Moz O ms",m=l.split(" "),n=l.toLowerCase().split(" "),o={},p={},q={},r=[],s=r.slice,t,u=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=z(e[d],"function"),z(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},o.geolocation=function(){return"geolocation"in navigator},o.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},o.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},o.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},o.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},o.localstorage=function(){try{return localStorage.setItem(g,g),localStorage.removeItem(g),!0}catch(a){return!1}},o.sessionstorage=function(){try{return sessionStorage.setItem(g,g),sessionStorage.removeItem(g),!0}catch(a){return!1}};for(var C in o)w(o,C)&&(t=C.toLowerCase(),e[t]=o[C](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),h=j=null,e._version=d,e._domPrefixes=n,e._cssomPrefixes=m,e.hasEvent=u,e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.5.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(D).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var j,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||j,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,j=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^key/,we=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Te=/^([^.]*)(?:\.(.+)|)/;function Ce(){return!0}function Ee(){return!1}function Se(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function ke(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)ke(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ee;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Ae(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,Ce)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=Te.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=Te.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click",Ce),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ae(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ce:Ee,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ee,isPropagationStopped:Ee,isImmediatePropagationStopped:Ee,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ce,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ce,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ce,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&be.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&we.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Ae(this,e,Se),!1},trigger:function(){return Ae(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return ke(this,e,t,n,r)},one:function(e,t,n,r){return ke(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ee),this.each(function(){S.event.remove(this,e,n,t)})}});var Ne=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function Pe(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=qe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ne.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Ie=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},We=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Fe=new RegExp(ne.join("|"),"i");function Be(e,t,n){var r,i,o,a,s=e.style;return(n=n||Ie(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Me.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function $e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px",t.style.height="1px",n.style.height="9px",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=3<parseInt(r.height),re.removeChild(e)),a}}))}();var _e=["Webkit","Moz","ms"],ze=E.createElement("div").style,Ue={};function Xe(e){var t=S.cssProps[e]||Ue[e];return t||(e in ze?e:Ue[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=_e.length;while(n--)if((e=_e[n]+t)in ze)return e}(e)||e)}var Ve=/^(none|table(?!-c[ea]).+)/,Ge=/^--/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Ie(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Me.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Ge.test(t),l=e.style;if(u||(t=Xe(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Ge.test(t)||(t=Xe(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ve.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):We(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Ie(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=$e(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-We(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ie(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Xe(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",y.checkOn=""!==rt.value,y.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",y.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function vt(e){return(e.match(P)||[]).join(" ")}function yt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,yt(this)))});if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,yt(this)))});if(!arguments.length)return this.attr("class","");if((e=mt(t)).length)while(n=this[u++])if(i=yt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,yt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=mt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=yt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+vt(yt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:vt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function Dt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):Dt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)Dt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)Dt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var jt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Bt(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function $t(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?$t($t(e,S.ajaxSettings),t):$t(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Bt(Rt,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Ot.test(v.type),f=v.url.replace(qt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(jt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Et.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+It+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Bt(Mt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();y.cors=!!zt&&"withCredentials"in zt,y.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(y.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=vt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):("number"==typeof f.top&&(f.top+="px"),"number"==typeof f.left&&(f.left+="px"),c.css(f))}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=$e(y.pixelPosition,function(e,t){if(t)return t=Be(e,n),Me.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
 * Bootstrap v3.4.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);
var jsVersion='5947335t3';
 
/* jshint -W041 */ /* This is turn off the === checking in jsHint */


var ua = navigator.userAgent,
    ios,
    iphone,
    android,
    android23;

if (ua.indexOf('Android') > -1) {
    var androidversion = parseFloat(ua.slice(ua.indexOf("Android") + 8));
    android = true;
    android23 = false;
    if (androidversion == 2.3) {
        android23 = true;
    }
} else {
    // hack for the original kindle fire which is android 2.3 based but doesn't report it (later version have android in their strings)
    if (ua.indexOf('Silk') > -1) {
        android = true;
        android23 = true;
    } else {
        android = false;
        android23 = false;
    }
}
// was: ignore iPads - everyting is fine size wise for them. no special tricks
// 2013.11.07 - need to check for iPad now too because it can't preload audio either
if ((ua.indexOf('iPhone') > -1) || (ua.indexOf('iPod') > -1)) {
    ios = true;
    iphone = true;
} else if (ua.indexOf('iPad') > -1) {
    ios = true;
    iphone = false;
} else {
    ios = false;
    iphone = false;
}



jQuery(function ($) {
    /* jshint ignore:start */
var utils = new UFLutils();

function consoleObj(obj) {
    console.log(JSON.stringify(obj, null, "  "));
}

function UFLutils() {
    this.are_cookies_enabled = function()       { return _are_cookies_enabled();   };
    this.getRandomInt = function(min,max)       { return _getRandomInt(min,max);   };
    this.get_uuid     = function()              { return _get_uuid();              };
    this.forceString  = function(val)           { return _forceString(val);        };
    this.forceInt     = function(val)           { return _forceInt(val);           };
    this.sleepLoop    = function(milliseconds)  { return _sleepLoop(milliseconds); };
    this.redirect     = function(gotoUrl)       { return _redirect(gotoUrl);       };
    this.reload_page  = function()              { return _reload_page();           };
    this.is_iFrame    = function()              { return _is_iFrame();             };
    this.urlPath      = function()              { return _urlPath();               };
    this.getCurrentUrl = function()             { return window.location.href;     };
    this.removeDupsFromArray = function(a)      { return _removeDupsFromArray(a);  };
    this.isValidEmail = function(str)           { return _isValidEmail(str);       };

    this.myPreClick   = function(element)       { return _myPreClick(element);     };
    this.myPostClick  = function(element)       { return _myPostClick(element);    };
    this.isInViewport = function(element)       { return _isInViewport(element);   };

    this.myClickHandler = function(clickElement, uiElement, clickFunction)  { return _myClickHandler(clickElement, uiElement, clickFunction);};
    this.getPageDomain = function(includeSubDomain)   { return _getPageDomain(includeSubDomain);  };
    this.getIFrameHostUrl = function()                { return _getIFrameHostUrl();               };
  



    var _are_cookies_enabled = function() {
        var cookieEnabled =(navigator.cookieEnabled)?true:false;

        if (typeof navigator.cookieEnabled =="undefined" && !cookieEnabled) {
             document.cookie="testcookie";
             cookieEnabled = (document.cookie.indexOf("testcookie")!=-1)?true:false;
        }

        return(cookieEnabled);
    };



    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * Using Math.round() will give you a non-uniform distribution!
     */
    var _getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };


    // Returns a RFC4122 version 4 compliant UUID
    var _get_uuid = function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    var _forceString = function(val) {
        if (typeof(val) != "string")
            return val.toString();
        return val;
    };

    var _forceInt = function(val) {
        if (typeof(val) == "string")
            return parseInt(val, 10);
        return val;
    };

    var _sleepLoop = function(milliseconds) {
       var start = new Date().getTime();
       for (var i = 0; i < 1e7; i++) {
         if ((new Date().getTime() - start) > milliseconds){
           break;
         }
       }
    };


    var _redirect = function(gotoUrl) {
       window.location.href = gotoUrl;
    };


    var _reload_page = function() {
       location.reload(); //force page to reload
    };

    // Test to see if we are running inside an iFrame
    var _is_iFrame = function() {
        return window.self !== window.top;
    };

    var _getPageDomain = function(includeSubDomain) {
        if (includeSubDomain == null)
           includeSubDomain = true;

        var url = document.location.hostname;
        if (_is_iFrame()) 
            url = document.referrer; 

        var splits = url.split('//');
        if (splits.length > 1)
           url = splits[1]; 
        else
           url = splits[0]; 

        splits = url.split('/');
        var domain = splits[0];

        if (includeSubDomain) 
           return domain;

        splits = domain.split('.');
        if (splits.length < 3)
           return domain;
        
        var tld = splits[splits.length - 1];
        var main = splits[splits.length - 2];

        return (main + '.' + tld);
    };

    var _getIFrameHostUrl = function() {
        if (!_is_iFrame()) 
            return '';

        return document.referrer; 
    };

    var g_urlPath = null;
    var _urlPath = function() {
        if (g_urlPath)
           return g_urlPath;

        var g_urlPath = window.location.pathname;

        var lastChar = g_urlPath.substr(g_urlPath.length - 1);

        if (lastChar == '/')
           g_urlPath = g_urlPath.substr(0, g_urlPath.length - 1);
 
        return g_urlPath;
    };

    var _removeDupsFromArray = function(a) {
        var seen = {};
        return a.filter(function(item) {
            return seen.hasOwnProperty(item) ? false : (seen[item] = true);
        });
    };

    var _isValidEmail = function(str) {
        var atpos = str.indexOf("@");
        var dotpos = str.lastIndexOf(".");
        if (atpos<1 || dotpos<atpos+2 || dotpos+2>=str.length) {
            return false;
        }
        return true;
    };
    
    /// to avoid sticky hover issues with touch devices, for items where we only want a hover effect
    /// but no permanent selection (page turn arrows, speakers for example) the hover now only changes the cursor
    /// and this temporary clicked class gives the hover-type flicker. For items liek navbar icons that remain selected
    /// this isn't needed.
    var _myPreClick = function(element) {
        $(element).addClass("clicked");
    };

    var _myPostClick = function(element) {
        setTimeout(function () { $(element).removeClass("clicked"); }, 500);
    };
    
    var _myClickHandler = function(clickElement, uiElement, clickFunction) {
        /// in case the check fails in some browsers, we'll check hidden instead of visible
        /// so that we get real visible to fall through or unsupported browsers (hopefully)
        if ($(clickElement).is(":hidden")) {
            return;
        }

        _myPreClick($(uiElement));
        clickFunction();
        _myPostClick($(uiElement));
    };

    /// Checks if element is displayed in viewport
    /// How to use:
    ///     var h1 = document.querySelector('h1');
    ///     if (utils.isInViewport(h1))
    ///          // Do something...
    var _isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

} //class



    function hasSessionStorageSupport() {
        //If your browser supports HTML5 storage, there will be a localStorage property on the global window object.
        // If your browser doesn’t support HTML5 storage, the localStorage property will be undefined.
        // Due to an unfortunate bug in older versions of Firefox, this test will raise an exception if cookies are disabled,
        // so the entire test is wrapped in a try..catch statement.
        try {
            return 'sessionStorage' in window && window['sessionStorage'] !== null;
        }
        catch (e) {
            return false;
        }
    }

    function setSessionStoreString(ssName,ssString) {
        if (hasSessionStorageSupport()) {
            try {
                sessionStorage.setItem(ssName, ssString);
            }
            catch (e) {
                // http://stackoverflow.com/questions/18860098/on-a-browser-sessionstorage-in-safaris-private-browsing-does-not-work-the-same
                // in private browsing mode, safarai sets the quota to 0 and throws an exception, so we were' getting a bare wood string.
                // "Please note that other browsers are also free to throw QuotaExceededError exceptions at any given time, should you go over the quota."
            }
        }
    }

    function setSessionStoreObject(ssName,ssObject) {
        if (ssObject == null)
            setSessionStoreString(ssName, "");
        else {
            var jsString = JSON.stringify(ssObject);
            setSessionStoreString(ssName, jsString);
        }
    }
    
    function getSessionStoreString(ssName) {
        if (hasSessionStorageSupport()) {
            try {
                if (ssName in sessionStorage) return sessionStorage[ssName];
                else return '';
            }
            catch (e) {
                // http://stackoverflow.com/questions/18860098/on-a-browser-sessionstorage-in-safaris-private-browsing-does-not-work-the-same
                // in private browsing mode, safarai sets the quota to 0 and throws an exception, so we were' getting a bare wood string.
                // "Please note that other browsers are also free to throw QuotaExceededError exceptions at any given time, should you go over the quota."
                return '';
            }
        }
        return '';
    }

    function getSessionStoreObject(ssName) {
        var jsString = getSessionStoreString(ssName);
        if (jsString == '') return null;
        return (JSON.parse(jsString));
    }

    function clearSessionStore(ssName) {
        if (hasSessionStorageSupport()) {
            try {
                sessionStorage.removeItem(ssName);
            }
            catch (e) {
                // http://stackoverflow.com/questions/18860098/on-a-browser-sessionstorage-in-safaris-private-browsing-does-not-work-the-same
                // in private browsing mode, safarai sets the quota to 0 and throws an exception, so we were' getting a bare wood string.
                // "Please note that other browsers are also free to throw QuotaExceededError exceptions at any given time, should you go over the quota."
            }
        }
    }


    function makeBookUrlwithLang(bookId, libIdStr, langId, relative, isSharing) {
       if (!langId)
          langId = '0';

       var outStr = makeBookUrl(bookId, libIdStr, relative); 

       if (isSharing)
           outStr += "&shr=1";

       outStr += "&LangId=" + langId;

       return outStr;
    }

    function getShareHost(relative) {
       if (relative) 
          return '';
       if (isProductionHost())    
            return 'https://www.uniteforliteracy.com';
       return 'https://staging.uniteforliteracy.com';
    }

    function makeBookUrl(bookId, libIdStr, relative) {
       var host = getShareHost(relative);

       var path = "/book?BookId=" + bookId;

       if (get_pathDomain_prefix())
          path = get_pathDomain_prefix() + path;

       if (libIdStr && (libIdStr != '1') && !get_pathDomain_prefix()) {
          path += '&LibId=' + libIdStr;
       }

       return host + path;
    }

    function makeLibraryUrl(langId, libIdStr, relative, isSharing) {
       var host = getShareHost(relative);

       if (!langId)
          langId = '0';

       var path = '';

       if (get_pathDomain_prefix())
          path = get_pathDomain_prefix() + path;

       path += '?LangId=' + langId;

       if (isSharing)
           path += "&shr=1";

       if (libIdStr && (libIdStr != '1') && !get_pathDomain_prefix()) {
          path += '&LibId=' + libIdStr;
       }

       return host + path;
    }

    function makeLibraryUrlNoLang(libIdStr, relative) {
       var host = getShareHost(relative);

       var path = '/';

       if (get_pathDomain_prefix())
          path = get_pathDomain_prefix() + path;

       if (libIdStr && (libIdStr != '1') && !get_pathDomain_prefix()) {
          path += '?LibId=' + libIdStr;
       }

       return host + path;
    }



    var _clean_pathDomainObj = null;

    function get_PathDomain() {
       return get_pathDomain_prefix();
    }

    function get_pathDomain_prefix() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '/';
       if (!_clean_pathDomainObj.pathPrefix)
          return '/';
       return _clean_pathDomainObj.pathPrefix;
    }

    function get_pathDomain_prefix_minus_lib() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '/';
       if (!_clean_pathDomainObj.pathPrefixMinusLib)
          return '/';
       return _clean_pathDomainObj.pathPrefixMinusLib;
    }

    function get_pathDomain_orgRoot() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '/';
       if (!_clean_pathDomainObj.orgPath)
          return '/';
       return '/' + _clean_pathDomainObj.orgPath;
    }

    function get_pathDomain_homeRoot() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '/';
       if (!_clean_pathDomainObj.homePath)
          return '/';
       return '/' + _clean_pathDomainObj.orgPath + '/' + _clean_pathDomainObj.homePath;
    }

    function get_pathDomain_dimension() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '/';
       if (_clean_pathDomainObj.isRootHome)
          return '/';
       if (_clean_pathDomainObj.homePath)
          return '/' + _clean_pathDomainObj.orgPath + '/' + _clean_pathDomainObj.homePath;
       if (!_clean_pathDomainObj.pathPrefix)
          return '/';
       return _clean_pathDomainObj.pathPrefix;
    }

    function get_pathDomain_lib() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return 0;
       if (!_clean_pathDomainObj.libId)
          return 0;
       return _clean_pathDomainObj.libId;
    }

    function get_pathDomain_langSubsetList() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return [];
       if (!_clean_pathDomainObj.LangSubsetList)
          return [];
       return _clean_pathDomainObj.LangSubsetList;
    }

    function get_pathDomain_displayTitle(wLang) {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if ((!_clean_pathDomainObj) ||
           (!_clean_pathDomainObj.DisplayTitles))
          return '';
       if (!_clean_pathDomainObj.DisplayTitles[wLang])
          return '';
       return _clean_pathDomainObj.DisplayTitles[wLang];
    }

    function get_pathDomain_showTitle() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if ((!_clean_pathDomainObj) ||
           (!_clean_pathDomainObj.ShowTitles))
          return false;
       return _clean_pathDomainObj.ShowTitles;
    }

    function get_pathDomain_showCategories() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if ((!_clean_pathDomainObj) ||
           (!_clean_pathDomainObj.ShowCategories))
          return false;
       return _clean_pathDomainObj.ShowCategories;
    }

    function get_pathDomain_showNarrations() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if ((!_clean_pathDomainObj) ||
           (!_clean_pathDomainObj.ShowNarrations))
          return false;
       return _clean_pathDomainObj.ShowNarrations;
    }


    function get_pathDomain_owner() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return 0;
       if (!_clean_pathDomainObj.main)
          return 0;
       return _clean_pathDomainObj.main;
    }

    function get_pathDomain_wLangs() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return null;
       if (!_clean_pathDomainObj.WLangs)
          return null;
       return _clean_pathDomainObj.WLangs;
    }

    function get_pathDomain_nLangs() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return null;
       if (!_clean_pathDomainObj.NLangs)
          return null;
       return _clean_pathDomainObj.NLangs;
    }

    function set_pathDomain_vars() {
       if (typeof DataFromServer === 'undefined')
          return;

       if (!DataFromServer)
          return;

       if (!DataFromServer.pdObj)
          return;

       _clean_pathDomainObj = DataFromServer.pdObj;
    }

    function isPrivateLib() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return false;
       if (!_clean_pathDomainObj.isPublic)
          return false;
       return !_clean_pathDomainObj.isPublic;
    }

    function getLibrariesList(wLang) {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();
        if (!_clean_pathDomainObj.HomeOrder)
           return [];
        var homeOrder = _clean_pathDomainObj.HomeOrder;
        for (var i=0; i<homeOrder.length; i++) {
            var homeLibsObj = homeOrder[i];
            if (homeLibsObj.wLangAbbv == wLang)
               return homeLibsObj.PubOrder;
        }
        return [];
    }

    function isHomeMode() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();

        if (_clean_pathDomainObj.isRootHome)
           return true;

        if (_clean_pathDomainObj.isHome)
           return true;

        return false;
    }

    function isRootHomeMode() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();

        if (_clean_pathDomainObj.isRootHome)
           return true;

        return false;
    }

    function isHomePlusLib() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();

        if (_clean_pathDomainObj.isHomePlusLib)
           return true;

        return false;
    }


    function isLibraryMode() {
        var path = getFilteredUrlPath();
        debugLog("isLibraryMode " + path);
        if (path=="lib")
           return true;
        if (path=="libtest")
           return true;
        if (path=="corp/mobile")
           return true;
        return ((path == "/") || (path == ''));     //IS THIS RIGHT?
    }

    function getFilteredUrlPath() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();
        if (!_clean_pathDomainObj)
           return '';
        if (!_clean_pathDomainObj.cmdPath)
           return '';
        //console.log("getFilteredUrlPath - " + _clean_pathDomainObj.cmdPath);
        return _clean_pathDomainObj.cmdPath;
    }

    function isHomePlusLibMode() {
        if (utils.is_iFrame())
           return false;

        if (!_clean_pathDomainObj)
           set_pathDomain_vars();

        if (_clean_pathDomainObj.isRootHome)
           return true;

        return false;
    }

    function isHomePathSpecified() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();
        if (!_clean_pathDomainObj)
           return false;
        if (_clean_pathDomainObj.homePath)
           return true;

        return false;
    }

    function isFixedShelfHomePage() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();
        if (!_clean_pathDomainObj)
           return false;
        if (_clean_pathDomainObj.fixedShelfOrder)
           return true;

        return false;
    }

    function get_pathDomain_showShelfNames() {
        if (!_clean_pathDomainObj)
           set_pathDomain_vars();
        if (!_clean_pathDomainObj)
           return true;
        if (_clean_pathDomainObj.showShelfNames == null)
           return true;
        if (_clean_pathDomainObj.showShelfNames)
           return true;

        return false;
    }

    function get_pathDomain_libLang() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '';
       if (_clean_pathDomainObj.isHome)
          return '';
       if (!_clean_pathDomainObj.wLangAbbv)
          return '';
       return _clean_pathDomainObj.wLangAbbv;
    }

    function get_pathDomain_libNarrLangs() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return [];
       if (_clean_pathDomainObj.isHome)
          return [];
       if (!_clean_pathDomainObj.nLangsLib)
          return [];
       return _clean_pathDomainObj.nLangsLib;
    }

    function getCollectionInfoFname() {
       if (!_clean_pathDomainObj)
          set_pathDomain_vars();
       if (!_clean_pathDomainObj)
          return '';
       if (!_clean_pathDomainObj.collInfoFname)
          return '';
       return _clean_pathDomainObj.collInfoFname;
    }

    function handleMobileShare(e) {
                if (!navigator.share)
                   return;
                var link = '';
                var text = '';
                if (getBookId()) {
                    link = makeBookUrlwithLang(getBookId().toString(),  getLibId(), languages.getNarrationLang(), false, true);
                    text = 'Please read and share.\n\n';
                    ga_share('NativeOS', true);
                } else {
                    link = makeLibraryUrl(languages.getNarrationLang(),  getLibId(), false, true);
                    ga_share('NativeOS', false);
                }
                navigator.share({
                    title: '',
                    text: text,
                    url: link,
                })
                .then( function() {console.log('Successful share')} )
                .catch( function(error) {console.log('Error sharing', error)} );
                return false;
    }

    function shareFacebook(libIdStr, langAbbvStr) {
       //ga_share('Facebook', false);
        var title = _sharing_getLibShareTitle(),
            description = _sharing_getLibShareDesc(),
            pageUrl = makeLibraryUrl(langAbbvStr, libIdStr, false, true),
            pictureUrl = _sharing_getLibShareImage(),
            caption = _sharing_getLibShareCaption();

        _shareFacebook(title, description, pageUrl, pictureUrl, caption);
    }

    function shareFacebookBook(bookIdStr, libIdStr, langAbbvStr, bookTitle, bookPageUrl, caption) {
       //ga_share('Facebook', true);
        var description = _sharing_getBookShareDesc(),
            pageUrl = makeBookUrlwithLang(bookIdStr, libIdStr, langAbbvStr, false, true);

        _shareFacebook(bookTitle, description, pageUrl, bookPageUrl, caption);
    }

    function _shareFacebook(title, description, pageUrl, pictureUrl, caption) {
        ga_share('Facebook', true);

        var redirectCloseURL = "https://www.uniteforliteracy.com/corp/close",
            strAppID = "550922321638589", // main site      strAppID = "136439343227932"; // localhost
            socialURL = "https://www.facebook.com/dialog/share" +
                       "?app_id="      + strAppID +
                       "&display=popup" +
                       "&href="        + encodeURIComponent(pageUrl) +
                       "&redirect_uri="+ encodeURIComponent(redirectCloseURL);

        window.open(socialURL, 'name', 'width=516,height=236');
    }
        
    function shareTwitter(bookIdStr, libIdStr, langAbbvStr) {
        ga_share('Twitter', (bookIdStr != null));
        var description = _sharing_getBookShareDesc();
        var strAppID = "unite4literacy",
            link = '';

        if (bookIdStr)     
            link = makeBookUrlwithLang(bookIdStr, libIdStr, langAbbvStr, false, true);
        else
            link = makeLibraryUrl(langAbbvStr, libIdStr, false, true);

        var socialURL = "https://twitter.com/intent/tweet" +
                       "?original_referer=" + encodeURIComponent(link) +
                       "&text="             + encodeURIComponent(description) +
                       "&tw_p=tweetbutton"  +
                       "&url="              + encodeURIComponent(link) +
                       "&via="              + strAppID;

        window.open(socialURL, 'name', 'width=550,height=450');
    }

    function shareCopyLink(bookIdStr, libIdStr, langAbbvStr) {
        var link = '';
        if (bookIdStr) {
            link = makeBookUrlwithLang(bookIdStr, libIdStr, langAbbvStr, false, true);
            $('#uflLinkCopyTextBook').html(link).select();
        } else {
            link = makeLibraryUrl(langAbbvStr, libIdStr, false, true);
            $('#uflLinkCopyText').html(link).select();
        }

        document.execCommand('copy')

        //var $b = $('.uflMenuShareClass');
        $('.uflMenuShareClass').addClass('copied')
        setTimeout(function(){
            $('.uflMenuShareClass').removeClass('copied')
        },1500)
        return false;
    }
        
    function sharePinterest(bookIdStr, libIdStr, langAbbvStr, bookPageUrl) {
        ga_share('Pinterest', (bookIdStr != null));
        var pictureURL = '',
            link = '',
            description = '';

        if (bookIdStr) {     // now that about has the menu, we can share the book from there also
            pictureURL = bookPageUrl;
            link = makeBookUrlwithLang(bookIdStr, libIdStr, langAbbvStr, false, true);
            description = _sharing_getBookShareDesc();
        }
        else {
            pictureURL = _sharing_getLibShareImage();
            link = makeLibraryUrl(langAbbvStr, libIdStr, false, true);
            description = _sharing_getLibShareCaption();
        }

        var socialURL = "https://pinterest.com/pin/create/button/" +
                       "?url="         + encodeURIComponent(link) +
                       "&media="       + encodeURIComponent(pictureURL) +
                       "&description=" + encodeURIComponent(description);

        window.open(socialURL, 'name', 'width=665,height=300');
    }


    function sendMail(bookIdStr, libIdStr, langAbbvStr ) {
        ga_share('Email', (bookIdStr != null));
        var bodyText = "",
            subjectText = "When you share books - readers grow.";
        
        if (library)
            subjectText = _sharing_getBookShareDesc();

        if (bookIdStr) {    // now that about has the menu, we can share the book from there also
           bodyText = "I found this free digital book provided by Unite for Literacy. Look at all of the languages the book is narrated in!\n\n"  +
                          makeBookUrlwithLang(bookIdStr, libIdStr, langAbbvStr, false, true) +
                          "\n\n";
        }
        else {
           bodyText = "Check out these free digital books provided by Unite for Literacy. Look at all of the languages the books are narrated in!\n\n"  +
                          makeLibraryUrl(langAbbvStr, libIdStr, false, true) +
                          "\n\n";
        }

        var link = "mailto:" +
                   "?subject=" + encodeURIComponent(subjectText) +
                   "&body=" + encodeURIComponent(bodyText);
        window.location.href = link;
    }
    
    // sharing information used for facebook, pinterest, etc.
    // these are now the same for all collections - reinforcing a Unite message
    // they are not configurable any longer
    function _sharing_getLibShareImage() {
        return "http://static.uniteforliteracy.com/img/homeimage.jpg?v=" + _version.vStatic;
    }
    
    function _sharing_getLibShareTitle() {
        return "Unite for Literacy collections";
    }
    
    function  _sharing_getLibShareCaption() {
        return _sharing_getLibShareTitle();
    }
    
    function  _sharing_getLibShareDesc() {
        return "Unite for Literacy provides free digital access to picture books, narrated in many languages. Literacy is at the core of a healthy community, so we unite with partners to enable all families to read with their young children.";
    }

    function  _sharing_getBookShareDesc() {
        return "When you share books - readers grow.";
    }

    



    function populateLibraryShelves(bookList) {
        var bookListSize = bookList.length;

        $('#libraryList').empty(); //remove all the books currently on the shelf

        for (var i = 0; i < bookListSize; i++) {
            var bookId = bookList[i];
            addBookToShelf(bookId, "#image-block-master", "#libraryList");
        }

        $('#libraryList .image-block').removeClass('hide');      // show the ones in the list - targeting the list avoids showing the master which is outside the list
        setupBookLinkHandler();
    }

    function populateShelvesWithCategory(categoryId) {
        showSearchResults(false);
        $('.touchcarousel-item').removeClass('tc-selected');
        $('#category-icon-' + categoryId.toString()).addClass('tc-selected');

        // when we select a new category, new text will be shown which
        // changes the length of the carousel. recalculate the size and IPM
        resizeAndPositionCategoryCarousel();

        bookList = library.getCategoryBookList(categoryId);
        
        //Give a little transistion so the user knows what is happening...
        //Fade out the old books, fade in the new books
        $('#LibraryContentPane').fadeOut('fast', function () {
           populateLibraryShelves(bookList);
           $('#LibraryContentPane').fadeIn('slow');
        });
    }


    function populateModalShelvesWithCategory(categoryId) {
        bookList = library.getCategoryBookList(categoryId);
        populateModalLibraryShelves(bookList);
    }

    function populateModalLibraryShelves(bookList) {
        var colName = library.getCollectionName(),
            colOwner = library.getOwnerName();
        
        if (colName != '' && colOwner != '') {
            colName = colOwner + ": " + colName;
        }
        $('#Lib_Modal_Title').text(colName);

        var bookListSize = bookList.length;

        $('#Lib_Modal_libraryList').empty(); //remove all the books currently on the shelf

        for (var i = 0; i < bookListSize; i++) {
            var bookId = bookList[i];
            addBookToShelf(bookId, "#image-block-master2", "#Lib_Modal_libraryList");
        }

        $('#Lib_Modal_libraryList .image2').removeClass('hide');      // show the ones in the list - targeting the list avoids showing the master which is outside the list
        resizeModalLibraryDialog(true, bookListSize);
        setupBookLinkHandler();
    }
    
    function resizeModalLibraryDialog(forceResize, listSize) {
        // adjust the dialog size when first opened (forceResize), or whenever we resize if the dialog is open
        var modalLibIsOpen = (($("#uflLibraryModal").data('bs.modal') || {}).isShown);
        if (!forceResize && !modalLibIsOpen)
            return;
        
        // this is somewhat fragile because
        // we are using hardcoded values from bootstrap. We can't query the internal dimensions of the
        // dialog before it's shown because it's display none and the width values will return 0.
        // Our general layout:
        //  - dialog is no more than 90% of the window width. That's just our choice.
        //  - bootstrap has 15px on each side of the modal body, and content has a 1 pixel border, which is where the 32px width comes from.
        //  - our goal is to create the dialog width so it matches the number of images well with no extra unused dialog width. We also
        //    determine visibleRows so that we have a relatively even distribution between rows for small collections (like 4,4,2 instead of 5,5 for AZA for example)
        
        var modalWidth = $('#uflMainWrapper').width() * 0.9,                // 90% max width
            contentWidth = modalWidth - 32,                                 // modal width less the 15px padding each side, 1 pixel border each side
            image2Width = $('.image2').outerWidth(true),
            image2Height = $('.image2').outerHeight(true),
            maxCol = 0,
            wHeight = $(window).height() - 125,                              // 30 pixel top margin in bootstrap large screen. small screens it won't matter. 30px padding on the title, 35 px title (estimate), 30px padding on the content
            visibleRows = 0,
            i = 1;
            
        // error checks so we don't throw any exceptions
        if (image2Width == 0 || image2Height == 0)
            return;
        
        maxCol = Math.floor(contentWidth / image2Width);
        visibleRows = Math.floor(wHeight / image2Height);
        
        // we either get the list size passed in or we try to calculate it in the case where we are resizing and the list is already built.
        var calcListSize = listSize;
        if (calcListSize < 1) {
            // try to determine it from the count
            calcListSize = $('.image2', '#Lib_Modal_libraryList').length;
        }
        
            
        for (i=1; i<maxCol; i++) {
            if (Math.ceil(calcListSize / i) <= visibleRows)
                break;
        }
        if (i < maxCol)
            maxCol = i;
        
        var delta = contentWidth - (maxCol * image2Width);
        if (delta > 0) {
            modalWidth = modalWidth - delta;
            if (modalWidth > 100) {             // just to prevent something silly
                $('.modal-dialog.ufl-lib-modal').width(modalWidth);
            }
        }
    }


    function populateResultSummaryShelf(count) {
        $('#searchResult-count').text(count);
    }

    function populateNewSearchLibraryShelves(bookList) {
        showSearchResults(true);
        var count = bookList.length; 
        populateResultSummaryShelf(count);        // don't double-count - relevant list is also in book list
        
        if (count == 0) {
            return;
        }

        populateLibraryShelves(bookList);
    }


    function addBookToShelf(bookId, masterDiv, shelfDiv) {
        var imageMasterBlock = $(masterDiv);
        var imageBlock = $(imageMasterBlock).clone().appendTo(shelfDiv);
        imageBlock.removeAttr('id');
   
        //setup the image and reflection if they exist
        $('img', imageBlock).attr("src", library.getBookCoverAtBookId(bookId));
        $('img', imageBlock).attr("alt", library.getBookAltTextAtBookId(bookId));

        //setup the href link params
        var url = library.makeBookUrlNoLang(bookId.toString(), true);
        $('a', imageBlock).attr("href", url);
        if (utils.is_iFrame()) {
           var targetStr = library.openInFrame() ? "_self" : "_blank";
           $('a', imageBlock).attr("target", targetStr);
        }
    }

    function showSearchResults(shouldShow) {
        shouldShow = false;  //For Now
        if (shouldShow) {
            // search mode - turn off libraryList, clone the search sections
            $('#SingleLibrary').addClass('hide');
            // search mode - 2nd header - no narration or categories in search result
            $('#uflReaderNav').addClass('hide');
        } else {
            $('#SingleLibrary').removeClass('hide');
            $('#uflReaderNav').removeClass('hide');
        }
        $('#libraryList').empty(); //remove all the books currently on the shelf
        $('#HomeCollections').empty(); //remove all collections on the home page
    }


    function resizeAndPositionCategoryCarousel() {
        // when we select a new category, new text will be shown which
        // changes the length of the carousel. recalculate the size and IPM
        var sliderInstance = $('#category-touchcarousel').data("touchCarousel");
        if (sliderInstance) {
              // remove any previous width settings before calculating new widths
              // leftover widths when hidden were causing initial text wrapping and incorrect width
              // re-calculations
              $('#categoryContainer').css('width', '');
              
              sliderInstance.updateCarouselSize();
              sliderInstance.setItemsPerMoveByWidth();

              // This does not behave correctly if you call it from inside the resize handler - too
              // many pieces are still in flux at that point.   Set a 500ms timer and then go to the
              // element we want
              setTimeout(function () {
                 // get the item # in the list (not the category Id)
                 var selectedIndex  = $('li.touchcarousel-item.tc-selected').index();
                 var sliderInstance = $('#category-touchcarousel').data("touchCarousel");
                 if (sliderInstance)
                    sliderInstance.goTo(selectedIndex);
              }, 500);
        }
    }

    var currentCategoryId = 0;

    function setCurrentCategory(categoryId) {
       currentCategoryId = categoryId;
    }

    function getCurrentCategory() {
       return currentCategoryId;
    }

    function openCategoryPanel() {
       $("#uflCategoryNav").removeClass('hide');
       resizeAndPositionCategoryCarousel(); 
       populateWithCategory(currentCategoryId); 
    }

    function onCategoryClicked() {
        // make sure search bar is hidden whn a category gets clicked -handled at the icon level now
        //$("#uflSearchNav").addClass('hide');
        var categoryId = this.id.replace('category-icon-','');
        categoryIdInt = parseInt(categoryId);
        populateWithCategory(categoryIdInt);
        setCurrentCategory(categoryIdInt);
    }

    function populateWithCategory(categoryId) {
        var librariesList = getLibrariesList(languages.getWrittenLang());
        if (isHomeMode() && (librariesList.length > 1)) {
           populateHomeCarouselsWithCategory(categoryId);
        }
        else {
           populateShelvesWithCategory(categoryId);
        }
    }

    function addCategory(id, name, imgUrl, spriteNum) {
        var iconBlock = $('#touchcarousel-item-master'),
            newIcon = $(iconBlock).clone().appendTo("#categoryContainer"),
            newId = 'category-icon-' + id;
        $(newIcon).attr('id', newId);

        $('#' + newId + " p").text(name);
        $('#' + newId).css('background-image','url(' + imgUrl + ')');
        $('#' + newId).addClass('tc-item-sprite' + spriteNum);

        newIcon.removeClass('hide');  //make it visible
        $(newIcon).click(onCategoryClicked);
    }

    function populateLibraryCategoryList() {       
        if (isHomeMode() || library.showCategories())
            $("#category-touchcarousel").removeClass('hide');  //make it visible
        else
            return;     // no reason to create the carousel if not showing.

        var imgUrl = library.getSpriteFileUrl();

        for (var cidx=0; cidx<library.getNumCategories(); cidx++) {
            var spriteNum = library.getCategorySpriteNum(cidx),
                count = 0;

            forEachLib(function(libClass) {
                count += libClass.getCategoryNumTitles(cidx);
            });

            if (count > 0)
                addCategory(cidx.toString(), library.getCategoryName(cidx), imgUrl, spriteNum);
        }

        var tc_slider = $("#category-touchcarousel").touchCarousel({
            itemsPerMove: 1,                // parameter name change - will change dynamically with new function
            scrollbar: false,
            scrollbarAutoHide: true,
            scrollbarTheme: "dark",
            transitionSpeed: 800,
            pagingNav: false,
            snapToItems: false,
            scrollToLast: false,
            useWebkit3d: true,
            loopItems: false
        }).data("touchCarousel");

        tc_slider.updateCarouselSize();
        tc_slider.goTo(0);
        tc_slider.setItemsPerMoveByWidth();             // dynamically change the scroll amount - simple paging
    }




function populateCollectionCarousel(libClass, bookList, useBlank) {
    var bookListSize = bookList.length;
    if (bookListSize == 0)
       return;

    var narrLang = languages.getNarrationLang();
    var langName = languages.getLanguageName(narrLang);

    var colIdString  = "collection-" + libClass.getId();
    $('#' + colIdString).remove(); // remove old one

    var newCollectionList = $("#collection-master").clone().removeAttr('id').appendTo("#HomeCollections");
    newCollectionList.removeClass("hide");
    newCollectionList.attr('id', colIdString);

    var colName = libClass.getCollectionName(),
        colOwner = libClass.getOwnerName();
    if (colName != '' && colOwner != '') {
        //$('a.collectionLink', newCollectionList).removeClass('hide');
        
        $('.collectionOwner', newCollectionList).text(colOwner);
        $('.collectionName', newCollectionList).text(colName);
        //$('.collectionLink', newCollectionList).attr("href", libClass.makeLibraryUrlNoLang(true));
        //if (utils.is_iFrame()) {
        //    if (libClass.openInFrame)
        //        $('.collectionLink', newCollectionList).attr("target", "_self");
        //    else
        //        $('.collectionLink', newCollectionList).attr("target", "_blank");
        //}
        if (!get_pathDomain_showShelfNames()) {
           $('.collectionOwnerGroup', newCollectionList).remove();
           $('.collectionName', newCollectionList).remove();
           $('.collectionNameSpace', newCollectionList).remove();
        }
    }

    var docFrag2 = document.createDocumentFragment();

    for (var i = 0; i < bookListSize; i++) {
        var bookId = bookList[i];
        addBookToCarousel(libClass, bookId, colIdString, useBlank, docFrag2);
    }

    var temp1 = document.getElementById(colIdString);
    var temp2 = temp1.getElementsByClassName('touchcarousel-container')[0];
    temp2.appendChild(docFrag2);

    for (var i = 0; i < bookListSize; i++) {
        var bookId = bookList[i];
        updateBookInCarousel(libClass, bookId);
    }

    $('.langBadgeName', newCollectionList).text(langName);

    $('#HomeCollections, #HomeContentPane').removeClass('hide'); // show all the items
    var tc_slider = newCollectionList.touchCarousel({
        itemsPerMove: 1, // parameter name change - will change dynamically with new function
        scrollbar: false,
        scrollbarAutoHide: true,
        scrollbarTheme: "dark",
        transitionSpeed: 800,
        pagingNav: false,
        snapToItems: false,
        scrollToLast: false,
        useWebkit3d: true,
        loopItems: false
    }).data("touchCarousel");

    tc_slider.updateCarouselSize();
    tc_slider.goTo(0);
    tc_slider.setItemsPerMoveByWidth(); // dynamically change the scroll amount - simple paging

    setupCollectionLinks(colIdString);
}

function populateCollectionCategoryCarousel(libClass, categoryId) {
    var bookList = libClass.getCategoryBookList(categoryId);
    populateCollectionCarousel(libClass, bookList, true);
}

function populateHomeCarouselsWithCategory(categoryId) {
    showSearchResults(false);
    $('.touchcarousel-item').removeClass('tc-selected');
    $('#category-icon-' + categoryId.toString()).addClass('tc-selected');

    // when we select a new category, new text will be shown which
    // changes the length of the carousel. recalculate the size and IPM
    resizeAndPositionCategoryCarousel();

    //First pass - fill carousel with Blank Images
    //var d = new Date();
    //console.log("populateHomeCarouselsWithCategory1 - " + (d.getTime() - debugRefTime).toString());

    populateCollectionsCarouselAsync(categoryId, 0, function(err, callbackData) {

/*
    forEachLib(function(libClass) {
        var bookList = libClass.getCategoryBookList(categoryId);
        populateCollectionCarousel(libClass, bookList, false);
    d = new Date();
    console.log("populateHomeCarouselsWithCategory1a - " + (d.getTime() - debugRefTime).toString());
    });

    d = new Date();
    console.log("populateHomeCarouselsWithCategory2 - " + (d.getTime() - debugRefTime).toString());

    // Second pass - update images that are visible in the viewport
    var maxBookListLen = 0;
    forEachLib(function(libClass) {
        var bookList = libClass.getCategoryBookList(categoryId);
        if (bookList.length > maxBookListLen)
            maxBookListLen = bookList.length;
    });

    for (var idx=0; idx<maxBookListLen; idx++) {
        forEachLib(function(libClass) {
            var bookList = libClass.getCategoryBookList(categoryId);
            if (idx < bookList.length) 
                update(libClass, bookList[idx]);
        });
    }

    d = new Date();
    console.log("populateHomeCarouselsWithCategory3 - " + (d.getTime() - debugRefTime).toString());
    // Third pass - update other images in columns to prioritize the loading of
    // of screen images
    for (var idx=0; idx<maxBookListLen; idx++) {
        forEachLib(function(libClass) {
            var bookList = libClass.getCategoryBookList(categoryId);
            if (idx < bookList.length) 
                updateNonVisibleBookInCarousel(libClass, bookList[idx], false);
        });
    }
*/

    //d = new Date();
    //console.log("populateHomeCarouselsWithCategory4 - " + (d.getTime() - debugRefTime).toString());
    
    setupBookLinkHandler();

    //d = new Date();
    //console.log("populateHomeCarouselsWithCategory5 - " + (d.getTime() - debugRefTime).toString());

    });
}

function populateCollectionsCarouselAsync(categoryId, libIndex, callback) {
    //First pass - fill carousel with Blank Images
    var libClass = getNthLib(libIndex);
    if (libClass == null) {
       callback(null, {});
       return;
    } 

    var bookList = libClass.getCategoryBookList(categoryId);
    populateCollectionCarousel(libClass, bookList, false);

    setTimeout(function(){               
        populateCollectionsCarouselAsync(categoryId, libIndex+1, callback);
    }, 0);
}

function updateCarouselSizeAndPosition() {
    //update the size of each carousel in case scroll bar got added
    forEachLib(function(libClass) {
        var jQueryCollectionId = "#collection-" + libClass.getId();
        var sliderInstance = $(jQueryCollectionId).data("touchCarousel");
        if (sliderInstance) sliderInstance.updateCarouselSize();
        var gotoPos = 0;
        if (backButtonData.areWeReturningFromBackButton())
           gotoPos = backButtonData.getCarouselPos(libClass.getId());
        if (sliderInstance) sliderInstance.goTo(gotoPos);
    });
}

function populateCollectionSearchCarousel(libClass, wordList) {
    var bookList = libClass.buildBookListForWordList(wordList);
    populateCollectionCarousel(libClass, bookList, false);
    return bookList;
}

function populateHomeCarouselsWithSearch(wordList) {
    showSearchResults(false);

    var searchBookList = []; 
    forEachLib(function(libClass) {
       var bookList= populateCollectionSearchCarousel(libClass,  wordList); // need a collection id eventually
       searchBookList = searchBookList.concat(bookList);
    });

    $('#searchResult-count').text(searchBookList.length);
    setupBookLinkHandler();

    return searchBookList;
}

function addBookToCarouselJQ(libClass, bookId, collectionJqueryId, useBlank, docFrag) {
    var imageMasterBlock = null;

    var narrLang = languages.getNarrationLang();
    if ((narrLang != '0') && libClass.isBookInSelectedLanguage(bookId)) {
        imageMasterBlock = $('#touchcarousel-book-item-lang-master');
    } else {
        imageMasterBlock = $('#touchcarousel-book-item-master');
    }

    var imageBlock = $(imageMasterBlock).clone();
    imageBlock.attr("id", "image-" + collectionJqueryId + "-" + bookId.toString());
    imageBlock.addClass('touchcarousel-item');
    imageBlock.appendTo(docFrag);
    
    //setup the image
    if (!useBlank)
       $('img', imageBlock).attr("src", libClass.getBookCoverAtBookId(bookId));
    $('img', imageBlock).attr("alt", libClass.getBookAltTextAtBookId(bookId));

    //setup the href link params
    var url = libClass.makeBookUrlNoLang(bookId.toString(), true);
    $('a', imageBlock).attr("href", url);
    if (utils.is_iFrame()) {
        var targetStr = libClass.openInFrame() ? "_self" : "_blank";
        $('a', imageBlock).attr("target", targetStr);
    }
}

function addBookToCarousel(libClass, bookId, collectionJqueryId, useBlank, docFrag) {
    var imageMasterBlock = null;

    var narrLang = languages.getNarrationLang();
    if ((narrLang != '0') && libClass.isBookInSelectedLanguage(bookId)) {
        imageMasterBlock = document.getElementById('touchcarousel-book-item-lang-master');
    } else {
        imageMasterBlock = document.getElementById('touchcarousel-book-item-master');
    }

    var imageBlock = imageMasterBlock.cloneNode(true);
    
    imageBlock.id = "image-" + collectionJqueryId + "-" + bookId.toString();
    imageBlock.classList.add('touchcarousel-item');
    
    //setup the image
    if (!useBlank)
       imageBlock.getElementsByTagName('img')[0].setAttribute('src', libClass.getBookCoverAtBookId(bookId));
    imageBlock.getElementsByTagName('img')[0].setAttribute('alt', libClass.getBookAltTextAtBookId(bookId));

    //setup the href link params
    var url = libClass.makeBookUrlNoLang(bookId.toString(), true);
    imageBlock.getElementsByTagName('a')[0].setAttribute('href', url);
    if (utils.is_iFrame()) {
        var targetStr = libClass.openInFrame() ? "_self" : "_blank";
        imageBlock.getElementsByTagName('a')[0].setAttribute('target', targetStr);
    }

    docFrag.appendChild(imageBlock);
}

function updateVisibleBookInCarousel(libClass, bookId) {
    var imageIdString = "#image-collection-" + libClass.getId() + "-" + bookId.toString();
    var elem = $('img', imageIdString).get(0);
    if (utils.isInViewport(elem))
        $('img', imageIdString).attr("src", libClass.getBookCoverAtBookId(bookId));
}

function updateNonVisibleBookInCarousel(libClass, bookId) {
    var imageIdString = "#image-collection-" + libClass.getId() + "-" + bookId.toString();
    var elem = $('img', imageIdString).get(0);
    if (!utils.isInViewport(elem))
        $('img', imageIdString).attr("src", libClass.getBookCoverAtBookId(bookId));
}

function updateBookInCarousel(libClass, bookId) {
    var imageIdString = "#image-collection-" + libClass.getId() + "-" + bookId.toString();
    var elem = $('img', imageIdString);
    elem.attr("src", libClass.getBookCoverAtBookId(bookId));
    //uflImgLoader.addJqueryRequest(libClass.getBookCoverAtBookId(bookId), elem);
}


function UFLLibrary() {
    this.load            = function(libId, callback)  { return _load(libId, callback);               };
    this.isLoaded        = function()                 { return _isLoaded();                          };

    this.loadSearch      = function(callback)         { return _loadSearch(callback);                };
    this.isSearchLoaded  = function()                 { return _isSearchLoaded();                    };

    this.getId                   = function()         { return _getId();                             };
    this.getNumBooks             = function()         { return _getLibraryNumBooks();                };
    this.getNumNarratedBooks     = function()         { return _getNumNarratedBooks();               };
    this.isBookInLib             = function(bookId)   { return _isBookInLib(bookId);                 };
    this.isBookAvailable         = function(bookId)   { return _isBookAvailable(bookId);             };
    this.isBookInSelectedLanguage= function(bookId)   { return _isBookInSelectedLanguage(bookId);    };

    this.getNumCategories        = function()         { return _getLibraryNumCategories();           };
    this.getSpriteFileUrl        = function()         { return _getLibrarySpriteFileUrl();           };
    this.getCategoryType         = function(idx)      { return _getLibraryCategoryType(idx);         };
    this.getCategorySpriteNum    = function(idx)      { return _getLibraryCategorySpriteNum(idx);    };
    this.getCategoryName         = function(idx)      { return _getLibraryCategoryName(idx);         };
    this.getCategoryNumTitles    = function(idx)      { return _getLibraryCategoryNumTitles(idx);    };
    this.getCategoryBookList     = function(idx)      { return _getLibraryCategoryBookList(idx);     };

    this.getBookCoverAtBookId    = function(id)       { return _getLibraryBookCoverAtBookId(id);     };
    this.getBookAltTextAtBookId  = function(id)       { return _getLibraryBookAltTextAtBookId(id);   };

    this.getOwnerName            = function()         { return _libconfig_getOwnerName();            };
    this.getOwnerNameShort       = function()         { return _libconfig_getOwnerNameShort();       };
    this.getCollectionName       = function()         { return _libconfig_getCollectionName();       };
    this.getPath                 = function()         { return _libconfig_getPath();                 };
    this.getOwnerPath            = function()         { return _libconfig_getOwnerPath();            };
    this.getLibPath              = function()         { return _libconfig_getLibPath();              };
    this.showNarrations          = function()         { return _libconfig_showNarrations();          };
    this.showCategories          = function()         { return _libconfig_showCategories();          };
    this.showCollectionName      = function()         { return _libconfig_showCollectionName();      };
    this.showSponsors            = function()         { return _libconfig_showSponsors();            };
    this.allowEmbed              = function()         { return _libconfig_allowEmbed();              };
    this.openInFrame             = function()         { return _libconfig_openInFrame();             };
    this.getWhitelist            = function()         { return _libconfig_getWhitelist();            };
    this.filterLangList          = function(langs)    { return _filterWithAllowedLangs(langs);       };

    this.setHomePath             = function(path)     { _homePath = path;                            };
    this.setLangSubsetList       = function(langList) { _langSubsetList = langList;                  };

    this.getCTACustomName        = function()         { return _libconfig_getCTACustomName();        };
    this.getCTACustomLink        = function()         { return _libconfig_getCTACustomLink();        };

    //Url Generation APIs
    this.makeBookUrl = function(bookId, langId, relative) {
          return _makeBookUrl(bookId, langId, relative); 
    };
    this.makeBookUrlNoLang = function(bookId, relative) {
          return _makeBookUrlNoLang(bookId, relative);
    };
    this.makeLibraryUrl = function(langId, relative) {
          return _makeLibraryUrl(langId, relative);
    };
    this.makeLibraryUrlNoLang = function(relative) {
          return _makeLibraryUrlNoLang(relative);
    };

    // Search APIs
    this.buildMostRelevantBookListForWordList = function(wordList)  { 
          return _buildBookListForWordList(wordList, true, false, false);             
    };
    this.buildBookListForWordList = function(wordList) { 
          return _buildBookListForWordList(wordList, true, true, _getSearchOptionOtherText()); 
    };
    this.useOtherText = function(bool)                { return _useOtherText(bool);             };
    this.getFirstLetterList = function(letter)        { return _getFirstLetterList(letter);     };


    var _jsonLibrary        = null;
    var _bookDict           = null;  // dictionary by bookId of all searchable books
    var _narrDict           = null;  // dictionary by bookId of all searchable books
    var _jsonLibDetailsList = null;

    var _collectionBookList = null;  //book list of the current collection
    var _narrBookList       = null;
    var _newOrderBookList   = null;

    var _homePath           = null;
    var _langSubsetList     = null;

    var _jsonSearchData = null;
    var _search_loaded = false;
    var _loaded = false;
    var _firstLetterDict = {};
    var _searchOptions = {};

    var _libId = 0;
    




    var _load = function(libId, callback) {
        _libId = libId;
        _jsonLibrary        = null;
        _jsonLibDetailsList = null;

        _loadLibInfo(libId, callback);
        //_loadLibDetails(libId, callback);
    };

    var _loadLibInfo = function(libId, callback) {
        var urlPath = "/lib/r" + _version.vRversion + 
                      '/' + libId + "/libInfo.json";

        getS3jsonData({ bucket: 'reader-bucket',
                        debugName: 'getLibraryJSON',
                        urlPath: urlPath,
                        success: function (obj) {
                           _jsonLibrary = obj;
                           //if (_libconfig_getPath().indexOf('/newco/') == 0)
                           //   _jsonLibrary.LibPath = '/lti13' + _jsonLibrary.LibPath;
                           _setupLibDict();
                           //_setupSearchData(obj.Search);
                           var langs = [];
                           for (var i=0; i< _jsonLibrary.Languages.length; i++) {
                               var langObj = _jsonLibrary.Languages[i];
                               langs.push(langObj.Abbv);
                           }
                           languages.addLibNarrationLanguages(_filterWithAllowedLangsSimple(langs));
                           _checkIfEverybodyLoaded(libId, callback);
                        },
                        error: function() {
                           //Handle the Error after retries are exhausted
                           debugLog("getLibraryJSON - Error");
                           _loaded = true;
                           callback(new Error("getS3jsonDataErr"), null);
                        }
                      });
    };

    var _loadSearch = function(callback) {
        _jsonSearchData = null;

        if (!_jsonLibrary) {
           // send error callback
           if (callback)
               callback(new Error("libraryMustLoadFirstErr"), null);
           return;
        }

        _loadLibSearch(_getId(), callback);
    };

    var _loadLibSearch = function(libId, callback) {
        var urlPath = "/lib/r" + _version.vRversion +
                      '/' + libId + "/" + languages.getWrittenLang() +
                      "/libSearch.json";

        getS3jsonData({ bucket: 'reader-bucket',
                        debugName: 'getLibraryJSON',
                        urlPath: urlPath,
                        success: function (obj) {
                           _setupSearchData(obj);
                           _search_loaded = true;
                           if (callback) callback(null, this);
                        },
                        error: function() {
                           //Handle the Error after retries are exhausted
                           debugLog("getLibrarySearchJSON - Error");
                           _search_loaded = true;
                           if (callback) callback(new Error("getS3jsonDataErr"), null);
                        }
                      });
    };

    // load the library details file
    var _loadLibDetails = function(libId, callback) {
        getS3jsonData({ bucket: 'reader-bucket',
                        debugName: 'getLibraryDetailsJSON',
                        urlPath: "/lib/r" + _version.vRversion + "/" + libId + "/" + languages.getWrittenLang() + "/libDetail.json",
                        success: function (obj) {
                           _jsonLibDetailsList = obj;
                           var langs = [];
                           for (var i=0; i< _jsonLibDetailsList.Languages.length; i++) {
                               var langObj = _jsonLibDetailsList.Languages[i];
                               langs.push(langObj.Abbv);
                           }
                           languages.addLibNarrationLanguages(langs);
                           _checkIfEverybodyLoaded(libId, callback);
                        },
                        error: function() {
                           //Handle the Error after retries are exhausted
                           _loaded = true;
                           callback(new Error("getS3jsonDataErr"), null);
                        }
                      });
    };

    var _isLoaded = function() {
       if (_loaded) return true;
       if (_jsonLibrary) return true;
       return false;
    };

    var _isSearchLoaded = function() {
       if (_search_loaded) return true;
       if (_jsonSearchData) return true;
       return false;
    };

    var _checkIfEverybodyLoaded = function(libId, callback) {
       if (_isLoaded()) {
           if (callback)
              callback(null, this);
       }
    };

    var _setupLibDict = function() {
       _bookDict = {};
       _narrDict = {};
       _collectionBookList = [];
       var narrLang = '0';
       if (_jsonLibrary && _jsonLibrary.nLangs && _jsonLibrary.nLangs[narrLang])
           _collectionBookList = _jsonLibrary.nLangs[narrLang];

       narrLang = languages.getNarrationLang();
       _narrBookList = [];
       if ((narrLang != '0') && _jsonLibrary && _jsonLibrary.nLangs && _jsonLibrary.nLangs[narrLang]) {
           _narrBookList = _jsonLibrary.nLangs[narrLang];
       }

       for (var idx=0; idx < _jsonLibrary.Books.length; idx++) {
           var bookObj = _jsonLibrary.Books[idx];
           var bookId = bookObj.BKID;

           _bookDict[bookId] = _jsonLibrary.Books[idx];

           var narrIdx = jQuery.inArray( bookId, _narrBookList ); 
           _narrDict[bookId] = (narrIdx >= 0);
       }

       _newOrderBookList = _sortByNarration(_collectionBookList);
    };


    function _sortByNarration(bookList) {
        var tempArray = [];
        for (var i=0; i<bookList.length; i++) {
            var tempObj = {};
            var bookId = bookList[i];
            tempObj.bookId = bookId;
            tempObj.isNarr = _isBookInSelectedLanguage(bookId) ? 1 : 0;
            tempObj.origOrder = i;
            tempArray.push(tempObj);
        }

        tempArray = tempArray.sort(function(objA, objB) {
           if (objA.isNarr > objB.isNarr)
              return -1;
           if (objA.isNarr < objB.isNarr)
              return 1;
           if (objA.origOrder < objB.origOrder)
              return -1;
           if (objA.origOrder > objB.origOrder)
              return 1;
           return 0;
        });

        var newLibOrder = [];
        for (var i=0; i<tempArray.length; i++) {
            newLibOrder.push(tempArray[i].bookId);
        }

        return newLibOrder;
    }

    var _isBookInSelectedLanguage = function(bookId) {
       if (!_narrDict)
          return false;

       return _narrDict[bookId];


       var targetBookId = utils.forceInt(bookId);
       console.log('_isBookInSelectedLanguage targetBookId - ' + targetBookId);
       var narrLang = languages.getNarrationLang();
       //console.log('_isBookInSelectedLanguage narrLang - ' + narrLang);
       var bookList = null;
       if (_jsonLibrary && _jsonLibrary.nLangs && _jsonLibrary.nLangs[narrLang])
           bookList = _jsonLibrary.nLangs[narrLang];
       if (!bookList)
           return false;
       console.log('_isBookInSelectedLanguage bookList - ' + JSON.stringify(bookList));
       for (var i=0; i<bookList.length; i++) {
          console.log('_isBookInSelectedLanguage bookList[i] - ' + bookList[i]);
          if (bookList[i] == targetBookId) 
             return true;
       }
       console.log('_isBookInSelectedLanguage NOPE');
       return false;
    }

    var _getId = function() {
        return _libId;
    };

    var _getLibraryNumCategories = function() {
        if (!_jsonLibrary.Categories)
           return 0;
        return (_jsonLibrary.Categories.length);
    };

    var _getLibraryCategoryType = function(idx) {
        if (idx < _getLibraryNumCategories())
           return _jsonLibrary.Categories[idx].Type;
        return '';
    };

    var _getLibraryCategorySpriteNum = function(idx) {
        if ((idx < 0) || (idx >= _getLibraryNumCategories()))
           return 0;
        if (_jsonLibrary.Categories[idx].SpriteNum)
           return _jsonLibrary.Categories[idx].SpriteNum;
        return 0;
    };

    var _getLibraryCategoryName = function(idx) {
        if (idx >= _getLibraryNumCategories())
           return "Unknown";

        var catStrToken = _jsonLibrary.Categories[idx].StrToken;
        if (!catStrToken)
           return "Unknown";

       switch(catStrToken) {
          case "db_cat_all_books"      : return "All books";
          case "db_cat_animals"        : return "Animals";
          case "db_cat_community"      : return "Community";
          case "db_cat_create_and_play": return "Create and Play";
          case "db_cat_earth_and_sky"  : return "Earth and Sky";
          case "db_cat_family"         : return "Family";
          case "db_cat_friends"        : return "Friends";
          case "db_cat_healthy_me"     : return "Healthy me";
          case "db_cat_know_and_learn" : return "Know and Learn";
          case "db_cat_plants_and_food": return "Plants and Food";
          case "db_cat_recently_read"  : return "Recently Read";
          case "db_cat_technology"     : return "Technology";
          default                      : return "Unknown";
       }
    };

    var _getLibrarySpriteFileUrl = function() {
        if (!('SpriteFile' in _jsonLibrary))
           return '';
        if (_jsonLibrary.SpriteFile == null)
           return '';
        if (_jsonLibrary.SpriteFile == '')
           return '';
        _jsonLibrary.SpriteFile = rootS3PathConvert(_jsonLibrary.SpriteFile);
        return (_jsonLibrary.SpriteFile + '?v=' + _version.vFiles);
    };

    var _getLibraryCategoryNumTitles = function(idx) {
        return _getLibraryCategoryBookList(idx).length;
    };

    var _getLibraryCategoryBookList = function(idx) {
        if (_getLibraryNumCategories() == 0) //not using any categories
           return _newOrderBookList;

        if (idx > _getLibraryNumCategories())
           return [];

        var bookList = [];
        if (_getLibraryCategoryType(idx) == 'Category')
           bookList = _sortByNarration(_jsonLibrary.Categories[idx].BookIds);
        else if (_getLibraryCategoryType(idx) == 'All')
           bookList = _newOrderBookList;
        else if (_getLibraryCategoryType(idx) == 'Recent')
           bookList = _sortByNarration(_getRecentListForDisplay());

        return bookList;
    };

    var _getRecentListForDisplay = function() {
       //need to find the intersection of the recent list and which
       //books are currently available in the given language.
       var outputList = [];
       var recentList = getRecentList();  //EXTREF
       for (var i=0; i<recentList.length; i++) {
           var bookId = recentList[i];
           if (_isBookInLib(bookId))
              outputList.push(bookId);
       }

       //reverse the list so the most recently read is first
       return outputList.reverse();
    };

    var _getLibraryNumBooks = function() {
        if (!_collectionBookList)
           return 0;
        return (_collectionBookList.length);
    };

    var _getNumNarratedBooks = function() {
        if (!_narrBookList)
           return 0;
        return (_narrBookList.length);
    };

    var _getLibraryBookCoverAtBookId = function(id) {
        _jsonLibrary.CoverRoot = rootS3PathConvert(_jsonLibrary.CoverRoot);
        var coverRoot = _jsonLibrary.CoverRoot;
        var bookId    = id;
        //var psId      = _bookDict[id].PSID;
        var coverName = _bookDict[id].Cover;
        var coverPath = coverRoot.replace("$BKID",bookId.toString());

        return (coverPath + coverName + '?v=' + _version.vFiles);
    };

    var _getLibraryBookAltTextAtBookId = function(id) {
        return (_bookDict[id].AltText);
    };

    var _isBookInLib = function(bookId) {
        var id = -1;
        if (typeof bookId === 'number')
           id = bookId;
        else 
           id = parseInt(bookId, 10);
        var index = jQuery.inArray( id, _collectionBookList ); 
        return (index >= 0);
    };

    var _isBookAvailable = function(bookId) {
        return (bookId in _bookDict);
    };


    var _makeBookUrl = function(bookId, langId, relative) {
       if (!langId)
          langId = '0';

       return _makeBookUrlNoLang(bookId, relative) + "&LangId=" + langId;
    };

    var _makeBookUrlNoLang = function(bookId, relative) {
       var host = (relative) ? '' : 'http://www.uniteforliteracy.com';

       var path = _libconfig_getPath() + "/book?BookId=" + bookId;
       if (_homePath) 
          path = _homePath + "/" + _libconfig_getLibPath() + "/book?BookId=" + bookId;

       return host + path;
    };

    var _makeLibraryUrl = function(langId, relative) {
       return _makeLibraryUrlNoLang(relalive) + '?LangId=' + langId;
    };

    var _makeLibraryUrlNoLang = function(relative) {
       var host = (relative) ? '' : 'http://www.uniteforliteracy.com';

       var path = (_libconfig_getPath().length > 0) ? _libconfig_getPath() : '/';

       return host + path;
    };

    

    var _libconfig_getOwnerName = function() {
        if (_jsonLibrary && _jsonLibrary.Owner) 
            return _jsonLibrary.Owner;
        return "";      // default will use our logo
    };

    var _libconfig_getOwnerNameShort = function() {
        if (_jsonLibrary && (_jsonLibrary.OwnerShort) && (_jsonLibrary.OwnerShort.length > 0))
            return _jsonLibrary.OwnerShort;
        return _libconfig_getOwnerName();      // use the long text if no short text is given.
    };

    var _libconfig_getPath = function() {
        if (_jsonLibrary && (_jsonLibrary.LibPath) && (_jsonLibrary.LibPath.length > 0))
            return _jsonLibrary.LibPath;
        if (_libId == 1)
            return "/ufl/us";
        if (_libId == 3)
            return "/cboces/lib";
        return '';    
    };

    var _libconfig_getOwnerPath = function() {
        var path = _libconfig_getPath();
        var splits = path.split('/'); 
        if (splits.length < 2)
           return '';
        return splits[1];
    };

    var _libconfig_getLibPath = function() {
        var path = _libconfig_getPath();
        var splits = path.split('/'); 
        if (splits.length < 3)
           return '';
        return splits[2];
    };
    
    var _libconfig_showNarrations = function() {
        if (_jsonLibrary && (_jsonLibrary.ShowNarrations != null)) 
            return (_jsonLibrary.ShowNarrations);
        return true;    // default is on.
    };
    
    var _libconfig_showCategories = function() {
        if (_jsonLibrary && (_jsonLibrary.ShowCategories != null))
            return (_jsonLibrary.ShowCategories);
        return true;    // default is on.
    };
    
    var _libconfig_showCollectionName = function() {
        if (_jsonLibrary && (_jsonLibrary.ShowCollectionName != null))
            return (_jsonLibrary.ShowCollectionName);
        return false;    // default is off.
    };

    var _libconfig_getCollectionName = function() {
        if (_jsonLibrary && _jsonLibrary.Title) 
            return _jsonLibrary.Title;
        return "";  //default
    };
    
    var _libconfig_allowEmbed = function() {
        if (_jsonLibrary && (_jsonLibrary.AllowEmbed != null))
            return (_jsonLibrary.AllowEmbed);
        return true;    // default is on.
    };

    var _libconfig_openInFrame = function() {
        if (_jsonLibrary && (_jsonLibrary.OpenInFrame != null))
            return (_jsonLibrary.OpenInFrame);
        return true;    // default is on.
    };

    var _libconfig_showSponsors = function() {
        if (_jsonLibrary && (_jsonLibrary.ShowSponsors != null))
            return (_jsonLibrary.ShowSponsors);
        return true;    // default is on.
    };

    var _libconfig_getWhitelist = function() {
        if (_jsonLibrary && _jsonLibrary.Whitelist) 
            return _jsonLibrary.Whitelist;
        return [];    // default is empty list
    };

    var _libconfig_getLangList = function() {
        //console.log("Owner Path is " + _libconfig_getOwnerPath() );
        //if (_libconfig_getOwnerPath() == 'savvas')
        //    return ['spa','kor', 'deu'];
        if (_jsonLibrary && _jsonLibrary.LanguageSubset) 
            return _jsonLibrary.LanguageSubset;
        return [];    // default is empty list
    };

    var _filterWithAllowedLangsSimple = function(langList) {
        var allowedLangList = _libconfig_getLangList();

        if (_langSubsetList && (_langSubsetList.length > 0))
            allowedLangList = _langSubsetList;

        if (allowedLangList.length == 0) 
            return langList;

        var retList = langList.filter(function(n) {
            return allowedLangList.indexOf(n) !== -1;
        });

        return retList;
    };

    var _filterWithAllowedLangs = function(langList) {
        var allowedLangList = _libconfig_getLangList();

        if (_langSubsetList && (_langSubsetList.length > 0))
            allowedLangList = _langSubsetList;

        if (allowedLangList.length == 0) 
            return langList;

        var retList = langList.filter(function(n) {
            var abbv = n.Abbv;
            return allowedLangList.indexOf(abbv) !== -1;
        });

        return retList;
    };
    
    var _libconfig_getCTACustomName = function() {
        // need the link field to exist for the name to also be returned.
        if (_libconfig_getCTACustomLink() != "") {
            // lookup the name field in the string table
            switch(_libId) {
                case 4: return "Donate Money";
                default: return "";
            }
        }
        return "";    // default is off.
    };
    
    var _libconfig_getCTACustomLink = function() {
        if (_jsonLibrary && (_jsonLibrary.CTACustomLink) && (_jsonLibrary.CTACustomLink.length > 0)) 
            return _jsonLibrary.CTACustomLink;
        return "";    // default is off.
    };


    var _setupSearchData = function(jsonObj) {
        _jsonSearchData = jsonObj;
        _filterSearchDataForBooksInCollection();
        _getSearchOptionsCookie();
        _buildFirstLetterDict();
    };

    var _filterSearchDataForBooksInCollection = function() {
        for(var word in _jsonSearchData) {
           for (var letter in { B: 0, T: 0, O: 0 }) {
               if ((letter in _jsonSearchData[word]) && (_jsonSearchData[word][letter].length > 0))
                   _jsonSearchData[word][letter] = _filterListForBooksInLib(_jsonSearchData[word][letter]);
           } //for
        }  //for
    };

    var _buildFirstLetterDict = function() {
        _firstLetterDict = {};
        var incOtherText = _getSearchOptionOtherText();

        for(var k in _jsonSearchData) {
            var firstLetter = k.charAt(0);
            if (!(firstLetter in _firstLetterDict))
               _firstLetterDict[firstLetter] = [];
            var includeThisWord = false;
            if (('B' in _jsonSearchData[k]) && (_jsonSearchData[k]['B'].length > 0))
               includeThisWord = true;
            else if (('T' in _jsonSearchData[k]) && (_jsonSearchData[k]['T'].length > 0))
               includeThisWord = true;
            else if (incOtherText && ('O' in _jsonSearchData[k])) //Most of the time we don't want to include 'Other'
               includeThisWord = true;
            if (includeThisWord)
               _firstLetterDict[firstLetter].push(k);
        }
    };

    var _getFirstLetterList = function(letter) {
        if (!(letter in _firstLetterDict))
           return [];

        return _firstLetterDict[letter];
    };

    var _getSearchWordBookList = function(word, wordType) {
        if (!(word in _jsonSearchData))
           return [];
        if (!(wordType in _jsonSearchData[word]))
           return [];
        return _jsonSearchData[word][wordType];
    };

    var _getSearchWordBookN = function(word, n, wordType) {
        var bookList = _getSearchWordBookList(word, wordType);
        if (n >= bookList.length)
           return -1;
        return bookList[n];
    };

    var _buildRandomizedBookListForWordList = function(wordList, wordType) {
        var outList = [];
        for (var i=0; i<5; i++) {
            for (var j=0; j<wordList.length; j++) {
                var bookId = _getSearchWordBookN(wordList[j], i, wordType);
                if (bookId >= 0)
                   outList.push(bookId);
            }
        }

        //after randomizing the first 5 for each search word, just add all of the search results for
        //each search word to the list - we will remove dups a little bit later
        for (var j=0; j<wordList.length; j++) {
            var word = wordList[j];
            var bList = _getSearchWordBookList(word, wordType);
            outList = outList.concat(bList);
        }

        return outList;
    };

    var _buildBookListForWordList = function(wordList, includeTbooks, includeBbooks, includeObooks) {
        var bookList = [];

        if (includeTbooks) {
            bookList = _buildRandomizedBookListForWordList(wordList, 'T');
        }

        if (includeBbooks) {
            var bodyList = _buildRandomizedBookListForWordList(wordList, 'B');
            var bookList = bookList.concat(bodyList);
        }

        if (includeObooks) {
            var otherList = _buildRandomizedBookListForWordList(wordList, 'O');
            var bookList = bookList.concat(otherList);
        }

        bookList = _filterListForDups(bookList);
        //bookList = _filterListForBooksInLib(bookList);
        bookList = _sortByNarration(bookList);
        return bookList;
    };

    var _filterListForBooksAvailable = function(bList) {
        var outList = [];
        for (var i=0; i<bList.length; i++) {
            var bookId = bList[i];
            if (_isBookAvailable(bookId))  
               outList.push(bookId);
        }
        return outList;
    };

    var _filterListForBooksInLib = function(bList) {
        var outList = [];
        for (var i=0; i<bList.length; i++) {
            var bookId = bList[i];
            if (_isBookAvailable(bookId) && _isBookInLib(bookId))  
               outList.push(bookId);
        }
        return outList;
    };

    var _filterListForDups = function(bList) {
        var usedDict={};
        var outList = [];
        for (var i=0; i<bList.length; i++) {
            var bookId = bList[i];
            if (bookId in usedDict)
               continue;
            usedDict[bookId] = 1;
            outList.push(bookId);
        }
        return outList;
    };

    //
    //  Search options
    //
    var _getSearchOptionsCookie = function() {
        var searchOptionString = getCookie('searchOptions');
        if (searchOptionString == '') {
            _searchOptions = {};
        } else {
            _searchOptions = JSON.parse(searchOptionString);
        }
    };
 
    var _setSearchOptionsCookie = function() {
        var searchOptionString = JSON.stringify(_searchOptions);
        setForeverCookie('searchOptions', searchOptionString);
    };
     
    var _updateSearchOptions = function() {
        _setSearchOptionsCookie();
        _buildFirstLetterDict();
    };  
    
    var _getSearchOptionOtherText = function() {
        if (_searchOptions && _searchOptions.includeOtherText)
            return _searchOptions.includeOtherText;
        return false;
    };
    
    var _useOtherText = function(bool) {
        //This funciton is being used as both a setter and a getter
        //if no value is passed in then it is a getter
        if (bool == null) {  
           //getter
           return _getSearchOptionOtherText(); 
        } 
 
        //setter
        _searchOptions.includeOtherText = bool;
        _updateSearchOptions();
    };

}  //End of Class



    ///////////////////////////////////////////
    // JSON Library
    //
    ///////////////////////////////////////////

    var library = null;
    var libraries=[];
    var librariesMap={};
    var mainLib = null;

    function getLibraryJSON(libId, startup) {
       //use this method of having a default parameter in javascript
       //  this is like having (startup=true) in declaration
       startup = (typeof startup !== 'undefined') ? startup : true;
       var doneEventName = startup ? "uflLibraryJSONReadyStartup": "uflLibraryJSONReady";

       if (!mainLib)
          mainLib = libId;
       if (libId == 1)  //Always prefer the UFL lib
          mainLib = libId;

       var libToLoad =  new UFLLibrary();
       libraries.push(libToLoad);
       librariesMap[libId] = libToLoad;

       var langSubsetList = get_pathDomain_langSubsetList();
       //console.log("langSubsetList is " + JSON.stringify(langSubsetList));
       if (langSubsetList && (langSubsetList.length > 0))
           libToLoad.setLangSubsetList(langSubsetList);

       libToLoad.load(libId, function (err, data) {
          if (err) {
             debugLog("Library JSON Failed To Load");
             if (!isHomeMode() && (languages.getNarrationLang() != '0')) 
                resetLanguageAndReload();
             else
                $.event.trigger({ type: doneEventName });
          } else {
             if (!library || (libId == mainLib))
                library = libToLoad;
             if (isHomePathSpecified()) {
                libToLoad.setHomePath(get_pathDomain_prefix_minus_lib());
                //console.log("Setting HomePath");
             }
             //startLoadingImages(libToLoad);
             //setTimeout(function(){
                $.event.trigger({ type: doneEventName });
             //}, 0);
          }
       });
    }

/*
    function startLoadingImages(libClass) {
       var bookList = libClass.getCategoryBookList(0);
      
       for (var i = 0; i < bookList.length; i++) {
          var bookId = bookList[i];
          if (libClass.isBookInSelectedLanguage(bookId))
             uflImgLoader.loadImage(libClass.getBookCoverAtBookId(bookId), 1, null);
          else
             uflImgLoader.loadImage(libClass.getBookCoverAtBookId(bookId), 2, null);
       }
    }
*/

    function getClassForLibrary(libId) {
        if (!librariesMap[libId])
           return null;
        else
           return librariesMap[libId];
    }

    function resetLanguageAndReload() {
       if (getUrlLang() != '') {
           languages.setNarrationLang();
           redirectToBaseLibrary();
       } else {
           languages.setNarrationLang();
           utils.reload_page();
       }
    }

    function redirectToBaseLibrary() {
       var path = '/';
       if (get_pathDomain_homeRoot() != '/')
          path = get_pathDomain_homeRoot();
       else if (get_pathDomain_orgRoot() != '/')
          path = get_pathDomain_orgRoot();
       utils.redirect(path);
    }

    function findCategoryFromCookieAtStartup() {
        if (!backButtonData.areWeReturningFromBackButton())
           return 0;
 
        var categoryId = findCategoryFromCookie();
        setCurrentCategory(categoryId);

        return categoryId;
    }

    function findCategoryFromCookie() {
        if (!backButtonData.getCategoryOpen())
           return 0;

        var cookieCategoryName = backButtonData.getCategoryName();
        if (cookieCategoryName == '')
           return 0;

        var found = false;
        var cidx = 0;
        while (!found && cidx<library.getNumCategories()) {
            forEachLib(function(libClass) {
                if ((libClass.getCategoryName(cidx) == cookieCategoryName) &&
                    (libClass.getCategoryNumTitles(cidx) > 0))
                found = true;
            });

            if (!found)
               cidx++;
        }

        return (found ? cidx : 0);
    }

    function getNumLibraries() {
        if (!libraries)
           return 0;
        return libraries.length;
    }

    function areAllLibsLoaded() {
        if (!libraries)
           return false;

        if (libraries.length <= 0)
           return false;

        for (var i=0; i<libraries.length; i++) {
            var lib = libraries[i];
            if (!lib.isLoaded())
               return false;
        }

        if (!isFixedShelfHomePage()) {
           //console.log("Not Fixed Shelf Lib");
           _sortLibsByNumNarratedBooks();
        } else {
           //console.log("Fixed Shelf Lib");
        }

        return true;
    }

    function _sortLibsByNumNarratedBooks() {
        var tempArray = [];
        for (var i=0; i<libraries.length; i++) {
            var tempObj = {};
            var lib = libraries[i];
            tempObj.library = lib;
            tempObj.numBooks = lib.getNumNarratedBooks();
            tempObj.origOrder = i;
            tempArray.push(tempObj);
        }

        tempArray = tempArray.sort(function(objA, objB) {
           if (objA.numBooks > objB.numBooks)
              return -1;
           if (objA.numBooks < objB.numBooks)
              return 1;
           if (objA.origOrder < objB.origOrder)
              return -1;
           if (objA.origOrder > objB.origOrder)
              return 1;
           return 0;
        });

        var newLibOrder = [];
        for (var i=0; i<tempArray.length; i++) {
            newLibOrder.push(tempArray[i].library);
        }

        libraries = newLibOrder;
    }

    function forEachLib(functionToExecute) {
        if (!libraries)
           return;

        for (var i=0; i<libraries.length; i++) {
            var lib = libraries[i];
            functionToExecute(lib);
        }
    }

    function getNthLib(index) {
        if (!libraries)
           return null;

        if (index >= libraries.length)
           return null;

        return libraries[index];
    }

    function findOwnerLibForBook(bookId) {
       //Note: look for book in public libraries - but must match the same owner
       var foundLib = null;
       var thisPathOwner = get_pathDomain_owner(); //get owner name from current path
       forEachLib(function(libClass) {
           if (libClass.isBookInLib(bookId))
              //if (libClass.getOwnerPath() == thisPathOwner)
                 foundLib = libClass;
       });
       return foundLib;
    }

    function findLibraryForBook(bookId) {
       if (library.isBookInLib(bookId))
          return library;
       var foundLib = null;
       forEachLib(function(libClass) {
           if (libClass.isBookInLib(bookId))
                 foundLib = libClass;
       });
       return foundLib;
    }

    function getListOfAllBooks() {
       var bookList = [];
       forEachLib(function(libClass) {
          var libBookList = libClass.getCategoryBookList(0);
          bookList = bookList.concat(libBookList);
       });
       return bookList;
    }

    function loadAllSearchData() {
       doneEventName = "uflLibrarySearchJSONReady";
       forEachLib(function(libClass) {
          if (libClass.isSearchLoaded()) {
             $.event.trigger({ type: doneEventName });
          } else {
             libClass.loadSearch(function (err, data) {
                if (err) {
                   debugLog("Search Library JSON Failed To Load");
                   $.event.trigger({ type: doneEventName });
                } else {
                   $.event.trigger({ type: doneEventName });
                }
             });
         }
       });
    }

    function isAllSearchLoaded() {
       //console.log("isAllSearchLoaded");
       var allLoaded = true;
       forEachLib(function(libClass) {
          //console.log("isAllSearchLoaded lib " + libClass.getId());
          //console.log("isAllSearchLoaded libstatus " + libClass.isSearchLoaded());
          if (!(libClass.isSearchLoaded()))
             allLoaded = false;
       });
     
       return allLoaded;
    }

    function howManyTimesIsLibLoaded(lib) {
       var cnt = 0;
       targetId = lib.getId();
       forEachLib(function(libClass) {
          if (libClass.getId() == targetId)
             cnt++;
       });
       //console.log("howManyTimesIsLibLoaded: " + cnt.toString());
       return cnt;
    }

    function allLibrariesEmpty() {
       var empty = true;
       forEachLib(function(libClass) {
           if (libClass.getNumBooks() > 0)
              empty = false;
       });
       return empty;
    }

    function setMainLib(libId) {
       mainLib = libId;       
       var libClass = librariesMap[libId];
       if (libClass == null)
          return;

       library = libClass; 
    }


var frontDoorData = new UFLFrontDoorData();
 
function UFLFrontDoorData() {
    this.getLanguage = function()         { return _getLanguage(); };
    this.getEventId  = function()         { return _getEventId();  };
    this.findSponsor = function()         { return _findSponsor(); };


    var _eventId    = null;
    var _sponsor    = null;
    var _geoStr     = null;
    var _narrLangId = null;


    var _getFrontDoorData = function() {
       if ((urlParams.event)  && (urlParams.event.length > 0))
          _loadFrontDoorDataFromCookie();
       else
          _loadFrontDoorDataFromSessionStorage();

       if (!_eventId || (_eventId.length < 1))  //fallback to cookie data if session storage not working
          _loadFrontDoorDataFromCookie();

       if (!_eventId || (_eventId.length < 1)) {
          _clearFrontDoorData();
          return false;
       }

       return true;
    };

    var _loadFrontDoorDataFromCookie = function() {
       var prefix = 'fd_';
       _eventId = decodeURIComponent(getCookie(prefix + 'eventId'));

       if (_eventId.length < 1) {
          _clearFrontDoorData();
          return;
       }

       _geoStr     = decodeURIComponent(getCookie(prefix + 'geoStr'));
       _sponsor    = decodeURIComponent(getCookie(prefix + 'sponsor'));
       _narrLangId = decodeURIComponent(getCookie(prefix + 'narrLangId'));
    
       if ((urlParams.event)  && (urlParams.event.length > 0)) {
          // only save params to session storage when event is in the url
          var frontDoorObj = {};
          frontDoorObj.eventId    = _eventId;
          frontDoorObj.geoStr     = _geoStr;
          frontDoorObj.sponsor    = _sponsor;
          frontDoorObj.narrLangId = _narrLangId;

          var objectName = "frontDoorData";
          setSessionStoreObject(objectName, frontDoorObj);
       }
    };

    var _loadFrontDoorDataFromSessionStorage = function() {
       var objectName = "frontDoorData";
       var frontDoorObj = getSessionStoreObject(objectName);

       if (frontDoorObj == null) {
          _clearFrontDoorData();
          return;
       }

       if (frontDoorObj.eventId == null) {
          _clearFrontDoorData();
          return;
       }

       if (frontDoorObj.eventId.length < 1) {
          _clearFrontDoorData();
          return;
       }

       _eventId    = frontDoorObj.eventId;
       _geoStr     = frontDoorObj.geoStr;
       _sponsor    = frontDoorObj.sponsor;
       _narrLangId = frontDoorObj.narrLangId;
    };



    var _clearFrontDoorData = function() {
       _eventId   = null;
       _sponsor   = null;
       _geoStr    = null;
       _narrLangId= null;
    };

    var _isGeoMatch = function() {
       //return locationInfo.isFrontDoorGeoMatch(_geoStr);  //EXTREF
       return false;
    };

    var _findSponsor = function() {
        if (!_getFrontDoorData())
           return null;

        if (!_isGeoMatch())
           return null;

        if (_sponsor.length < 1)
           return null;

        var returnObj = {};
        returnObj.LogoName = null;
        returnObj.LogoText = _sponsor;          // 2016.09.21 - just the logo name name, no formatting except <br> may be in the name.
        returnObj.imgUrl   = null;

        return returnObj;
    };

    var _getEventId = function() {
        if (!_getFrontDoorData())
           return null;

        if (_eventId.length < 1)
           return null;

        return _eventId;
    };

    var _getLanguage = function() {
        if (!_getFrontDoorData())
           return null;

        if (_narrLangId.length < 1)
           return null;

        return _narrLangId;
    };

}


var backButtonData = new UFLbackButtonData();

function UFLbackButtonData() {
    this.clear             = function()               { return _clearStoredData();             };

    this.setUniqueKey      = function(key)            { return _key = key;                     };

    this.backButtonClicked = function()               { return _backButtonClicked();           };
    this.areWeReturningFromBackButton = function()    { return _areWeReturningFromBackButton();};

    this.setBackUrl        = function(url)            { return _setBackUrl(url);               };
    this.getBackUrl        = function()               { return _getBackUrl();                  };

    this.setScrollPercent  = function(pct)            { return _setScrollPercent(pct);         };
    this.getScrollPercent  = function()               { return _getScrollPercent();            };

    this.setCategoryOpen  = function(isOpen)          { return _setCategoryOpen(isOpen);       };
    this.getCategoryOpen  = function()                { return _getCategoryOpen();             };
    this.setCategoryName  = function(name)            { return _setCategoryName(name);         };
    this.getCategoryName  = function()                { return _getCategoryName();             };

    this.setSearchOpen  = function(isOpen)            { return _setSearchOpen(isOpen);         };
    this.getSearchOpen  = function()                  { return _getSearchOpen();               };
    this.setSearchInfo     = function(text, bookList) { return _setSearchInfo(text, bookList); };
    this.resetSearchInfo   = function()               { return _resetSearchInfo();             };
    this.getSearchText     = function()               { return _getSearchText();               };
    this.getSearchBooks    = function()               { return _getSearchBooks();              };

    this.setDialogLib      = function(libId)          { return _setDialogLib(libId);           };
    this.getDialogLib      = function()               { return _getDialogLib();                };

    this.setCarouselPos     = function(collectionId, pos)  { return _setCarouselPos(collectionId, pos); };
    this.resetCarouselPos   = function()                   { return _resetCarouselPos();                };
    this.getCarouselPos     = function(collectionId)       { return _getCarouselPos(collectionId);      };


var _key = '';


    var _readStoredData = function() {
        var obj = getSessionStoreObject("ssBackButtonData" + _key);
        if (obj == null)
           return {}; 
        return obj;
    };

    var _writeStoredData = function(data) {
        setSessionStoreObject("ssBackButtonData" + _key, data);
    };

    var _clearStoredData = function() {
        clearSessionStore("ssBackButtonData" + _key);
    };

    var _backButtonClicked = function() {
       var data = _readStoredData();
       data.backButtonClicked = true;
       _writeStoredData(data);
    };

    var _areWeReturningFromBackButton = function() {
       var data = _readStoredData();
       if (data.backButtonClicked)
          return(data.backButtonClicked);
       return false;
    };

    var _setBackUrl = function(url) {
       var data = _readStoredData();
       data.backUrl = url;
       _writeStoredData(data);
    };

    var _getBackUrl = function() {
       var data = _readStoredData();
       if (data.backUrl)
          return(data.backUrl);
       return '';
    };

    var _setScrollPercent = function(pct) {
       var data = _readStoredData();
       data.scrollPercent = pct;
       _writeStoredData(data);
    };

    var _getScrollPercent = function() {
       var data = _readStoredData();
       if (data.scrollPercent != null)
          return(data.scrollPercent);
       return 0;
    };


    var _setCategoryOpen = function(isOpen) {
       var data = _readStoredData();
       data.categoryOpen = isOpen;
       _writeStoredData(data);
    };

    var _getCategoryOpen = function() {
       var data = _readStoredData();
       if (data.categoryOpen != null)
          return(data.categoryOpen);
       return false;
    };

    var _setCategoryName = function(name) {
       var data = _readStoredData();
       data.categoryName = name;
       _writeStoredData(data);
    };

    var _getCategoryName = function() {
       var data = _readStoredData();
       if (data.categoryName != null)
          return(data.categoryName);
       return '';
    };


    var _setSearchOpen = function(isOpen) {
       var data = _readStoredData();
       data.searchOpen = isOpen;
       _writeStoredData(data);
    };

    var _getSearchOpen = function() {
       var data = _readStoredData();
       if (data.searchOpen != null)
          return(data.searchOpen);
       return false;
    };


    var _setSearchInfo = function(text, bookList) {
       var data = _readStoredData();
       data.searchText  = text;
       data.searchBooks = bookList;
       _writeStoredData(data);
    };

    var _resetSearchInfo = function() {
       var data = _readStoredData();
       data.searchText = '';
       data.searchBooks = [];
       _writeStoredData(data);
    };

    var _getSearchText = function() {
       var data = _readStoredData();
       if (data.searchText)
          return(data.searchText);
       return '';
    };

    var _getSearchBooks = function() {
       var data = _readStoredData();
       if (data.searchBooks)
          return(data.searchBooks);
       return [];
    };
       
    var _setCarouselPos = function(collectionId, pos) {
       var data = _readStoredData();
       if (!data.carouselPos)
          data.carouselPos = {};
       data.carouselPos['carouselPos_' + collectionId.toString()] = pos;
       _writeStoredData(data);
    };

    var _getCarouselPos = function(collectionId) {
       var data = _readStoredData();
       if (!data.carouselPos)
          return 0;
       if (!data.carouselPos['carouselPos_' + collectionId.toString()])
          return 0;
       return data.carouselPos['carouselPos_' + collectionId.toString()];
    };

    var _resetCarouselPos = function() {
       var data = _readStoredData();
       data.carouselPos = {};
       _writeStoredData(data);
    };

    var _setDialogLib = function(libId) {
       var data = _readStoredData();
       data.dialogLibrary = libId;
       _writeStoredData(data);
    };

    var _getDialogLib = function() {
       var data = _readStoredData();
       if (data.dialogLibrary != null)
          return(data.dialogLibrary);
       return 0;
    };

} //class

/*
var ABCTestJson = '{                          '+
'  "Tests": [                                '+
'    {                                       '+
'      "TestName": "Aug2016Test",            '+
'      "Scenarios": [                        '+
'        {                                   '+
'          "Name": "HomeScreen",             '+
'          "Existing_Pct": 20,               '+
'          "NewUser_Pct": 50                 '+
'        },                                  '+
'        {                                   '+
'          "Name": "SingleLib",              '+
'          "Existing_Pct": 80,               '+
'          "NewUser_Pct": 50                 '+
'        }                                   '+
'      ]                                     '+
'    }                                       '+
'  ]                                         '+
'}                                           '

Usage:
initialize_AB_tests();
var scenarioToUse = get_AB_test_scenario("Aug2016Test");
if (scenarioToUse == "HomeScreen") 
   //do special logic
else
   //do default logic
*/



// Default Cookie Length = 90 days


var ABTestData = {};
var ABTestMap  = {};

function initialize_AB_tests() {
    var ABTestData = {};
    if (DataFromServer && DataFromServer.ABTestConfig)
        ABTestData = DataFromServer.ABTestConfig;

    if (!ABTestData.Tests) 
       return;

    for (var i=0; i<ABTestData.Tests.length; i++) {
        var testObj = ABTestData.Tests[i];
        var testClass = new UFL_AB_Test();
        testClass.init(testObj);
        if ((testObj.TestName == null) || (testObj.TestName.length == 0))
           testObj.TestName = "Test" + i.toString();
        ABTestMap[testObj.TestName] = testClass;
    }
}

function get_AB_test_scenario(testName) {
    var testClass = ABTestMap[testName];
    if (testClass == null)
       return 'undefinedTest';
    return testClass.getScenarioName(false);
}

function get_AB_test_scenario_fullName(testName) {
    var testClass = ABTestMap[testName];
    if (testClass == null)
       return 'undefinedTest';
    return testClass.getScenarioName(true);
}

//If you ware going to force it - call force before you call
// get_AB_test_scenario
function force_AB_test_defaultScenario(testName) {
    var testClass = ABTestMap[testName];
    if (testClass == null)
       return;

    testClass.forceDefaultScenario();
}




function UFL_AB_Test() {
    this.init             = function(testObj)         { return _init(testObj);             };
    this.getTestName      = function()                { return _getTestName();             };
    this.getScenarioName  = function(full)            { return _getScenarioName(full);     };
    this.forceDefaultScenario = function()            { return _forceDefaultScenario();    };
   


    var _testConfig = null;
    var _scenarioMap = {};

    var _currentScenario = null;
    var _defaultScenario = null;
    var _forced = false;
    var _newUser = null;
    var _useCookie = true;

    var _init = function(testObj) {
        var i = 0;
        _testConfig = testObj;
        //consoleObj(_testConfig);
        if (_testConfig.hasOwnProperty('UseCookie'))
           _useCookie = _testConfig.UseCookie;
        if (!_testConfig.Scenarios)
           _testConfig.Scenarios = [];
        for (i=0; i<_testConfig.Scenarios.length; i++) {
            var scenarioObj = _testConfig.Scenarios[i];
            if (scenarioObj.Existing_Pct == null)
               scenarioObj.Existing_Pct = 0;
            if (scenarioObj.NewUser_Pct == null)
               scenarioObj.NewUser_Pct = 0;
            if (scenarioObj.Name == null)
               scenarioObj.Name = "Scenario" + i.toString();
            _scenarioMap[scenarioObj.Name] = scenarioObj;
            if (scenarioObj.default == true)
               _defaultScenario = scenarioObj.Name;
        }
        if ((_defaultScenario == null) && (i > 0))
            _defaultScenario = _testConfig.Scenarios[i-1].Name;
    };

    var _getTestName = function() {
        if  (!_testConfig)
            return "Unknown";
        if (!_testConfig.TestName)
            return "Unknown";
        return _testConfig.TestName;
    };

    var _getScenarioName = function(full) {
        if (!_currentScenario)
           _determineScenario();

        if (!full)
           return _currentScenario;

        var suffix = (_isNewUser()) ? "_NewUser" : "_Existing";
        if (_forced)
           suffix = "_Forced";

        return _getTestName() + "_" + _currentScenario + suffix;
    };

    var _determineScenario = function() {
        var scenario = _getScenarioFromCookie();
        if (scenario && scenario.length > 0)
           return;

        _pickAScenario();
        _setABcookie();
    };

    var _getABcookie = function() {
        var cookieName = "AB_" + _getTestName();
        var cookieVal = getCookie(cookieName);

        if (!_useCookie && (cookieVal != "")) {
           eraseCookie(cookieName);
           cookieVal = "";           
        }
        return cookieVal;
    };

    var _setABcookie = function() {
        if (_forced)
           return;  
        if (!_useCookie)
           return;  
        var cookieName = "AB_" + _getTestName();
        var prefix = (_isNewUser()) ? "N_" : "E_";
        setCookie(cookieName, prefix + _currentScenario, 90); //90 day cookie
    };

    var _getScenarioFromCookie = function() {
        var cookie = _getABcookie();
        if (cookie == "")
            return "";
        var possibleScenario = cookie.replace(/^E_/, '').replace(/^N_/, '');
        if (_validScenario(possibleScenario)) {
           _currentScenario = possibleScenario;
           if (cookie.indexOf('N_') == 0)
              _newUser = true;
        }
        else  {
           eraseCookie("AB_" + _getTestName());
           return "";
        }
        return _currentScenario;
    };

    var _validScenario = function(scenarioName) {
        if (_scenarioMap[scenarioName] == null)
           return false;
        return true;
    };

    var _pickAScenario = function() {
        //console.log('_pickAScenario');
        //console.log('defaultSecnario is ' + _defaultScenario);
        var randomNumber = utils.getRandomInt(0,99);
        //console.log('randomNum is ' + randomNumber.toString());
        //console.log(JSON.stringify(_testConfig));
        var newUserTotal =0;
        var existingUserTotal =0;
        var thisUserTotal =0;
        var newUser = _isNewUser();
        for (var i=0; i<_testConfig.Scenarios.length; i++) {
            var scenarioObj = _testConfig.Scenarios[i];
            //console.log('check Scenario ' + scenarioObj.Name);
            newUserTotal += scenarioObj.NewUser_Pct;
            existingUserTotal += scenarioObj.Existing_Pct;
            thisUserTotal = (newUser) ? newUserTotal : existingUserTotal;
            if (randomNumber < thisUserTotal) {
               _currentScenario = scenarioObj.Name;
               return;
            }
        }
        _currentScenario = _defaultScenario;
    };

    var _isNewUser = function() {
        if (_newUser != null)
           return _newUser;

        var oldCookie = getCookie("GeoLocFip");
        _newUser = (oldCookie.length == 0);
        return _newUser;
    };

    var _forceDefaultScenario = function() {
        if (_defaultScenario == null)
           return;
        _forced = true;
        _currentScenario = _defaultScenario;
    };

} //class




function UFLLanguages() {
    this.load = function(callback)                              { return _load(callback);                          };
    this.isLoaded = function()                                  { return _languagesLoaded;                         };

    // DEPRECATED this.loadBookNarrationLanguages = function(callback)        { return _loadBookNarrationLanguages(callback);    };
    this.setBookNarrationLanguages = function(langList)         { return _setBookNarrationLanguages(langList);     };
    this.addLibNarrationLanguages = function(langList)          { return _addLibNarrationLanguages(langList);     };
    this.isBookNarrationLangListLoaded = function()             { return _bookNarrationLangsLoaded;                };

    this.getLanguageName = function(langAbbv)                   { return _getLanguageName(langAbbv, false);        };
    this.getLanguageNameWithNative = function(langAbbv)         { return _getLanguageName(langAbbv, true);         };

    this.getNarrationLanguagesWithNative = function(wLang, engSort) { return _getNarrationLanguages(wLang, true, engSort); };
    this.getNarrationMRULanguagesWithNative = function(wLang, engSort)   { return _getNarrationsMRUList(wLang, true, engSort); };
    this.getWrittenLanguagesWithNative = function(currentOnly)  { return _getWrittenLanguages(currentOnly, true);  };
    this.getUILanguagesWithNative = function()                  { return _getUILanguages(true);                    };


    this.getNarrationLang = function()                          { return _getNarrationLang();                      };
    this.setNarrationLang = function(langAbbv)                  { return _setNarrationLang(langAbbv);              };

    this.getUILang = function()                                 { return _getUILang();                             };
    this.setUILang = function(langAbbv)                         { return _setUILang(langAbbv);                     };

    this.getWrittenLang = function()                            { return _getWrittenLang();                        };
    this.setWrittenLang = function(langAbbv)                    { return _setWrittenLang(langAbbv);                };

    this.setHomeWLangs = function(wLangs)                       { return _setHomeWLangs(wLangs);                   };
    this.setHomeNLangs = function(nLangMap)                     { return _setHomeNLangs(nLangMap);                 };



    var _languagesLoaded = false;
    var _bookNarrationLangsLoaded = false;

    var _jsonLangObj = null;
    var _currentNarrLangs = [];
    var _jsonBookLangObj = null;

    var _homeNarrLangMap = null;
    var _homeWLangs = null;



    function _setHomeWLangs(wLangs) {
        _homeWLangs = wLangs;

        if (!_cachedWrittenLang)
           return true;

        var idx = jQuery.inArray( _cachedWrittenLang, _homeWLangs);
        if (idx >= 0)
           return true;

        _setWrittenLang(null);
        _setUILang(null);
        utils.reload_page();
    }

    function _setHomeNLangs(nLangMap) {
        _homeNarrLangMap = nLangMap;
    }



    function _load(callback) {
        _jsonLangObj = null;

        var filePath = '/localize/staging/languages.json';
        if (isProductionHost())    
            filePath = '/localize/production/languages.json';

        getS3jsonData({ bucket: 'static',
                        debugName: 'getLanguagesJSON',
                        urlPath: filePath, 
                        success: function (obj) {
                           _jsonLangObj = obj;
                           _languagesLoaded = true;
                           if (callback)
                              callback(null, obj);
                        },
                        error: function() {
                           //Handle the Error after retries are exhausted
                           if (callback)
                              callback(new Error("getS3jsonDataErr"), null);
                        }
                      });
    }

    function _setBookNarrationLanguages(langlist) {
        _jsonBookLangObj = langlist;
        _bookNarrationLangsLoaded = true;
    }

    function _addLibNarrationLanguages(langlist) {
        _currentNarrLangs = _currentNarrLangs.concat(langlist);
        _currentNarrLangs = utils.removeDupsFromArray(_currentNarrLangs);
    }
    
    // DEPRECATED - book's langlist is now sent to us from the book istelf
    //function _loadBookNarrationLanguages(callback) {
    //    getS3jsonData({ bucket: 'books',
    //                    debugName: 'getBookLangListJSON',
    //                    urlPath: "/" + getBookId().toString() + "/lnglst_" + getLibId() + ".json",
    //                    success: function (obj) {
    //                       _jsonBookLangObj = obj;
    //                       _bookNarrationLangsLoaded = true;
    //                       if (callback) callback (null, obj);
    //                    },
    //                    error: function() {
    //                       //Handle the Error after retries are exhausted
    //                       if (callback)
    //                          callback(new Error("getS3jsonDataErr"), null);
    //                    }
    //                  });
    //}


    // for now we have decided that the names are displayed based on the ui language
    function _getLanguageName(langAbbv, includeNative, engSort) {
        langAbbv = langAbbv.toLowerCase();
        var dispName = _buildLanguageName(_getUILang(), langAbbv, false);
        if (includeNative) {
            var nativeName = _buildLanguageName("native", langAbbv, true);
            if ((nativeName != "") && (nativeName != dispName)) {
                //return dispName + " ( " + nativeName + " )";
                if (engSort)
                    return dispName + " (&nbsp;" + nativeName.replace(' ','&nbsp;') + "&nbsp;)";
                else
                    return nativeName + " (&nbsp;" + dispName.replace(' ','&nbsp;') + "&nbsp;)";
            }
        }
        var nativeName = _buildLanguageName("native", langAbbv, true);
        if ((nativeName != "") && (nativeName != dispName)) 
           return nativeName;
        else
           return dispName;
    }

    // for now we have decided that the names are displayed based on the ui language
    function _buildLanguageName(displayLang, langAbbv, retEmptyOnError) {
       var defaultStr = "Unknown_" + langAbbv;
       
       // some languages are oral only and we may not expect to have a native version.
       // that's the most common case where we would want an error to just return an empty string insetad of an error message.
       // if the caller really expects to find something, the value should be set to false to return the 'Unknown' string
       if (retEmptyOnError == true)
           defaultStr = "";

       if (_jsonLangObj == null)
          return defaultStr;
      
       if (!('languages' in _jsonLangObj))
          return defaultStr;
      
       if (!(displayLang in _jsonLangObj.languages))
          return defaultStr;

       var nameMap = _jsonLangObj.languages[displayLang];
       if (!(langAbbv in nameMap))
          return defaultStr;

       return nameMap[langAbbv];
    }

    function _convertListOfAbbvToOutput(list, includeNative, engSort) {
        var outList = [];
        for (var i=0; i<list.length; i++) {
           var obj = {};
           obj.abbv = list[i];
           obj.name = _getLanguageName(obj.abbv, includeNative, engSort);
           outList.push(obj);
        }
        return outList;
    }
 
    // sort the list by name
    function _languageSort(list) {
        if (list != []) {
            list.sort(function(a,b) {
                if (accent_fold(a.name.toLowerCase()) > accent_fold(b.name.toLowerCase())) return 1;
                else return -1;
            });
        }
        return list;
    }
    

    // currentOnly means we only return an object for the current written language vs. all written languages
    // includeNative determines if we're returning a short name or a long one.
    function _getWrittenLanguages(currentOnly, includeNative) {
        var wlDefaultObj = {},
            wrLangs = [];

        if (!isHomeMode()) {
           return [ _getWrittenLang() ];
        }

        wlDefaultObj.abbv = "eng";
        wlDefaultObj.name = _getLanguageName(wlDefaultObj.abbv, includeNative);

        var jsonFileWLangs = null;
        if (_jsonLangObj && ("WLangs" in _jsonLangObj))
            jsonFileWLangs = _jsonLangObj.WLangs;

        if (!_homeNarrLangMap && !jsonFileWLangs) {
            wrLangs.push(wlDefaultObj);
            return wrLangs;               // english default
        }

        var possibleLangMap = _homeNarrLangMap;
        if (!possibleLangMap)
           possibleLangMap = jsonFileWLangs;
            
        var writtenLang = _getWrittenLang();

        $.each(possibleLangMap, function (key, val) {
            var include = true;
            if (currentOnly) {
                include = false;  // unless current
                if (key == writtenLang)
                    include = true;
            }
            if (include) {
                var langObj = {};
                langObj.abbv = key;
                langObj.name = _getLanguageName(key, includeNative);
                wrLangs.push(langObj);
                if (currentOnly)
                    return false;           // break the loop - if currentOnly and we found it
            }
        });
        return _languageSort(wrLangs);
    }
 
    // includeNative determines if we're returning a short name or a long one.
    function _getUILanguages(includeNative) {
        var uiDefaultObj = {},
            uiLangs = [];
        
        uiDefaultObj.abbv = "eng";
        uiDefaultObj.name = _getLanguageName(uiDefaultObj.abbv, includeNative);
            
        if (_jsonLangObj == null) {
            uiLangs.push(uiDefaultObj);
            return uiLangs;               // english default
        }

        if (!("UILangs" in _jsonLangObj)) {
            uiLangs.push(uiDefaultObj);
            return uiLangs;               // english default
        }       
        
        $.each(_jsonLangObj.UILangs, function (i, val) {
            var langObj = {};
            langObj.abbv = val;
            langObj.name = _getLanguageName(val, includeNative);
            uiLangs.push(langObj);
        });     
        return _languageSort(uiLangs);
    }

    function _getInternalNarrationLanguagesFromLangFile(wLang) {
        var narLangs = [];               // default is no narrations

        /*
        if (isPrivateLib() || utils.is_iFrame()) {
            var nLangs = DataFromServer ? DataFromServer.narrLangs : [];
            if (nLangs == null)
                nLangs = [];
            $.each(nLangs, function (i, val) {
                narLangs.push(val.toLowerCase());
            });     
            return narLangs;
        }
        */
            
        var jsonFileNLangs = null;
        if (_jsonLangObj && ("WLangs" in _jsonLangObj))
            jsonFileNLangs = _jsonLangObj.WLangs[wLang];

        if (!_homeNarrLangMap && !jsonFileWLangs)
            return narLangs;

        var possibleLangList = _homeNarrLangMap[wLang];
        if (!possibleLangList)
           possibleLangList = jsonFileNLangs;

        if (!possibleLangList)
            return narLangs;
        
        $.each(possibleLangList, function (i, val) {
            narLangs.push(val.toLowerCase());
        });     

        return narLangs;
    }

    function _getInternalNarrationLanguagesFromBookFile() {
        var narLangs = [];               // default is no narrations

        if (_jsonBookLangObj == null) {
            return narLangs;
        }

        $.each(_jsonBookLangObj, function (i, val) {
            var inputObj = val;
            if (inputObj.Abbv.toLowerCase() == 'chi')
                narLangs.push('cmn');
            else 
                narLangs.push(inputObj.Abbv.toLowerCase());
        });
        
        return narLangs;
    }

    function _getInternalNarrationLanguages(wLang) {
        if (isBookMode())
            return _getInternalNarrationLanguagesFromBookFile();
        else if (wLang == _getWrittenLang())
            return _currentNarrLangs;
        else
            return _getInternalNarrationLanguagesFromLangFile(wLang);
    }
    
    // return narrations for the given written lang
    // includeNative determines if we're returning a short name or a long one.
    function _getNarrationLanguages(wLang, includeNative, engSort) {
        var list = _getInternalNarrationLanguages(wLang);
        if (!engSort)
           list = list.sort(_specialSortFunction);
        list = _convertListOfAbbvToOutput(list, includeNative, engSort);
        if (engSort)
           return _languageSort(list);
        else
           return list;
    }    
        

    function _getNarrationLang() {
        var langAbbv = '0'; //default - none

        //If not showing a Narration menu in home mode, then show all of the books
        //don't filter by narration language.
        if (isHomeMode() && !get_pathDomain_showNarrations()) 
           return langAbbv;

        if (isLibraryMode() && !get_pathDomain_showNarrations()) 
           return langAbbv;

        // Honor the cookie first if it is set
        // and then look for language in the URL
        // and then look for language in the front door event
        langAbbv = getCookie('2ndLang').toLowerCase();
        if ((!langAbbv) || (langAbbv == '')) {
            if ('localStorage' in window && window['localStorage'] !== null)
               langAbbv = localStorage.getItem('2ndLang');
            if (langAbbv == null)
               langAbbv = '';
        }

        if (langAbbv && (langAbbv.length > 2)) {
           var nLangsLib = get_pathDomain_libNarrLangs();
           if (nLangsLib.length == 0) {
               var tempObj = get_pathDomain_nLangs();
               if (tempObj && tempObj[_getWrittenLang()])
                  nLangsLib = tempObj[_getWrittenLang()];
           }

           if (jQuery.inArray(langAbbv, nLangsLib) < 0) 
               return '0';

         
           if ((_currentNarrLangs.length > 0) && (jQuery.inArray(langAbbv, _currentNarrLangs) < 0))
               return '0';
           return langAbbv;
        }

        langAbbv = getUrlLang();
        if (langAbbv && langAbbv.length > 2) {
           setSessionCookie('2ndLang', langAbbv.toLowerCase()); //set a session cookie for this language
           return langAbbv.toLowerCase();
        }

        langAbbv = frontDoorData.getLanguage();
        if (langAbbv && langAbbv.length > 2) {
           setSessionCookie('2ndLang', langAbbv.toLowerCase()); //set a session cookie for this language
           return langAbbv.toLowerCase();
        }

        langAbbv = '0';
        return langAbbv.toLowerCase();
    }
    
    function _setNarrationLang(langAbbv) {
        urlParams.LangId = ''; // clear out the url Param since we are setting a language
        var cookieValue = '0';
        if (langAbbv != null)
           cookieValue = langAbbv.toLowerCase();
        setForeverCookie('2ndLang', cookieValue);
        if ('localStorage' in window && window['localStorage'] !== null) {
            localStorage.setItem('2ndLang', cookieValue );
        }
        _addLangToMRUList(cookieValue); 
    }

    var _cachedWrittenLang = null;

    function _getWrittenLang() {
        if (_cachedWrittenLang)
           return _cachedWrittenLang;

        var langAbbv = getCookie('wLang');
        if ((!langAbbv) || (langAbbv == '')) {
            if ('localStorage' in window && window['localStorage'] !== null)
               langAbbv = localStorage.getItem('wLang');
            if (langAbbv == null)
               langAbbv = '';
        }

        var pathAbbv = _determineWrittenLanguageByLib();
        if (pathAbbv && pathAbbv.length > 2) {
           //setSessionCookie('2ndLang', langAbbv.toLowerCase()); //set a session cookie for this language
           _cachedWrittenLang = pathAbbv.toLowerCase();
           return _cachedWrittenLang;
        }
        
        if (langAbbv.length < 2) 
            langAbbv = _getUILang();

        _cachedWrittenLang = langAbbv.toLowerCase();
        return _cachedWrittenLang;
    }

    function _determineWrittenLanguageByLib() {
        var wlang = get_pathDomain_libLang();

        if (wlang && (wlang.length > 2) && (wlang.length<5))
           return wlang.toLowerCase();

        return '';
    }

    // has to be in the available list or we ignore tha change
    function _setWrittenLang(langAbbv) {
        _cachedWrittenLang = null; //reset the cached value    

        if (langAbbv == null) {  //this means reset the language
            eraseCookie('wLang');
            if ('localStorage' in window && window['localStorage'] !== null)
               localStorage.removeItem('wLang');
            return;
        }

        if (_jsonLangObj == null) 
            return;

        if (!("WLangs" in _jsonLangObj))
            return;

        var found = false;
        $.each(_jsonLangObj.WLangs, function (key, val) {
            if (key == langAbbv) {
                found = true;
                return false;           // break the loop - we found it
            }
        });

        if (found) {
           setForeverCookie('wLang', langAbbv);
           if ('localStorage' in window && window['localStorage'] !== null) {
               localStorage.setItem('wLang', langAbbv );
           }
        }
    }
    
    function _getUILang() {
        var langStr = "eng";
        return langStr.toLowerCase();
    }

    // has to be in the available list or we ignore tha change
    function _setUILang(langAbbv) {
        if (langAbbv == null) {
            eraseCookie('UILang');
            if ('localStorage' in window && window['localStorage'] !== null)
               localStorage.removeItem('UILang');
            return;
        }

        if (_jsonLangObj == null)
            return;

        if (!("UILangs" in _jsonLangObj))
            return;
   
        var uiLang = null;

        $.each(_jsonLangObj.UILangs, function (i, val) {
            if (val == langAbbv) {
                uiLang = langAbbv;
                return false;           // break the loop - we found it
            }
        });

        if (uiLang) {
            setForeverCookie('UILang', langAbbv);
            if ('localStorage' in window && window['localStorage'] !== null) {
               localStorage.setItem('UILang', langAbbv );
            }
        }
    }


    var NARR_MRU_LIST_LEN = 4;
    function _getNarrationsMRUObj() {
        var defaultObj = { 'eng': ["spa", "tgl", "vie", "fre"],
                           'spa': ["eng"]
                         };
        var mruObj = getCookieObj('narrMRU', defaultObj);
        return mruObj;   
    }

    function _filterListForAllowableLangs(list, wLang) {
        var outList = [];
        var allowableLangs = _getInternalNarrationLanguages(wLang);
        for (i=0; i<list.length; i++) {
           var lang = list[i];
           if (jQuery.inArray(lang, allowableLangs) >= 0)
              outList.push(lang);
        }
        return outList;
    }

    function _getInternalNarrationsMRUList(wLang) {
        var mruObj = _getNarrationsMRUObj();
        var mruList = mruObj[wLang];
        if (!mruList)
           mruList = [];

        mruList = _addToEndOfList(mruList, _getNarrationLang());
        mruList = _filterListForAllowableLangs(mruList, wLang);

        var i=0;

        if (mruList.length == NARR_MRU_LIST_LEN)
           return mruList;

        if (mruList.length > NARR_MRU_LIST_LEN)
           return _lastXofList(mruList, NARR_MRU_LIST_LEN);

        var outList = _getInternalNarrationLanguages(wLang);
        outList = outList.reverse();

        for (i=0; i<mruList.length; i++) {
           var lang1 = mruList[i];
           outList = _addToEndOfList(outList, lang1);
        }

        mruList = _lastXofList(outList, NARR_MRU_LIST_LEN);
        
        return mruList;
    }

    function _getNarrationsMRUList(writtenLang, includeNative, engSort) {
        var list =  _getInternalNarrationsMRUList(writtenLang);
        list = list.reverse();

        return _convertListOfAbbvToOutput(list, includeNative, engSort);
    }

    function _addToEndOfList(list, value) {
        var outList = [];
        if (!list) {
           outList.push(value);
           return outList;
        }

        for (var i=0; i<list.length; i++) {
           var listVal = list[i]; 
           if (listVal != value)
              outList.push(listVal);
        }

        outList.push(value)
        return outList;
    }

    function _lastXofList(list, x) {
        if (x > list.length)
           return list;
        var numToSkip = list.length - x;
        var outList = [];
        for (var i=0; i<list.length; i++) {
            if (i < numToSkip)
               continue;
            var listVal = list[i];
            outList.push(listVal);
        }
        return outList;
    }

    function _addLangToMRUList(langAbbv) {
        if (langAbbv == '0')  //don't add None to list
           return;
        var mruObj = _getNarrationsMRUObj();
        var mruList = mruObj[_getWrittenLang()];
        var newList = _addToEndOfList(mruList, langAbbv);
        newList = _lastXofList(newList, 10); //keep the last 10 choices user made
        mruObj[_getWrittenLang()] = newList;
        setForeverCookieObj('narrMRU', mruObj);
    }

    function _specialSortFunction(abbvA, abbvB) {
        var soA = _getSortOrder(abbvA);
        var soB = _getSortOrder(abbvB);
        if (soA < soB)
           return -1;
        if (soA > soB)
           return 1;
        var nativeNameA = _buildLanguageName("native", abbvA, true);
        var nativeNameB = _buildLanguageName("native", abbvB, true);
        if (nativeNameA < nativeNameB)
           return -1;
        if (nativeNameA > nativeNameB)
           return 1;
        if (abbvA < abbvB)
           return -1;
        if (abbvA > abbvB)
           return 1;
        return 0;
    }

    function _getSortOrder(langAbbv) {
        if (_sortOrder[langAbbv] == null)
            return 999999;
        return _sortOrder[langAbbv];
    }

    _sortOrder = { "eng" : 100,
                   "spa" : 200,
                   "tgl" : 300,
                   "vie" : 400,
                   "fre" : 500,
                   "kor" : 600,
                   "deu" : 700,
                   "arb" : 800,
                   "rus" : 900,
                   "hat" : 1000,
                   "ita" : 1100,
                   "por" : 1200,
                   "hin" : 1300,
                   "pol" : 1400,
                   "cmn" : 1500,
                   "yue" : 1600,
                   "jpn" : 1700,
                   "urd" : 1800,
                   "fas" : 1900,
                   "guj" : 2000,
                   "ell" : 2100,
                   "hmn" : 2200,
                   "nav" : 2300,
                   "dut" : 2400,
                   "tur" : 2500,
                   "nep" : 2600,
                   "som" : 2700,
                   "swa" : 2800,
                   "bur" : 2900,
                   "swe" : 3000,
                   "kar" : 3100,
                   "dan" : 3200,
                   "esu" : 3300,
                   "chr" : 3400,
                   "mop" : 3500,
                   "asl" : 3600,
                   "cic" : 3700,
                   "ypk" : 3800,
                   "isl" : 3900,
                   "ipk" : 4000,
                   "kni" : 4100,
                   "kek" : 4200,
                   "kin" : 4300,
                   "kjb" : 4400,
                   "smo" : 4500,
                   "tsn" : 4600,
                   "slk" : 4700,
                   "amh" : 4800,
                   "arm" : 4900,
                   "bul" : 5000,
                   "run" : 5100,
                   "ymm" : 5200,
                   "mon" : 5300,
                   "tha" : 5400,
                   "chi" : 5500,
                   "afr" : 5600,
                   "tel" : 5700,
                   "oji" : 5800,
                   "apw" : 5900  };
}





function setCookie(name, value, days) {
    var expires;

    if (days > 0) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; secure; path=/";
}

function setCookieObj(name, obj, days) {
    var cookieStr = JSON.stringify(obj);
    setCookie(name, cookieStr, days);
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}



    function setSessionCookie(cname,cvalue)
    {
        setCookie(cname,cvalue,-1);
    }

    function setForeverCookie(cname,cvalue)
    {
        //In our world forever is 1000 years
        setCookie(cname,cvalue,365*1000);
    }

    function setSessionCookieObj(cname,cobj)
    {
        setCookieObj(cname,cobj,-1);
    }

    function setForeverCookieObj(cname,cobj)
    {
        //In our world forever is 1000 years
        setCookieObj(cname,cobj,365*1000);
    }


function getCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return "";
}

function getCookieObj(name, defaultObj) {
    if (!defaultObj)
       defaultObj = null;

    var cookieStr = getCookie(name);
    if (!cookieStr)
        return defaultObj;

    if (cookieStr.length == 0)
        return defaultObj;

    try{
        var obj = JSON.parse(cookieStr);
        return obj;
    } catch(e) {
        return defaultObj;
    }

    return defaultObj;
}


    function ga_init() {
       debugLog('ga_setup');
       if (isProductionHost()) {
          ga('create', 'UA-51273908-2', 'uniteforliteracy.com');
       }
       else {
          ga('create', 'UA-51273908-3', 'staging.uniteforliteracy.com');
       }
    }

    function ga_logPage() {
       ga('send', 'pageview');
    }

    function ga_share(shareType, isBookShare) {
        if (isBookShare)
            ga('send', 'event', 'BookShare', shareType, 'bookStats');
        else
            ga('send', 'event', 'LibShare', shareType, 'libraryStats');
    }


    function ga_modernizr() {
       //log the data 10% of the time
       //console.log(Modernizr);
       if (!oncePerPage("ga-Modernizr")) 
           return;
       if ((utils.getRandomInt(0,100) < 10) && (Modernizr)) {
           //console.log('mp3: ' + Modernizr.audio.mp3);
           ga('send', 'event', 'mp3', Modernizr.audio.mp3 , 'Modernizr');
           //console.log('h264: ' + Modernizr.video.h264);
           ga('send', 'event', 'h264', Modernizr.video.h264 , 'Modernizr');
           //console.log('dragNdrop: ' + Modernizr.draganddrop.toString());
           ga('send', 'event', 'dragNdrop', Modernizr.draganddrop.toString() , 'Modernizr');
       }
    }

    function ga_setupDimensions() {
        debugLog('ga_setupDimensions');

        //Note this is called early in the startup sequence to set the dimensions that
        //we already know and then called again later to update things like sponsor that
        //we will figure out later.
        //Be sure to protect any data that may not be initialized yet in the early call.
        ga('set', 'dimension1', getCookie('GeoLocFip') );

        var frontDoor_eventId = frontDoorData.getEventId();
        var eventId = frontDoor_eventId ? frontDoor_eventId : 'UFL';
        ga('set', 'dimension2', eventId );

        if (isBookMode()) {
            var ga_bookId = getBookId().toString();
            ga('set', 'dimension3', (ga_bookId.length > 0) ? ga_bookId : 'Unknown');

            var ga_sponsorId = sponsorData.getId() ? sponsorData.getId() : 'Unknown';
            ga('set', 'dimension4', ga_sponsorId);

            if ((ga_bookId == "1275") || (ga_bookId == "1264")) {
                var scenario = get_AB_test_scenario("July2018Next4Test");
                ga('set', 'dimension6', "July2018Next4Test-" + scenario);
            }
        }

        var path = get_pathDomain_dimension();
        ga('set', 'dimension5', path.toLowerCase());

        //ga('set', 'dimension6', get_AB_test_scenario_fullName("Aug2016Test"));

        ga('set', 'dimension7', languages.getWrittenLang() );
        ga('set', 'dimension8', languages.getNarrationLang() );
        ga('set', 'dimension9', languages.getUILang() );
    }

    function ga_setFamCodeDimension(famCode) {
        ga('set', 'dimension10', famCode );
    }

    function ga_LocationInfo() {
        if (!oncePerPage("ga-Location")) 
           return;
        ga('send', 'event', 'Location',   getCookie('GeoLocFip'), 'locationInfo');
    }

    function ga_EmbedData() {
        if (!oncePerPage("ga-EmbedData")) 
           return;
        if (!utils.is_iFrame()) //only log if we are in an iFrame
           return;
        var url = utils.getIFrameHostUrl().toLowerCase();
        if (url.indexOf('https://www.uniteforliteracy.com') >= 0)
           return;
        var removeQuery = url.split('?')[0];
        var splits = url.split('//');
        var hostDomain = removeQuery;
        if (splits.length > 1)
            hostDomain = splits[1].split('/')[0]; 
      
        ga('send', 'event', 'EmbedInfo', removeQuery, hostDomain);
    }

    function ga_LibPreLoad() {
        if (!oncePerPage("ga-LibPreLoad")) 
           return;
        ga('send', 'event', 'LibPreLoad', getLibId(), 'libraryStats');
        if (!utils.are_cookies_enabled())
           ga('send', 'event', 'cookiesDisabled', 'disabled', 'BookError');
    }

    function ga_LibStart() {
        if (!oncePerPage("ga-LibStart")) 
           return;
        ga('send', 'event', 'LibStart', getLibId(), 'libraryStats');

        if (urlParams.shr)
           ga('send', 'event', 'LibShareStart', getLibId(), 'libraryStats');
    }

    function ga_AASL_expand() {
        if (!oncePerPage("ga-AASLexpand")) 
           return;
        if (isBookMode() || isAboutMode()) 
            ga('send', 'event', 'AASLexpand', "show", 'bookStats');
        else
            ga('send', 'event', 'AASLexpand', "show", 'libraryStats');
    }

    function ga_BookPreLoad() {
        if (!oncePerPage("ga-BookPreLoad")) 
           return;
        ga('send', 'event', 'BookPreLoad', getBookId().toString(), 'bookStats');
    }

    function ga_BookNotFound(url) {
        ga('send', 'event', 'BookNotFound', url, 'bookStats');
    }

    function ga_BookStart() {
        if (!oncePerPage("ga-BookStart")) 
           return;
        ga('send', 'event', 'BookStart', getBookId().toString() + "," + book.getTitle(), 'bookStats');

        if (urlParams.shr)
           ga('send', 'event', 'BookShareStart', getBookId().toString() + "," + book.getTitle(), 'bookStats');

        var cookieCategoryName = backButtonData.getCategoryName();
        if (cookieCategoryName == "")
           cookieCategoryName = 'None';
        ga('send', 'event', 'BookCategory', cookieCategoryName, 'bookStats');

        var searchText = backButtonData.getSearchText();
        if (searchText == "")
           searchText = 'NONE';
        ga('send', 'event', 'SearchText', searchText, 'bookStats');

/*
        recentList = getRecentList();
        if (recentList.length > 1) {
           lastBookId = recentList[recentList.length-2];
           ga('send', 'event', library.getTitleIdFromBookId(getBookId()),
                               library.getTitleIdFromBookId(lastBookId),
                               'bookConnect');
        }
*/
    }

    var ga_sent_book_finished = false;
    function ga_BookEnd() {
        addBookToRecentList();
        ga('send', 'event', 'nextPageLast', 'execute', 'bookNav');
        if (oncePerPage("ga-BookEnd")) 
           ga('send', 'event', 'BookEnd', getBookId().toString() + "," + book.getTitle(), 'bookStats');
    }




    function isBookMode() {
        var path = getFilteredUrlPath();
        //console.log("filtered url path is " + path);
        if (path == "book") 
           return true;
        if (path == "booktest") 
           return true;
        return (path == "readbook");
    }

    function isStandAloneBook() {
        var path = getFilteredUrlPath();
        return (path == "readbook");
    }

    function isAboutMode() {
        var path = getFilteredUrlPath();
        return (path == "aboutbook");
    }


    function isCivicPage() {
        var path = utils.urlPath();
        return (path == "/corp/civicexamples");
    }
    




    


    function isProductionHost() {
        var hostname = window.location.hostname;
        if (hostname == "uniteforliteracy.com")
           return true;
        if (hostname == "create.uniteforliteracy.com")
           return true;
        return (hostname == "www.uniteforliteracy.com");
    }

	function CleanInputText(inputId) {
		var html = $.parseHTML($(inputId).val()),
			outStr = $(html).text();
		outStr = $.trim(outStr);
		return outStr;
	}

    function verticalCenterText(elemToCenter, elemContainerSizing, elemSetMargins, defFontSize, maxWidth) {
		if (defFontSize) {
			// scale the text before centering if we're not at full size
			var defaultFontSize = defFontSize,
			maxSponsorWrapperWidth = maxWidth,
			scaledTextSize = defaultFontSize + "pt";

			if ($(elemContainerSizing).width() < maxSponsorWrapperWidth) {
				scaledTextSize = (($(elemContainerSizing).width() / maxSponsorWrapperWidth) * defaultFontSize) + "pt";
			}

			$(elemToCenter).css("font-size", scaledTextSize);	// set the scaled font size
		}

        // use margins for vertical centering
		var parentH = $(elemContainerSizing).height(),
			contentH = $(elemToCenter).height();

		if (contentH >= parentH) {
			$(elemSetMargins).css("margin-top", "0px");           // make sure we always have values set - no carryovers
			$(elemSetMargins).css("margin-bottom", "0px");

		} else {
			var newH = (parentH - contentH) / 2;
			$(elemSetMargins).css("margin-top", newH + "px");
			$(elemSetMargins).css("margin-bottom", newH + "px");
		}
    }

    var oncePerPageItems=null;
    function oncePerPage(item) {
       if (oncePerPageItems == null)
          oncePerPageItems = {};
       if (oncePerPageItems[item] == item)
          return false;
       oncePerPageItems[item] = item;
       return true;
    }

    var urlParams;
    function readUrlParams() {
        var match,
            pl     = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
            query  = window.location.search.substring(1);

        urlParams = {};
        /* jshint -W084 */
        while (match = search.exec(query))
           urlParams[decode(match[1])] = decode(match[2]);
        /* jshint +W084 */
    }

	function LangSwitcher() {
        var currentUILangAbbv = languages.getUILang();
        
        var currentLangSelector = ".lang-" + currentUILangAbbv;
        
        // hide all panels to start
        $('.lang-switcher').addClass('hide');
        
        // and show any for the current written langauage
        // TBD - get the UI language abbreviation
        $(currentLangSelector).removeClass('hide');
	}



    _version = {};
    function readVersionCookies() {
       var versions = {};

       if (typeof DataFromServer === 'undefined')
           DataFromServer = {}; 

       if (!DataFromServer) 
           DataFromServer = {}; 

       if (DataFromServer.versions)
          versions = DataFromServer.versions;

       debugLog('readVersionCookies');

       prefix = (versions.prefix ? versions.prefix : '');

       _version.vStatic = prefix +  (versions.hasOwnProperty('staticVersion') ? versions.staticVersion : 'unknown');
       _version.vLib    = prefix +  (versions.hasOwnProperty('libVersion')    ? versions.libVersion    : 'unknown');
       _version.vBooks  = prefix +  (versions.hasOwnProperty('booksVersion')  ? versions.booksVersion  : 'unknown');
       _version.vSponsors = prefix +  (versions.hasOwnProperty('sponsorsVersion')  ? versions.sponsorsVersion  : 'unknown');
       _version.vFiles = prefix +  (versions.hasOwnProperty('filesVersion')  ? versions.filesVersion  : 'unknown');

       _version.vRversion = versions.hasOwnProperty('libRversion')  ? versions.libRversion.toString()  : 'unknown';
    }

function getZipCodes(callback)    { return _loadZipCodes(callback);  }

function getCountiesFromZipCode(zip_or_partialName) 
                                  { return _getCountiesFromZipCode(zip_or_partialName); }
function getCountyObjectFromName(ctyName)
                                  { return _getCountyObjectFromName(ctyName); }
function mapFipsCodeToName(fipCode)
                                  { return _mapFipsCodeToName(fipCode); }

function isZipCodesLoaded()       { return _isZipCodesLoaded(); }
function isRealZipCode(value)     { return _isRealZipCode(value); }

function accent_fold(s)           { return _accent_fold(s); }

function getCountiesForState(two_letter_state_code)  
                                  { return _getCountiesForState(two_letter_state_code); }

function convertStateAbbvToCode(stateAbbv) 
                                  { return _convertStateAbbvToCode(stateAbbv); }



    function _accent_fold (s) {
        if (!s) { return ''; }
        var ret = '';
        for (var i=0; i<s.length; i++) {
            ret += _accent_map[s.charAt(i)] || s.charAt(i);
        }
        return ret;
    }
    
    function _isZipCodesLoaded() {
        return ('ZipCodes' in zipCodes);
    }

    function _isRealZipCode(value) {
        if (!isZipCodesLoaded()) return false;

        var intValue = parseInt(value, 10);
        var strValue = intValue.toString();
        return (strValue in zipCodes.ZipCodes);
    }


    function _getCountiesFromZip(zip) {
        var counties = [];
        var zipNum = parseInt(zip, 10);
   
        if (!_isZipCodesLoaded()) return counties;

        var zipObj = zipCodes.ZipCodes;
        if (zipNum in zipObj) {
           for (var i=0; i < zipObj[zipNum].length; i++)  {
               counties.push(zipObj[zipNum][i]);
           }
        }

        return counties;
    }

    function _getCountiesFromName(name) {
        var counties = [];
        var ctyName  = _accent_fold(name.toLowerCase());
        var ctyLen   = ctyName.length;
        
        if (!_isZipCodesLoaded()) return counties;
        var zipCounties = zipCodes.Counties;

        for (var i = 0; i < zipCounties.length; i++) {
            // match on any string that starts with the typed characters
            // shorten the string first, then lowercase and accent fold it so those routines are quicker hopefully
            var s = _accent_fold(zipCounties[i].name.substr(0, ctyLen).toLowerCase());
            if (s == ctyName) {
                counties.push(zipCounties[i]);
            }
        }
        return counties;
    }
    
    function _getCountiesFromZipCode(zipValue) {
        var l = zipValue ? zipValue.length : 0;
        var isZip = $.isNumeric(zipValue);
        var counties = [];

        if (!_isZipCodesLoaded()) return counties;

        if (isZip && (l === 5)) counties = _getCountiesFromZip(zipValue);
        else if (!isZip && (l >= 3)) counties = _getCountiesFromName(zipValue);
        
        return counties;
    }

    function _getCountyObjectFromName(ctyName) {
        if (!_isZipCodesLoaded()) return null;

        var zipCounties = zipCodes.Counties;

        for (var i = 0; i < zipCounties.length; i++) {
            if (zipCounties[i].name == ctyName)
               return zipCounties[i];
        }

        return null;  //made it to the end without finding it
    }

    function _getCountiesForState(two_letter_state_code) {
        if (!_isZipCodesLoaded()) return [];

        var zipCounties = zipCodes.Counties;

        var list = [];
        for (var i = 0; i < zipCounties.length; i++) {
            if (zipCounties[i].state == two_letter_state_code)
               list.push(zipCounties[i]);
        }
        return list;
    }

    function _convertStateAbbvToCode(stateAbbv) {
        if (!_isZipCodesLoaded()) return "";
        var states = zipCodes.States;

        for (var i = 0; i < states.length; i++) {
            var stateObj = states[i];
            if (stateObj.abbv == stateAbbv)
               return stateObj.fip; 
        }

        return "";
    }

    function _convertStateFipToName(fipCode) {
        if (!_isZipCodesLoaded()) return "";
        var states = zipCodes.States;

        for (var i = 0; i < states.length; i++) {
            var stateObj = states[i];
            if (stateObj.fip == fipCode)
               return stateObj.name; 
        }

        return "";
    }

    function _mapFipsCodeToName(fipCode) {
        var returnName = '';

        if (!_isZipCodesLoaded())
           return returnName;

        var countryCode = fipCode.substr(0, 2);
        var stateCode   = fipCode.substr(2, 2);
        var countyCode  = fipCode.substr(4, 3);

        if (countryCode != 'US')
           return returnName;

        if ((stateCode == "XX") || (stateCode == ''))
           return returnName;

        if ((countyCode == "XXX") || (countyCode.length < 3))
           return _convertStateFipToName(stateCode);

        var zipCounties = zipCodes.Counties;

        for (var i = 0; i < zipCounties.length; i++) {
            var zObj = zipCounties[i];
            if (fipCode == zObj.fip)
               return zObj.name;
        }

        return returnName;
    }
    

    function _loadZipCodes(callback) {   
        if (_isZipCodesLoaded()) {
            if (callback) callback(null);
            return;
        }


        getS3jsonData({
                bucket: 'static',
                debugName: 'getZipFipCodes',
                urlPath: '/location/zipfipCode.json?v=' + _version.vStatic,
                success: function(obj) {
                    zipCodes = _processZipCodeFile(obj);
                    if (callback) callback(null);
                },
                error: function() {
                    if (callback) callback(err);
                }
        });
    }

    function _makeZipCountyName(countyStr) {
       var splits = countyStr.split(',');
       if (splits.length == 2)
          return splits[1] + " County";     // 'County' is not localized - sub US locations always shown in English
       else
          return splits[2];
    }

    function _processZipCodeFile(obj) {
       var zipObj = {};
       zipObj.States   = [];
       zipObj.Counties = [];
       zipObj.ZipCodes = {};
       
       var zipPrefix = 0;
       var curr_state_code, curr_state_name, curr_state_fip;
       var curr_county_obj;

       zipDataList = obj.zipdata;

       for (idx=0; idx<zipDataList.length; idx++) {
           var data = zipDataList[idx];
           if (data.substring) {   //check if data is a string
              if (data.indexOf("[STATE]") == 0) {
                 var splits = data.split(',');
                 curr_state_fip  = splits[1];
                 curr_state_code = splits[2];
                 curr_state_name = splits[3];
                 var stateObj = {
                     fip:  curr_state_fip,
                     abbv: curr_state_code,
                     name: curr_state_name
                 }
                 zipObj.States.push(stateObj);
              } else {  //County Name
                 curr_county_obj = {};
                 curr_county_obj.state = curr_state_code;
                 curr_county_obj.fip = 'US' + curr_state_fip + data.split(',')[0];            // US - country codes are not localized - only the names
                 curr_county_obj.type = 'M';
                 curr_county_obj.code = curr_county_obj.fip;
                 var countyName = _makeZipCountyName(data);
                 //curr_county_obj.StateName = curr_state_name;
                 curr_county_obj.name = countyName + ", " + curr_state_name;
                 //console.log(curr_county_obj.name + "  " + curr_county_obj.fip);
                 zipObj.Counties.push(curr_county_obj);
              }
           }
           else {  //data is a Number
              if (data < 100) {
                 var zipCode = zipPrefix + data;
                 if (!(zipCode in zipObj.ZipCodes)) 
                    zipObj.ZipCodes[zipCode] = [];
                 zipObj.ZipCodes[zipCode].push(curr_county_obj);
              }
              else if (data > 1000) //special case for zips that start with 0
                 zipPrefix = (data - 1000) * 100;
              else 
                 zipPrefix = data * 100;
           }
       }
       return zipObj;
    }

var zipCodes = {};

// accent folding to match those characters also
// https://github.com/aristus/accent-folding/blob/master/accent-fold.js
var _accent_map = {
    'ẚ':'a', 'Á':'a', 'á':'a', 'À':'a', 'à':'a', 'Ă':'a', 'ă':'a', 'Ắ':'a', 'ắ':'a', 'Ằ':'a', 'ằ':'a', 'Ẵ':'a', 'ẵ':'a', 'Ẳ':'a', 'ẳ':'a', 'Â':'a', 'â':'a', 'Ấ':'a', 'ấ':'a', 'Ầ':'a', 'ầ':'a', 'Ẫ':'a', 'ẫ':'a', 'Ẩ':'a', 'ẩ':'a', 'Ǎ':'a', 'ǎ':'a', 'Å':'a', 'å':'a', 'Ǻ':'a', 'ǻ':'a', 'Ä':'a', 'ä':'a', 'Ǟ':'a', 'ǟ':'a', 'Ã':'a', 'ã':'a', 'Ȧ':'a', 'ȧ':'a', 'Ǡ':'a', 'ǡ':'a', 'Ą':'a', 'ą':'a', 'Ā':'a', 'ā':'a', 'Ả':'a', 'ả':'a', 'Ȁ':'a', 'ȁ':'a', 'Ȃ':'a', 'ȃ':'a', 'Ạ':'a', 'ạ':'a', 'Ặ':'a', 'ặ':'a', 'Ậ':'a', 'ậ':'a', 'Ḁ':'a', 'ḁ':'a', 'Ⱥ':'a', 'ⱥ':'a', 'Ǽ':'a', 'ǽ':'a', 'Ǣ':'a', 'ǣ':'a',
    'Ḃ':'b', 'ḃ':'b', 'Ḅ':'b', 'ḅ':'b', 'Ḇ':'b', 'ḇ':'b', 'Ƀ':'b', 'ƀ':'b', 'ᵬ':'b', 'Ɓ':'b', 'ɓ':'b', 'Ƃ':'b', 'ƃ':'b',
    'Ć':'c', 'ć':'c', 'Ĉ':'c', 'ĉ':'c', 'Č':'c', 'č':'c', 'Ċ':'c', 'ċ':'c', 'Ç':'c', 'ç':'c', 'Ḉ':'c', 'ḉ':'c', 'Ȼ':'c', 'ȼ':'c', 'Ƈ':'c', 'ƈ':'c', 'ɕ':'c',
    'Ď':'d', 'ď':'d', 'Ḋ':'d', 'ḋ':'d', 'Ḑ':'d', 'ḑ':'d', 'Ḍ':'d', 'ḍ':'d', 'Ḓ':'d', 'ḓ':'d', 'Ḏ':'d', 'ḏ':'d', 'Đ':'d', 'đ':'d', 'ᵭ':'d', 'Ɖ':'d', 'ɖ':'d', 'Ɗ':'d', 'ɗ':'d', 'Ƌ':'d', 'ƌ':'d', 'ȡ':'d', 'ð':'d',
    'É':'e', 'Ə':'e', 'Ǝ':'e', 'ǝ':'e', 'é':'e', 'È':'e', 'è':'e', 'Ĕ':'e', 'ĕ':'e', 'Ê':'e', 'ê':'e', 'Ế':'e', 'ế':'e', 'Ề':'e', 'ề':'e', 'Ễ':'e', 'ễ':'e', 'Ể':'e', 'ể':'e', 'Ě':'e', 'ě':'e', 'Ë':'e', 'ë':'e', 'Ẽ':'e', 'ẽ':'e', 'Ė':'e', 'ė':'e', 'Ȩ':'e', 'ȩ':'e', 'Ḝ':'e', 'ḝ':'e', 'Ę':'e', 'ę':'e', 'Ē':'e', 'ē':'e', 'Ḗ':'e', 'ḗ':'e', 'Ḕ':'e', 'ḕ':'e', 'Ẻ':'e', 'ẻ':'e', 'Ȅ':'e', 'ȅ':'e', 'Ȇ':'e', 'ȇ':'e', 'Ẹ':'e', 'ẹ':'e', 'Ệ':'e', 'ệ':'e', 'Ḙ':'e', 'ḙ':'e', 'Ḛ':'e', 'ḛ':'e', 'Ɇ':'e', 'ɇ':'e', 'ɚ':'e', 'ɝ':'e',
    'Ḟ':'f', 'ḟ':'f', 'ᵮ':'f', 'Ƒ':'f', 'ƒ':'f',
    'Ǵ':'g', 'ǵ':'g', 'Ğ':'g', 'ğ':'g', 'Ĝ':'g', 'ĝ':'g', 'Ǧ':'g', 'ǧ':'g', 'Ġ':'g', 'ġ':'g', 'Ģ':'g', 'ģ':'g', 'Ḡ':'g', 'ḡ':'g', 'Ǥ':'g', 'ǥ':'g', 'Ɠ':'g', 'ɠ':'g',
    'Ĥ':'h', 'ĥ':'h', 'Ȟ':'h', 'ȟ':'h', 'Ḧ':'h', 'ḧ':'h', 'Ḣ':'h', 'ḣ':'h', 'Ḩ':'h', 'ḩ':'h', 'Ḥ':'h', 'ḥ':'h', 'Ḫ':'h', 'ḫ':'h', 'H':'h', '̱':'h', 'ẖ':'h', 'Ħ':'h', 'ħ':'h', 'Ⱨ':'h', 'ⱨ':'h',
    'Í':'i', 'í':'i', 'Ì':'i', 'ì':'i', 'Ĭ':'i', 'ĭ':'i', 'Î':'i', 'î':'i', 'Ǐ':'i', 'ǐ':'i', 'Ï':'i', 'ï':'i', 'Ḯ':'i', 'ḯ':'i', 'Ĩ':'i', 'ĩ':'i', 'İ':'i', 'i':'i', 'Į':'i', 'į':'i', 'Ī':'i', 'ī':'i', 'Ỉ':'i', 'ỉ':'i', 'Ȉ':'i', 'ȉ':'i', 'Ȋ':'i', 'ȋ':'i', 'Ị':'i', 'ị':'i', 'Ḭ':'i', 'ḭ':'i', 'I':'i', 'ı':'i', 'Ɨ':'i', 'ɨ':'i',
    'Ĵ':'j', 'ĵ':'j', 'J':'j', '̌':'j', 'ǰ':'j', 'ȷ':'j', 'Ɉ':'j', 'ɉ':'j', 'ʝ':'j', 'ɟ':'j', 'ʄ':'j',
    'Ḱ':'k', 'ḱ':'k', 'Ǩ':'k', 'ǩ':'k', 'Ķ':'k', 'ķ':'k', 'Ḳ':'k', 'ḳ':'k', 'Ḵ':'k', 'ḵ':'k', 'Ƙ':'k', 'ƙ':'k', 'Ⱪ':'k', 'ⱪ':'k',
    'Ĺ':'a', 'ĺ':'l', 'Ľ':'l', 'ľ':'l', 'Ļ':'l', 'ļ':'l', 'Ḷ':'l', 'ḷ':'l', 'Ḹ':'l', 'ḹ':'l', 'Ḽ':'l', 'ḽ':'l', 'Ḻ':'l', 'ḻ':'l', 'Ł':'l', 'ł':'l', 'Ł':'l', '̣':'l', 'ł':'l', '̣':'l', 'Ŀ':'l', 'ŀ':'l', 'Ƚ':'l', 'ƚ':'l', 'Ⱡ':'l', 'ⱡ':'l', 'Ɫ':'l', 'ɫ':'l', 'ɬ':'l', 'ɭ':'l', 'ȴ':'l',
    'Ḿ':'m', 'ḿ':'m', 'Ṁ':'m', 'ṁ':'m', 'Ṃ':'m', 'ṃ':'m', 'ɱ':'m',
    'Ń':'n', 'ń':'n', 'Ǹ':'n', 'ǹ':'n', 'Ň':'n', 'ň':'n', 'Ñ':'n', 'ñ':'n', 'Ṅ':'n', 'ṅ':'n', 'Ņ':'n', 'ņ':'n', 'Ṇ':'n', 'ṇ':'n', 'Ṋ':'n', 'ṋ':'n', 'Ṉ':'n', 'ṉ':'n', 'Ɲ':'n', 'ɲ':'n', 'Ƞ':'n', 'ƞ':'n', 'ɳ':'n', 'ȵ':'n', 'N':'n', '̈':'n', 'n':'n', '̈':'n',
    'Ó':'o', 'ó':'o', 'Ò':'o', 'ò':'o', 'Ŏ':'o', 'ŏ':'o', 'Ô':'o', 'ô':'o', 'Ố':'o', 'ố':'o', 'Ồ':'o', 'ồ':'o', 'Ỗ':'o', 'ỗ':'o', 'Ổ':'o', 'ổ':'o', 'Ǒ':'o', 'ǒ':'o', 'Ö':'o', 'ö':'o', 'Ȫ':'o', 'ȫ':'o', 'Ő':'o', 'ő':'o', 'Õ':'o', 'õ':'o', 'Ṍ':'o', 'ṍ':'o', 'Ṏ':'o', 'ṏ':'o', 'Ȭ':'o', 'ȭ':'o', 'Ȯ':'o', 'ȯ':'o', 'Ȱ':'o', 'ȱ':'o', 'Ø':'o', 'ø':'o', 'Ǿ':'o', 'ǿ':'o', 'Ǫ':'o', 'ǫ':'o', 'Ǭ':'o', 'ǭ':'o', 'Ō':'o', 'ō':'o', 'Ṓ':'o', 'ṓ':'o', 'Ṑ':'o', 'ṑ':'o', 'Ỏ':'o', 'ỏ':'o', 'Ȍ':'o', 'ȍ':'o', 'Ȏ':'o', 'ȏ':'o', 'Ơ':'o', 'ơ':'o', 'Ớ':'o', 'ớ':'o', 'Ờ':'o', 'ờ':'o', 'Ỡ':'o', 'ỡ':'o', 'Ở':'o', 'ở':'o', 'Ợ':'o', 'ợ':'o', 'Ọ':'o', 'ọ':'o', 'Ộ':'o', 'ộ':'o', 'Ɵ':'o', 'ɵ':'o',
    'Ṕ':'p', 'ṕ':'p', 'Ṗ':'p', 'ṗ':'p', 'Ᵽ':'p', 'Ƥ':'p', 'ƥ':'p', 'P':'p', '̃':'p', 'p':'p', '̃':'p',
    'ʠ':'q', 'Ɋ':'q', 'ɋ':'q',
    'Ŕ':'r', 'ŕ':'r', 'Ř':'r', 'ř':'r', 'Ṙ':'r', 'ṙ':'r', 'Ŗ':'r', 'ŗ':'r', 'Ȑ':'r', 'ȑ':'r', 'Ȓ':'r', 'ȓ':'r', 'Ṛ':'r', 'ṛ':'r', 'Ṝ':'r', 'ṝ':'r', 'Ṟ':'r', 'ṟ':'r', 'Ɍ':'r', 'ɍ':'r', 'ᵲ':'r', 'ɼ':'r', 'Ɽ':'r', 'ɽ':'r', 'ɾ':'r', 'ᵳ':'r',
    'ß':'s', 'Ś':'s', 'ś':'s', 'Ṥ':'s', 'ṥ':'s', 'Ŝ':'s', 'ŝ':'s', 'Š':'s', 'š':'s', 'Ṧ':'s', 'ṧ':'s', 'Ṡ':'s', 'ṡ':'s', 'ẛ':'s', 'Ş':'s', 'ş':'s', 'Ṣ':'s', 'ṣ':'s', 'Ṩ':'s', 'ṩ':'s', 'Ș':'s', 'ș':'s', 'ʂ':'s', 'S':'s', '̩':'s', 's':'s', '̩':'s',
    'Þ':'t', 'þ':'t', 'Ť':'t', 'ť':'t', 'T':'t', '̈':'t', 'ẗ':'t', 'Ṫ':'t', 'ṫ':'t', 'Ţ':'t', 'ţ':'t', 'Ṭ':'t', 'ṭ':'t', 'Ț':'t', 'ț':'t', 'Ṱ':'t', 'ṱ':'t', 'Ṯ':'t', 'ṯ':'t', 'Ŧ':'t', 'ŧ':'t', 'Ⱦ':'t', 'ⱦ':'t', 'ᵵ':'t', 'ƫ':'t', 'Ƭ':'t', 'ƭ':'t', 'Ʈ':'t', 'ʈ':'t', 'ȶ':'t',
    'Ú':'u', 'ú':'u', 'Ù':'u', 'ù':'u', 'Ŭ':'u', 'ŭ':'u', 'Û':'u', 'û':'u', 'Ǔ':'u', 'ǔ':'u', 'Ů':'u', 'ů':'u', 'Ü':'u', 'ü':'u', 'Ǘ':'u', 'ǘ':'u', 'Ǜ':'u', 'ǜ':'u', 'Ǚ':'u', 'ǚ':'u', 'Ǖ':'u', 'ǖ':'u', 'Ű':'u', 'ű':'u', 'Ũ':'u', 'ũ':'u', 'Ṹ':'u', 'ṹ':'u', 'Ų':'u', 'ų':'u', 'Ū':'u', 'ū':'u', 'Ṻ':'u', 'ṻ':'u', 'Ủ':'u', 'ủ':'u', 'Ȕ':'u', 'ȕ':'u', 'Ȗ':'u', 'ȗ':'u', 'Ư':'u', 'ư':'u', 'Ứ':'u', 'ứ':'u', 'Ừ':'u', 'ừ':'u', 'Ữ':'u', 'ữ':'u', 'Ử':'u', 'ử':'u', 'Ự':'u', 'ự':'u', 'Ụ':'u', 'ụ':'u', 'Ṳ':'u', 'ṳ':'u', 'Ṷ':'u', 'ṷ':'u', 'Ṵ':'u', 'ṵ':'u', 'Ʉ':'u', 'ʉ':'u',
    'Ṽ':'v', 'ṽ':'v', 'Ṿ':'v', 'ṿ':'v', 'Ʋ':'v', 'ʋ':'v',
    'Ẃ':'w', 'ẃ':'w', 'Ẁ':'w', 'ẁ':'w', 'Ŵ':'w', 'ŵ':'w', 'W':'w', '̊':'w', 'ẘ':'w', 'Ẅ':'w', 'ẅ':'w', 'Ẇ':'w', 'ẇ':'w', 'Ẉ':'w', 'ẉ':'w',
    'Ẍ':'x', 'ẍ':'x', 'Ẋ':'x', 'ẋ':'x',
    'Ý':'y', 'ý':'y', 'Ỳ':'y', 'ỳ':'y', 'Ŷ':'y', 'ŷ':'y', 'Y':'y', '̊':'y', 'ẙ':'y', 'Ÿ':'y', 'ÿ':'y', 'Ỹ':'y', 'ỹ':'y', 'Ẏ':'y', 'ẏ':'y', 'Ȳ':'y', 'ȳ':'y', 'Ỷ':'y', 'ỷ':'y', 'Ỵ':'y', 'ỵ':'y', 'ʏ':'y', 'Ɏ':'y', 'ɏ':'y', 'Ƴ':'y', 'ƴ':'y',
    'Ź':'z', 'ź':'z', 'Ẑ':'z', 'ẑ':'z', 'Ž':'z', 'ž':'z', 'Ż':'z', 'ż':'z', 'Ẓ':'z', 'ẓ':'z', 'Ẕ':'z', 'ẕ':'z', 'Ƶ':'z', 'ƶ':'z', 'Ȥ':'z', 'ȥ':'z', 'ʐ':'z', 'ʑ':'z', 'Ⱬ':'z', 'ⱬ':'z', 'Ǯ':'z', 'ǯ':'z', 'ƺ':'z',
    // Roman fullwidth ascii equivalents: 0xff00 to 0xff5e
    '２':'2', '６':'6', 'Ｂ':'B', 'Ｆ':'F', 'Ｊ':'J', 'Ｎ':'N', 'Ｒ':'R', 'Ｖ':'V', 'Ｚ':'Z', 'ｂ':'b', 'ｆ':'f', 'ｊ':'j', 'ｎ':'n', 'ｒ':'r', 'ｖ':'v', 'ｚ':'z', '１':'1', '５':'5', '９':'9', 'Ａ':'A', 'Ｅ':'E', 'Ｉ':'I', 'Ｍ':'M', 'Ｑ':'Q', 'Ｕ':'U', 'Ｙ':'Y', 'ａ':'a', 'ｅ':'e', 'ｉ':'i', 'ｍ':'m', 'ｑ':'q', 'ｕ':'u', 'ｙ':'y', '０':'0', '４':'4', '８':'8', 'Ｄ':'D', 'Ｈ':'H', 'Ｌ':'L', 'Ｐ':'P', 'Ｔ':'T', 'Ｘ':'X', 'ｄ':'d', 'ｈ':'h', 'ｌ':'l', 'ｐ':'p', 'ｔ':'t', 'ｘ':'x', '３':'3', '７':'7', 'Ｃ':'C', 'Ｇ':'G', 'Ｋ':'K', 'Ｏ':'O', 'Ｓ':'S', 'Ｗ':'W', 'ｃ':'c', 'ｇ':'g', 'ｋ':'k', 'ｏ':'o', 'ｓ':'s', 'ｗ':'w'
};



    // these dialogs all take a callback to be notified on completion.
    // the call back is called with a simple true or false value to say 
    // if the user saved any values are not. it's then up to the caller to
    // query for saved cookies, friendly names, etc as needed

function askZipLocation_World(callback)         { return _showZipModal(callback);  }
function checkAskZipLocationWizard(callback)    { return _checkAskZipLocationWizard(callback); }
function isLocationWizardShowing()              { return _isZipDialogOpen(); }



var _zipUIbailoutTimer = null,
    _zipUIcallBack = null,
    _zipLocationObj = null,
    _zipCountyList = null,
    _zipCountryList = null,
    _zipModalIdStr = '',
    _zipUSIndex = -99;

    
function _checkAskZipLocationWizard(callback) {
    if (utils.is_iFrame()) {
        if (callback)
            callback(false);        // not updated
        return;
    }

    if (_shouldShowZipWizard()) {
        setSessionCookie('WizardAlreadySeen','true');
        _showZipModal(callback);

    } else {
        setSessionCookie('WizardAlreadySeen','false');   //Set this so we know it is not a fresh session next time
        if (callback)
            callback(false);        // not updated
    }
}

function _shouldShowZipWizard() {
    if (_isLocWizardFlag())  //For Testing
        return true;

    //Check to see if the Wizard has already been run this session
    if (getCookie('WizardAlreadySeen') == 'true')
        return false;

    //Only want to show wizard in a fresh session
    if (getCookie('WizardAlreadySeen') != '')
        return false;

    //If we already have something better than IP location data, don't run the wizard
    var obj = locationInfo.get();
    if ((obj) && (obj.type != 'I'))
        return false;

    //Trigger the wizard every Nth session
    var counter=_getLocWizardCounterCookie();
    if (counter >= 2)  //trigger the wizard every 3rd session
        _setLocWizardCounterCookie(0);
    else
        _setLocWizardCounterCookie(counter + 1);

    if (counter > 0)        // runs when counter is 0, skips 1 and 2
        return false;

    return true; //run the Wizard
}

function _isLocWizardFlag() {
    if (urlParams)
        if (urlParams.wizard)
            return true;
    return false;
}

function _getLocWizardCounterCookie() {
    var locWizardCounter = 0,
        tempVal = getCookie('locWizardCounter');
        
    if (tempVal != '')
        locWizardCounter = parseInt(tempVal, 10) || 0;
    
    return locWizardCounter;
}

function _setLocWizardCounterCookie(val) {
   setForeverCookie('locWizardCounter', val.toString());
}


function _showZipModal(callback) {
    _zipUIcallBack = callback;
    _setBailoutTimer();
    
    if (locationInfo.get() == null)
       locationInfo.init(null);                    // don't need a callback here - if we have no data when we load that's OK
    getZipCodes(_checkUIReady);         // callback gets null or err
    
    getCountries(_checkUIReady);        // callback gets null or err
}

function _checkUIReady() {
    if ((isZipCodesLoaded() == false) ||        // no zip codes yet
        (isCountriesLoaded() == false) ||     // no country list yet, and it's needed
        (_isZipDialogOpen() == true))            // a dialog is already open
        return;

    locationInfo.updateName(); //update the name of the GeoCookie while we have the data loaded
        
    _clearBailoutTimer();

    // now intro dialog any more - just the main UI
    _zipModalIdStr = '#loc-wizard2';
    
    _zipLocationObj = locationInfo.get();
    _zipDialogInitCountries();
    _zipDialogRefresh(false);

    $(_zipModalIdStr).modal({
        show: true,
        backdrop: 'static',
        keyboard: false
    });
}

// build and show the country list if requested and available
function _zipDialogInitCountries() {
    $('.locationCountry', _zipModalIdStr).addClass('hide');

    _zipCountryList = getCountryList();
    $("#locationCountries").empty();

    if (_zipCountryList) { //safety check
        var currentCountryCode = 'US',                              // default to US if nothing found
            selected = false;
            
        if (_zipLocationObj) {
            // pull the country code from the fipcode if one exists. Can't match name since it is localized.
            if (_zipLocationObj.code && _zipLocationObj.code.length > 1)
                currentCountryCode = _zipLocationObj.code.substring(0,2);
        }
    
        for(var i=0; i<_zipCountryList.length; i++) {
            var obj = _zipCountryList[i],
                optStr = '';
            
            if (_isCountryCodeUS(obj.countryCode) == true)
                _zipUSIndex = i;
                
            if (obj.countryCode == currentCountryCode) {
                selected = true;
                optStr = '<option selected="selected" value="' + i.toString() + '">' + obj.name + '</option>';
            } else {
                optStr = '<option value="' + i.toString() + '">' + obj.name + '</option>';
            }

            $("#locationCountries").append(optStr);
        }
        
        if (selected == false && _zipUSIndex >= 0)
            $('#locationCountries').find('option[value="' + _zipUSIndex.toString() + '"]').attr("selected",true);
            
        $('.locationCountry', _zipModalIdStr).removeClass('hide');
    }
}

// no real good way to check this.
function _isCountryCodeUS(code) {
    if (!code) return false;
    return (code == 'US');      // country codes are not localized - only the names
}


function _zipDialogRefresh(isCountryJustChanged) {
    _zipDialogSetupZipEntryFields();
    _zipDialogSetupButtons(isCountryJustChanged);
}

// showing the UI fields depends on if we're in the US and if we have a
function _zipDialogSetupZipEntryFields() {   
    // defaults
    $('.zipUSonly', _zipModalIdStr).addClass('hide');
    $('.locationOneZip', _zipModalIdStr).addClass('hide');
    $('.locationMultiCounty', _zipModalIdStr).addClass('hide');
    
    if (_zipCountryIsUS()) {
        $('.zipUSonly', _zipModalIdStr).removeClass('hide');
        $('.ufl-set-zip-code', _zipModalIdStr).val('');
        
        // if we have a known county go ahead and show it.
        if (_zipLocationObj) {
            if (_zipLocationObj.name.length > 0) {
                $('.locationOneZip', _zipModalIdStr).removeClass('hide');
                $('.locationOneCounty', _zipModalIdStr).text(_zipLocationObj.name);
            }
        }
    }
}

// showing the buttons depends on if something savable is selected
function _zipDialogSetupButtons(isCountryJustChanged) {
    // 2016.10.06 - turn off geolocation since newer browsers only allow it from https
    // and we're only getting a 2% hit rate anyway
    // geo location and wait spinny. geo only visible if browser supported and we're in the US
    // because we only resolve/support subregions in the US
    //$('.zip-waiting', _zipModalIdStr).addClass('hide');
    
    //if ((_zipCountryIsUS() == true) && (locationInfo.isGeoSupported() == true))
    //    $('.zip-get-geo', _zipModalIdStr).removeClass('hide');
    //else
    //    $('.zip-get-geo', _zipModalIdStr).addClass('hide');
    
    
    // save button - on if not US, or if US and more than just country info
    $('.zip-save-data', _zipModalIdStr).prop('disabled', true);
    if (_zipLocIsSavable(isCountryJustChanged) == true)
        $('.zip-save-data', _zipModalIdStr).prop('disabled', false);
}

// determine if what we have is savable - enough info
function _zipLocIsSavable(isCountryJustChanged) {
    if (_zipCountryIsUS() == false) return true;    // non-US countries are savable
    if (isCountryJustChanged == true) return false;     // US just selected, no details yet
    if ($('.locationOneZip', _zipModalIdStr).hasClass('hide') == false) return true;    // a us county means we can save
    if ($('.locationMultiCounty', _zipModalIdStr).hasClass('hide') == false) return true;   // a list of counties means we can save
   return false;
}

// update the current location object based on a new country selection
function _zipUpdateLocationFromCountry(countryIndex) {
    _zipLocationObj = {};       // error condition if not found. UI will default
    if (_zipCountryList) {
        if ((countryIndex >= 0) && (countryIndex < _zipCountryList.length)) {
            _zipLocationObj = _zipCountryList[countryIndex];
        }    
    }
}

// US only is the default. Check it current country index matches the US index
function _zipCountryIsUS() {
    var index = parseInt($('#locationCountries :selected').val(), 10) || -1;  // -1 just so we don't match the -99 default
    return (index == _zipUSIndex);
}

// 2016.10.06 - turn off geolocation since newer browsers only allow it from https
// and we're only getting a 2% hit rate anyway
// we only resolve geolocation in the US, so we on;y call it there also.
// so we know if the callback gets a true value that we have a new valid object.
//function _zipGeoCallback(locationWasUpdated) {
//    if (locationWasUpdated == true)
//        _zipLocationObj = locationInfo.get();
//
//    _zipDialogRefresh(false);    // we always refresh so we turn on items turned off when geo was first clicked, including the spinny 
//}

$('.ufl-set-zip-code', _zipModalIdStr).on('input', function() {
    _zipCountyList = getCountiesFromZipCode($(this).val());

    $('.zip-save-data', _zipModalIdStr).prop('disabled', true);
    $('.locationOneZip', _zipModalIdStr).addClass('hide');
    $('.locationMultiCounty', _zipModalIdStr).addClass('hide');
    
    if (_zipCountyList.length == 1) {
        $('.locationOneZip', _zipModalIdStr).removeClass('hide');
        $('.locationOneCounty', _zipModalIdStr).text(_zipCountyList[0].name);
        $('.zip-save-data', _zipModalIdStr).prop('disabled', false);
        _zipLocationObj = _zipCountyList[0];

    } else if (_zipCountyList.length > 1) {
        $('.locationMultiCountySelect').empty();
        for (var i = 0; i < _zipCountyList.length; i++) {
            $('.locationMultiCountySelect').append('<option value="' + i.toString() + '">' + _zipCountyList[i].name + '</option>');
        }
        $('.locationMultiCounty', _zipModalIdStr).removeClass('hide');
        $('.zip-save-data', _zipModalIdStr).prop('disabled', false);
        _zipLocationObj = _zipCountyList[0];
            
    }
});


$('.locationMultiCountySelect', _zipModalIdStr).on('change', function() {
    if (_zipCountyList) {
        var index = parseInt(this.value, 10) || -1;
        if ((index >= 0) && (index < _zipCountyList.length)) {
            _zipLocationObj = _zipCountyList[index];
        }    
    }
});

$('#locationCountries').on('change', function() {
    var index = parseInt(this.value, 10) || -1;
    _zipUpdateLocationFromCountry(index);
    _zipDialogRefresh(true);
});


// save the data and inform the callback
$('.zip-save-data', _zipModalIdStr).on('click', function () {
    var updated = false;

    if (_zipLocationObj) {
        locationInfo.set(_zipLocationObj);
        updated = true;
    }

    if (_zipUIcallBack)
        _zipUIcallBack(updated);
});

$('.zip-nosave-data', _zipModalIdStr).on('click', function () {
    if (_zipUIcallBack)
        _zipUIcallBack(false);
});

// 2016.10.06 - turn off geolocation since newer browsers only allow it from https
// and we're only getting a 2% hit rate anyway
//$('.zip-get-geo', _zipModalIdStr).on('click', function () {
//    $('.zip-waiting', _zipModalIdStr).removeClass('hide');
//    $('.locationOneZip', _zipModalIdStr).addClass('hide');  // hide current county so that the geo refresh is more obvious
//    locationInfo.initWithGeo(_zipGeoCallback);
//});


// http://stackoverflow.com/questions/19506672/how-to-check-if-bootstrap-modal-is-open-so-i-can-use-jquery-validate
function _isZipDialogOpen() {
    if ((($("#loc-wizard2").data('bs.modal') || {}).isShown) ||
        (($("#loc-wizard-err").data('bs.modal') || {}).isShown))
        return true;
    return false;
}



function _setBailoutTimer() {
    _clearBailoutTimer();
    _zipUIbailoutTimer = setTimeout(function () { _showBailoutError(); }, 15000);
}

function _clearBailoutTimer() {
    clearTimeout(_zipUIbailoutTimer);
}

function _showBailoutError() {
    // if a dialog is already showing, do nothing
    if (_isZipDialogOpen()) return;
    _zipModalIdStr = '#loc-wizard-err';
    $(_zipModalIdStr).modal('show');
}

function getCountries(callback)   { return _loadCountries(callback);  }

function getCountryList()         { return jsonCountryList; }
function isCountriesLoaded()      { return _isCountriesLoaded(); }
function mapCountryCodeToName(countryCode)  
                                  { return _mapCountryCodeToName(countryCode); }


var jsonCountryList = null;


    function _isCountriesLoaded() {
        return (jsonCountryList != null);
    }

    function _mapCountryCodeToName(countryCode) {
        var returnName = '';

        if (!_isCountriesLoaded())
           return returnName;

        for (var i=0; i<jsonCountryList.length; i++) {
            var cObj = jsonCountryList[i];
            if (countryCode == cObj.countryCode)
               return cObj.name;
        }

        return returnName;
    }


    function _loadCountries(callback) {
        if (_isCountriesLoaded()) {
            if (callback) callback(null);
            return;
        }
        
        getS3jsonData({ bucket: 'static',
                        debugName: 'getLocationListCountries',
                        urlPath: '/location/countries2.json?v=' + _version.vStatic,
                        success: function (obj) {
                            jsonCountryList = [];
                            if (!obj) return;
                            var lang = languages.getUILang();
                            if (!(lang in obj)) return;
                            obj = obj[lang];
                            for (var i=0; i<obj.length; i++) {
                                var cObj = {};
                                cObj.type = 'M';
                                cObj.countryCode = obj[i].Code;
                                cObj.fip  = obj[i].Code + "00000";
                                cObj.code = cObj.fip;
                                cObj.name = obj[i].Country;
                                cObj.file = obj[i].RegionFile;
                                jsonCountryList.push(cObj);
                            }
                            // ensure the list is sorted by current UI lang
                            if (jsonCountryList != []) {
                                jsonCountryList.sort(function(a,b) {
                                    if (accent_fold(a.name.toLowerCase()) > accent_fold(b.name.toLowerCase())) return 1;
                                    else return -1;
                                });
                            }
                           
                            if (callback) callback(null);
                        },
                        error: function(err) {
                            if (callback) callback(err);
                        }
                      });
    }


function UFLlocation() {
   this.init = function(callback)          { return _location_init(callback);  };
                                            // geo's callback sends true/false to tell caller if the call succeeded
   this.initWithGeo = function(callback)   { return _setupLocationWithGeoLocation(callback);  };


   this.getFriendlyName = function()       { return _location_getFriendlyName(); };
   this.getTriplet = function()            { return _location_getTriplet();  };

   this.set = function(location_object)    { return _location_set(location_object); };
   this.get = function()                   { return _location_get(); };
   this.getdata = function()               { return _geoIPdata; };

   this.isGeoSupported = function()        { return _isGeoLocationSupported(); };
   this.updateName = function()            { return _locationUpdateName(); }; 

   this.getSponsorLocalStr = function()    { return _getSponsorLocalStr();  };
   this.getSponsorStateStr = function()    { return _getSponsorStateStr();  };
   this.getSponsorCountryStr = function()  { return _getSponsorCountryStr();};

   this.isFrontDoorGeoMatch = function(geoStr)  { return _isFrontDoorGeoMatch(geoStr); };

    var _geoIPdata = null;
    var _saveGeoIPdata = null;
    var _geoIPdataRetry = null;
    var _geoIPdataProxyRetry = null;


    var _location_init = function(doneCallback) {
        _geoIPdataRetry = false; //reset the retries
        _geoIPdataProxyRetry = false;

        _getLocationFromCookie();

        if (!_isLocationValid()) 
           _geoIPdata = null;

        if (!_geoIPdata) {
           //console.log('no geoIPdata - get from IP');
           _getLocationFromIP(doneCallback);
           return;
        }

        if (_geoIPdata.type == 'G') {    //GeoLocation Shared by user - best
           if (doneCallback)
              doneCallback();
           return;
        }

        if (_geoIPdata.type == 'C')  {   //Confirmed Location
           if (doneCallback)
              doneCallback();
           return;
        }

        if (_geoIPdata.type == 'M')  {   //Manual Set Location
           if (doneCallback)
              doneCallback();
           return;
        }

        if (_geoIPdata.type == 'I') {   //Location from IP Address
           if (doneCallback)
              doneCallback();
           return;
        }

        _getLocationFromIP(doneCallback);
    };


    var _saveGeoLocCookies = function() {
       if (!_geoIPdata)
          return;

       if (_geoIPdata.name)
           setForeverCookie('GeoName', _geoIPdata.name);

       if (_geoIPdata.fipCode)
           setForeverCookie('GeoLocFip', _geoIPdata.type + _geoIPdata.fipCode );
    };


    var _location_set = function(locationObj) {
       _geoIPdata.name = locationObj.name;

       _geoIPdata.type = (locationObj.type === 'I') ? 'C' : locationObj.type;  //convert I cookies to C cookies

       if ('fip' in locationObj) {
          _geoIPdata.fipCode = locationObj.fip;
          _saveGeoLocCookies();
       }

       else if ('code' in locationObj) {
          _geoIPdata.fipCode = locationObj.code;
          _saveGeoLocCookies();
       }
    };

    var _location_get = function() {
       if (!_isLocationValid())
             return null;

       var locObj = {};
       locObj.name = _location_getFriendlyName();
       locObj.code = _geoIPdata.fipCode;
       locObj.type = _geoIPdata.type;

       return locObj;
    };

    var _location_getTriplet = function() {
       var typStr = '';
       //if (includeType) 
       //   typStr = _geoIPdata.type;
       return typStr + _geoIPdata.fipCode;
    };

    var _location_getFriendlyName = function() {
        if (!_geoIPdata)
           return '';

        var name = '';
        var stateName = '';
        var countyName = '';

        if ((_geoIPdata.name) && (_geoIPdata.name.length > 0))
           return _geoIPdata.name;
		
        if ((_geoIPdata.stateName) && (_geoIPdata.stateName.length > 0))
           stateName = _geoIPdata.stateName; 
		
        if ((_geoIPdata.countyName) && (_geoIPdata.countyName.length > 0))
           countyName = _geoIPdata.countyName; 

        // MLR - 2015.06.23 if we have a stateCode but not a stateName, use the stateCode as the statename
        // otherwise, we just show "United States"
        // 2016.10.06 - we're also not localizing 'County' as a location string. Location details strings
        // will always be in English for the united states.
        if (stateName.length === 0)
           stateName = _geoIPdata.state;

        if ((countyName.length === 0) && (_geoIPdata.county.length > 0))
           countyName = _geoIPdata.county + " " + "County";

              // country codes are not localized - only the names
        if ((_geoIPdata.country == 'US') &&
            (stateName.length > 0) &&
            (_geoIPdata.county.length > 0) )
               name = countyName + ", " + stateName;

        else if ((_geoIPdata.country == 'US') &&
                 (stateName.length > 0))
               name = "United States" + " - " + stateName;

        else
               name = _geoIPdata.countryName;

        return name;
    };


    var _locationUpdateName = function() {
       //If the zip code file and countries file are loaded try to pull the official name
       if (!_geoIPdata.fipCode)
          return;

       var countyName = '';
       if (_geoIPdata.country == 'US') 
           countyName = mapFipsCodeToName(_geoIPdata.fipCode);  //EXTREF

       if (countyName != '') {
          //console.log('Found County Name: ' + countyName);
          _geoIPdata.name = countyName;
          _saveGeoLocCookies();
          return;
       }

       var countryName = mapCountryCodeToName(_geoIPdata.country); //EXTREF
       if (countryName != '') {
          //console.log('Found Country Name: ' + countryName);
          _geoIPdata.name = countryName;
          _saveGeoLocCookies();
          return;
       }
    };


    var _getLocationFromCookie = function() {
        debugLog('getLocationFromCookie');
        var geoLocCookie = getCookie('GeoLoc');
        var geoLocFipCookie = getCookie('GeoLocFip');

        if ((geoLocCookie == '') && (geoLocFipCookie == ''))
           return;

        var geoType = '', 
            geoFipCode='';
        var geoCountry = '', 
            geoState = '', 
            geoCounty = '';

        if (geoLocFipCookie != '') {
           geoType = geoLocFipCookie.substring(0,1);
           geoCountry = geoLocFipCookie.substring(1,3);
           geoState = geoLocFipCookie.substring(3,5);
           geoCounty = geoLocFipCookie.substring(5,50);
           geoFipCode = geoLocFipCookie.substring(1,50);
        } 

        if (geoType.length != 1)
           return;  // Not valid - leave now

        if ((geoType != 'I') && (geoType != 'G') && 
            (geoType != 'M') && (geoType != 'C')) 
           return;  //Not a valid geoType

        if (geoCountry.length < 2)
           return;  // Not valid - leave now

        _geoIPdata = {};
        _geoIPdata.type = geoType;
        _geoIPdata.country = geoCountry;
        _geoIPdata.name = getCookie('GeoName');
        if (geoFipCode != '')
           _geoIPdata.fipCode = geoFipCode;

        _geoIPdata.state  = geoState.toUpperCase();
        _geoIPdata.county = geoCounty;

        if (!_geoIPdata.countryName || (_geoIPdata.countryName.length < 1))
           if (_geoIPdata.country == 'US')
              _geoIPdata.countryName = 'United States';         // sub locations in the US are always shown in English
           else
              _geoIPdata.countryName = _geoIPdata.country;

        debugLog("getLocationFromCookie: yes");
    };

    var _isLocationValid = function() {
        debugLog("_isLocationValid");
        if (!_geoIPdata)
           return false;

        if (_geoIPdata.fipCode && (_geoIPdata.fipCode == 'US00000'))
           return false;

            // unknowns are always in English
        if (_geoIPdata.county == 'Unknown')
           return false;

        //All country codes should be 2 digits
        if (_geoIPdata.country.length != 2)
           return false;

        if (_geoIPdata.country == 'US') {
           if (!('state' in _geoIPdata))
              return false;
           if (_geoIPdata.state.length != 2)
              return false;
           if (!('county' in _geoIPdata))
              return false;
           if (_geoIPdata.county.length < 2)
              return false;
        }

        debugLog("_isLocationValid - true");
        return true;
    };


    var _getStateCountyInfoJSON = function(doneCallback) {
        if (_geoIPdata == null) {
            if (doneCallback)
               doneCallback();
            return;
        }

        //Only call FCC lookup for US data
        if (_geoIPdata.country != "US") {
            _geoIPdata.fipCode   = _geoIPdata.country + "XXXXX";
            _saveGeoLocCookies();
            if (doneCallback)
               doneCallback();
            return;
        }

        //County will be set to 'Unknown' if MaxMind call failed - unknown is always in English
        if ((_geoIPdata.state == 'CO') && (_geoIPdata.county == 'Unknown')) {
            _geoIPdata.fipCode   = "USXXXXX";
            _saveGeoLocCookies();
            if (doneCallback)
               doneCallback();
            return;
        }

        map_coordinates({
            longitude: _geoIPdata.longitude,
            latitude:  _geoIPdata.latitude,
            debugName: 'getStateCountyInfo',
            success: function (obj) {
               _geoIPdata.county = (obj.county != null) ? obj.county : '';
               //probably have a better state name from this API
               _geoIPdata.state  = (obj.state != null) ? obj.state : '';
               _geoIPdata.state  = _geoIPdata.state.toUpperCase();
               if (obj.name)
                  _geoIPdata.name = obj.name;
               if (obj.stateName)
                  _geoIPdata.stateName = obj.stateName;
               if (obj.fip)
                  _geoIPdata.fipCode = obj.fip;
               _saveGeoLocCookies();
               if (doneCallback)
                  doneCallback();
            },
            error: function() {
               //Handle the Error after retries are exhausted
               // the error string is not going to use the localized strings - just use english
               debugLog("FCC_map_coordinates: Error ");
               _geoIPdata.fipCode   = "USXXXXX";
               _geoIPdata.country   = "US";
               _geoIPdata.countryName  = "United States";
               _geoIPdata.state     = "XX";
               _geoIPdata.stateName = "Colorado";
               _geoIPdata.name      = "Unknown County, USA";
               _geoIPdata.county    = "Unknown";
               debugLog("getStateCountyInfoJSON: " + JSON.stringify(_geoIPdata));
               sendDebugLog('/corp/unknownCountyDebug');
               if (doneCallback)
                  doneCallback();
            }
        });
    };



    var _getLocationFromIP = function(doneCallback) {
        debugLog("getLocationFromIP");
        _getLocationFromMaxMindNew(function (err, posObj) {
            if (err) {
               // Can't get the location from MaxMind - setup Defaults
               // unknowns are not going to use the localized strings - just use english
               _geoIPdata = {};
               _geoIPdata.failed    = true;
               _geoIPdata.country   = "US";
               _geoIPdata.state     = "CO";
               _geoIPdata.county    = "Unknown";
               _geoIPdata.ip        = "";
               _geoIPdata.type      = 'I';
               _geoIPdata.name      = "Unknown County, USA";
               _geoIPdata.latitude  = 99999;
               _geoIPdata.longitude = 99999;

               sendDebugLog('/corp/unknownCountyDebug');
            } else {
               debugLog("getLocationFromIP: success");
               //console.log(JSON.stringify(posObj));
               _geoIPdata = {};
               _geoIPdata.country   =  posObj.country;
               _geoIPdata.countryName = posObj.countryName;
               _geoIPdata.type      = 'I';
               _geoIPdata.state     = posObj.state;
               _geoIPdata.stateName = posObj.stateName;
               _geoIPdata.county    = "";
               _geoIPdata.ip        = posObj.ip;
               _geoIPdata.latitude  = posObj.latitude;
               _geoIPdata.longitude = posObj.longitude;
               debugLog("getLocationFromIP: " + JSON.stringify(_geoIPdata) );
            }
            _getStateCountyInfoJSON(doneCallback);
        });
    };



    var _getLocationFromMaxMindNew = function(callback) {
        debugLog("getLocationFromMaxMindNew");

        if (typeof(geoip2) === 'undefined')  {
            if (callback) callback(new Error("MaxMindJS_FAILED_TO_LOAD"));
            return;
        }

        var hostname = window.location.hostname;
        if ((hostname.indexOf('uniteforliteracy.com') < 0) && 
            (hostname.indexOf('unitebooks.com') < 0)) {
            if (callback) callback(new Error("MaxMindJS_Bad_Hostname"));
            return;
        }
           
        geoip2.cityISPOrg(
            function maxMindSuccess(response) { onMaxMindIPSuccess(response, callback); }, 
            function maxMindErr(error)        { onMaxMindIPError(error, callback); }
        );
    };


    var _getLocationViaProxyNew = function(callback) {
        debugLog("getLocationViaProxy");
        $.ajax({
                  type: "GET",
                  url: "/locproxy",
                  async: true,
                  dataType: "json",
                  success: function (obj) {
                      debugLog("getLocationViaProxy: success");
                      onMaxMindIPSuccess(obj, callback);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      debugLog("getLocationViaProxy: error: " + jqXHR.status.toString());
                      onMaxMindIPError({code: "FAILED_LOCATION_PROXY"}, callback);
                  }
                });
    };

    var onMaxMindIPSuccess = function(geoipResponse, callback) {
        debugLog("getLocation: success");

        posObj = {};
        posObj.country   = geoipResponse.country.iso_code.toUpperCase();
        posObj.countryName  = geoipResponse.country.names.en;
        posObj.ip        = geoipResponse.traits.ip_address;
        posObj.latitude  = geoipResponse.location.latitude.toString();
        posObj.longitude = geoipResponse.location.longitude.toString();

        posObj.state     = "";
        posObj.stateName = "";
        if ((geoipResponse.subdivisions.length > 0) &&
            (geoipResponse.subdivisions[0].iso_code) &&
            (geoipResponse.subdivisions[0].names) &&
            (geoipResponse.subdivisions[0].names.en)) {
           posObj.state     = geoipResponse.subdivisions[0].iso_code.toUpperCase();
           posObj.stateName = geoipResponse.subdivisions[0].names.en;
        }
        
        if (callback) callback(null, posObj);
    };

    var onMaxMindIPError = function(error, callback) {
        debugLog("getLocation: error " + error.code);
        //console.log("getLocation: error " + error.code);

        // Allow one retry
        if (!_geoIPdataRetry) {
           _geoIPdataRetry = true;
           _getLocationFromMaxMindNew(callback);
           return;
        }
        // Then allow one retry using the UFL proxy
        if (!_geoIPdataProxyRetry) {
           _geoIPdataProxyRetry = true;
           _getLocationViaProxyNew(callback);
           return;
        }

        // If we get here - we have exhausted our retries
        ga('send', 'event', 'maxMindErr', error.code, 'BookError');

        if (callback) callback(error, null);
    };


    var _saveCurrentInformation = function() {
       _saveGeoIPdata = JSON.stringify(_geoIPdata);
    };

    var _restoreCurrentInformation = function() {
       _geoIPdata = JSON.parse(_saveGeoIPdata);
    };


    var _setupLocationWithGeoLocation = function(callback) {
        _saveCurrentInformation();
        _getGeoLocationFromTheBrowser(function(err, locObj) { 
           if (err) {
              _restoreCurrentInformation();
              debugLog("setupLocationWithGeoLocation: Failed: " + JSON.stringify(_geoIPdata));
              if (callback) callback(false);
           } else {
              _geoIPdata = {};
              _geoIPdata.type  = 'G';
              _geoIPdata.latitude  = locObj.latitude;
              _geoIPdata.longitude = locObj.longitude;
              _geoIPdata.country = 'US';
              debugLog("setupLocationWithGeoLocation: " + JSON.stringify(_geoIPdata));
              _setupLocationWithGeoLocation_Step2(callback);
           }
        });
    };

    var _setupLocationWithGeoLocation_Step2 = function(callback) {
        _getStateCountyInfoJSON(function() {
            var updated = true;
            if (_geoIPdata.county == "Unknown") {
               _restoreCurrentInformation();
               updated = false;
            } 
            debugLog("setupLocationWithGeoLocation_Step2: " + JSON.stringify(_geoIPdata));
            if (callback) callback(updated);
        });
    };


    var _isGeoLocationSupported = function() {
        //if (isNoGeoLocationFlag())  //For Testing
        //   return false;

        // Better off with MaxMind data if outside of US
        // country codes are not localized - only the names
        if (_geoIPdata && (_geoIPdata.country != 'US'))
           return false;

        if (navigator.geolocation)
           return true;
        return false;
    };

    var _getGeoLocationFromTheBrowser = function(callback) {
        debugLog("getGeoLocationFromTheBrowser");

        // similar code in the viewbook.js file
        // if the browser supports the w3c geo api
        // timeout is 30 seconds. maximage age is one hour
        var options = {
            timeout: 30000,
            maximumAge: 3600000,
            enableHighAccuracy: false
        };

        if (!navigator.geolocation) {
           debugLog("getGeoLocationFromTheBrowser: not supported");
           if (callback) callback(new Error("Not_Supported"), null);
           return;
        }

        // 2016.10.06 - newer browsers (Chrome M50, iOS 10, Desktop safari) now only allow this call from https
        // so it is less valuable to us now until/unless we start running the site as https.
        // those browsers will still say they support the call, but it fails on http pages.
        
        // get the current position
        navigator.geolocation.getCurrentPosition(
            function getLocationCoords(position) {
                debugLog("getGeoLocationFromTheBrowser: success");
                debugLog("getGeoLocationFromTheBrowser:" + position.coords.latitude.toString());
                debugLog("getGeoLocationFromTheBrowser:" + position.coords.longitude.toString());
               
                var retObj = {};
                retObj.latitude = position.coords.latitude.toString();
                retObj.longitude = position.coords.longitude.toString();

                if (callback) callback(null, retObj);
            }, 
            function getLocationError(err) {
                debugLog("getGeoLocationFromTheBrowser: Error - " + JSON.stringify(err));
                if (callback) callback(err, null);
            },             
            options);
    };

// Functions to map geo location codes to appropriate representations used elsewhere in the sytem

    var _getSponsorLocalStr = function() {
        return _geoIPdata.fipCode;
    };

    var _getSponsorStateStr = function() {
        return _geoIPdata.fipCode.substring(0,4) + "XXX";
    };

    var _getSponsorCountryStr = function() {
        return _geoIPdata.fipCode.substring(0,2) + "XXXXX";
    };

    var _isFrontDoorGeoMatch = function(geoStr) {
       if (geoStr == "")
          return true;

       if (!geoStr)
          return false;

       var currentGeo = getCookie('GeoLocFip');
       var geos = geoStr.split(',');

       for (var i=0; i < geos.length; i++) {
           var allowedGeo = geos[i];
           allowedGeo = $.trim(allowedGeo);
           allowedGeo = allowedGeo.replace('XXXXXX',''); //remove trailing Xs
           allowedGeo = allowedGeo.replace('XXXXX','');
           allowedGeo = allowedGeo.replace('XXXX','');
           allowedGeo = allowedGeo.replace('XXX','');
           allowedGeo = allowedGeo.replace('XX','');
           if (currentGeo.indexOf(allowedGeo) == 1) //should always be 1 because GeoLoc begins with a 'G','I',etc
              return true; //found it
       }
       return false;
    };

}  //class



function map_coordinates(reqInfo) {
    debugLog(reqInfo.debugName + " map_coordinates");
    debugLog(reqInfo.debugName + " Lat: " + reqInfo.latitude);
    debugLog(reqInfo.debugName + " Long: " + reqInfo.longitude);

    var finalErrFunction = reqInfo.error;
    var finalSuccessFunction = reqInfo.success;

    if (!reqInfo.retries) reqInfo.retries = 0;
    if (!reqInfo.timeout) reqInfo.timeout = 20000;

    if (!reqInfo.useCensusApi) 
       reqInfo.useCensusApi = true; //start with census
    else
       reqInfo.useCensusApi = !reqInfo.useCensusApi;  //switch API every other time

    //Can't use the Census API from HTTPS page currently
    if (location.protocol == "https:")
       reqInfo.useCensusApi = false;

    reqInfo.error = function() {
        debugLog(reqInfo.debugName + "map_coordinates: error");
        reqInfo.retries++;
        reqInfo.timeout += 5000;  //wait 5 seconds longer each try

        if (reqInfo.retries < 4) {
            map_coordinates(reqInfo);  //try again
            return;
        }

        ga('send', 'event', 'FCCmapError', '', 'BookError');

        //Exhausted all of our retries - call the main error function
        if (finalErrFunction)
            finalErrFunction();
    }; // reqInfo.error function

    reqInfo.success = function(obj) {
       if (!obj || !obj.county) {
          reqInfo.error();
          return;
       }

       if (finalSuccessFunction)
          finalSuccessFunction(obj);
    };  //reqInfo.success function

    if (reqInfo.useCensusApi)
       Census_map_coordinates(reqInfo);
    else
       FCC_map_coordinates(reqInfo);
}


    function FCC_map_coordinates(reqInfo) {
        debugLog(reqInfo.debugName + " FCC_map_coordinates");

        //Note: This is a JSONP call since it is cross domain
        //JSONP does not fire the error condition so we have to set a timeout to catch a failure on this call
        var urlBase = "https://geo.fcc.gov/api/census/block/find?latitude=<<lat>>&longitude=<<long>>&showall=false&format=json";
        var url = urlBase.replace("<<lat>>",reqInfo.latitude).replace("<<long>>",reqInfo.longitude);

        $.ajax({
                  type: "GET",
                  url: url,
                  async: true,
                  dataType: "json",
                  timeout: reqInfo.timeout,
                  success: function (obj) {
                      debugLog(reqInfo.debugName + " FCC_map_coordinates: success");
                      debugLog(JSON.stringify(obj));
                      var retObj = convertFCCdataToOutput(obj);
                      debugLog(JSON.stringify(retObj));
                      if (reqInfo.success)
                         reqInfo.success(retObj);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      debugLog(reqInfo.debugName + " FCC_map_coordinates: error");
                      if (reqInfo.error)
                         reqInfo.error();
                  }
              });
    }

function convertFCCdataToOutput(obj) {
    var emptyObj = {};

    if (!obj)
        return emptyObj;

    if (!('County' in obj))
        return emptyObj;

    if (!('State' in obj))
        return emptyObj;

    if (!obj.County.name)
        return emptyObj;

    if (!obj.State.code)
        return emptyObj;

    if (!obj.State.name)
        return emptyObj;

    if (obj.County.name.length < 1)
        return emptyObj;

    if (obj.State.code.length < 2)
        return emptyObj;

    var retObj = {};
    retObj.county = obj.County.name;
    retObj.fip    = "US" + obj.County.FIPS;
    retObj.state  = obj.State.code.toUpperCase();
    retObj.stateName  = obj.State.name;

    return retObj;
}


    function Census_map_coordinates(reqInfo) {
        debugLog(reqInfo.debugName + " Census_map_coordinates");

        //Note: This is a JSONP call since it is cross domain
        //JSONP does not fire the error condition so we have to set a timeout to catch a failure on this call
        var urlBase = "https://geocoding.geo.census.gov/geocoder/geographies/coordinates?x=<<long>>&y=<<lat>>&benchmark=9&vintage=910&format=jsonp";
        var url = urlBase.replace("<<lat>>",reqInfo.latitude).replace("<<long>>",reqInfo.longitude);

        $.ajax({
                  type: "GET",
                  url: url,
                  async: true,
                  dataType: "jsonp",
                  timeout: reqInfo.timeout,
                  success: function (obj) {
                      debugLog(reqInfo.debugName + " Census_map_coordinates: success");
                      debugLog(JSON.stringify(obj));
                      var retObj = convertCensusDataToOutput(obj);
                      debugLog(JSON.stringify(retObj));
                      if (reqInfo.success)
                         reqInfo.success(retObj);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      debugLog(reqInfo.debugName + " Census_map_coordinates: error");
                      if (reqInfo.error)
                         reqInfo.error();
                  }
              });
    }


function convertCensusDataToOutput(obj) {
   var emptyObj = {};
   if (!obj) 
       return emptyObj;

   if (!('result' in obj))
       return emptyObj;

   if (!('geographies' in obj.result))
       return emptyObj;

   if (!obj.result.geographies.Counties)
       return emptyObj;

   if (!obj.result.geographies.States)
       return emptyObj;

   if (obj.result.geographies.Counties.length < 1)
       return emptyObj;

   if (obj.result.geographies.States.length < 1)
       return emptyObj;

   var retObj = {};

   retObj.county = obj.result.geographies.Counties[0].BASENAME;
   retObj.fip = "US" + obj.result.geographies.Counties[0].GEOID;
   retObj.state = obj.result.geographies.States[0].STUSAB;

   var countyName = obj.result.geographies.Counties[0].NAME;
   var stateName = obj.result.geographies.States[0].NAME;
   retObj.name = countyName + "," + stateName;

   return retObj;
}




    function genericLoadImage(reqInfo) {
       debugLog("genericLoadImage: " + reqInfo.imgUrl);
       if (!reqInfo.retries) reqInfo.retries = 0;

       var image = new Image();

       $(image).on('error', function () {
           debugLog("genericLoadImage: Error: " + reqInfo.imgUrl);
           reqInfo.retries++;
           if (reqInfo.retries < 2) {
               genericLoadImage(reqInfo);  //try again
               return;
           }
           //Exhausted all of our retries - call the main error function
           ga('send', 'event', 'loadImageErr', reqInfo.imgUrl, 'BookError');
           if (reqInfo.error)
              reqInfo.error();
       });

       $(image).one('load', function () {
           debugLog("genericLoadImage: Success: " + reqInfo.imgUrl);
           if (reqInfo.success)
              reqInfo.success();
       });

       image.src = reqInfo.imgUrl;
    }


    var jsonFailoverFlag = null;
    function useJsonFailover() {
       if (jsonFailoverFlag == null) {
          //initialize with value from cookie
          var val = getCookie('jsonProxy');
          jsonFailoverFlag = (val == '1');
       }
       return jsonFailoverFlag;
    }

    function setJsonFailoverCookie() {
        //set a session cookie
        //we will use this for the rest of the session on all
        //JSON gets to get the data from our proxy instead of S3
        if (!jsonFailoverFlag)
           setSessionCookie('jsonProxy', '1');
        jsonFailoverFlag = true;
    }


    function rootS3PathConvert(path) {
        if (!path)
           return path;
        if (location.protocol == "https:")
           path = path.replace("http:", "https:");

        //if this is already a -cloud refernce - it has already been through here - don't process again
        if (path.indexOf("-cloud.uniteforliteracy.com") > -1)
           return path;

        if (path.indexOf("files.uniteforliteracy.com") > -1)
           return path.replace("files.uniteforliteracy.com","files-cloud.uniteforliteracy.com");
        if (path.indexOf("reader-bucket.uniteforliteracy.com") > -1)
           return path.replace("reader-bucket.uniteforliteracy.com","reader-cloud.uniteforliteracy.com");
        if (path.indexOf("sponsors.uniteforliteracy.com") > -1)
           return path.replace("sponsors.uniteforliteracy.com","sponsors-cloud.uniteforliteracy.com");
        if (path.indexOf("books.uniteforliteracy.com") > -1)
           return path.replace("books.uniteforliteracy.com","books-cloud.uniteforliteracy.com");
        if (path.indexOf("lib.uniteforliteracy.com") > -1)
           return path.replace("lib.uniteforliteracy.com","lib-cloud.uniteforliteracy.com");
        if (path.indexOf("static.uniteforliteracy.com") > -1)
           return path.replace("static.uniteforliteracy.com","static-cloud.uniteforliteracy.com");
        if (location.protocol == "https:")
           return path.replace("https://", "https://s3-us-west-2.amazonaws.com/");
        return path;
    }

    function getS3jsonUrl(bucket, urlPath) {
        var targetUrl = "http://" + bucket + ".uniteforliteracy.com" + urlPath;

        return rootS3PathConvert(targetUrl);
    }

    function getS3jsonData(reqInfo) {
        debugLog(reqInfo.debugName);
        var targetUrl = getS3jsonUrl(reqInfo.bucket, reqInfo.urlPath);

        if (useJsonFailover && useJsonFailover())
           reqInfo.useProxy = true;
        reqInfo.useProxy = false; // force to false for now

        //reqInfo.useProxy = true;
        if (!reqInfo.retries) reqInfo.retries = 0;
        if (!reqInfo.timeout) reqInfo.timeout = 7000; // 7 seconds to start

        if (reqInfo.useProxy)
           targetUrl = "/jsonProxy/" + reqInfo.bucket + reqInfo.urlPath;

        var verStr = null;
        if (reqInfo.cacheBust)
           verStr = null;
        else if (reqInfo.bucket == 'books')
           verStr =  _version.vBooks;
        else if (reqInfo.bucket == 'sponsors')
           verStr = _version.vSponsors;
        else if (reqInfo.bucket == 'lib')
           verStr = _version.vLib;
        else if (reqInfo.bucket == 'static')
           verStr = _version.vStatic;
        else if (reqInfo.bucket == 'reader-bucket')
           verStr = _version.vLib;

        if (!verStr) {
           var d = new Date();
           verStr = d.getTime();
        }

        targetUrl += '?v=' + verStr;

        debugLog(reqInfo.debugName + ": " + targetUrl);

        jQuery.support.cors=true;
        $.ajax({
                  type: "GET",
                  url: targetUrl,
                  async: true,
                  dataType: "json",
                  timeout: reqInfo.timeout,
                  success: function (obj) {
                      debugLog(reqInfo.debugName + ": success");
                      if (reqInfo.useProxy) {
                         //our failover worked - set a cookie
                         //for the rest of this session, we will jump straight to the failover
                         setJsonFailoverCookie();
                         if (oncePerPage("ga-usedJsonProxy"))
                            ga('send', 'event', 'jsonProxyUsed', '', 'BookError');
                      }
                      if (reqInfo.success)
                         reqInfo.success(obj);
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                      debugLog(reqInfo.debugName + ": error " + jqXHR.status.toString());
                      debugLog(reqInfo.debugName + ": error " + textStatus);
                      debugLog(reqInfo.debugName + ": error " + JSON.stringify(jqXHR, null, 2));
                      debugLog(reqInfo.debugName + ": error " + JSON.stringify(errorThrown, null, 2));
                      reqInfo.retries++;
                      reqInfo.timeout += 7000;  //wait 7 seconds longer each try

                      if (jqXHR.status == 403) {
                         // File is not there - no reason to retry
                         // The following values will cause it to just return
                         reqInfo.retries = 99;
                         reqInfo.useProxy = true;
                      }

                      if (jqXHR.status == 0) {  //usually a timeout
                         if (reqInfo.expectFail) {
                            // Don't do a bunch of retries - we kind of expect this call to fail
                            // Normally it should fail fast with a 403 but some proxies appear to be blocking this
                            // Handle it like we do the 403 above...
                            // The following values will cause it to just return
                            reqInfo.retries = 99;
                            reqInfo.useProxy = true;
                         }
                      }

                      if (reqInfo.retries < 2) {
                         getS3jsonData(reqInfo);  //try again
                         return;
                      }

                      if (!reqInfo.useProxy) {
                         reqInfo.useProxy=true;
                         reqInfo.retries=0;
                         getS3jsonData(reqInfo);
                         return;
                      }

                      // Log the error to GA unless this is a situation we expect to fail often (like sponsor)
                      if (!reqInfo.expectFail)
                          ga('send', 'event', 'jsonLoadErr', reqInfo.urlPath, 'BookError');

                      //Exhausted all of our retries - call the main error function
                      if (reqInfo.error)
                         reqInfo.error();
                  }
              });
    }

    function getRecentList() {
       var list = [],
           listStr = getCookie('recent');
       if (listStr.length > 0)
          list = listStr.split(',');
       return list;
    }


    function putRecentList(list) {
       var cookieValue = '';
       if (list.length > 0)
         cookieValue = list.join(',');
       setForeverCookie('recent', cookieValue);
    }

    function isBookOnRecentList(bookId) {
       var bookIdStr = bookId.toString(),
           list = getRecentList(),
           index = jQuery.inArray( bookIdStr, list );
       return (index >= 0);
    }

    function addBookToRecentList() {
       if ( !document.addEventListener )
          return;  //This is IE8 or less - don't worry with recent list

       var bookIdStr = getBookId().toString(),
           list = getRecentList(),
           index = jQuery.inArray( bookIdStr, list );
       if (index >= 0)
          list.splice(index,1); //remove item so we don't have duplicates
       list.push(bookIdStr);
       putRecentList(list.slice(-20)); // keep the last 20
    }

    var debugMode=null;
    var debugRefTime = null;
    var debugLogArray = [];

    function isDebugMode() {
        //return true;  //Force Debug mode on
        if (debugMode)
           return debugMode;
        if (getUrlDebug())
           debugMode = getUrlDebug().toLowerCase() == "true";
        else
           debugMode=false;
        return debugMode;
    }

    function checkDebugMode() {
        var d = new Date();
        debugRefTime = d.getTime();
        if (isDebugMode()) {
            $(".innerBody").css("height","auto");
            $("#debugLog").show();
            $("#debugLog").append('<ul id="debugList"></ul>');
        }
        debugLog("JS Version: " + jsVersion);
        debugLog("HTML Version: " + HTML_version);
        debugLog(navigator.userAgent);
    }

    function debugLog(logStr) {
        var d = new Date();
        var str = (d.getTime() - debugRefTime).toString() + " " + logStr;
        debugLogArray.push(str);
        //console.log(str);

        if (isDebugMode()) {
            $("#debugList").append('<li>'+str+'</li>');
        }
    }

    function sendDebugLog(urlOverride) {
        debugLog("Sending debug log back to server");
        logObj = {};
        logObj.logData = debugLogArray.join('\n');
        url = urlOverride ? urlOverride : '/corp/woodDebug';

        $.ajax({
                  type: "POST",
                  url: url,
                  async: true,
                  dataType: "json",
                  contentType: "application/json",
                  success: function (obj) {
                     //alert("log good");
                  },
                  error: function(jqXHR, textStatus, errorThrown) {
                     //alert("log error");
                  },
                  data: JSON.stringify(logObj)
              });
    }

    // my simple function to quickly turn console logging on and off
    function myConsoleLog(logString) {
        var allowLogging = 0;

        if (allowLogging == 1) {
            console.log(logString);
        } else if (allowLogging == 2) {
            alert(logString);
        }
    }


    var g_woodWatchdogSent = false;
    var g_woodWatchdogExtraTime = false;
    function woodWatchdog() {
       if (jsonTorrentDone)
          return;

       var d = new Date();
       if (!g_woodWatchdogExtraTime && (d.getTime() - debugRefTime > 36000))  {
          //Give it 10 more seconds to finish
          g_woodWatchdogExtraTime = true;
          debugLog("DebugLog watchdog - 10 more seconds");
          setTimeout(woodWatchdog, 10*1000);
          return;
       }

       sendDebugLog();
       ga('send', 'event', 'woodDetect', 'wood', 'BookError');
       g_woodWatchdogSent = true;
    }

    function checkWoodWatchdogRecall() {
       if (!g_woodWatchdogSent)
          return;

       if (!jsonTorrentDone)
          return;

       sendDebugLog('/corp/woodDebugRecall');
       ga('send', 'event', 'woodDetectRecall', 'wood', 'BookError');
    }

    function fiveMinuteDebugCheck() {
       debugLog('5MDebugCheck');

       // if this command line url is set then wait 5 minutes and send the
       // debug log to the server.  This is to help debug hard to reproduce
       // problmes - tell the user to start it with the ?DebugSend=true,
       // recreate the problem and then walk away for 5 minutes.  After 5 mins
       // we will send whatever is in the log to the server
       if (!getUrlSendDebug())
          return;

       debugLog('sendDebugName: ' + getUrlSendDebug());
       setTimeout(function() {
                      sendDebugLog('/corp/sendDebug');
                      ga('send', 'event', 'sendDebug', 'send', 'BookError');
                  }, 5*60*1000);
    }


    var thisPage='';

    function setLastPage(pageType) {
       thisPage = pageType;
       setSessionCookie('lastPageType', pageType);
    }

    function getLastPage() {
       var tempVal = getCookie('lastPageType');
       return (tempVal ? tempVal : '');
    }

    // Force page to reload when back button is hit
    // This is necessary on iOS because they are ignoring
    // our headers
    // Turning off for now - reloads too much now - may have it
    // triggered by a cookie in the future for the times we
    // really want it to reload (after the location page)
    $(window).bind("pageshow", function(event) {
        var lastPage = getLastPage();
        if ((lastPage != '') && (thisPage != '') && (lastPage != thisPage)) {
            utils.reload_page();
        }
    });


    ///////////////////////////////////////////
    //  Search
    ///////////////////////////////////////////
    var sList = [];
    var sCache = {};
    var startSearchValue = "";
    var searchBookList = [];

    function displaySearchResults(wordList) {
        searchBookList = [];
        if (isHomeMode())
           searchBookList = displaySearchResultsHome(wordList);
        else
           searchBookList = displaySearchResultsLib(wordList);
    }

    function displaySearchResultsHome(wordList) {
        return populateHomeCarouselsWithSearch(wordList);
    }

    function displaySearchResultsLib(wordList) {
        var bookList = library.buildBookListForWordList(wordList);
        populateNewSearchLibraryShelves(bookList);
        return bookList;
    }

    function getFirstLetterList(letter) {
        var wordList = [];
        forEachLib(function(libClass) {
            var wlist = libClass.getFirstLetterList(letter);
            wordList = wordList.concat(wlist);
        });

        if (libraries.length > 1)
           return sortAndRemoveDups(wordList);
        else
           return wordList;
    }

    function sortAndRemoveDups(a) {
        return a.sort().filter(function(item, pos, ary) {
            return !pos || item != ary[pos - 1];
        });
    }

    function logSearchToGA(query) {
        if(query.length < 3)
           return;

        if (oncePerPage("SearchText_" + query))
           ga('send', 'event', 'Text', query, 'searchText');
    }


    function updateSearch() {
        var query = $("#booksearch").val().toLowerCase().trim();
        var results = [];

        if(query.length > 0){
            logSearchToGA(query);
            // remove accents from the search string after we log the real text
            query = accent_fold(query);

            //Check if we've searched for this term before
            if(query in sCache){
                results = sCache[query];
            }
            else{
                //Case insensitive search for our sList array
                letter = query.charAt(0);
                sList = getFirstLetterList(letter);

                results = $.grep(sList, function(item) {
                    if (item.search(RegExp('^'+query, "i")) != -1)
                       return true;
                    // now search to see if we would match if we took the apostrophes out of the item to match
                    // 2016.10.21 - and also removed any accents
                    var modItem = item.replace("'",'');
                    modItem = accent_fold(modItem);
                    return (modItem.replace("'",'').search(RegExp('^'+query, "i")) != -1);
                });

                //Add results to cache
                sCache[query] = results;
            }

            // Clear old results - add new ones
            $('#searchresults').empty();
            var cnt = 0;
            for(var term in results){
                $("#searchresults").append('<li><a href="#">' + results[term] + '</a></li>');
                cnt++;
            }

            $('.hasSearchResults').removeClass('hide');
            displaySearchResults(results);
        }
        //Handle backspace/delete so results don't remain
        else {
            $('#searchresults').empty();
            populateWithCategory(0); // All Category
            $('.hasSearchResults').addClass('hide');
        }
    }

    function initSearch() {
        if (oncePerPage("setSearchTrigger"))
            $(document).on("uflLibrarySearchJSONReady",  function () { checkSearchInitStatus(); });

        if (isAllSearchLoaded())
            checkSearchInitStatus();
        else 
            loadAllSearchData();
    }

    function checkSearchInitStatus() {
        if (isAllSearchLoaded()) {
           $("#uflSearchNav").removeClass('hide');
           $('#booksearch').focus();
           updateSearch();
        }
    }

    function hookupSearchUI() {
        if (shouldStartInSearchMode()) {
            $('#booksearch').val(backButtonData.getSearchText());
            initSearch();
        }

        // we don't have a flag to show or hid eht search menu, so we base it on categories.
        // if the collection doesn't show categories it won't show search either.
        // leveraged from setupCategoryAndNarrationBar()
        // on home page the defaults are hardcoded. override them based on the
        // specific library's config if we're in library mode
        var useCategories  = true;
        if (isHomeMode())
            useCategories  = get_pathDomain_showCategories();
        else
            useCategories  = library.showCategories();

        if (useCategories) {
            $('#uflMenuSearch').removeClass('hide');
        } else {
            $('#uflMenuSearch').addClass('hide');
        }

        $("#uflMenuSearch").click(function(e) {
            $("#uflCategoryNav").addClass('hide');
            if ($("#uflSearchNav").hasClass('hide') == true) {
                initSearch();
            } else {
                $("#uflSearchNav").addClass('hide');
                populateWithCategory(0);
            }
        });

        // link to clear the search results
        $('.btn-search-clear', '#uflSearchNav').click(function(e) {
            $("#booksearch").val("");
            updateSearch();
        });

        // launch search options dialog
        $('.btn-search-options', '#uflSearchNav').click(function(e) {
            if (library)
                $('#searchOtherText').prop('checked', library.useOtherText());
            else
                $('#searchOtherText').prop('checked', false);

            $("#search-opt-dlg").modal({
                show: true,
                backdrop: 'static',
                keyboard: false
            });
        });

        // update search when dialog closes
        $('#search-opt-dlg').on('hidden.bs.modal', function () {
            updateSearch();
        });

        // update search option settings
        $("#searchOtherText").change(function() {
            sCache = {};
            var isChecked = this.checked;
            forEachLib(function(libClass) {
                libClass.useOtherText(isChecked);
            });
        });

        // keystrokes
        $("#booksearch").on("keyup", function(event){
            updateSearch();
        });

        // selections from the results list
        $("#searchresults").on('click', 'li', function() {
            var selectedText = $(this).text();
            $("#booksearch").val(selectedText);
            updateSearch();
        });
    }


    function shouldStartInSearchMode() {
        if (!backButtonData.areWeReturningFromBackButton())
           return false;

        if (!backButtonData.getSearchOpen())
           return false;

        //if (backButtonData.getSearchText() == "")
        //   return false;

        return true;
    }


   //////////////////////////////////////////////////////////////////////////////
   //  Language menu
   //////////////////////////////////////////////////////////////////////////////

    var langDialogSettings = {};

    function onClickWrittenLangBtn() {
            langDialogSettings = {};
            langDialogSettings.uiLang = languages.getUILang();
            langDialogSettings.wLang  = languages.getWrittenLang();
            langDialogSettings.nLang  = languages.getNarrationLang();

            // either click to open the languages dialog should close search or category panels
            // we don't need to wait for the OK handler or to create a cancel handler since we want to do it in all cases.
            $("#uflCategoryNav").addClass('hide');
            $("#uflSearchNav").addClass('hide');
            updateLangDialogWritten();
            setDialogCurrentSelections();         // needed in case use makes choices, then cancels the dialog and comes back in

            $("#language-wl-dlg").modal({ show: true, });
            return false;
    }

    function onClickNarrLangBtn() {
            langDialogSettings = {};
            langDialogSettings.uiLang = languages.getUILang();
            langDialogSettings.wLang  = languages.getWrittenLang();
            langDialogSettings.nLang  = languages.getNarrationLang();
            langDialogSettings.showingMRU = false;

            // either click to open the languages dialog should close search or category panels
            // we don't need to wait for the OK handler or to create a cancel handler since we want to do it in all cases.
            $("#uflCategoryNav").addClass('hide');
            $("#uflSearchNav").addClass('hide');

            setDialogCurrentSelections();         // needed in case use makes choices, then cancels the dialog and comes back in

/*
            $("#language-dlg").modal({
                show: true,
                backdrop: 'static',                       // comment out to allow the dialog to be closed by clicking outside of it - may want since the cancel button may be below the fold
                keyboard: false
            });
*/
            $("#language-dlg").modal({ show: true, });
            return false;
    }

    function onClickMoreLangToggle() {
        $(".moreLangToggle", "#language-dlg").toggleClass("hide");
        $(".list-group-item.moreLangs", "#nLangList").toggleClass('hide');
        $(".list-group-item.mruLangs", "#nLangList").toggleClass('hide');
        $('#sortEngNameLabel').toggleClass('hide');
        langDialogSettings.showingMRU = !langDialogSettings.showingMRU;
    }

    function onChangeNarrSort() {
        console.log("onChangeNarrSort");
        setDialogCurrentSelections();
    }
    
    function setupLangListMenu() {
        console.log("setupLangListMenu");
        // UI can always be changed
        // Narrations can always be changed, with options filtered based on the current written language
        // Written language can only be changed in the library. We can't let it be changed in book mode or the current book wouldn't be valid any longer.
        
        // Set the navbar names based on the current languages
        setNarrationNavbarName();
        setWrittenNavbarName();

        $("#uflMenuWritten").click(onClickWrittenLangBtn);
        // setup the click handler for the dummy language dialog
        $("#uflMenuNarration, #uflMenuNarrationBook").click(onClickNarrLangBtn);

        $("#sortEngName").change(onChangeNarrSort);
        
        updateLangDialogUI();
        updateLangDialogWritten();
        //updateLangDialogNarration();  will be called when the current settings are marked since it changes what langs ara visible
        
        // more langs toggle is outside the list that gets rebuilt each time
        // so we only have to setup the click handler once.
        $("#moreLangToggleHeader").click(onClickMoreLangToggle); 
    }
    
    function setNarrationNavbarName() {
        var abbv = languages.getNarrationLang();
        if (abbv == '0')
            $('.uflLabelMenuNarration').text('Narration');
            //$('.uflLabelMenuNarration').text('No Secondary Narration Language');
        else
            $('.uflLabelMenuNarration').text(languages.getLanguageName(abbv));
    }
    
    function setWrittenNavbarName() {
        var abbv = languages.getWrittenLang();
        if (abbv == '0')
            $('.uflLabelMenuWritten').text('English');        // english default, but this shouldn't happen
        else
            $('.uflLabelMenuWritten').text(languages.getLanguageName(abbv));
    }
    
    function getActiveListItemAbbv(listSelector) {
        var item = $(".list-group-item.active", listSelector),
            abbv = '';
     
        if (!($(listSelector).is(":visible")))
            return abbv;
         
        //if ((item.length > 0) && ($(item).first().is(":visible"))) {
        if ((item.length > 0)) {
            var id = $(item).first().attr('id');
            abbv = getLangAbbvFromId(id);
        }
        return abbv;
    }

    function getLangAbbvFromId(id) {
        //assumes we always use some type of id that is seperated by hypens and word after last hypen is the Abbv
        var splits = id.split('-').reverse();
        return splits[0];
    }
    
    // needed in case use makes choices, then cancels the dialog and comes back in
    // this ensures each time the dilaog is opened that we default to current values
    function setDialogCurrentSelections() {
        $(".list-group-item", "#wLangList").removeClass('active');

        $(".list-group-item", "#nLangList").removeClass('active');

        $("#wlang-dlg-abbv-" + langDialogSettings.wLang).addClass('active');

        updateLangDialogNarration(langDialogSettings.wLang);        // what's visible in the list may have been changed also
        
        $("#uiLangSelect").val(langDialogSettings.uiLang);
    }
    
    // build the ui list for the language dialog
    function updateLangDialogUI() {
        $("#uiLangSelect").empty(); 
        
        var uiLangs = languages.getUILanguagesWithNative();
        
        // hide the section if only 1 option
        if (uiLangs.length <= 1) {
            $(".lang-dlg-section-ui", "#language-dlg").addClass('hide'); 
        } else {
            for(var i=0; i<uiLangs.length; i++) {
                var langLine = '<option value="' + uiLangs[i].abbv + '">' + uiLangs[i].name + '</option>';
                $("#uiLangSelect").append(langLine);
            }
        }
        // select list for UI langs doesn't need a click handler
    }

    function setDialogLangs() {
            console.log("this setDialogLangs");
            var reload_required = false;

            var abbv = $("#uiLangSelect").val();
            if (abbv && (abbv.length > 2)) {
                languages.setUILang(abbv);  // set new UI language
                if (abbv != langDialogSettings.uiLang)
                    reload_required = true;
            }

            abbv = getActiveListItemAbbv('#wLangList');
            if (abbv.length > 2) {
                languages.setWrittenLang(abbv); // set new written language
                if (abbv != langDialogSettings.wLang)
                    reload_required = true;
                languages.setUILang(abbv);  // set new UI language
                if (abbv != langDialogSettings.uiLang)
                    reload_required = true;
            }

            abbv = getActiveListItemAbbv('#nLangList');
            if ((abbv != langDialogSettings.nLang) && (abbv.length > 0)) {      // >0 because we can return '0' as the none option
                languages.setNarrationLang(abbv);    // set new narration language

                if (isLibraryMode()) {
                    reload_required = true;
                }
                else {
                   if (isBookMode())
                       getSecondLangJSON(false);      // similar to previous narration logic ?

                   if (!isStandAloneBook())
                       getLibraryJSON(getLibId(), false);
                }
            }

            if (reload_required)
                utils.reload_page();
            else {
                // only reset the name here if we don't need to reload the page - saves some flickering in this path at least
                setNarrationNavbarName();
                setWrittenNavbarName();
            }
    }
    
    // build the written list for the language dialog
    function updateLangDialogWritten() {
        $("#wLangList").empty();            // clears previous click handlers also

        // build the list of written languages. if we're in book mode we only show the current written language
        // otherwise the change would invalidate the current book.
        var masterLangLineItem = $('#masterWLangListItem'),
            wLangs = languages.getWrittenLanguagesWithNative(isBookMode());
        // hide the section if only 1 option
        if (wLangs.length <= 1) {
            $(".lang-dlg-section-wl", "#language-wl-dlg").addClass('hide');
        } else {
            for(var i=0; i<wLangs.length; i++) {
                var langLine = $(masterLangLineItem).clone().appendTo("#wLangList")
                langLine.removeAttr('id').removeClass('hide');
                langLine.attr('id', 'wlang-dlg-abbv-' + wLangs[i].abbv);            // create an id for the abbv so we can detect which is set
                langLine.html(wLangs[i].name);
            }

            // setup written language click handlers - change the active selection, and reload narrations if the written lang changed.
            $(".list-group-item", "#wLangList").click(function() {
                if ($(this).hasClass('active') == false) {
                    $(".list-group-item", "#wLangList").removeClass('active');
                    $(this).addClass('active');
                    var newAbbv = $(this).attr('id').replace('wlang-dlg-abbv-','');
                    updateLangDialogNarration(newAbbv);
                }
                setDialogLangs();
                $("#language-wl-dlg").modal('hide');
                return false;
            });
        }
    }


    function onClickNarrItem() {
            if ($(this).attr('id') == 'nlang-mru-abbv-MORE') {
                onClickMoreLangToggle();
                return false;
            }
            if ($(this).hasClass('active') == false) {
                var lastAbbv = getActiveListItemAbbv('#nLangList');
                $(".list-group-item", "#nLangList").removeClass('active');
                var selectId = $(this).attr('id');
                var selectLang = getLangAbbvFromId(selectId);
                if (selectLang == "MORE")
                   selectLang = lastAbbv;
                else
                   $(this).addClass('active');
                $("#nlang-dlg-abbv-" + selectLang).addClass('active');
                $("#nlang-mru-dlg-abbv-" + selectLang).addClass('active');
            }
            setDialogLangs();
            $("#language-dlg").modal('hide');
            return false;
    }
  
    function addNarrLangToList(abbv, name, sizeType, jqListId, isMRU) {
        var masterLangLineItem = $('#masterLangListItem');
        var idName = 'nlang-dlg';
        langLine = $(masterLangLineItem).clone().appendTo(jqListId);
        langLine.removeAttr('id');
        if (isMRU) {
            idName = 'nlang-mru-dlg';
            langLine.addClass('mruLangs');
        } else {
            idName = 'nlang-dlg';
            langLine.removeClass('hide').addClass('moreLangs');
        }
        idName += '-abbv-' + abbv;
        langLine.attr('id', idName);        // create an id for the abbv so we can detect which is set
        langLine.html(name);
        langLine.click(onClickNarrItem);
    }

    // build the narration list for the language dialog
    // if we're in book mode, we only show the narrations from that book, which comes from bookLangList
    // but if we're not in book mode we need to use the narration list built into WLangs because
    // the library will only have narrations for the current written lang - we would need to live load
    // the libraries very time the user changed written langauges. This isn't a problem
    // in book mode since we don't allow written language to be changed there.
    function updateLangDialogNarration(writtenLang) {
        $("#nLangList").empty();            // clears previous click handlers also

        // always reset the more/recent swicth when rebulding the narration list
        $(".moreLangToggle", "#language-dlg").removeClass("hide");
        $(".moreLangToggle.moreLangDefault", "#language-dlg").addClass("hide");
        
        // if no wlang provided, get the current one
        if (!writtenLang)
            writtenLang = languages.getWrittenLang();
        
        var masterLangLineItem = $('#masterLangListItem'),
            currentNLang = languages.getNarrationLang();
            
        // add the 'None' option first
        addNarrLangToList('0', 'No 2nd Narration', 'xs', '#nLangList', true);
        addNarrLangToList('0', 'No 2nd Narration', 'xs', '#nLangList', false);

        if ((writtenLang == "eng") && (!langDialogSettings.showingMRU))
           $('#sortEngNameLabel').removeClass('hide');
        else
           $('#sortEngNameLabel').addClass('hide');

        var sortByEngName = ($('#sortEngName').is(':visible')) && ($('#sortEngName').is(':checked'));

        // MRU - eventually we'll store the last 4? narrartions used and show them
        // with "none" and "more" as an MRU list. For now, we're just showing the
        // first 4 langs we find
        var nLangs = languages.getNarrationLanguagesWithNative(writtenLang, sortByEngName);
        var nLangsMRU = languages.getNarrationMRULanguagesWithNative(writtenLang);

        for(var i=0; i<nLangsMRU.length; i++) {
            addNarrLangToList(nLangsMRU[i].abbv, nLangsMRU[i].name, 'xs', '#nLangList', true);
        }

        for(var i=0; i<nLangs.length; i++) {
            addNarrLangToList(nLangs[i].abbv, nLangs[i].name, 'xs', '#nLangList', false);
        }

        addNarrLangToList('MORE', 'More languages…', 'xs', '#nLangList', true);

        $("#nlang-dlg-abbv-MORE").click(function() {
            $(".moreLangToggle", "#language-dlg").toggleClass("hide");
            $(".list-group-item.moreLangs", "#nLangList").toggleClass('hide');
            $(".list-group-item.mruLangs", "#nLangList").toggleClass('hide');
            $('#sortEngNameLabel').toggleClass('hide');
            langDialogSettings.showingMRU = !langDialogSettings.showingMRU;
        });

        $(".nlangcount", "#language-dlg").text(nLangs.length);
        if (nLangs.length > nLangsMRU.length) {   // determines if the header is clickable or not, to toggle between recent and all
            $(".hasNoExtraNLangs").addClass('hide');
            $(".hasExtraNLangs").removeClass('hide');
        } else {
            $(".hasNoExtraNLangs").removeClass('hide');
            $(".hasExtraNLangs").addClass('hide');
        }

        $("#nlang-dlg-abbv-" + currentNLang).addClass('active');

        $("#nlang-mru-dlg-abbv-" + currentNLang).addClass('active');
    }


    function setup_custom_lib_links() {
        if (isHomeMode())           // home mode is always our page. no extra path name needed
            return;
        if (!get_pathDomain_prefix())
            return;
        if (!oncePerPage("setup_custom_lib_links"))
            return;
        var oldHref = $('.ufl-add-path-domain').first().attr('href');
        $('.ufl-add-path-domain').attr('href', get_pathDomain_prefix() + oldHref);
    }

    function setupIframeLinksThatShouldLaunchInNewTab() {
        if (!utils.is_iFrame()) //only applies to iFrames
           return;

        //Every link that does not have the "embedLinkOK" class should launch
        //  in a new Tab
        $("a:not(.embedLinkOK)").each(function() {
            $(this).attr("target", "_blank");
        });
    }

    function setupLogo() {
        if (isRootHomeMode())
            return;         // no custom logos on the home page. default layout is correct.

        var text = library.getOwnerName();
        var shorttext = library.getOwnerNameShort();

        if (isHomeMode() || isHomePathSpecified()) {
            //console.log("Setup Home Display Title");
            if (get_pathDomain_showTitle()) {
               text = get_pathDomain_displayTitle(languages.getWrittenLang());
               //console.log("Setup Home Display Title txt: " + text);
            }  else
               text = '';
            shorttext = text;
        }
       
        $('.ufl-header-logo-text').removeClass('hide');
        $('.ufl-custom-hdr').text(text);
        $('.ufl-custom-hdr-short').text(shorttext);
    }

    function checkEmbedParams() {
        if (!utils.is_iFrame())
           return;

        var allowEmbed  = library.allowEmbed();
        var hostWhitelist  = library.getWhitelist();

        //allowEmbed  = false;
        //hostWhitelist  = ['aza.com','aza.org'];

        if (!get_pathDomain_prefix())
           return;  //already at the base path

        if (hostWhitelist.length < 1)
           return;  //no whitelist - allow embedding on all sites

        var pageDomain = utils.getPageDomain(false);

        // UFL always OK - when we launch a book from within the embedded frame
        // UFL will show as the referrer - so this is actually
        // a somewhat normal case
        if (pageDomain == 'uniteforliteracy.com')  //NCFL Endless Bookshelf
           return;

        if (pageDomain == 'endlessbookshelf.org')  //NCFL Endless Bookshelf
           return;

        if (pageDomain == 'endlessbookshelf.project.show')  //NCFL Endless Bookshelf
           return;

        if (pageDomain == 'project.show')  //NCFL Endless Bookshelf
           return;

        if (pageDomain == 'improvingliteracy.org')  //NCIL
           return;

        if (pageDomain == 'improvingliteracy1.uoregon.edu')  //NCIL
           return;

        if (pageDomain == 'improvingliteracy2.uoregon.edu')  //NCIL
           return;

        if (!allowEmbed)
           utils.redirect('/');

        if (jQuery.inArray(pageDomain, hostWhitelist) <0)
           utils.redirect('/');

        return; //it is on the whitelist - allow embedding
    }

    // 2015.01.23 - just scroll to the very bottom each time. this bottom footer protects on on mobile
    // device since clicks at the very bottom usually bring up the browser's chrome. scrolling to bottom
    // puts the autio icons high enough that a click attempt won't misread and fire the browser chrome.
    function scrollToBottom() {
        // + 1000 just to make sure we don't have any browser chrome calculation issues. we want all they way down.
        $("html, body").animate({ scrollTop: $(document).height() + 1000 }, 200);
    }


    // CSS handles all of the book sizing - we always fit to width up to our maximum
    // we scroll to do our best to make sure the audio/video play buttons are
    // visible. The simple solution is to scroll to the bottom of the document.
    // this ensures our play controls are visible, and that the video box is visible
    // if it's currently enabled. It's also harmless on a screen where we already fit.
    // It's important that we keep the footer of the document since
    // it provides a buffer on mobile systems so that our play buttons aren't
    // too close to the browser chrome hotspots (at least on Safari)
    // NOTE - we always scroll now, even in portrait mode, since we may have
    // just made it a portrait orientation by turning on ASL and it doesn't
    // hurt to scroll in portrait mode anyway.
    // On a real resize event, we need to scroll after a timeout on iOS (and we throw in Android),
    // since iOS will scroll to top of the page after it fires the onload event and we have to wait
    // for that.
    function checkScroll(isResizeEvent) {
        if (isResizeEvent && (ios || android))
           setTimeout(function () { scrollToBottom(); }, 1000);
        else // can call immediate
           scrollToBottom();
    }

    // if the resize event is just based on the browser chrome showing and hiding on iOS
    // then we don't want to treat it as a resize because we'll be autoscrolling contrary
    // to the user interacting with the screen
    var lastWidth = 0;
    function isBrowserChromeChange() {
        var isJustChromeChange = false,
            newWidth = $('.uflWholePageReader').width();
        if ((ios || android) && (newWidth == lastWidth)) {
            isJustChromeChange = true;
        }
        lastWidth = newWidth;
        return isJustChromeChange;
    }

    function turnOffBackArrow() {
        $("#uflLibraryReturnArrow").hide();             // hides the arrow and the text
    }

    function turnOnBackArrow() {
        $("#uflLibraryReturnArrow").show();
    }

    function hookupSetLocationMenu() {
        //$("#uflMenuSetLocation").click(function (e) {
        //    askZipLocation_World(setupLocationLabel);
        //});
    }

    function setupLocationLabel(shouldUpdate) {
                // setup location text in the menu (above isn't in the header anymore)
        //if (shouldUpdate == true) {
        //    var locString = locationInfo.getFriendlyName();
        //    if (locString == '')
        //        locString = 'Location not set';
        //    $('#uflMenuLocationText').text(locString);
        //}
    }

// Languages File
//
    var languages = new UFLLanguages();

    function getLanguagesJSON() {
       languages.load(function (err, data) {
          if (err) {
             debugLog("Languages JSON Failed To Load");
          } else {
             $.event.trigger({ type: "uflCheckReady" });
          }
       });
    }

    // DEPRECATED - THE LANG LIST IS NOW IN BOOK.JSON
    // AND THE BOOKS SENDS THAT LIST TO THE LANGUAGES CLASS
    //function getBookLangListJSON() {
    //  languages.loadBookNarrationLanguages(function(err, data) {
    //      if (err) {
    //         debugLog("Book Narration Languages JSON Failed To Load");
    //      } else {
    //         $.event.trigger({ type: "uflCheckReady" });
    //      }
    //   });
    //}



    function getBookId() {
        if (urlParams.BookId)
           return (urlParams.BookId);
        return "";
    }

    function getLibId() {
        if (urlParams.LibId && (urlParams.LibId > "3"))
           utils.redirect("/");
        if (get_pathDomain_lib())
           return (get_pathDomain_lib());
        if (urlParams.LibId && (urlParams.LibId > "1") && (urlParams.LibId < "4"))
           return (urlParams.LibId);
        return '1';  //default lib if not set in URL param
    }

    function getUrlLang() {
        if (urlParams.LangId)
           return (urlParams.LangId);
        return '';
    }

    function getUrlDebug() {
        return (urlParams.Debug);
    }

    function getUrlSendDebug() {
        return (urlParams.SendDebug);
    }

    function getUrlFamCode() {
        if (urlParams.famcode)
           return (urlParams.famcode);
        return "";
    }


    function createNavbarCarousel() {
        // similar to showing the languages dialog, if there is only 1 written lang available
        // then we don't show the written lang icon
        var wLangs = languages.getWrittenLanguagesWithNative(isBookMode());

        if (wLangs.length <= 1)
            $('#uflMenuWritten').addClass('hide');
        else
            $('#uflMenuWritten').removeClass('hide');
        
        $('#navbar-touchcarousel').removeClass('hide');
        var tc_slider = $("#navbar-touchcarousel").touchCarousel({
            itemsPerMove: 1,
            scrollbar: false,
            scrollbarAutoHide: true,
            scrollbarTheme: "dark",
            transitionSpeed: 800,
            pagingNav: false,
            snapToItems: false,
            scrollToLast: false,
            useWebkit3d: true,
            loopItems: false
        }).data("touchCarousel");

        tc_slider.updateCarouselSize();
        tc_slider.goTo(0);
        tc_slider.setItemsPerMoveByWidth();
    }

    function resizeNavbarCarousel() {
        // when we change language text or add/remove an icon like search it
        // changes the length of the carousel. recalculate the size and IPM
        var sliderInstance = $('#navbar-touchcarousel').data("touchCarousel");
        if (sliderInstance) {
              // remove any previous width settings before calculating new widths
              // leftover widths when hidden were causing initial text wrapping and incorrect width
              // re-calculations
              $('#navBarContainer').css('width', '');
              sliderInstance.updateCarouselSize();
              sliderInstance.setItemsPerMoveByWidth();
        }
    }
    
    function hideNavbarCarousel() {
        $('#navbar-touchcarousel').addClass('hide');     // no navbar
    }


function show_fam_code_modal() {
        //checkIfFamCodeJustSet();
        return; // turn off fam code dialog for now

        if (isFamCodeSetForSession())
           return;

        var lastCode = getCookie('LastFamCode');
        if (!lastCode) lastCode = '';

        if (getUrlFamCode() != '')
            $('#fam-code-value').val(getUrlFamCode());
        else if (lastCode.length > 2)
            $('#fam-code-value').val(lastCode);

        var famCodeModal = '#fam-code-modal';

        $('.fam-code-submit').click(submitFamCode);
        $('#fam-code-value').bind("input propertychange", onFamCodeEntry);

        $(famCodeModal).modal({
            show: true,
            backdrop: 'static',
            keyboard: false
        });
}

function onFamCodeEntry() {
    var entry = $('#fam-code-value').val();
    $('#fam-code-value').val(entry.toUpperCase());
}

/*
function checkIfFamCodeJustSet() {
   if (typeof DataFromServer === 'undefined')
       return;

   if (!DataFromServer)
       return;

   if (!DataFromServer.famCode)
       return;

   if (DataFromServer.famCode.length < 3)
       return;

   setSessionFamCode(famCode);
}
*/

function isFamCodeSetForSession() {
    var famCode = getSessionStoreString("famCode");
    if (!famCode)
       return false;
    if (famCode.length > 2) {
       ga_setFamCodeDimension(famCode);
       return true;
    }
    return false;
}

function setSessionFamCode(code) {
    setSessionStoreString('famCode', code);
}


function submitFamCode() {
    var sendObj = {};
    sendObj.code = $('#fam-code-value').val();
    sendObj.url  = utils.getCurrentUrl();

    $.ajax({
        type: "POST",
        url: '/famPortal/submitCode',
        async: true,
        dataType: "json",
        contentType: "application/json",
        success: function (obj) {
           if (obj.errCode && obj.errCode > 0) {
               //Handle Error
               animateBadFamCodeResponse();
           } else {
               //Dismiss Dialog
               setSessionFamCode(obj.famcode);
               ga_setFamCodeDimension(obj.famcode);
               $('#fam-code-modal').modal('hide');
           }
        },
        error: function(jqXHR, textStatus, errorThrown) {
           //Handle Error
           animateBadFamCodeResponse();
        },
        data: JSON.stringify(sendObj)
    });
}

function animateBadFamCodeResponse() {
    var currentColor = $('#fam-code-value').css("background-color");
    $('#fam-code-value').css("background-color", "#db6763");
    $('#fam-code-modal').animate({ "margin-left": "-20px" }, 100)
                        .animate({ "margin-left": "20px"  }, 200)
                        .animate({ "margin-left": "-20px" }, 200)
                        .animate({ "margin-left": "20px"  }, 200)
                        .animate({ "margin-left": "0px"   }, 100, function() {
                             $('#fam-code-value').css("background-color", currentColor);
                             //$('#fam-code-value').val("");  //clear the code
                             $('#fam-code-modal').css("margin-left", "0px");
                        });
}

    /// [[XINCLUDE:inc_aasl_award.js]]
    /* jshint ignore:end */

    function showCorrectContent() {
        $('.uflFooter').addClass('hide');
        $('.uflFooterResize').removeClass('smallFooter');

        if (languages.getWrittenLang() == 'eng') {
            $('.english-only').removeClass('hide');
        }
        
        if (utils.is_iFrame()) {
            $('.embedFooter').removeClass('hide');
            $('.alert-ufl-new').addClass('hide');
        } else
            $('.libFooter').removeClass('hide');

        if (!isRootHomeMode()) {
            $('.alert-ufl-new').addClass('hide');
            $('.collectionOwnerGroup').addClass('hide');
        }
        
        var librariesList = getLibrariesList(languages.getWrittenLang());
        if (isHomeMode() && (librariesList.length > 1)) {
            $('#LibraryContentPane').addClass('hide');
            $('#HomeContentPane').removeClass('hide'); //unhide home display
        }
        else {
            $('#LibraryContentPane').removeClass('hide'); //unhide Library display
            $('#HomeContentPane').addClass('hide');
        }
        $('#uflBookReaderNav').addClass('hide');
        $('#uflReaderNav').removeClass('hide');
        $('#uflHeaderCategories').removeClass('hide');
        $('#uflMenuNarration').removeClass('hide');
        $('#uflMenuWritten').removeClass('hide');

        resizeNavbarCarousel();
    }
   
    function showCorrectContentPostLib() {
        setupLogo();
        setupCategoryAndNarrationBar();
        setupCTAbuttons();
        setup_custom_lib_links();
        setupIframeLinksThatShouldLaunchInNewTab();
    }

    function rescrollAfterBackButton() {
         if (!backButtonData.areWeReturningFromBackButton()) 
             return;

         var scrollPct = backButtonData.getScrollPercent();
         setTimeout(function () { scrollToPercent(scrollPct); }, 1000);
    }

    function reDisplayLibDialogAfterBackButton() {
         if (!backButtonData.areWeReturningFromBackButton()) 
             return;
    
         var backLib = backButtonData.getDialogLib();
         if (backLib == 0) 
             return;

         setMainLib(backLib);
         displayHomePlusLib();
    }

    function resetBackButtonData() {
         backButtonData.clear();
         var url = utils.getCurrentUrl();
         var prefix = get_pathDomain_prefix();
         if (url.indexOf(prefix) < 0)
             url += prefix;
         backButtonData.setBackUrl(url);
    }

    function setupCTAbuttons() {
        if (isHomeMode())
            return;
 
        var customBtnName = library.getCTACustomName();
        var customBtnLink = library.getCTACustomLink();

        //var customBtnName = "GiveToMike";
        //var customBtnLink = "www.hp.com";

        if (customBtnName && (customBtnName != "") && customBtnLink && (customBtnLink != "")) {
           $('.ufl-cta-footer').removeClass('hide');
           $('.cta-btn-custom', '.ufl-cta-footer').text(customBtnName);
           $('.cta-btn-custom', '.ufl-cta-footer').attr("href", customBtnLink);
           $('.navbar-btn', '.ufl-cta-footer').click(CTA_buttonHandler);
        } 
    }
  

    function CTA_buttonHandler() {
        //This function will be called anytime one of the 3 CTA buttons is clicked
        // 2016.08.23 - only custom button is supported now, so we're just doing the ga logging and that's it.
        var btnClass = 'cta-btn-custom';
        ga('send', 'event', btnClass, get_PathDomain(), 'CTAButtons');
        return true;
    }

    function setupCategoryAndNarrationBar() {
        // on home page the defaults are hardcoded. override them based on the
        // specific library's config if we're in library mode
        var useCategories  = true;
        var useCollectionName = false;
        var collectionName = "";
        var useNarration   = true;

        if (isHomeMode()) {
            useCategories  = get_pathDomain_showCategories();
            useNarration   = get_pathDomain_showNarrations();
            useCollectionName = false;
            collectionName = "";
        } else {
            useCategories  = library.showCategories();
            useCollectionName = library.showCollectionName();
            collectionName = library.getCollectionName();
            useNarration   = library.showNarrations();
        }

        //var useCategories  = false;
        //var collectionName = "Safe Animials"
        //var useNarration   = false;

        if (useCategories) {
            $('#uflMenuCategory').removeClass('hide');
        } else {
            $('#uflMenuCategory').addClass('hide');
        }

        if (!useCategories && useCollectionName && (collectionName != "")) {
            $('#uflCollectionName').text(collectionName);
            $('#uflCollectionName').removeClass('hide');
        }

        // for now, if we're not showing narrations then we're not showing written lang either
        if (useNarration) {
            $('#uflMenuNarration').removeClass('hide');
            $('#uflMenuWritten').removeClass('hide');
        } else {
            $('#uflMenuNarration').addClass('hide');
            $('#uflMenuWritten').addClass('hide');
        }

        if (!useCategories && !useNarration && !useCollectionName)
            $('#uflReaderNav').addClass('hide');

        if (useCategories && backButtonData.areWeReturningFromBackButton() && backButtonData.getCategoryOpen())
            $("#uflCategoryNav").removeClass('hide');
        
        // setup click handler
        $("#uflMenuCategory").click(function(e) {
            $("#uflSearchNav").addClass('hide');
            $("#uflCategoryNav").toggleClass('hide');
            
            if ($("#uflCategoryNav").hasClass('hide') == false) {
                openCategoryPanel();
            } else {
                populateWithCategory(0);       
            }
        });
    }

    function loadAndResize(isResizeEvent) {
        debugLog("loadAndResize");
        // all of the resize options work the same except where we have to force
        // it based on the UI panel closing. It's not a real resize but we need to see
        // about re-scrolling the address bar
        showCorrectContent();

        // 2015.01.19 - still needed since carousel now is dynamic with paging based on number of
        // items which are visible, but doesn't need to update the carousel size anymore and only
        // refers to our specific category carousel
        resizeAndPositionCategoryCarousel();
        
        // the library modal dialog needs to be resized if it's open
		resizeModalLibraryDialog(false, 0);
    }

    function scrollToPercent(pct) {
        var scrollPos = pct * ($(document).height() - $(window).height()) / 100;
        $("html, body").animate({ scrollTop: scrollPos }, 200);
    }

   //////////////////////////////////////////////////////////////////////////////
   //  
   //////////////////////////////////////////////////////////////////////////////

    function hookupShareButtons() {
        $(".uflLinkSocialEM").click(function (e) {
            sendMail(null, getLibId(), languages.getNarrationLang());
        });
        $(".uflLinkSocialPN").click(function (e) {
            sharePinterest(null, getLibId(), languages.getNarrationLang(), null);
        });
        $(".uflLinkSocialFB").click(function (e) {
            shareFacebook(getLibId(), languages.getNarrationLang());
        });
        $(".uflLinkSocialTW").click(function (e) {
            shareTwitter(null, getLibId(),  languages.getNarrationLang());
        });
        $(".uflLinkSocialLink").click(function (e) {
            shareCopyLink(getBookId().toString(), getLibId(),  languages.getNarrationLang());
            e.preventDefault();
        });

        if (navigator.share) {
           $('.uflMenuShareClass').removeAttr('data-toggle');
           $('.uflMenuShareClass').click(handleMobileShare);
        } else {
           $('.uflMenuShareScroll').click(function (e) {
               setTimeout(function() {
                   //$(this).closest('.row').addClass('open');
                   $('.uflMenuShareScroll').closest('.row').addClass('open');
               }, 250);
           });
        }
    }

    ///////////////////////////////////////////
    // Utility Functions
    ///////////////////////////////////////////
    function getCollectionInfoJSON() {
        var cFilename = getCollectionInfoFname();
        if (!cFilename) return;
        if (cFilename.length == 0) return;

        var urlPath = "/lib/r" + _version.vRversion + '/' + cFilename;

        getS3jsonData({ bucket: 'reader-bucket',
                        debugName: 'getCollectionInfoJSON',
                        urlPath: urlPath,
                        success: function (obj) {
                           populateCollectionInfo(obj);
                        },
                        error: function() {
                           //Handle the Error after retries are exhausted
                           debugLog("getCollectionInfoJSON - Error");
                        }
                      });
    };

    function populateCollectionInfo(cInfoObj) {
        if (!cInfoObj) return;
        var langCinfo = cInfoObj[languages.getWrittenLang()];
        if (!langCinfo) return;

        var pageTitle = langCinfo.page_title;
        var metaDesc  = langCinfo.meta_desc;
        var infoHtml  = langCinfo.body_html;

        if (pageTitle && (pageTitle.trim().length > 0)) {
            document.title = pageTitle;
        }

        if (metaDesc && (metaDesc.trim().length > 0)) {
            $("meta[name='description']").attr('content', metaDesc);
        }

        if (infoHtml && (infoHtml.trim().length > 0)) {
            $('#collapseExample', '#collection-info-module').empty();
            $('#collapseExample', '#collection-info-module').html(infoHtml);
            $('#collection-info-module').removeClass('hide');
        }
    }

    ///////////////////////////////////////////
    // Utility Functions
    ///////////////////////////////////////////
	
    function setupBookLinkHandler() {
        $(".ufl-book-link").click(function(e) {

            //Save the category information
            backButtonData.setCategoryOpen($('#uflCategoryNav').hasClass('hide') == false);
            if (backButtonData.getCategoryOpen()) {
                var catIdStr = $('.tc-selected', '#category-touchcarousel').attr('id');
                var categoryId = catIdStr.replace('category-icon-','');
                var categoryName = library.getCategoryName(categoryId);
                backButtonData.setCategoryName(categoryName);
            }

            //Save whether the search is open or closed
            backButtonData.setSearchOpen($('#uflSearchNav').hasClass('hide') == false);
            if (backButtonData.getSearchOpen()) 
               backButtonData.setSearchInfo($("#booksearch").val(), searchBookList);
            else
               backButtonData.resetSearchInfo();

            //Save the scroll position
            var scrollPct = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
            backButtonData.setScrollPercent(scrollPct);

            if (!isHomeMode())  //We are done for Library Mode at this point
               return;

            var libDialogShowing = $("#uflLibraryModal").is(':visible');
            if (libDialogShowing)
               backButtonData.setDialogLib(mainLib);
                
            //Save the carousel positions on Book Click - only for Home
            forEachLib(function(libClass) {
                var jQueryCollectionId = "#collection-" + libClass.getId();
                var sliderInstance = $(jQueryCollectionId).data("touchCarousel");
                if (sliderInstance) 
                   backButtonData.setCarouselPos(libClass.getId(), sliderInstance.getCurrentId());
            });

            //Save Carousel Position
            var tc_item = $(this).closest('.touchcarousel-item');
            var tc_pos = tc_item.index();
            var tc_container = $(this).closest('.collection-item');
            var tc_row_pos = tc_container.index() + 1;

            //Log Data to GA
            var tc_id = tc_item.attr('id');
            var splits = tc_id.replace('image-collection-','').split('-');
            var libId = parseInt(splits[0], 10);
            var bookId = parseInt(splits[1], 10);
            var bookAltText = getClassForLibrary(libId).getBookAltTextAtBookId(bookId);

            var cPosStr = tc_row_pos.toString() + '-' + tc_pos.toString();
            var bookDataStr = bookId.toString() + '-' + cPosStr + '-' + bookAltText;

            if (oncePerPage("ga-LibBookStart")) {
                ga('send', 'event', 'CarouselPos' , cPosStr    , 'libraryStats');
                ga('send', 'event', 'LibBookStart', bookDataStr, 'libraryStats');
            }
        });
    }

    ///////////////////////////////////////////

    ///////////////////////////////////////////
    // Loading Sequence 
    ///////////////////////////////////////////

    var jsonTorrentDone=false;
    function startJsonTorrent() {
        setTimeout(woodWatchdog, 30*1000);

        debugLog("Start Lib JSON Torrent");
        ga_logPage();
        ga_EmbedData();
        ga_LibPreLoad();

        if (isHomeMode()) {
           languages.setHomeWLangs(get_pathDomain_wLangs());
           languages.setHomeNLangs(get_pathDomain_nLangs());
        }

        if (isHomePlusLibMode() && get_pathDomain_lib())
           setMainLib(get_pathDomain_lib());

        var librariesList = getLibrariesList(languages.getWrittenLang());
        if (librariesList.length == 0) {
              languages.setWrittenLang(); //This should reset the written language
              librariesList = getLibrariesList(languages.getWrittenLang());
        }

        if (!isHomeMode())
            librariesList = [getLibId()];

        for (var i=0; i<librariesList.length; i++) 
            getLibraryJSON(librariesList[i], true);

        getLanguagesJSON();
        getCollectionInfoJSON();
        turnOffBackArrow();
        showCorrectContent();
    }

    function checkJsonStartupStatus() {
        if (isHomeMode())
            homeStartupStatus();
        else
            libraryStartupStatus();
    }

    function libraryStartupStatus() {
       // All of this items that we are doing in parallel have to be done before we
       // move on to the next step.
       // Note: if we have the location cookie, we will wait for the sponsorList to load, otherwise we
       //       don't want to hold up the load of the page waiting for location info

       if ((!jsonTorrentDone) &&
           (languages && languages.isLoaded()) &&
           (library && library.isLoaded()) )
       {
           jsonTorrentDone = true;
           debugLog("** libraryStartupStatus: Complete");
           if (allLibrariesEmpty() && (languages.getNarrationLang() != '0')) {
              resetLanguageAndReload(); 
           }
           checkEmbedParams();
           showCorrectContentPostLib();
           checkWoodWatchdogRecall();
           setLastPage('Library');
           //turnOffBackArrow();
           setupLangListMenu();
           hookupShareButtons();
           //hookupSetLocationMenu();
           hookupSearchUI();
           populateLibraryCategoryList();
           if (!shouldStartInSearchMode())
              populateWithCategory(findCategoryFromCookieAtStartup());
           createNavbarCarousel();
           ga_LibStart();
           rescrollAfterBackButton();
           resetBackButtonData();
           ga_modernizr();
       }

       //Special check for the case where the location is found after the library is already started.  We don't want to 
       //hold up showing the Library to wait for Geo location routines to finish (which could take around 10 seconds)
       //Note: we also don't want to show the wizard before we are at the library startup point.

       if (jsonTorrentDone) 
       {
           //setupLocationLabel(true);
           //checkAskZipLocationWizard(setupLocationLabel);
           ga_setupDimensions();
       }

    }

    function homeStartupStatus() {
       // All of this items that we are doing in parallel have to be done before we
       // move on to the next step.
       // Note: if we have the location cookie, we will wait for the sponsorList to load, otherwise we
       //       don't want to hold up the load of the page waiting for location info
       if ((!jsonTorrentDone) &&
           (languages && languages.isLoaded()) &&
           (areAllLibsLoaded()) )
       {
           jsonTorrentDone = true;
           debugLog("** homeStartupStatus: Complete");
           //checkEmbedParams();        home page is allowed to be embedded - at least for now
           if (allLibrariesEmpty() && (languages.getNarrationLang() != '0')) {
              resetLanguageAndReload(); 
           }
           showCorrectContentPostLib();
           checkWoodWatchdogRecall();
           setLastPage('Home');
           setupLangListMenu();
           hookupShareButtons();
           hookupSetLocationMenu();
           hookupSearchUI();
           populateLibraryCategoryList();
           if (!shouldStartInSearchMode())
              populateWithCategory(findCategoryFromCookieAtStartup());
           updateCarouselSizeAndPosition();
           createNavbarCarousel();
           ga_LibStart();
           if (isHomePlusLibMode() && 
               get_pathDomain_lib() &&  
               (getNumLibraries() > 1) &&
               !backButtonData.areWeReturningFromBackButton()) {
                     displayHomePlusLib();
           }
           rescrollAfterBackButton();
           reDisplayLibDialogAfterBackButton();
           resetBackButtonData();
           ga_modernizr();
       }

       //Special check for the case where the location is found after the library is already started.  We don't want to 
       //hold up showing the Library to wait for Geo location routines to finish (which could take around 10 seconds)
       //Note: we also don't want to show the wizard before we are at the library startup point.
       if (jsonTorrentDone) 
       {
           //setupLocationLabel(true);
           //checkAskZipLocationWizard(setupLocationLabel);
           ga_setupDimensions();
       }
    }

    
    ///////////////////////////////////////////
    //  HomePlusLib
    ///////////////////////////////////////////

    function displayHomePlusLib() {
       populateModalShelvesWithCategory(0);
       $("#uflLibraryModal").modal('show');
       $('.modal-backdrop').addClass('darker');     // our custom - darker opacity. don't need to remove the class because bootstrap deletes the item from the DOM when the dialog is closed.
    }

    function setupCollectionLinks(colIdString) {
        // click handler just for the links in this collection, else we'll setup duplicate handlers
       $('.collectionLink', '#' + colIdString).click(function() {
           if (!isHomePlusLibMode())
              return true;  //follow the normal href logic

           var collectionId = parseInt(colIdString.replace('collection-',''), 10);
           setMainLib(collectionId);
 
           displayHomePlusLib();
           return false;
       });
       
       // also add a click handler for the arrow-holders to help with showing hover-type feedback on the arrows without
       // getting the sticky hover problem of the touch screen devices
       $('.arrow-holder').click(function() {
           utils.myPreClick(this);
           utils.myPostClick(this);
       });
    }

    function specialWixLogic() {
        //if (urlParams.wix)
        //   console.log("wix is true");

        var isWix = urlParams.wix || getSessionStoreString("isWix");
        if (!isWix) return;

        var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        //const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        //console.log("Viewport is : " + vw + " x " + vh);
        //console.log("UserAgent is: " + navigator.userAgent);

        var isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
        //console.log("IsMobile: " + isMobile);
        //if (window.matchMedia("(orientation: portrait)").matches) {
        //   console.log("Portrait Mode");
        //}
        //if (window.matchMedia("(orientation: landscape)").matches) {
        //   console.log("Landscape Mode");
        //}
        //console.log("PixelRatio is: " + window.devicePixelRatio);
        //console.log("PageDomain is: " + utils.getPageDomain());

        var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;
        //console.log("Screen Orientation is: " + orientation);
        //console.log("Window Orientation is: " + window.orientation); 
        if (typeof(orientation) == "undefined") {
            if ((window.orientation == 90) || (window.orientation == 270))
                orientation = "landscape-primary";
        }

        if (isWix && utils.is_iFrame() && isMobile && (vw < 320)) {
           setSessionStoreString("isWix", true);
           console.log("Adjusting");
           $('body').css('-webkit-text-size-adjust', 'auto');
           if ((orientation == "landscape-primary") ||  (orientation == "landscape-secondary"))
              $('body').css('zoom', '50%');
           else
              $('body').css('zoom', '75%');
        }
    }
    
    ///////////////////////////////////////////
    //  Main Event Handlers 
    ///////////////////////////////////////////

    //Custom Events Fired As JSON is loading at page startup
    $(document).on("uflBookJSONReady",              function () { checkJsonStartupStatus(); });
    $(document).on("uflLibraryJSONReadyStartup",    function () { checkJsonStartupStatus(); });
    $(document).on("uflLangListReady",              function () { checkJsonStartupStatus(); });
    $(document).on("uflSecondLangJSONReadyStartup", function () { checkJsonStartupStatus(); });
    $(document).on("uflBookJSONSponsorReady",       function () { checkJsonStartupStatus(); });
    //$(document).on("uflLocationReady",              function () { checkJsonStartupStatus(); });
    $(document).on("uflCheckReady",                 function () { checkJsonStartupStatus(); });

    $(window).resize(function () { loadAndResize(true); });

    window.addEventListener("orientationchange", specialWixLogic, false);

    $(document).ready(function () { 
               readUrlParams();
               specialWixLogic();
               //initialize_AB_tests();
               checkDebugMode();
               if (!utils.is_iFrame()) {
                  setSessionStoreString("lastPathDomain",get_PathDomain());
                  setSessionCookie("lastPathDomain",get_PathDomain());
                  var path = utils.urlPath();
                  //console.log("About to do redirect");
                  if (isHomePlusLib()) {
                      utils.redirect('/');
                      return;
                  }
               }
               if (utils.is_iFrame()) {
                  $('.uflWholePageReader').addClass('uflEmbed');
               }
               
               if (urlParams.Proxy)
                  setJsonFailoverCookie();
               ga_init();
               ga_setupDimensions();
               backButtonData.setUniqueKey(get_pathDomain_dimension());
               fiveMinuteDebugCheck();
               readVersionCookies();
               debugLog('make page visible');
               //$(".innerBody").css("display","none");
               $(".innerBody").css("visibility","visible");
               //$(".innerBody").fadeIn(2000);
               startJsonTorrent();
               show_fam_code_modal();
    });
});


/*
 * TouchCarousel  v1.1
 *
 * Copyright 2011, Dmitry Semenov, http://dimsemenov.com
 * 
 */
(function($) {
	function TouchCarousel(element, options) {	
		this.carouselRoot = $(element);
		
		var self = this;			
		this._lockYAxis = false;
		this._isAnimating = false;		
		
		this._downEvent = "";
		this._moveEvent = "";
		this._upEvent = "";
		
		this._totalItemsWidth;
		this._itemWidths;
		
		this._startAccelerationX;
		this._accelerationX;
		this._latestDragX;
		
		this._startTime = 0;
		
		this.settings = $.extend({}, $.fn.touchCarousel.defaults, options);		
		
		this._dragContainer = this.carouselRoot.find(".touchcarousel-container");	
		
		// animate directly style for better performance
		this._dragContainerStyle = this._dragContainer[0].style;
		
		this._itemsWrapper = this._dragContainer.wrap($('<div class="touchcarousel-wrapper" />')).parent();		
		var itemsJQ = this._dragContainer.find(".touchcarousel-item");
		
		/* Array item structure: 
		 * {
		 * 		item: jQuery item object
		 * 		index: item index
		 * 		posX: item X position
		 *      width: item width
		 * }
		 * 
		 * */
		this.items = [];
		this.numItems = itemsJQ.length;
		
		
		var ua = navigator.userAgent.toLowerCase();
	    var uaMatch = function( ua ) {
		    var match = /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		        /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		        /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		        /(msie) ([\w.]+)/.exec( ua ) ||
		        ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
		        [];

		    return {
		        browser: match[ 1 ] || "",
		        version: match[ 2 ] || "0"
		    };
		};
		var matched = uaMatch( ua );
		var br = {};
		if ( matched.browser ) {
		    br[ matched.browser ] = true;
		    br.version = matched.version;
		}
		if(br.chrome) { br.webkit = true; };
		self._browser = br;

		this._decelerationAnim;
		this._successfullyDragged = false;
		this._startMouseX = 0;
		this._prevMouseX = 0;
		this._moveDist = 0;
		this._blockClickEvents = false;
		this._wasBlocked = false;
		
		this._useWebkitTransition = false;
		
		
		if('ontouchstart' in window) {
			this.hasTouch = true;
			this._downEvent = 'touchstart.rs';
			this._moveEvent = 'touchmove.rs';
			this._upEvent = 'touchend.rs';
			this._baseFriction = this.settings.baseTouchFriction;
		} else {
			this.hasTouch = false;
			this._baseFriction = this.settings.baseMouseFriction;
			if(this.settings.dragUsingMouse) {
				this._downEvent = 'mousedown.rs';
				this._moveEvent = 'mousemove.rs';
				this._upEvent = 'mouseup.rs';
				
				//setup cursor
				this._grabCursor;
				this._grabbingCursor;
				var ua = self._browser;
				if (ua.msie || ua.opera) {
					this._grabCursor = this._grabbingCursor = "move";
				} else if(ua.mozilla) {
					this._grabCursor = "-moz-grab";
					this._grabbingCursor = "-moz-grabbing";
				} 
				this._setGrabCursor();
			} else {
				// set cursor to auto if drag navigation is disabled
				this._itemsWrapper.addClass('auto-cursor');
			}
			
		}	
		if(this.hasTouch || this.settings.useWebkit3d) {
			// check if browser supports translate3d()
			if(('WebKitCSSMatrix' in window && 'm11' in new WebKitCSSMatrix())) {	
				this._dragContainer.css({'-webkit-transform-origin':'0 0', '-webkit-transform': 'translateZ(0)'});			
				this._useWebkitTransition = true;
			}
		}
		
		
		if(this._useWebkitTransition) {
			this._xProp = '-webkit-transform';
			this._xPref = 'translate3d(';
			this._xSuf = 'px, 0, 0)';
		} else {
			this._xProp = 'left';
			this._xPref = '';
			this._xSuf = 'px';
		}
		
		if(this.hasTouch) {
			this.settings.directionNavAutoHide = false;			
		}		
		
		if(!this.settings.directionNav) {
			if(this.settings.loopItems) {
				this._arrowLeftBlocked = true;
				this._arrowRightBlocked = true;
			} else {
				this._arrowLeftBlocked = false;
				this._arrowRightBlocked = false;
			}
			this.settings.loopItems = true;
		}
		
		var	itemObj,
			jqItem,
			dataSRC,
			slideImg,
			currPosX = 0;
		
		
		itemsJQ.eq(0).addClass('first');
		itemsJQ.eq(this.numItems - 1).addClass('last');
		
		// parse items
		itemsJQ.each(function(index) {
			jqItem = $(this);			
			itemObj = {};
			itemObj.item = jqItem;
			itemObj.index = index;
			itemObj.posX = currPosX;
			itemObj.width = (jqItem.outerWidth(true) || self.settings.itemFallbackWidth);			
			currPosX += itemObj.width;
			
			// block all links inside slides when dragging
			if(!this.hasTouch) {
				jqItem.find('a').bind('click.touchcarousel', function(e) {					
					if(self._successfullyDragged) {						
						e.preventDefault();						
						return false;
					}						
				});
			} else {
				// Fix preventing link bug on some touch devices
				var jqLinks = jqItem.find('a');
				var jqLink;
				jqLinks.each(function() {
					jqLink = $(this);
					jqLink.data('tc-href', jqLink.attr('href'));
					jqLink.data('tc-target', jqLink.attr('target'));
					jqLink.attr('href', '#');
					jqLink.bind('click', function(e) {							
						e.preventDefault();	
						if(self._successfullyDragged) {							
							return false;
						} else {
							var linkData = $(this).data('tc-href');							
							var linkTarget = $(this).data('tc-target');								
							if(!linkTarget || linkTarget.toLowerCase() === '_self') {
								window.location.href = linkData;
							} else {
								window.open(linkData);
							}							
						}					
					});
				});		
			}				
			
			// prevent dragging on all elements that have 'non-draggable' class			
			jqItem.find('.non-draggable').bind(self._downEvent, function(e) {					
				self._successfullyDragged = false;	
				e.stopImmediatePropagation();
			});
			
			self.items.push(itemObj);
		});
		
		
		this._maxXPos = this._totalItemsWidth = currPosX;		
		
		
		if(this.settings.itemsPerMove > 0) {
			this._itemsPerMove = this.settings.itemsPerMove;
		} else {
			this._itemsPerMove = 1;			
		}
		
                this._pagingEnabled = false;

		
		this._dragContainer.css({
			width:currPosX
		});
		
		


		
		
	


		//Direction navigation (arrows)
		if(this.settings.directionNav) {	
			this._itemsWrapper.after("<a href='#' class='arrow-holder left'><span class='arrow-icon left'></span></a> <a href='#' class='arrow-holder right'><span class='arrow-icon right'></span></a>");
			this.arrowLeft = this.carouselRoot.find(".arrow-holder.left");
			this.arrowRight = this.carouselRoot.find(".arrow-holder.right");

			
			/*if(this.settings.loopItems) {
				this._arrowLeftBlocked = false;
				this._disableLeftArrow();
			}*/
			
			if(this.arrowLeft.length < 1 || this.arrowRight.length < 1) {
				this.settings.directionNav = false;
			} else if(this.settings.directionNavAutoHide) {
				this.arrowLeft.hide();
				this.arrowRight.hide();

				this.carouselRoot.one("mousemove.arrowshover",function() {
					self.arrowLeft.fadeIn("fast");
					self.arrowRight.fadeIn("fast");					
				});


				this.carouselRoot.hover(
						function() {
							self.arrowLeft.fadeIn("fast");
							self.arrowRight.fadeIn("fast");
						},
						function() {
							self.arrowLeft.fadeOut("fast");
							self.arrowRight.fadeOut("fast");				
						}
				);	
			}	
			
			
			this._updateDirectionNav(0);
			
			if(this.settings.directionNav) {
				this.arrowRight.click(function(e) {					
					e.preventDefault();	
					if(self.settings.loopItems && !self._blockClickEvents || !self._arrowRightBlocked )
						self.next();
				});

				this.arrowLeft.click(function(e) {
					e.preventDefault();
					if(self.settings.loopItems && !self._blockClickEvents || !self._arrowLeftBlocked )
						self.prev();
				});	
			}
		}

		
		

		// Manage window resize event with 100ms delay
		this.carouselWidth;
		this._resizeEvent = 'onorientationchange' in window ? 'orientationchange.touchcarousel' : 'resize.touchcarousel';
		var resizeTimer;
		$(window).bind(this._resizeEvent, function() {		
			if(resizeTimer) 
				clearTimeout(resizeTimer);			
			resizeTimer = setTimeout(function() { self.updateCarouselSize(false); }, 100);			
		});		
		
		
		// Setup scrollbar
		if(this.settings.scrollbar) {
			this._scrollbarHolder = $("<div class='scrollbar-holder'><div class='scrollbar"+ (this.settings.scrollbarTheme.toLowerCase() === "light" ? " light" : " dark")  +"'></div></div>");
			this._scrollbarHolder.appendTo(this.carouselRoot);
			this.scrollbarJQ = this._scrollbarHolder.find('.scrollbar');
			this._scrollbarHideTimeout = "";
			this._scrollbarStyle = this.scrollbarJQ[0].style;			
			this._scrollbarDist = 0;
			if(this.settings.scrollbarAutoHide) {
				this._scrollbarVisible = false;
				this.scrollbarJQ.css("opacity", 0);
			} else {
				this._scrollbarVisible = true;
			}
			
		} else {
			this.settings.scrollbarAutoHide = false;
		}
		
		
		this.updateCarouselSize(true);
		
		
		
		
		
		this._itemsWrapper.bind(this._downEvent, function(e) {  self._onDragStart(e); });	
		
		
		// Keyboard navigation
		if(this.settings.keyboardNav) {
			$(document).bind("keydown.touchcarousel", function(e) {
				if(!self._blockClickEvents) {
					if (e.keyCode === 37) {						
						self.prev();
					}
					else if (e.keyCode === 39) {						
						self.next();
					}
				}
			});
		}
		
		// release carousel main container overflow
		this.carouselRoot.css("overflow","visible");
		
	} /* TouchCarousel Constructor End */
	/* -------------------------------------TouchCarousel Prototype------------------------------------------------------*/
	
	
	
	TouchCarousel.prototype = {
			/* Public methods: */
			setItemsPerMoveByWidth:function() {
				//update the setting based on the width of the carousel - simple paging. 
				if (this._maxXPos) {
					var ipm = (this.carouselWidth / this._maxXPos) * (this.numItems - 1);		// -1 since we have one hidden element
					ipm = Math.floor(ipm) - 1;													// -1 to usually keep one item visible to next 'page'
					if (ipm < 1)
						ipm = 1;
					this._itemsPerMove = ipm;
				} else {
					this._itemsPerMove = 1;
				}
			},
			stopAnimation:function() {
				this._stopAnimation();
				this._updateDirectionNav();  //update the state of the arrows
			},
			goTo:function(id, fromAutoplay) {
						
				
				var newItem = this.items[id];
				
				
				if(newItem) {					
					this._updatePagingNav(id);
					
					
					this.endPos = this._getXPos();
					var newX = -newItem.posX;
					if(newX > 0) {
						newX = 0;
					} else if(newX < this.carouselWidth - this._maxXPos) {
                                             if (this.carouselWidth > this._maxXPos)
						newX = 0;
                                             else
						newX = this.carouselWidth - this._maxXPos;
					}
					this.animateTo(newX, this.settings.transitionSpeed, "easeInOutSine");
				}			
				
			},
			next:function(fromAutoplay) {				
				var currXPos = this._getXPos();				
				var newItemId = this._getItemAtPos(currXPos).index;	
				
                                //Find last item currently showing
                                var itemIdxId = newItemId;
                                var widthSum = 0;
                                while ((itemIdxId < this.numItems) && (widthSum < this.carouselWidth)) {
                                    widthSum += this.items[itemIdxId].width; 
                                    itemIdxId++;
                                }
                                newItemId = itemIdxId - 1;
				
/*
				if(!this._pagingEnabled) {
					newItemId = newItemId + this._itemsPerMove;						
					if(this.settings.loopItems) {
						if(currXPos <= this.carouselWidth - this._maxXPos) {
							newItemId = 0;
						}
					}
					if(newItemId > this.numItems - 1) {
						newItemId = this.numItems - 1;
					}
				} else {
					var newPageId = this._currPageId +  1;
					if(newPageId >  this._numPages - 1) {						
						if(this.settings.loopItems) {
							newItemId = 0;
						} else {
							newItemId = (this._numPages - 1) * this._itemsPerMove;	
						}
					} else {
						newItemId = newPageId * this._itemsPerMove;	
					}
				}
*/
				
				
				this.goTo(newItemId, fromAutoplay);
			},
			prev:function(fromAutoplay) {	
				var currXPos = this._getXPos();				
				var newItemId = this._getItemAtPos(currXPos).index;	
				
                                //Find last item currently showing
                                var itemIdxId = newItemId;
                                //console.log("prev:  currXPos: " + currXPos.toString() + " itemPos: " + this.items[itemIdxId].posX.toString());
                                var widthSum = -currXPos - this.items[itemIdxId].posX;
                                while ((itemIdxId >= 0) && (widthSum < this.carouselWidth)) {
                                    widthSum += this.items[itemIdxId].width; 
                                    itemIdxId--;
                                }
                                newItemId = itemIdxId + 1;
/*
				if(!this._pagingEnabled) {
					newItemId = newItemId - this._itemsPerMove;						
					if(newItemId < 0) {
						if(this.settings.loopItems) {
							if(currXPos < 0) {
								newItemId = 0;							
							} else {
								newItemId = this.numItems - 1;							
							}
							
						} else {
							newItemId = 0;
						}
					}	
				} else {
					var newPageId = this._currPageId -  1;
					if(newPageId <  0) {						
						if(this.settings.loopItems) {
							newItemId = (this._numPages - 1) * this._itemsPerMove;	
						} else {
							newItemId = 0;
						}
					} else {
						newItemId = newPageId * this._itemsPerMove;	
					}			
				}				
*/
				this.goTo(newItemId, fromAutoplay);
			},
			getCurrentId:function() {
				var currId = this._getItemAtPos(this._getXPos()).index;
				return currId;
			},
			setXPos:function(pos, isScrollbar) {	
				if(!isScrollbar) {
					this._dragContainerStyle[this._xProp] = (this._xPref + pos + this._xSuf);					
				} else {					
					this._scrollbarStyle[this._xProp] = (this._xPref + pos + this._xSuf);
				}				
			},
			updateCarouselSize:function(leavePos) {
				var self = this;

                                //------------------------------
                                // Added by EricW:  We had a case where the size of our thumbnails would change on resize and 
                                // touchCarousel was not handling it.   All of this logic in this section was leveraged from
                                // the initialization routine but needs to be recalculated when we update the size of the component.
                                //------------------------------
                                var currPosX = 0;
                                for (index = 0; index < this.numItems; ++index) {
                                    this.items[index].width = (this.items[index].item.outerWidth(true) || self.settings.itemFallbackWidth);
                                    this.items[index].posX  = currPosX;
                                    currPosX += this.items[index].width;
                                }
                                currPosX += 45;
                                this._maxXPos = this._totalItemsWidth = currPosX;		
                                this._dragContainer.css({
                                   width:currPosX
                                });
                                //------------------------------
				
				this.carouselWidth = this.carouselRoot.width();
				if(this.settings.scrollToLast) {
					var lastItemsWidth = 0;
					if(this._pagingEnabled) {					
						var freeItems = (this.numItems % this._itemsPerMove);
						if(freeItems > 0) {
							for(var i = this.numItems - freeItems; i < this.numItems; i++) {								
								lastItemsWidth += this.items[i].width;
							}
						} else {
							lastItemsWidth = this.carouselWidth;
						}
						
					} else {
						lastItemsWidth = this.items[this.numItems - 1].width;
					}
					this._maxXPos = this._totalItemsWidth + this.carouselWidth - lastItemsWidth;
				} else {
					
					this._maxXPos = this._totalItemsWidth;
				}
				
				
				if(this.settings.scrollbar) {
					var scrlWidth = Math.round(this._scrollbarHolder.width() / (this._maxXPos / this.carouselWidth));
					this.scrollbarJQ.css('width', scrlWidth);					
					this._scrollbarDist = this._scrollbarHolder.width() - scrlWidth;
				}		
				if(!this.settings.scrollToLast) {
					if(this.carouselWidth >= this._totalItemsWidth) {
						this._wasBlocked = true;						
						if(!this.settings.loopItems) {
							this._arrowRightBlocked = true;							
							this.arrowRight.addClass("disabled");	
							this._arrowLeftBlocked = true;
							this.arrowLeft.addClass("disabled");	
						}
						this.setXPos(0);						
						return;
					} else if(this._wasBlocked) {
						this._wasBlocked = false;
						this._arrowRightBlocked = false;	
						this._arrowLeftBlocked = false;
						this.arrowRight.removeClass("disabled");	
						this.arrowLeft.removeClass("disabled");	
					}					
				}
				
				if(!leavePos) {
					var newX = this.endPos = this._getXPos();		
					
					if(newX > 0) {
						newX = 0;
					} else if(newX < this.carouselWidth - this._maxXPos) {
						newX = this.carouselWidth - this._maxXPos;
					}
					this.animateTo(newX, 300, "easeInOutSine");		
				}
				
				
			},
			animateTo:function(pos, speed, easing, bounceAnim, endPos, bounceSpeed, bounceEasing) {		
                                 				
				if(this.settings.onAnimStart !== null) {
					this.settings.onAnimStart.call(this);
				}
				
				
				this._stopAnimation();
				
				var self = this;
				
                                //console.log("animateTo:  from: " + this.endPos.toString() + " to: " + pos.toString());
				var scrollbarEnabled = this.settings.scrollbar,
					prop = self._xProp,
					pref = self._xPref,
					suf = self._xSuf,				
					from = {containerPos: this.endPos},
					to = {containerPos: pos},
					to2 = {containerPos: endPos},
					endPos = bounceAnim ? endPos : pos,
					dContainer = self._dragContainerStyle;
				
				self._isAnimating = true;
				
				if(scrollbarEnabled) {
					var sbStyle = this._scrollbarStyle;
					var sbAnimateDist = self._maxXPos - self.carouselWidth;
					if(this.settings.scrollbarAutoHide)  { 
						if(!this._scrollbarVisible) {
							this._showScrollbar();
						}
					}
				}
				
				self._updateDirectionNav(); //update arrows with current position - not end position
				
				function animationComplete() {
					//console.log("animationComplete");
				        self._updateDirectionNav();  //update the arrows when animation is complete
					self._isAnimating = false;
			    	if(self.settings.scrollbarAutoHide)  {					
			    		self._hideScrollbar();
					}
			    	
			    	if(self.settings.onAnimComplete !== null) {
						self.settings.onAnimComplete.call(self);
					}
				}
				
				
				
				
				this._decelerationAnim = $(from).animate(to, {
				    duration: speed,
				    easing: easing,
				    step: function() {
				    	if(scrollbarEnabled) {		
				    		sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-this.containerPos / sbAnimateDist)) + suf );	  
				    	}
				    	dContainer[prop] = (pref + Math.round(this.containerPos) + suf);					       
				    }, 
				    complete: function() {
				    	if(bounceAnim) {
				    		self._decelerationAnim = $(to).animate(to2, {
							    duration: bounceSpeed,
							    easing: bounceEasing,
							    step: function() {			
							    	if(scrollbarEnabled) {
							    		sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-this.containerPos / sbAnimateDist)) + suf );	  
							    	}
							    	dContainer[prop] = (pref + Math.round(this.containerPos) + suf);							        				       
							    },
							    complete: function() {							    	
							    	if(scrollbarEnabled) {
							    		sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-to2.containerPos / sbAnimateDist)) + suf );	  
							    	}
							    	dContainer[prop] = (pref + Math.round(to2.containerPos) + suf);								    	
							    	animationComplete();
							    }
				    		});					    		
				    	} else {					    		
				    		if(scrollbarEnabled) {
					    		sbStyle[prop] = (pref + Math.round((self._scrollbarDist) * (-to.containerPos / sbAnimateDist)) + suf );	  					    	
				    		}
				    		dContainer[prop] = (pref + Math.round(to.containerPos) + suf);			    		
				    		animationComplete();				    		
				    	}
				    }
				});	
				
							
			},
			/* Destroy carousel and remove it's element */
			destroy: function() {
				this._itemsWrapper.unbind(this._downEvent);					
				$(document).unbind(this._moveEvent).unbind(this._upEvent);	
				$(window).unbind(this._resizeEvent);
				if(this.settings.keyboardNav) {
					$(document).unbind("keydown.touchcarousel");
				}	
				this.carouselRoot.remove();
			},
			
			
			/* Private methods: */
			_updatePagingNav:function(id) {
				if(this._pagingEnabled) {	
					var newPageId = this._getPageIdFromItemId(id);					
					this._currPageId = newPageId;	
					
				}
			},
			_getPageIdFromItemId:function(id) {
				var itemsPerPage = this._itemsPerMove;				
				for(var i = 0; i < this._numPages; i++) {	
					if(id >= i * itemsPerPage  && id < i * itemsPerPage + itemsPerPage) {								
						return i;						
					}					
				}
				if(id < 0) {
					return 0;
				} else if(id >= this._numPages) {
					return this._numPages - 1;
				}
				return false;
			},			
			_enableArrows:function() {
				if(!this.settings.loopItems) {
					if(this._arrowLeftBlocked) {								
						this._arrowLeftBlocked = false;
						this.arrowLeft.removeClass("disabled");				
					} else if(this._arrowRightBlocked) {								
						this._arrowRightBlocked = false;
						this.arrowRight.removeClass("disabled");		
					}
				}
			},
			
			
			_disableLeftArrow:function() {			
                                //console.log("disableLeftArrow");
				if(!this._arrowLeftBlocked && !this.settings.loopItems) {		
			
					this._arrowLeftBlocked = true;
					this.arrowLeft.addClass("disabled");	
					if(this._arrowRightBlocked) {
						this._arrowRightBlocked = false;
						this.arrowRight.removeClass("disabled");
					}					
				}	
			},
			_disableRightArrow:function() {				
                                //console.log("disableRightArrow");
				if(!this._arrowRightBlocked && !this.settings.loopItems) {					
					this._arrowRightBlocked = true;							
					this.arrowRight.addClass("disabled");	
					if(this._arrowLeftBlocked) {
						this._arrowLeftBlocked = false;
						this.arrowLeft.removeClass("disabled");		
					}					
				}	
			},
			_getItemAtPos:function(pos) {
				var self = this;
				pos = -pos;
				
				
				var currItem;				
				for(var i = 0; i < self.numItems; i++) {					
					currItem = self.items[i];
					if(pos >= currItem.posX && pos < currItem.posX + currItem.width) {	
					
						return currItem;					
					}
				}
				return -1;
			},
			

			
			_hideScrollbar:function() {
				var self = this;
				this._scrollbarVisible = false;
				if(this._scrollbarHideTimeout) {
					clearTimeout(this._scrollbarHideTimeout);
				}				
				this._scrollbarHideTimeout = setTimeout(function(){
					self.scrollbarJQ.animate({opacity:0}, 150, "linear");
				}, 450);
			},
			_showScrollbar:function() {
				this._scrollbarVisible = true;		
				if(this._scrollbarHideTimeout) {
					clearTimeout(this._scrollbarHideTimeout);
				}	
				this.scrollbarJQ.stop().animate({opacity:1}, 150, "linear");
			},
			_stopAnimation:function() {
				if(this._decelerationAnim) {
					this._decelerationAnim.stop();
				}				
			},			
			_getXPos:function(isScrollbar) {
				var obj = !isScrollbar ? this._dragContainer : this.scrollbarJQ;			
				
				if(!this._useWebkitTransition) {
					return Math.round(obj.position().left);	
				} else {						
					var transform = obj.css("-webkit-transform");
					var explodedMatrix = transform.replace(/^matrix\(/i, '').split(/, |\)$/g);
					return parseInt(explodedMatrix[4], 10);				
				}
			},		
			
			_onDragStart:function(e) {			
				if(!this._isDragging) {		
					
					
					this._stopAnimation();
					if(this.settings.scrollbarAutoHide) {
						this._showScrollbar();
					}
					
					
					var point;
					if(this.hasTouch) {
						this._lockYAxis = false;
						//parsing touch event
						var currTouches = e.originalEvent.touches;
						if(currTouches && currTouches.length > 0) {
							point = currTouches[0];
						}					
						else {	
							return false;						
						}
					} else {
						point = e;						
						e.preventDefault();						
					}
					
					
					this._setGrabbingCursor();			
					this._isDragging = true;
					var self = this;
					if(this._useWebkitTransition) {
						self._dragContainer.css({'-webkit-transition-duration':'0', '-webkit-transition-property': 'none'});
					}
					$(document).bind(this._moveEvent, function(e) { self._onDragMove(e); });
					$(document).bind(this._upEvent, function(e) { self._onDragRelease(e); });		

				
					this._startPos = this._getXPos();
					
								
					
					this._accelerationX = point.clientX;
					
					
					this._successfullyDragged = false;
					
					this._startTime = (e.timeStamp || (new Date().getTime()));
					
					this._moveDist = 0;
					this._prevMouseX = this._startMouseX = point.clientX;
					this._startMouseY = point.clientY;
				}
			},
			_onDragMove:function(e) {
				var timeStamp = (e.timeStamp || (new Date().getTime()));
				var point;
				if(this.hasTouch) {
					if(this._lockYAxis) {
						return false;
					}				
					
					var touches = e.originalEvent.touches;
					// If touches more then one, so stop sliding and allow browser do default action
					
					if(touches.length > 1) {
						return false;
					}
					
					point = touches[0];	
					// If drag direction on mobile is vertical, so stop sliding and allow browser to scroll				
					if(Math.abs(point.clientY - this._startMouseY) > Math.abs(point.clientX - this._startMouseX) + 3) {
						if(this.settings.lockAxis) {
							this._lockYAxis = true;
						}						
						return false;
					}
				
					e.preventDefault();			
				} else {
					point = e;
					e.preventDefault();		
				}
				
				this._latestDragX = point.clientX;

				// Helps find last direction of drag move
				this._lastDragPosition = this._currentDragPosition;
				var distance = point.clientX - this._prevMouseX;
				if(this._lastDragPosition != distance) {
					this._currentDragPosition = distance;
				}
				
				if(distance != 0)
				{
                    /* MLR 2016.08.01 - Bug fix - when the items all fit within the container width, a drag in either direction was causing the items to bounce to the other side.
                       not sure if this is the best place for the fix, but we're basically ignoring any drags when the items all fit within the container.
                       Another potential way to do this could be to add/remove the 'non-draggable' class to the items on every resize?
                    */
                    if (this._totalItemsWidth < this.carouselWidth)
                        return false;
					
                    
					var dist = this._startPos + this._moveDist;
					
					
					
					if(dist >= 0) {						
						distance = distance / 4;						
						this._disableLeftArrow();
						
					} else if(dist <= this.carouselWidth - this._maxXPos) {	
						this._disableRightArrow();
						distance = distance / 4;
					} else {						
						this._enableArrows();
					}
					
					this._moveDist += distance;
					this.setXPos(dist);				
					
					if(this.settings.scrollbar) {					
						this.setXPos((this._scrollbarDist) * (-dist / (this._maxXPos - this.carouselWidth)), true);
					}
				}		
				
				
				
				
				
				
				this._prevMouseX = point.clientX;
			
				if (timeStamp - this._startTime > 350) {
					this._startTime = timeStamp;
					this._accelerationX = point.clientX;						
				}
				
				if(this.settings.onDragStart !== null) {
					this.settings.onDragStart.call(this);
				}
				
				return false;		
			},
			
			_onDragRelease:function(e) {
				
			
				
				if(this._isDragging) {		
					
					var self = this;
					this._isDragging = false;			
					this._setGrabCursor();
					
				
					
					
					
					this.endPos = this._getXPos();
					
					
					this.isdrag = false;

					$(document).unbind(this._moveEvent).unbind(this._upEvent);					

					if(this.endPos == this._startPos) {						
						this._successfullyDragged = false;
						if(this.settings.scrollbarAutoHide) {
							this._hideScrollbar();
						}
						return;	
					} else {
						this._successfullyDragged = true;
					}
					
					//function animate
					var dist = (this._latestDragX - this._accelerationX);		
					var duration =  Math.max(40, (e.timeStamp || (new Date().getTime())) - this._startTime);
					
					
					
					// For nav speed calculation F=ma :)
					var friction = 0.5,
					    mass = 2,					
						v0 = Math.abs(dist) / duration;	
					
					function getCorrectXPos(pos) {
						
						if(pos > 0) {
							pos = 0;
						} else if(pos < self.carouselWidth - self._maxXPos) {
							pos = self.carouselWidth - self._maxXPos;
						}	
						return pos;
					}
					
					if(!this.settings.snapToItems) {
						// Physics continue
						var timeOffset = 0;
						if(v0 <= 2) {
							friction = this._baseFriction * 3.5;
							timeOffset = 0;
						} else if(v0 > 2 && v0 <= 3) {
							friction = this._baseFriction * 4;
							timeOffset = 200;
						} else if(v0 > 3){
							timeOffset = 300;
							if(v0 > 4) {
								v0 = 4;
								timeOffset = 400;
								friction = this._baseFriction * 6;
							}
							friction = this._baseFriction * 5;
						}							
						
						var S = (v0 * v0 * mass) / (2 * friction);
						S = S * (dist < 0 ? -1 : 1);					
						var t = v0 * mass / friction + timeOffset;	
							
						
						if(this.endPos + S > 0) {	
							if(this.endPos > 0) {
								this.animateTo(0, 800, "easeOutCubic");							
							} else {
								this.animateTo(
										(this.carouselWidth / 10) * ((timeOffset + 200) / 1000), 
										(Math.abs(this.endPos) * 1.1) / v0, 
										"easeOutSine", 
										true, 
										0, 
										400, 
										"easeOutCubic");					
							}
						} else if(this.endPos + S < this.carouselWidth - this._maxXPos) {	
							if(this.endPos < this.carouselWidth - this._maxXPos) {						
								this.animateTo(this.carouselWidth - this._maxXPos, 800, "easeOutCubic");							
							} else {							
								this.animateTo(
										this.carouselWidth - this._maxXPos - (this.carouselWidth / 10) * ((timeOffset + 200) / 1000), 
										(Math.abs(this.carouselWidth - this._maxXPos - this.endPos) * 1.1) / v0, 
										"easeOutSine", 
										true, 
										this.carouselWidth - this._maxXPos, 
										400, 
										"easeOutCubic");	
							}	
						} else {				
							this.animateTo(this.endPos + S, t, "easeOutCubic");
						}		
					} else {						
						var isNext = Boolean(this._startMouseX - this._prevMouseX > 0);
										
						
						var newX = getCorrectXPos(this._getXPos());
						
											
						var newItemId = this._getItemAtPos(newX).index;						
						
						if(!this._pagingEnabled) {
							newItemId = newItemId + (isNext ?  this._itemsPerMove : ( - this._itemsPerMove + 1));									
						} else {	
							if(isNext) {			
								newX = Math.max(newX - this.carouselWidth - 1, 1 - self._maxXPos);	
								newItemId = this._getItemAtPos(newX).index;
								if(newItemId === undefined) {
									newItemId = this.numItems - 1;
								}
							}							
							
							var newPageId = this._getPageIdFromItemId(newItemId);
														
							newItemId = newPageId * this._itemsPerMove;								
						}
						
						if(isNext) {							
							newItemId = Math.min(newItemId, this.numItems - 1);
						} else {							
							newItemId = Math.max(newItemId, 0);
						}
						
											
						
						var newItem = this.items[newItemId];
					
						this._updatePagingNav(newItemId);
						
						if(newItem) {
							
							newX = getCorrectXPos(-newItem.posX);
							
							var newDist = Math.abs(this.endPos  - newX);
							var newDuration = Math.max((newDist * 1.08) / v0, 150);
							var isFast = Boolean(newDuration < 180);
							var addDist = newDist * 0.08;
							if(isNext) {
								addDist = addDist * -1;
							}
							
							
							this.animateTo(isFast ? (newX + addDist ) : newX,
									Math.min(newDuration, 400),
									"easeOutSine",
									isFast,
									newX,
									300,
									"easeOutCubic");	
							
							
						}
					
					}
					
					if(this.settings.onDragRelease !== null) {
						this.settings.onDragRelease.call(this);
					}
					
				}

				return false;
			},
			_updateDirectionNav:function(pos) {				
				if(pos === undefined) {					
					pos = this._getXPos();
				}				
				if(!this.settings.loopItems) {
					if(pos >= 0) {						
						this._disableLeftArrow();
					} else if(pos <= (this.carouselWidth - this._maxXPos)) {
                                                //console.log("Disable Right2 " + pos.toString() + "  " + this.carouselWidth.toString() + "  " + this._maxXPos.toString());
						this._disableRightArrow();						
					} else {
						this._enableArrows();
					}
				}
			},
			_setGrabCursor:function() {			
				if(this._grabCursor) {
					this._itemsWrapper.css('cursor', this._grabCursor);
				} else {
					this._itemsWrapper.removeClass('grabbing-cursor');
					this._itemsWrapper.addClass('grab-cursor');	
				}
							
			},
			_setGrabbingCursor:function() {		
				if(this._grabbingCursor) {
					this._itemsWrapper.css('cursor', this._grabbingCursor);
				} else {
					this._itemsWrapper.removeClass('grab-cursor');
					this._itemsWrapper.addClass('grabbing-cursor');	
				}				
			}
	}; /* TouchCarousel.prototype end */

	$.fn.touchCarousel = function(options) {    	
		return this.each(function(){
			var touchCarousel = new TouchCarousel($(this), options);
			$(this).data("touchCarousel", touchCarousel);
		});
	};

	$.fn.touchCarousel.defaults = {  
			itemsPerMove: 1,              // The number of items to move per arrow click.
			
			snapToItems: false,           // Snaps to items, based on itemsPerMove
			
			autoplay:false,               // Autoplay enabled          
			autoplayDelay:3000,	          // Delay between transitions	
			autoplayStopAtAction:true,    // Stop autoplay forever when user clicks arrow or does any other action
			
			scrollbar: true,              // Scrollbar enabled
			scrollbarAutoHide: false,     // Scrollbar autohide
			scrollbarTheme: "dark",	      // Scrollbar color. Can be "light" or "dark"	
			
			transitionSpeed: 600,         // Carousel transition speed (next/prev arrows, autoplay)		
			
			directionNav:true,            // Direction (arrow) navigation (true or false)
			directionNavAutoHide:false,   // Direction (arrow) navigation auto hide on hover. (On touch devices arrows are always shown)
			
			loopItems: false,             // Loop items (don't disable arrows on last slide and allow autoplay to loop)
			
			keyboardNav: false,			  // Keyboard arrows navigation
			dragUsingMouse:true,          // Enable drag using mouse	
			
			
			scrollToLast: false,          // Last item ends at start of carousel wrapper	
			

			itemFallbackWidth: 0,       // Default width of the item in pixels. (used if impossible to get item width).
			
			baseMouseFriction: 0.0012,    // Container friction on desktop (higher friction - slower speed)
			baseTouchFriction: 0.0008,    // Container friction on mobile
			lockAxis: true,               // Allow dragging only on one direction
			useWebkit3d: false,           // Enable WebKit 3d transform on desktop devices 
                                          // (on touch devices this option is turned on)
										  // Use it if you have only images, 3d transform makes text blurry
			                                       
			
			onAnimStart: null,            // Callback, triggers before deceleration or transition animation
			onAnimComplete: null,         // Callback, triggers after deceleration or transition animation

			onDragStart:null,             // Callback, triggers on drag start
			onDragRelease: null           // Callback, triggers on drag complete
	};
	
	$.fn.touchCarousel.settings = {};
	
	/* easing types */
	$.extend(jQuery.easing, {
		easeInOutSine: function (x, t, b, c, d) {
			return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
		},
		easeOutSine: function (x, t, b, c, d) {
			return c * Math.sin(t/d * (Math.PI/2)) + b;
		},
		easeOutCubic: function (x, t, b, c, d) {
			return c*((t=t/d-1)*t*t + 1) + b;
		}
	});
	
})(jQuery);


(function (e) { var o = "left", n = "right", d = "up", v = "down", c = "in", w = "out", l = "none", r = "auto", k = "swipe", s = "pinch", x = "tap", i = "doubletap", b = "longtap", A = "horizontal", t = "vertical", h = "all", q = 10, f = "start", j = "move", g = "end", p = "cancel", a = "ontouchstart" in window, y = "TouchSwipe"; var m = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, triggerOnTouchEnd: true, triggerOnTouchLeave: false, allowPageScroll: "auto", fallbackToMouseEvents: true, excludedElements: "button, input, select, textarea, a, .noSwipe" }; e.fn.swipe = function (D) { var C = e(this), B = C.data(y); if (B && typeof D === "string") { if (B[D]) { return B[D].apply(this, Array.prototype.slice.call(arguments, 1)) } else { e.error("Method " + D + " does not exist on jQuery.swipe") } } else { if (!B && (typeof D === "object" || !D)) { return u.apply(this, arguments) } } return C }; e.fn.swipe.defaults = m; e.fn.swipe.phases = { PHASE_START: f, PHASE_MOVE: j, PHASE_END: g, PHASE_CANCEL: p }; e.fn.swipe.directions = { LEFT: o, RIGHT: n, UP: d, DOWN: v, IN: c, OUT: w }; e.fn.swipe.pageScroll = { NONE: l, HORIZONTAL: A, VERTICAL: t, AUTO: r }; e.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: h }; function u(B) { if (B && (B.allowPageScroll === undefined && (B.swipe !== undefined || B.swipeStatus !== undefined))) { B.allowPageScroll = l } if (B.click !== undefined && B.tap === undefined) { B.tap = B.click } if (!B) { B = {} } B = e.extend({}, e.fn.swipe.defaults, B); return this.each(function () { var D = e(this); var C = D.data(y); if (!C) { C = new z(this, B); D.data(y, C) } }) } function z(a0, aq) { var av = (a || !aq.fallbackToMouseEvents), G = av ? "touchstart" : "mousedown", au = av ? "touchmove" : "mousemove", R = av ? "touchend" : "mouseup", P = av ? null : "mouseleave", az = "touchcancel"; var ac = 0, aL = null, Y = 0, aX = 0, aV = 0, D = 1, am = 0, aF = 0, J = null; var aN = e(a0); var W = "start"; var T = 0; var aM = null; var Q = 0, aY = 0, a1 = 0, aa = 0, K = 0; var aS = null; try { aN.bind(G, aJ); aN.bind(az, a5) } catch (ag) { e.error("events not supported " + G + "," + az + " on jQuery.swipe") } this.enable = function () { aN.bind(G, aJ); aN.bind(az, a5); return aN }; this.disable = function () { aG(); return aN }; this.destroy = function () { aG(); aN.data(y, null); return aN }; this.option = function (a8, a7) { if (aq[a8] !== undefined) { if (a7 === undefined) { return aq[a8] } else { aq[a8] = a7 } } else { e.error("Option " + a8 + " does not exist on jQuery.swipe.options") } }; function aJ(a9) { if (ax()) { return } if (e(a9.target).closest(aq.excludedElements, aN).length > 0) { return } var ba = a9.originalEvent ? a9.originalEvent : a9; var a8, a7 = a ? ba.touches[0] : ba; W = f; if (a) { T = ba.touches.length } else { a9.preventDefault() } ac = 0; aL = null; aF = null; Y = 0; aX = 0; aV = 0; D = 1; am = 0; aM = af(); J = X(); O(); if (!a || (T === aq.fingers || aq.fingers === h) || aT()) { ae(0, a7); Q = ao(); if (T == 2) { ae(1, ba.touches[1]); aX = aV = ap(aM[0].start, aM[1].start) } if (aq.swipeStatus || aq.pinchStatus) { a8 = L(ba, W) } } else { a8 = false } if (a8 === false) { W = p; L(ba, W); return a8 } else { ak(true) } } function aZ(ba) { var bd = ba.originalEvent ? ba.originalEvent : ba; if (W === g || W === p || ai()) { return } var a9, a8 = a ? bd.touches[0] : bd; var bb = aD(a8); aY = ao(); if (a) { T = bd.touches.length } W = j; if (T == 2) { if (aX == 0) { ae(1, bd.touches[1]); aX = aV = ap(aM[0].start, aM[1].start) } else { aD(bd.touches[1]); aV = ap(aM[0].end, aM[1].end); aF = an(aM[0].end, aM[1].end) } D = a3(aX, aV); am = Math.abs(aX - aV) } if ((T === aq.fingers || aq.fingers === h) || !a || aT()) { aL = aH(bb.start, bb.end); ah(ba, aL); ac = aO(bb.start, bb.end); Y = aI(); aE(aL, ac); if (aq.swipeStatus || aq.pinchStatus) { a9 = L(bd, W) } if (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave) { var a7 = true; if (aq.triggerOnTouchLeave) { var bc = aU(this); a7 = B(bb.end, bc) } if (!aq.triggerOnTouchEnd && a7) { W = ay(j) } else { if (aq.triggerOnTouchLeave && !a7) { W = ay(g) } } if (W == p || W == g) { L(bd, W) } } } else { W = p; L(bd, W) } if (a9 === false) { W = p; L(bd, W) } } function I(a7) { var a8 = a7.originalEvent; if (a) { if (a8.touches.length > 0) { C(); return true } } if (ai()) { T = aa } a7.preventDefault(); aY = ao(); Y = aI(); if (a6()) { W = p; L(a8, W) } else { if (aq.triggerOnTouchEnd || (aq.triggerOnTouchEnd == false && W === j)) { W = g; L(a8, W) } else { if (!aq.triggerOnTouchEnd && a2()) { W = g; aB(a8, W, x) } else { if (W === j) { W = p; L(a8, W) } } } } ak(false) } function a5() { T = 0; aY = 0; Q = 0; aX = 0; aV = 0; D = 1; O(); ak(false) } function H(a7) { var a8 = a7.originalEvent; if (aq.triggerOnTouchLeave) { W = ay(g); L(a8, W) } } function aG() { aN.unbind(G, aJ); aN.unbind(az, a5); aN.unbind(au, aZ); aN.unbind(R, I); if (P) { aN.unbind(P, H) } ak(false) } function ay(bb) { var ba = bb; var a9 = aw(); var a8 = aj(); var a7 = a6(); if (!a9 || a7) { ba = p } else { if (a8 && bb == j && (!aq.triggerOnTouchEnd || aq.triggerOnTouchLeave)) { ba = g } else { if (!a8 && bb == g && aq.triggerOnTouchLeave) { ba = p } } } return ba } function L(a9, a7) { var a8 = undefined; if (F() || S()) { a8 = aB(a9, a7, k) } else { if ((M() || aT()) && a8 !== false) { a8 = aB(a9, a7, s) } } if (aC() && a8 !== false) { a8 = aB(a9, a7, i) } else { if (al() && a8 !== false) { a8 = aB(a9, a7, b) } else { if (ad() && a8 !== false) { a8 = aB(a9, a7, x) } } } if (a7 === p) { a5(a9) } if (a7 === g) { if (a) { if (a9.touches.length == 0) { a5(a9) } } else { a5(a9) } } return a8 } function aB(ba, a7, a9) { var a8 = undefined; if (a9 == k) { aN.trigger("swipeStatus", [a7, aL || null, ac || 0, Y || 0, T]); if (aq.swipeStatus) { a8 = aq.swipeStatus.call(aN, ba, a7, aL || null, ac || 0, Y || 0, T); if (a8 === false) { return false } } if (a7 == g && aR()) { aN.trigger("swipe", [aL, ac, Y, T]); if (aq.swipe) { a8 = aq.swipe.call(aN, ba, aL, ac, Y, T); if (a8 === false) { return false } } switch (aL) { case o: aN.trigger("swipeLeft", [aL, ac, Y, T]); if (aq.swipeLeft) { a8 = aq.swipeLeft.call(aN, ba, aL, ac, Y, T) } break; case n: aN.trigger("swipeRight", [aL, ac, Y, T]); if (aq.swipeRight) { a8 = aq.swipeRight.call(aN, ba, aL, ac, Y, T) } break; case d: aN.trigger("swipeUp", [aL, ac, Y, T]); if (aq.swipeUp) { a8 = aq.swipeUp.call(aN, ba, aL, ac, Y, T) } break; case v: aN.trigger("swipeDown", [aL, ac, Y, T]); if (aq.swipeDown) { a8 = aq.swipeDown.call(aN, ba, aL, ac, Y, T) } break } } } if (a9 == s) { aN.trigger("pinchStatus", [a7, aF || null, am || 0, Y || 0, T, D]); if (aq.pinchStatus) { a8 = aq.pinchStatus.call(aN, ba, a7, aF || null, am || 0, Y || 0, T, D); if (a8 === false) { return false } } if (a7 == g && a4()) { switch (aF) { case c: aN.trigger("pinchIn", [aF || null, am || 0, Y || 0, T, D]); if (aq.pinchIn) { a8 = aq.pinchIn.call(aN, ba, aF || null, am || 0, Y || 0, T, D) } break; case w: aN.trigger("pinchOut", [aF || null, am || 0, Y || 0, T, D]); if (aq.pinchOut) { a8 = aq.pinchOut.call(aN, ba, aF || null, am || 0, Y || 0, T, D) } break } } } if (a9 == x) { if (a7 === p || a7 === g) { clearTimeout(aS); if (V() && !E()) { K = ao(); aS = setTimeout(e.proxy(function () { K = null; aN.trigger("tap", [ba.target]); if (aq.tap) { a8 = aq.tap.call(aN, ba, ba.target) } }, this), aq.doubleTapThreshold) } else { K = null; aN.trigger("tap", [ba.target]); if (aq.tap) { a8 = aq.tap.call(aN, ba, ba.target) } } } } else { if (a9 == i) { if (a7 === p || a7 === g) { clearTimeout(aS); K = null; aN.trigger("doubletap", [ba.target]); if (aq.doubleTap) { a8 = aq.doubleTap.call(aN, ba, ba.target) } } } else { if (a9 == b) { if (a7 === p || a7 === g) { clearTimeout(aS); K = null; aN.trigger("longtap", [ba.target]); if (aq.longTap) { a8 = aq.longTap.call(aN, ba, ba.target) } } } } } return a8 } function aj() { var a7 = true; if (aq.threshold !== null) { a7 = ac >= aq.threshold } return a7 } function a6() { var a7 = false; if (aq.cancelThreshold !== null && aL !== null) { a7 = (aP(aL) - ac) >= aq.cancelThreshold } return a7 } function ab() { if (aq.pinchThreshold !== null) { return am >= aq.pinchThreshold } return true } function aw() { var a7; if (aq.maxTimeThreshold) { if (Y >= aq.maxTimeThreshold) { a7 = false } else { a7 = true } } else { a7 = true } return a7 } function ah(a7, a8) { if (aq.allowPageScroll === l || aT()) { a7.preventDefault() } else { var a9 = aq.allowPageScroll === r; switch (a8) { case o: if ((aq.swipeLeft && a9) || (!a9 && aq.allowPageScroll != A)) { a7.preventDefault() } break; case n: if ((aq.swipeRight && a9) || (!a9 && aq.allowPageScroll != A)) { a7.preventDefault() } break; case d: if ((aq.swipeUp && a9) || (!a9 && aq.allowPageScroll != t)) { a7.preventDefault() } break; case v: if ((aq.swipeDown && a9) || (!a9 && aq.allowPageScroll != t)) { a7.preventDefault() } break } } } function a4() { var a8 = aK(); var a7 = U(); var a9 = ab(); return a8 && a7 && a9 } function aT() { return !!(aq.pinchStatus || aq.pinchIn || aq.pinchOut) } function M() { return !!(a4() && aT()) } function aR() { var ba = aw(); var bc = aj(); var a9 = aK(); var a7 = U(); var a8 = a6(); var bb = !a8 && a7 && a9 && bc && ba; return bb } function S() { return !!(aq.swipe || aq.swipeStatus || aq.swipeLeft || aq.swipeRight || aq.swipeUp || aq.swipeDown) } function F() { return !!(aR() && S()) } function aK() { return ((T === aq.fingers || aq.fingers === h) || !a) } function U() { return aM[0].end.x !== 0 } function a2() { return !!(aq.tap) } function V() { return !!(aq.doubleTap) } function aQ() { return !!(aq.longTap) } function N() { if (K == null) { return false } var a7 = ao(); return (V() && ((a7 - K) <= aq.doubleTapThreshold)) } function E() { return N() } function at() { return ((T === 1 || !a) && (isNaN(ac) || ac === 0)) } function aW() { return ((Y > aq.longTapThreshold) && (ac < q)) } function ad() { return !!(at() && a2()) } function aC() { return !!(N() && V()) } function al() { return !!(aW() && aQ()) } function C() { a1 = ao(); aa = event.touches.length + 1 } function O() { a1 = 0; aa = 0 } function ai() { var a7 = false; if (a1) { var a8 = ao() - a1; if (a8 <= aq.fingerReleaseThreshold) { a7 = true } } return a7 } function ax() { return !!(aN.data(y + "_intouch") === true) } function ak(a7) { if (a7 === true) { aN.bind(au, aZ); aN.bind(R, I); if (P) { aN.bind(P, H) } } else { aN.unbind(au, aZ, false); aN.unbind(R, I, false); if (P) { aN.unbind(P, H, false) } } aN.data(y + "_intouch", a7 === true) } function ae(a8, a7) { var a9 = a7.identifier !== undefined ? a7.identifier : 0; aM[a8].identifier = a9; aM[a8].start.x = aM[a8].end.x = a7.pageX || a7.clientX; aM[a8].start.y = aM[a8].end.y = a7.pageY || a7.clientY; return aM[a8] } function aD(a7) { var a9 = a7.identifier !== undefined ? a7.identifier : 0; var a8 = Z(a9); a8.end.x = a7.pageX || a7.clientX; a8.end.y = a7.pageY || a7.clientY; return a8 } function Z(a8) { for (var a7 = 0; a7 < aM.length; a7++) { if (aM[a7].identifier == a8) { return aM[a7] } } } function af() { var a7 = []; for (var a8 = 0; a8 <= 5; a8++) { a7.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 }) } return a7 } function aE(a7, a8) { a8 = Math.max(a8, aP(a7)); J[a7].distance = a8 } function aP(a7) { return J[a7].distance } function X() { var a7 = {}; a7[o] = ar(o); a7[n] = ar(n); a7[d] = ar(d); a7[v] = ar(v); return a7 } function ar(a7) { return { direction: a7, distance: 0 } } function aI() { return aY - Q } function ap(ba, a9) { var a8 = Math.abs(ba.x - a9.x); var a7 = Math.abs(ba.y - a9.y); return Math.round(Math.sqrt(a8 * a8 + a7 * a7)) } function a3(a7, a8) { var a9 = (a8 / a7) * 1; return a9.toFixed(2) } function an() { if (D < 1) { return w } else { return c } } function aO(a8, a7) { return Math.round(Math.sqrt(Math.pow(a7.x - a8.x, 2) + Math.pow(a7.y - a8.y, 2))) } function aA(ba, a8) { var a7 = ba.x - a8.x; var bc = a8.y - ba.y; var a9 = Math.atan2(bc, a7); var bb = Math.round(a9 * 180 / Math.PI); if (bb < 0) { bb = 360 - Math.abs(bb) } return bb } function aH(a8, a7) { var a9 = aA(a8, a7); if ((a9 <= 45) && (a9 >= 0)) { return o } else { if ((a9 <= 360) && (a9 >= 315)) { return o } else { if ((a9 >= 135) && (a9 <= 225)) { return n } else { if ((a9 > 45) && (a9 < 135)) { return v } else { return d } } } } } function ao() { var a7 = new Date(); return a7.getTime() } function aU(a7) { a7 = e(a7); var a9 = a7.offset(); var a8 = { left: a9.left, right: a9.left + a7.outerWidth(), top: a9.top, bottom: a9.top + a7.outerHeight() }; return a8 } function B(a7, a8) { return (a7.x > a8.left && a7.x < a8.right && a7.y > a8.top && a7.y < a8.bottom) } } })(jQuery);

/* jshint ignore:end */

