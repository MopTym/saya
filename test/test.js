/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	describe('Saya Tests', function () {

	    var testsContext = __webpack_require__(1);
	    testsContext.keys().forEach(testsContext);
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./attr.spec": 2,
		"./class.spec": 4,
		"./data.spec": 5,
		"./event.spec": 6,
		"./init.spec": 7,
		"./set.spec": 8,
		"./show-hide.spec": 9
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Attr Tests', function () {

	    var elem = document.createElement('div');
	    var $elem = (0, _src2.default)(elem);

	    it('get/set', function () {
	        expect($elem.attr('a')).to.equal('');
	        $elem.attr('a', 'b');
	        expect($elem.attr('a')).to.equal('b');
	    });

	    it('remove', function () {
	        $elem.attr('a', 'b');
	        $elem.removeAttr('a');
	        expect($elem.attr('a')).to.equal('');
	    });
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

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
	    each: function each(callback, isFalseBreak, breakValue) {
	        return Saya.each(this, callback, isFalseBreak, breakValue);
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
	        }, true, false);
	    },
	    toggleClass: function toggleClass(name) {
	        return this.each(function (elem) {
	            return Saya.toggleClass(elem, name);
	        });
	    }
	});

	_extends(Saya, {
	    each: function each(elems, fn, isFalseBreak, breakValue) {
	        if (isArrayLike(elems)) {
	            for (var i = 0, len = elems.length; i < len; i++) {
	                if (fn(elems[i], i, elems) === false && isFalseBreak) {
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
	    },

	    trim: trim

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

	function trim() {
	    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	    return str.replace(/(^\s+)|(\s+$)/g, '');
	}

	function isSet(tar) {
	    return typeof tar !== 'undefined';
	}

	exports.default = Saya;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Class Tests', function () {

	    var elem = document.createElement('div');
	    var $elem = (0, _src2.default)(elem);

	    it('add', function () {
	        elem.className = '';
	        $elem.addClass('aa');
	        expect(elem.className).to.equal('aa');
	        $elem.addClass('bb cc');
	        expect(elem.className).to.equal('aa bb cc');
	        $elem.addClass('');
	        expect(elem.className).to.equal('aa bb cc');
	        $elem.addClass();
	        expect(elem.className).to.equal('aa bb cc');
	    });

	    it('remove', function () {
	        elem.className = 'aa bb cc';
	        $elem.removeClass('bb');
	        expect(elem.className).to.equal('aa cc');
	        $elem.removeClass('cc');
	        expect(elem.className).to.equal('aa');
	        $elem.removeClass('');
	        expect(elem.className).to.equal('aa');
	        $elem.removeClass();
	        expect(elem.className).to.equal('aa');
	    });

	    it('toggle', function () {
	        elem.className = 'aa';
	        $elem.toggleClass('bb');
	        expect(elem.className).to.equal('aa bb');
	        $elem.toggleClass('bb');
	        expect(elem.className).to.equal('aa');
	        $elem.toggleClass('');
	        expect(elem.className).to.equal('aa');
	        $elem.toggleClass();
	        expect(elem.className).to.equal('aa');
	    });

	    it('has', function () {
	        elem.className = 'aa';
	        expect($elem.hasClass('aa')).to.equal(true);
	        expect($elem.hasClass('bb')).to.equal(false);
	        expect($elem.hasClass('')).to.equal(false);
	        expect($elem.hasClass()).to.equal(false);
	    });
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Date Tests', function () {

	    var elem = document.createElement('div');
	    var $elem = (0, _src2.default)(elem);

	    it('get/set', function () {
	        expect($elem.data('a')).to.be.undefined;
	        $elem.data('a', 'b');
	        expect($elem.data('a')).to.equal('b');
	    });
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Event Tests', function () {

	    var elemOn = document.createElement('div');
	    var $elemOn = (0, _src2.default)(elemOn);

	    var elemOff = document.createElement('div');
	    var $elemOff = (0, _src2.default)(elemOff);

	    var event = document.createEvent('MouseEvents');
	    event.initMouseEvent('click', true, true);

	    document.body.appendChild(elemOn);
	    document.body.appendChild(elemOff);

	    it('on', function (done) {
	        var hasTriggered = false;
	        $elemOn.on('click', function () {
	            hasTriggered = true;
	        });
	        elemOn.dispatchEvent(event);
	        setTimeout(function () {
	            return done(!hasTriggered && new Error('failed'));
	        });
	    });

	    it('off', function (done) {
	        var hasTriggered = false;
	        var listener = function listener() {
	            hasTriggered = true;
	        };
	        $elemOff.on('click', listener).off('click', listener);
	        elemOff.dispatchEvent(event);
	        setTimeout(function () {
	            return done(hasTriggered && new Error('failed'));
	        });
	    });
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Init Tests', function () {

	    it('length', function () {
	        (0, _src2.default)().length.should.equal(0);
	        (0, _src2.default)('').length.should.equal(0);
	        (0, _src2.default)(null).length.should.equal(0);
	        (0, _src2.default)(document).length.should.equal(1);
	    });

	    it('instance', function () {
	        var ins = (0, _src2.default)();
	        var newIns = (0, _src2.default)(ins);
	        assert.strictEqual(ins, newIns);
	    });
	});

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Set Tests', function () {

	    var body = document.body;

	    var $body = (0, _src2.default)(body);

	    it('eq', function () {
	        expect($body.eq(0)[0]).to.equal(body);
	        expect($body.eq(-1)[0]).to.equal(body);
	        expect($body.eq(-2).length).to.equal(0);
	        expect($body.eq(1).length).to.equal(0);
	    });
	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _src = __webpack_require__(3);

	var _src2 = _interopRequireDefault(_src);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	describe('Show/Hide Tests', function () {

	    var elem = document.createElement('div');
	    var $elem = (0, _src2.default)(elem);

	    document.body.appendChild(elem);

	    it('hide', function () {
	        $elem.hide();
	        expect(window.getComputedStyle(elem).display).to.equal('none');
	    });

	    it('show', function () {
	        $elem.show();
	        expect(window.getComputedStyle(elem).display).not.to.equal('none');
	    });
	});

/***/ }
/******/ ]);