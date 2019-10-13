import { stub } from 'sinon'
import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import {
    GET_RECIPE_SUCCESS,
    API_ENDPOINT_URL,
    API_ENDPOINT_GET_RECIPE,
    API_KEY
} from '../../reducers/constants'
import { getRecipe } from '../getRecipeAction'
import { toggleSpinner } from '../toggleSpinnerAction'

jest.mock('../toggleSpinnerAction')

describe('getRecipe', () => {
    it('should call the method with the right parameters', async () => {
        const singleActionProp = stub()
        const mocks = new MockAdapter(axios)
        const value = 'pasta'
        const url = `${API_ENDPOINT_URL}${API_ENDPOINT_GET_RECIPE}${API_KEY}&q=${value}`

        mocks.onGet(url).reply(200, {
            recipes: []
        })
        axios.get(url).then(response => {
            return response.data
        })

        await getRecipe(singleActionProp, value)

        expect(singleActionProp.getCall(0).args[0]).toMatchObject({
            type: GET_RECIPE_SUCCESS,
            payload: { value: [] }
        })

        expect(toggleSpinner).toHaveBeenCalledTimes(1)

        singleActionProp.resetHistory()
    })
})
