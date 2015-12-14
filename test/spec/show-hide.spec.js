import $ from '../../src'

describe('Show/Hide Tests', () => {
    
    let elem = document.createElement('div')
    let $elem = $(elem)
    
    document.body.appendChild(elem)
    
    it('hide', () => {
        $elem.hide()
        expect(window.getComputedStyle(elem).display).to.equal('none')
    })
    
    it('show', () => {
        $elem.show()
        expect(window.getComputedStyle(elem).display).not.to.equal('none')
    })

})