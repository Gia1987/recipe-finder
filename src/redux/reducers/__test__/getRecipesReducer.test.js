import { GET_RECIPE_SUCCESS } from '../constants'
import { reducer } from '../getRecipeReducer'

describe('getRecipeReducer reducer', () => {
    it('default should work', () => {
        const input = reducer({}, { type: 'default' })
        const output = {}
        expect(input).toMatchObject(output)
    })

    it('GET_RECIPE_SUCCESS should work', () => {
        const payload = { value: 'type' }
        const input = reducer('type', { type: GET_RECIPE_SUCCESS, payload })
        const output = 'type'
        expect(input).toEqual(output)
    })
})
