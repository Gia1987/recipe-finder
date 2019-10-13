import { stub } from 'sinon'
import { SEARCH_INPUT } from '../../reducers/constants'
import { updateInputSearch } from '../updateInputSearchAction'

describe('updateInputSearch', () => {
    it('should call the method with the right parameters', async () => {
        const singleActionProp = stub()
        const text = 'test'

        updateInputSearch(singleActionProp, text)

        expect(singleActionProp.getCall(0).args[0]).toMatchObject({
            type: SEARCH_INPUT,
            payload: { value: text }
        })

        singleActionProp.resetHistory()
    })
})
