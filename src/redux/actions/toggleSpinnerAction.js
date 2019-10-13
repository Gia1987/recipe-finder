import { TOGGLE_SPINNER } from '../reducers/constants'

export const toggleSpinner = (singleActionProp, value) => {
    singleActionProp({
        type: TOGGLE_SPINNER,
        payload: { value }
    })
}

export default toggleSpinner
