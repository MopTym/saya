import $ from '../../src'

describe('Attr Tests', () => {
	
	let elem = document.createElement('div')
	let $elem = $(elem)
    
    it('get/set', () => {
        expect($elem.attr('a')).to.equal('')
		$elem.attr('a', 'b')
        expect($elem.attr('a')).to.equal('b')
    })
	
    it('remove', () => {
        $elem.attr('a', 'b')
        $elem.removeAttr('a')
        expect($elem.attr('a')).to.equal('')
    })

})