(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"8jRI":function(r,t,e){"use strict";var n=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function a(r,t){try{return decodeURIComponent(r.join(""))}catch(o){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],a(e),a(n))}function i(r){try{return decodeURIComponent(r)}catch(o){for(var t=r.match(n),e=1;e<t.length;e++)t=(r=a(t,e).join("")).match(n);return r}}r.exports=function(r){if("string"!=typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var e={"%FE%FF":"��","%FF%FE":"��"},n=o.exec(r);n;){try{e[n[0]]=decodeURIComponent(n[0])}catch(t){var a=i(n[0]);a!==n[0]&&(e[n[0]]=a)}n=o.exec(r)}e["%C2"]="�";for(var c=Object.keys(e),u=0;u<c.length;u++){var s=c[u];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},"8yz6":function(r,t,e){"use strict";r.exports=function(r,t){if("string"!=typeof r||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}},Bnag:function(r,t){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(r,t){r.exports=function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}},Ijbi:function(r,t,e){var n=e("WkPL");r.exports=function(r){if(Array.isArray(r))return n(r)}},J4zp:function(r,t,e){var n=e("wTVA"),o=e("m0LI"),a=e("ZhPi"),i=e("wkBT");r.exports=function(r,t){return n(r)||o(r,t)||a(r,t)||i()}},OcEc:function(r,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return s}));var n=e("q1tI"),o=e.n(n),a=(e("a6qw"),e("VflZ")),i=e("M55E"),c=e.n(i),u=e("cr+I");function s(r){var t=Object(n.useState)(),e=t[0],i=t[1];return Object(n.useEffect)((function(){var t=u.parse(r.location.search).id;fetch("https://api.evangelie.by/publications/"+t).then((function(r){return r.json()})).then((function(r){i(r)}))}),[r.location.search]),o.a.createElement(a.a,null,o.a.createElement("div",{className:"row mt-2"},o.a.createElement("div",{className:"col-12 text-center"},o.a.createElement("h2",{className:"publication-page-title"},null==e?void 0:e.label)),o.a.createElement("div",{className:"col-12"},(null==e?void 0:e.content)&&o.a.createElement("div",{className:"publication-page-content",dangerouslySetInnerHTML:{__html:(new c.a.Converter).makeHtml(e.content)}}))))}},Pmem:function(r,t,e){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}},RIqP:function(r,t,e){var n=e("Ijbi"),o=e("EbDI"),a=e("ZhPi"),i=e("Bnag");r.exports=function(r){return n(r)||o(r)||a(r)||i()}},WkPL:function(r,t){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}},ZhPi:function(r,t,e){var n=e("WkPL");r.exports=function(r,t){if(r){if("string"==typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}}},c0go:function(r,t,e){"use strict";r.exports=function(r,t){for(var e={},n=Object.keys(r),o=Array.isArray(t),a=0;a<n.length;a++){var i=n[a],c=r[i];(o?-1!==t.indexOf(i):t(i,c,r))&&(e[i]=c)}return e}},"cr+I":function(r,t,e){"use strict";var n=e("lSNA"),o=e("J4zp"),a=e("RIqP");function i(r,t){var e;if("undefined"==typeof Symbol||null==r[Symbol.iterator]){if(Array.isArray(r)||(e=function(r,t){if(!r)return;if("string"==typeof r)return c(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(r,t)}(r))||t&&r&&"number"==typeof r.length){e&&(r=e);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){e=r[Symbol.iterator]()},n:function(){var r=e.next();return i=r.done,r},e:function(r){u=!0,a=r},f:function(){try{i||null==e.return||e.return()}finally{if(u)throw a}}}}function c(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}var u=e("Pmem"),s=e("8jRI"),l=e("8yz6"),f=e("c0go"),p=Symbol("encodeFragmentIdentifier");function y(r){if("string"!=typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function m(r,t){return t.encode?t.strict?u(r):encodeURIComponent(r):r}function d(r,t){return t.decode?s(r):r}function v(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function b(r){var t=(r=v(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function g(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"==typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function h(r,t){y((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"==typeof e&&e.includes(r.arrayFormatSeparator),a="string"==typeof e&&!o&&d(e,r).includes(r.arrayFormatSeparator);e=a?d(e,r):e;var i=o||a?e.split(r.arrayFormatSeparator).map((function(t){return d(t,r)})):null===e?e:d(e,r);n[t]=i};case"bracket-separator":return function(t,e,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(r.arrayFormatSeparator).map((function(t){return d(t,r)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=e?d(e,r):e};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),n=Object.create(null);if("string"!=typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var a,c=i(r.split("&"));try{for(c.s();!(a=c.n()).done;){var u=a.value;if(""!==u){var s=l(t.decode?u.replace(/\+/g," "):u,"="),f=o(s,2),p=f[0],m=f[1];m=void 0===m?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?m:d(m,t),e(d(p,t),m,n)}}}catch(k){c.e(k)}finally{c.f()}for(var v=0,b=Object.keys(n);v<b.length;v++){var h=b[v],j=n[h];if("object"==typeof j&&null!==j)for(var w=0,I=Object.keys(j);w<I.length;w++){var x=I[w];j[x]=g(j[x],t)}else n[h]=g(j,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(r,t){var e=n[t];return Boolean(e)&&"object"==typeof e&&!Array.isArray(e)?r[t]=function r(t){return Array.isArray(t)?t.sort():"object"==typeof t?r(Object.keys(t)).sort((function(r,t){return Number(r)-Number(t)})).map((function(r){return t[r]})):t}(e):r[t]=e,r}),Object.create(null))}t.extract=b,t.parse=h,t.stringify=function(r,t){if(!r)return"";y((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&null==r[e]||t.skipEmptyString&&""===r[e]},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var o=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[m(t,r),"[",o,"]"].join("")]:[[m(t,r),"[",m(o,r),"]=",m(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[[m(t,r),"[]"].join("")]:[[m(t,r),"[]=",m(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===r.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[m(e,r),t,m(o,r)].join("")]:[[n,m(o,r)].join(r.arrayFormatSeparator)])}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(a(e),null===n?[m(t,r)]:[[m(t,r),"=",m(n,r)].join("")])}}}}(t),o={},i=0,c=Object.keys(r);i<c.length;i++){var u=c[i];e(u)||(o[u]=r[u])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var o=r[e];return void 0===o?"":null===o?m(e,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?m(e,t)+"[]":o.reduce(n(e),[]).join("&"):m(e,t)+"="+m(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){t=Object.assign({decode:!0},t);var e=l(r,"#"),n=o(e,2),a=n[0],i=n[1];return Object.assign({url:a.split("?")[0]||"",query:h(b(r),t)},t&&t.parseFragmentIdentifier&&i?{fragmentIdentifier:d(i,t)}:{})},t.stringifyUrl=function(r,e){e=Object.assign(n({encode:!0,strict:!0},p,!0),e);var o=v(r.url).split("?")[0]||"",a=t.extract(r.url),i=t.parse(a,{sort:!1}),c=Object.assign(i,r.query),u=t.stringify(c,e);u&&(u="?".concat(u));var s=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url);return r.fragmentIdentifier&&(s="#".concat(e[p]?m(r.fragmentIdentifier,e):r.fragmentIdentifier)),"".concat(o).concat(u).concat(s)},t.pick=function(r,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},p,!1),o);var a=t.parseUrl(r,o),i=a.url,c=a.query,u=a.fragmentIdentifier;return t.stringifyUrl({url:i,query:f(c,e),fragmentIdentifier:u},o)},t.exclude=function(r,e,n){var o=Array.isArray(e)?function(r){return!e.includes(r)}:function(r,t){return!e(r,t)};return t.pick(r,o,n)}},lSNA:function(r,t){r.exports=function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}},m0LI:function(r,t){r.exports=function(r,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r)){var e=[],n=!0,o=!1,a=void 0;try{for(var i,c=r[Symbol.iterator]();!(n=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);n=!0);}catch(u){o=!0,a=u}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return e}}},wTVA:function(r,t){r.exports=function(r){if(Array.isArray(r))return r}},wkBT:function(r,t){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}}]);
//# sourceMappingURL=component---src-pages-publication-js-dcc40920c98ad0337e96.js.map