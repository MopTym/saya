import $ from '../../src'

describe('Class Tests', () => {
    
    let elem = document.createElement('div')
    let $elem = $(elem)
    
    it('add', () => {
        elem.className = ''
        $elem.addClass('aa')
        expect(elem.className).to.equal('aa')
        $elem.addClass('bb cc')
        expect(elem.className).to.equal('aa bb cc')
        $elem.addClass('')
        expect(elem.className).to.equal('aa bb cc')
        $elem.addClass()
        expect(elem.className).to.equal('aa bb cc')
    })
    
    it('remove', () => {
        elem.className = 'aa bb cc'
        $elem.removeClass('bb')
        expect(elem.className).to.equal('aa cc')
        $elem.removeClass('cc')
        expect(elem.className).to.equal('aa')
        $elem.removeClass('')
        expect(elem.className).to.equal('aa')
        $elem.removeClass()
        expect(elem.className).to.equal('aa')
    })
    
    it('toggle', () => {
        elem.className = 'aa'
        $elem.toggleClass('bb')
        expect(elem.className).to.equal('aa bb')
        $elem.toggleClass('bb')
        expect(elem.className).to.equal('aa')
        $elem.toggleClass('')
        expect(elem.className).to.equal('aa')
        $elem.toggleClass()
        expect(elem.className).to.equal('aa')
    })
    
    it('has', () => {
        elem.className = 'aa'
        expect($elem.hasClass('aa')).to.equal(true)
        expect($elem.hasClass('bb')).to.equal(false)
        expect($elem.hasClass('')).to.equal(false)
        expect($elem.hasClass()).to.equal(false)
    })
    
})