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



const CUID = 'SAYA' + Date.now()

let Saya = (selector) => {
    return new Saya.prototype.Init(selector)
};

Saya.prototype = {

    constructor: Saya,

    length: 0,

    Init(selector) {
        if (!selector) return this
        if (selector instanceof Saya) return selector
        if (selector.nodeType) {
            this[0] = selector
            this.length = 1
        } else {
            if (typeof selector === 'string') {
                selector = document.querySelectorAll(selector) || []
            }
            Saya.each(selector, (elem, index) => (this[index] = elem))
            this.length = selector.length
        }
        return this
    }
    
}

Saya.prototype.Init.prototype = Saya.prototype

Object.assign(Saya.prototype, {
    
    each(callback, isFalseBreak, breakValue) {
        return Saya.each(this, callback, isFalseBreak, breakValue)
    },
    
    data(key, value) {
        if (isSet(value)) {
            return this.each((elem) => Saya.data(elem, key, value))
        } else {
            return Saya.data(this[0], key)
        }
    },
    
    eq(index) {
        if (!isNaN(index)) {
            return Saya(this[index < 0? (this.length + index): index])
        }
        return Saya()
    },
    
    show() {
        return this.each(Saya.show)
    },
    
    hide() {
        return this.each(Saya.hide)
    },
    
    on(type, listener, useCapture = false) {
        return this.each((elem) => Saya.on(elem, type, listener, useCapture))
    },
    
    off(type, listener, useCapture = false) {
        return this.each((elem) => Saya.off(elem, type, listener, useCapture))
    },
    
    attr(key, value) {
        return access(this, Saya.attr, key, value)
    },
    
    removeAttr(key) {
        return this.each((elem) => Saya.removeAttr(elem, key))
    },
    
    addClass(name) {
        return this.each((elem) => Saya.addClass(elem, name))
    },
    
    removeClass(name) {
        return this.each((elem) => Saya.removeClass(elem, name))
    },
    
    hasClass(name) {
        return !this.each((elem) => !Saya.hasClass(elem, name), true, false)
    },
    
    toggleClass(name) {
        return this.each((elem) => Saya.toggleClass(elem, name))
    }
    
})

Object.assign(Saya, {
    
    each(elems, fn, isFalseBreak, breakValue) {
        if (isArrayLike(elems)) {
            for (let i = 0, len = elems.length; i < len; i++) {
                if (fn(elems[i], i, elems) === false && isFalseBreak) {
                    return breakValue
                }
            }
        }
        return elems
    },
    
    data(elem, key, value) {
        if (!elem) return
        if (!elem[CUID]) {
            Object.defineProperty(elem, CUID, {
                value: {},
                configurable: true
            })
        }
        if (isSet(value)) {
            elem[CUID][key] = value
        } else {
            return elem[CUID][key]
        }
    },
    
    show(elem) {
        if (elem) elem.style.display = 'block'
    },
    
    hide(elem) {
        if (elem) elem.style.display = 'none'
    },
    
    on(elem, type, listener, useCapture = false) {
        if (elem) elem.addEventListener(type, listener, useCapture)
    },
    
    off(elem, type, listener, useCapture = false) {
        if (elem) elem.removeEventListener(type, listener, useCapture)
    },
    
    attr(elem, key, value) {
        if (elem) {
            if (isSet(value)) {
                elem.setAttribute(key, value)
            } else {
                return elem.getAttribute(key) || ''
            }
        }
    },
    
    removeAttr(elem, key) {
        if (elem) elem.removeAttribute(key)
    },
    
    addClass(elem, name) {
        if (elem && name && !this.hasClass(elem, name)) {
            let cur = this.attr(elem, 'class').trim()
            let res = (cur + ' ' + name).trim()
            this.attr(elem, 'class', res)
        }
    },
    
    removeClass(elem, name) {
        if (elem && name) {
            let reg = new RegExp('\\s*\\b' + name + '\\b\\s*', 'g')
            let res = this.attr(elem, 'class').replace(reg, ' ').trim()
            this.attr(elem, 'class', res)
        }
    },

    hasClass(elem, name) {
        if (elem && name) {
            return (new RegExp('\\b' + name + '\\b')).test(this.attr(elem, 'class'))
        }
        return false
    },
    
    toggleClass(elem, name) {
        if (this.hasClass(elem, name)) {
            this.removeClass(elem, name)
        } else {
            this.addClass(elem, name)
        }
    },
    
    trim: trim
    
})

function isArrayLike(tar) {
    return typeof tar === 'object' && isSet(tar.length)
}

function access(elems, fn, key, value) {
    if (isSet(value)) {
        Saya.each(elems, (elem) => fn(elem, key, value))
        return elems
    } else {
        return elems.length? fn(elems[0], key): undefined
    }
}

function trim(str = '') {
    return str.replace(/(^\s+)|(\s+$)/g, '')
}

function isSet(tar) {
    return typeof tar !== 'undefined'
}



// for webpack with babel.
// if use 'export default' the final output wil be [ moduleObject.default = Saya ]
// but we need [ moduleObject = Saya ].
module.exports = Saya