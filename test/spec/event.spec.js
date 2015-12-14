import $ from '../../src'

describe('Event Tests', () => {
    
    let elemOn = document.createElement('div')
    let $elemOn = $(elemOn)
    
    let elemOff = document.createElement('div')
    let $elemOff = $(elemOff)
    
    let event = document.createEvent('MouseEvents')
    event.initMouseEvent('click', true, true)
    
    document.body.appendChild(elemOn)
    document.body.appendChild(elemOff)
    
    it('on', (done) => {
        let hasTriggered = false
        $elemOn.on('click', () => {
            hasTriggered = true
        })
        elemOn.dispatchEvent(event);
        setTimeout(() => done(!hasTriggered && new Error('failed')))
    })
    
    it('off', (done) => {
        let hasTriggered = false
        const listener = () => {
            hasTriggered = true
        }
        $elemOff.on('click', listener).off('click', listener)
        elemOff.dispatchEvent(event);
        setTimeout(() => done(hasTriggered && new Error('failed')))
    })

})