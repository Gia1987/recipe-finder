import { stub } from 'sinon'
import { TOGGLE_SPINNER } from '../../reducers/constants'
import { toggleSpinner } from '../toggleSpinnerAction'

describe('toggleSpinner', () => {
    it('should call the method with the right parameters', async () => {
        const singleActionProp = stub()
        const value = true

        toggleSpinner(singleActionProp, value)

        expect(singleActionProp.getCall(0).args[0]).toMatchObject({
            type: TOGGLE_SPINNER,
            payload: { value }
        })

        singleActionProp.resetHistory()
    })
})
