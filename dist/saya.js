/*! Saya - Personal JS library for MopTym<moptym@163.com> */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Saya"] = factory();
	else
		root["Saya"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

	/**
	 * *****************************************************
	 * 
	 * “咦？” —— Saya疑惑地看着你
	 * 
	 * *****************************************************
	 * 
	 * Saya - Personal JS library for MopTym<moptym@163.com>
	 * 
	 * *****************************************************
	 * 
	 * Very jQuery
	 * 
	 * Nooot support IE < 10
	 * 
	 * *****************************************************
	 */

	var CUID = 'SAYA' + Date.now();

	var Saya = function Saya(selector) {
	    return new Saya.prototype.Init(selector);
	};

	Saya.prototype = {

	    constructor: Saya,

	    length: 0,

	    Init: function Init(selector) {
	        var _this = this;

	        if (!selector) return this;
	        if (selector instanceof Saya) return selector;
	        if (selector.nodeType) {
	            this[0] = selector;
	            this.length = 1;
	        } else {
	            if (typeof selector === 'string') {
	                selector = document.querySelectorAll(selector) || [];
	            }
	            Saya.each(selector, function (elem, index) {
	                return _this[index] = elem;
	            });
	            this.length = selector.length;
	        }
	        return this;
	    }
	};

	Saya.prototype.Init.prototype = Saya.prototype;

	_extends(Saya.prototype, {
	    each: function each(callback, isContext, isFalseBreak, breakValue) {
	        return Saya.each(this, callback, isContext, isFalseBreak, breakValue);
	    },
	    data: function data(key, value) {
	        if (isSet(value)) {
	            return this.each(function (elem) {
	                return Saya.data(elem, key, value);
	            });
	        } else {
	            return Saya.data(this[0], key);
	        }
	    },
	    eq: function eq(index) {
	        if (!isNaN(index)) {
	            return Saya(this[index < 0 ? this.length + index : index]);
	        }
	        return Saya();
	    },
	    show: function show() {
	        return this.each(Saya.show);
	    },
	    hide: function hide() {
	        return this.each(Saya.hide);
	    },
	    on: function on(type, listener) {
	        var useCapture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	        return this.each(function (elem) {
	            return Saya.on(elem, type, listener, useCapture);
	        });
	    },
	    off: function off(type, listener) {
	        var useCapture = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

	        return this.each(function (elem) {
	            return Saya.off(elem, type, listener, useCapture);
	        });
	    },
	    attr: function attr(key, value) {
	        return access(this, Saya.attr, key, value);
	    },
	    removeAttr: function removeAttr(key) {
	        return this.each(function (elem) {
	            return Saya.removeAttr(elem, key);
	        });
	    },
	    addClass: function addClass(name) {
	        return this.each(function (elem) {
	            return Saya.addClass(elem, name);
	        });
	    },
	    removeClass: function removeClass(name) {
	        return this.each(function (elem) {
	            return Saya.removeClass(elem, name);
	        });
	    },
	    hasClass: function hasClass(name) {
	        return !this.each(function (elem) {
	            return !Saya.hasClass(elem, name);
	        }, false, true, false);
	    },
	    toggleClass: function toggleClass(name) {
	        return this.each(function (elem) {
	            return Saya.toggleClass(elem, name);
	        });
	    }
	});

	_extends(Saya, {
	    each: function each(elems, fn, isContext, isFalseBreak, breakValue) {
	        if (isArrayLike(elems)) {
	            for (var i = 0, len = elems.length, val; i < len; i++) {
	                val = isContext ? fn.call(elems[i], elems[i], i, elems) : fn(elems[i], i, elems);
	                if (val === false && isFalseBreak) {
	                    return breakValue;
	                }
	            }
	        }
	        return elems;
	    },
	    data: function data(elem, key, value) {
	        if (!elem) return;
	        if (!elem[CUID]) {
	            Object.defineProperty(elem, CUID, {
	                value: {},
	                configurable: true
	            });
	        }
	        if (isSet(value)) {
	            elem[CUID][key] = value;
	        } else {
	            return elem[CUID][key];
	        }
	    },
	    show: function show(elem) {
	        if (elem) elem.style.display = 'block';
	    },
	    hide: function hide(elem) {
	        if (elem) elem.style.display = 'none';
	    },
	    on: function on(elem, type, listener) {
	        var useCapture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        if (elem) elem.addEventListener(type, listener, useCapture);
	    },
	    off: function off(elem, type, listener) {
	        var useCapture = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	        if (elem) elem.removeEventListener(type, listener, useCapture);
	    },
	    attr: function attr(elem, key, value) {
	        if (elem) {
	            if (isSet(value)) {
	                elem.setAttribute(key, value);
	            } else {
	                return elem.getAttribute(key) || '';
	            }
	        }
	    },
	    removeAttr: function removeAttr(elem, key) {
	        if (elem) elem.removeAttribute(key);
	    },
	    addClass: function addClass(elem, name) {
	        if (elem && name && !this.hasClass(elem, name)) {
	            var cur = this.attr(elem, 'class').trim();
	            var res = (cur + ' ' + name).trim();
	            this.attr(elem, 'class', res);
	        }
	    },
	    removeClass: function removeClass(elem, name) {
	        if (elem && name) {
	            var reg = new RegExp('\\s*\\b' + name + '\\b\\s*', 'g');
	            var res = this.attr(elem, 'class').replace(reg, ' ').trim();
	            this.attr(elem, 'class', res);
	        }
	    },
	    hasClass: function hasClass(elem, name) {
	        if (elem && name) {
	            return new RegExp('\\b' + name + '\\b').test(this.attr(elem, 'class'));
	        }
	        return false;
	    },
	    toggleClass: function toggleClass(elem, name) {
	        if (this.hasClass(elem, name)) {
	            this.removeClass(elem, name);
	        } else {
	            this.addClass(elem, name);
	        }
	    }
	});

	function isArrayLike(tar) {
	    return (typeof tar === 'undefined' ? 'undefined' : _typeof(tar)) === 'object' && isSet(tar.length);
	}

	function access(elems, fn, key, value) {
	    if (isSet(value)) {
	        Saya.each(elems, function (elem) {
	            return fn(elem, key, value);
	        });
	        return elems;
	    } else {
	        return elems.length ? fn(elems[0], key) : undefined;
	    }
	}

	function isSet(tar) {
	    return typeof tar !== 'undefined';
	}

	// for webpack with babel.
	// if use 'export default' the final output will be [ moduleObject.default = Saya ]
	// but we need [ moduleObject = Saya ].
	module.exports = Saya;

/***/ }
/******/ ])
});
;