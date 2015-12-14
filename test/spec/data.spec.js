import $ from '../../src'

describe('Date Tests', () => {
	
    let elem = document.createElement('div')
    let $elem = $(elem)
    
    it('get/set', () => {
        expect($elem.data('a')).to.be.undefined;
		$elem.data('a', 'b')
        expect($elem.data('a')).to.equal('b')
    })

})