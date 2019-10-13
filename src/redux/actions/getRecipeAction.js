import axios from 'axios'
import {
    API_ENDPOINT_URL,
    API_ENDPOINT_GET_RECIPE,
    API_KEY,
    GET_RECIPE_SUCCESS
} from '../reducers/constants'
import { toggleSpinner } from './toggleSpinnerAction'

export const getRecipe = async (singleActionProp, type) => {
    const response = await axios
        .get(
            `${API_ENDPOINT_URL}${API_ENDPOINT_GET_RECIPE}${API_KEY}&q=${type}`,
            { crossdomain: true }
        )
        .then(data => {
            // handle success
            if (data.data && data.data.error) {
                return data.data.error
            }
            return data.data.recipes
        })
        .catch(err => {
            // handle error
            return err
        })

    singleActionProp({
        type: GET_RECIPE_SUCCESS,
        payload: { value: response }
    })
    toggleSpinner(singleActionProp, false)
}
export default getRecipe
