import $ from '../../src'

describe('Init Tests', () => {
    
    it('length', () => {
        $().length.should.equal(0)
        $('').length.should.equal(0)
        $(null).length.should.equal(0)
        $(document).length.should.equal(1)
    })
    
    it('instance', () => {
        let ins = $()
        let newIns = $(ins)
        assert.strictEqual(ins, newIns)
    })
    
})