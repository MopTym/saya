!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Saya=n():t.Saya=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){"use strict";function e(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function r(t){return"object"===("undefined"==typeof t?"undefined":e(t))&&s(t.length)}function o(t,n,e,r){return s(r)?(a.each(t,function(t){return n(t,e,r)}),t):t.length?n(t[0],e):void 0}function s(t){return"undefined"!=typeof t}var i=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},u="SAYA"+Date.now(),a=function c(t){return new c.prototype.Init(t)};a.prototype={constructor:a,length:0,Init:function(t){var n=this;return t?t instanceof a?t:(t.nodeType?(this[0]=t,this.length=1):("string"==typeof t&&(t=document.querySelectorAll(t)||[]),a.each(t,function(t,e){return n[e]=t}),this.length=t.length),this):this}},a.prototype.Init.prototype=a.prototype,i(a.prototype,{each:function(t,n,e){return a.each(this,t,n,e)},data:function(t,n){return s(n)?this.each(function(e){return a.data(e,t,n)}):a.data(this[0],t)},eq:function(t){return isNaN(t)?a():a(this[0>t?this.length+t:t])},show:function(){return this.each(a.show)},hide:function(){return this.each(a.hide)},on:function(t,n){var e=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(r){return a.on(r,t,n,e)})},off:function(t,n){var e=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(r){return a.off(r,t,n,e)})},attr:function(t,n){return o(this,a.attr,t,n)},removeAttr:function(t){return this.each(function(n){return a.removeAttr(n,t)})},addClass:function(t){return this.each(function(n){return a.addClass(n,t)})},removeClass:function(t){return this.each(function(n){return a.removeClass(n,t)})},hasClass:function(t){return!this.each(function(n){return!a.hasClass(n,t)},!0,!1)},toggleClass:function(t){return this.each(function(n){return a.toggleClass(n,t)})}}),i(a,{each:function(t,n,e,o){if(r(t))for(var s=0,i=t.length;i>s;s++)if(n(t[s],s,t)===!1&&e)return o;return t},data:function(t,n,e){return t?(t[u]||Object.defineProperty(t,u,{value:{},configurable:!0}),s(e)?void(t[u][n]=e):t[u][n]):void 0},show:function(t){t&&(t.style.display="block")},hide:function(t){t&&(t.style.display="none")},on:function(t,n,e){var r=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.addEventListener(n,e,r)},off:function(t,n,e){var r=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.removeEventListener(n,e,r)},attr:function(t,n,e){if(t){if(!s(e))return t.getAttribute(n)||"";t.setAttribute(n,e)}},removeAttr:function(t,n){t&&t.removeAttribute(n)},addClass:function(t,n){if(t&&n&&!this.hasClass(t,n)){var e=this.attr(t,"class").trim(),r=(e+" "+n).trim();this.attr(t,"class",r)}},removeClass:function(t,n){if(t&&n){var e=new RegExp("\\s*\\b"+n+"\\b\\s*","g"),r=this.attr(t,"class").replace(e," ").trim();this.attr(t,"class",r)}},hasClass:function(t,n){return t&&n?new RegExp("\\b"+n+"\\b").test(this.attr(t,"class")):!1},toggleClass:function(t,n){this.hasClass(t,n)?this.removeClass(t,n):this.addClass(t,n)}}),t.exports=a}])});