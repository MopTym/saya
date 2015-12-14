import $ from '../../src'

describe('Set Tests', () => {
    
    let body = document.body
    
    let $body = $(body)
    
    it('eq', () => {
        expect($body.eq(0)[0]).to.equal(body)
        expect($body.eq(-1)[0]).to.equal(body)
        expect($body.eq(-2).length).to.equal(0)
        expect($body.eq(1).length).to.equal(0)
    })

})