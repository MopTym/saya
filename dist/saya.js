!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Saya=n():t.Saya=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n){"use strict";function e(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function r(t){return"object"===("undefined"==typeof t?"undefined":e(t))&&i(t.length)}function o(t,n,e,r){return i(r)?(c.each(t,function(t){return n(t,e,r)}),t):t.length?n(t[0],e):void 0}function s(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return t.replace(/(^\s+)|(\s+$)/g,"")}function i(t){return"undefined"!=typeof t}var u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t};Object.defineProperty(n,"__esModule",{value:!0});var a="SAYA"+Date.now(),c=function f(t){return new f.prototype.Init(t)};c.prototype={constructor:c,length:0,Init:function(t){var n=this;return t?t instanceof c?t:(t.nodeType?(this[0]=t,this.length=1):("string"==typeof t&&(t=document.querySelectorAll(t)||[]),c.each(t,function(t,e){return n[e]=t}),this.length=t.length),this):this}},c.prototype.Init.prototype=c.prototype,u(c.prototype,{each:function(t,n,e){return c.each(this,t,n,e)},data:function(t,n){return i(n)?this.each(function(e){return c.data(e,t,n)}):c.data(this[0],t)},eq:function(t){return isNaN(t)?c():c(this[0>t?this.length+t:t])},show:function(){return this.each(c.show)},hide:function(){return this.each(c.hide)},on:function(t,n){var e=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(r){return c.on(r,t,n,e)})},off:function(t,n){var e=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(r){return c.off(r,t,n,e)})},attr:function(t,n){return o(this,c.attr,t,n)},removeAttr:function(t){return this.each(function(n){return c.removeAttr(n,t)})},addClass:function(t){return this.each(function(n){return c.addClass(n,t)})},removeClass:function(t){return this.each(function(n){return c.removeClass(n,t)})},hasClass:function(t){return!this.each(function(n){return!c.hasClass(n,t)},!0,!1)},toggleClass:function(t){return this.each(function(n){return c.toggleClass(n,t)})}}),u(c,{each:function(t,n,e,o){if(r(t))for(var s=0,i=t.length;i>s;s++)if(n(t[s],s,t)===!1&&e)return o;return t},data:function(t,n,e){return t?(t[a]||Object.defineProperty(t,a,{value:{},configurable:!0}),i(e)?void(t[a][n]=e):t[a][n]):void 0},show:function(t){t&&(t.style.display="block")},hide:function(t){t&&(t.style.display="none")},on:function(t,n,e){var r=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.addEventListener(n,e,r)},off:function(t,n,e){var r=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.removeEventListener(n,e,r)},attr:function(t,n,e){if(t){if(!i(e))return t.getAttribute(n)||"";t.setAttribute(n,e)}},removeAttr:function(t,n){t&&t.removeAttribute(n)},addClass:function(t,n){if(t&&n&&!this.hasClass(t,n)){var e=this.attr(t,"class").trim(),r=(e+" "+n).trim();this.attr(t,"class",r)}},removeClass:function(t,n){if(t&&n){var e=new RegExp("\\s*\\b"+n+"\\b\\s*","g"),r=this.attr(t,"class").replace(e," ").trim();this.attr(t,"class",r)}},hasClass:function(t,n){return t&&n&&new RegExp("\\b"+n+"\\b").test(this.attr(t,"class"))},toggleClass:function(t,n){this.hasClass(t,n)?this.removeClass(t,n):this.addClass(t,n)},trim:s}),n["default"]=c}])});