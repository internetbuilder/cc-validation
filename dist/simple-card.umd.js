!function(n,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):n.simpleCard=i()}(this,function(){"use strict";var n=function(n){return"[object Object]"===Object.prototype.toString.call(n)},i=function(n){return n.replace("/","/1/")},e=function(n){for(var i=[0,2,4,6,8,1,3,5,7,9],e=n.length,r=1,t=0,a=0;e;)a=parseInt(n.charAt(--e),10),t+=(r^=1)?i[a]:a;return t&&t%10==0},r=function(n){return-1!==String(n).indexOf("/")?"validDate":String(n).length>4?"validNumber":"validCVN"},t=function(n){var i={isValid:!0},e=0,r="";for(r in n)n[r].isValid||e++,i[r]=n[r].info;return i.isValid=0===e,i},a=function(n){if(!n)return{isValid:!1,info:"No Data Provided"};var e=new Date>new Date(i(n));return{isValid:!e,info:e}},o=function(n){var i={visa:/^4[0-9]{13,15}$/,discover:/^6[0-9]{15}$/,master:/^5[1-5][0-9]{14}$/,amex:/^3(4|7)[0-9]{13}$/},e="";for(e in i)if(i[e].test(n))return{isValid:!0,info:e};return{isValid:!1,info:"Invalid Card Number"}},f=function(n){var i={visa:/^4[0-9]{13,15}$/,discover:/^6[0-9]{15}$/,master:/^5[1-5][0-9]{14}$/,amex:/^3(4|7)[0-9]{13}$/},r="";for(r in i)if(i[r].test(n))return{isValid:Boolean(e(n)),info:r};return{isValid:!1,info:"Invalid Card Number"}},u=function(n){var i=/[0-9]/.test(n),e={norm:i&&3===n.length,amex:i&&4===n.length},r="";for(r in e)if(e[r])return{isValid:!0,info:r};return{isValid:!1,info:"Invalid CVN Code"}},d=function(n,i){if(!n)return{validNumber:f,validCVN:u,validDate:a};var e=n.number,r=n.cvn,d=n.expire,l={cardType:i?o(e):f(e),cvnType:u(r),expired:a(d)};return t(l)},l=function(n,i,e){return d()[n](i,e)};return function(i,e){return n(i)?d(i,e):l(r(i),i,e)}});
