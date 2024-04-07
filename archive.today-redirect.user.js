// ==UserScript==
// @name         archive.today-redirect
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  The archive.today-redirect UserScript is designed to enhance your browsing experience by automatically redirecting specified domains to their archived versions on archive.today.
// @author       @tonylin919
// @match        https://archive.ph/*
// @match        https://www.nytimes.com/*
// @match        https://www.barrons.com/*
// @match        https://fortune.com/*
// @match        https://www.wsj.com/*
// @exclude      /^https:\/\/www\.nytimes\.com\/$/
// @exclude      /^https:\/\/www\.nytimes\.com\/[^\/]+\/[^\/]+\/?$/
// @exclude      /^https:\/\/www\.barrons\.com\/$/
// @exclude      /^https:\/\/fortune\.com\/$/
// @exclude      /^https:\/\/www\.wsj\.com\/$/
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// ==/UserScript==

(()=>{"use strict";function t(t){return e=this,n=void 0,o=function(){return function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}}(this,(function(e){return[2,new Promise((function(e,n){"undefined"!=typeof GM_xmlhttpRequest?GM_xmlhttpRequest(Object.assign({},t,{onload:e,onerror:n})):"undefined"!=typeof GM&&void 0!==GM.xmlHttpRequest?GM.xmlHttpRequest(Object.assign({},t,{onload:e,onerror:n})):n(new Error("XMLHttpRequest is not supported in this Userscript environment."))}))]}))},new((r=void 0)||(r=Promise))((function(t,i){function u(t){try{a(o.next(t))}catch(t){i(t)}}function c(t){try{a(o.throw(t))}catch(t){i(t)}}function a(e){var n;e.done?t(e.value):(n=e.value,n instanceof r?n:new r((function(t){t(n)}))).then(u,c)}a((o=o.apply(e,n||[])).next())}));var e,n,r,o}var e=function(t,e,n,r){return new(n||(n=Promise))((function(o,i){function u(t){try{a(r.next(t))}catch(t){i(t)}}function c(t){try{a(r.throw(t))}catch(t){i(t)}}function a(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(u,c)}a((r=r.apply(t,e||[])).next())}))},n=function(t,e){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(a){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((o=(o=u.trys).length>0&&o[o.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=e.call(t,u)}catch(t){c=[6,t],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,a])}}};!function(){e(this,void 0,void 0,(function(){var r,o,i,u;return n(this,(function(c){return(r=new URL(window.location.href)).search="",r.hash="",(o=r.toString()).startsWith("https://archive.ph/")?(i=document.querySelector('div[class="TEXT-BLOCK"] > a'))&&i.href&&window.location.replace(i.href):(u=encodeURIComponent(o),function(r){return e(this,void 0,void 0,(function(){return n(this,(function(e){return[2,t({method:"GET",url:r}).then((function(t){var e=(new DOMParser).parseFromString(t.responseText,"text/html").querySelector('a[style="text-decoration:none"]');return e instanceof HTMLAnchorElement?e.href:r})).catch((function(t){return console.error("Failed to fetch redirect URL:",t),r}))]}))}))}("https://archive.ph/".concat(u)).then((function(t){t&&window.location.replace(t)}))),[2]}))}))}()})();