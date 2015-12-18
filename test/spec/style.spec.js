import $ from '../../src'

describe('Style Tests', () => {
    
    let elem = document.createElement('div')
    let $elem = $(elem)
    
    it('css', () => {
        $elem.css('position', 'absolute')
        expect(elem.style.position).to.equal('absolute')
        expect($elem.css('position')).to.equal('absolute')
        $elem.css('position', '')
        expect(elem.style.position).to.equal('')
        $elem.css({
			position: 'absolute'
		})
        expect(elem.style.position).to.equal('absolute')
    })

})