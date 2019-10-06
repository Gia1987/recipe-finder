import { TOGGLE_SPINNER } from '../reducers/constants'

export const toggleSpinner = data => dispatch => {
    const { value } = data
    dispatch({
        type: TOGGLE_SPINNER,
        value
    })
}

export default toggleSpinner
