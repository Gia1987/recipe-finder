import axios from 'axios'
import {
    API_ENDPOINT_URL,
    API_ENDPOINT_GET_RECIPE,
    API_KEY,
    GET_RECIPE_SUCCESS
} from '../reducers/constants'

export const getRecipe = type => dispatch => {
    axios
        .get(
            `${API_ENDPOINT_URL}${API_ENDPOINT_GET_RECIPE}${API_KEY}&q=${type}`,{ crossdomain: true }
        )
        .then(data => {
            // handle success
            dispatch({
                type: GET_RECIPE_SUCCESS,
                data
            })
            console.log({data})
        })
        .catch((err) => {
            // handle error
            dispatch({
                type: GET_RECIPE_SUCCESS,
                message: err
            })
        })
}
export default getRecipe
