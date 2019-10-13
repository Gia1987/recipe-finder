import { TOGGLE_SPINNER } from '../constants'
import { reducer } from '../toggleSpinnerReducer'

describe('toggleSpinnerReducer reducer', () => {
    it('default should work', () => {
        const input = reducer({}, { type: 'default' })
        const output = {}
        expect(input).toMatchObject(output)
    })

    it('TOGGLE_SPINNER should work', () => {
        const payload = { value: false }
        const input = reducer(false, { type: TOGGLE_SPINNER, payload })
        const output = false
        expect(input).toEqual(output)
    })
})
