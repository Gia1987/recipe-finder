import { SEARCH_INPUT } from '../constants'
import { reducer } from '../updateInputSearchReducer'

describe('updateInputSearchReducer reducer', () => {
    it('default should work', () => {
        const input = reducer({}, { type: 'default' })
        const output = {}
        expect(input).toMatchObject(output)
    })

    it('SEARCH_INPUT should work', () => {
        const payload = { value: 'text' }
        const input = reducer('', { type: SEARCH_INPUT, payload })
        const output = 'text'
        expect(input).toEqual(output)
    })
})
