import axios from 'axios'
import {
    API_ENDPOINT_URL,
    API_ENDPOINT_GET_RECIPE,
    API_KEY,
    GET_RECIPE_SUCCESS
} from '../reducers/constants'
import { toggleSpinner } from './toggleSpinnerAction'

export const getRecipe = type => dispatch => {
    axios
        .get(
            `${API_ENDPOINT_URL}${API_ENDPOINT_GET_RECIPE}${API_KEY}&q=${type}`,
            { crossdomain: true }
        )
        .then(data => {
            // handle success
            dispatch({
                type: GET_RECIPE_SUCCESS,
                recipes: data.data.recipes
            })
            dispatch(toggleSpinner({ value: false }))
            // console.log(data.data.error)
        })
        .catch(err => {
            // handle error
            dispatch({
                type: GET_RECIPE_SUCCESS,
                message: err
            })
        })
}
export default getRecipe
