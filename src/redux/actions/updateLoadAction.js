import { LOAD_VALUE } from '../reducers/constants'

export const updateLoadValue = data => dispatch => {
    const { value } = data
    dispatch({
        type: LOAD_VALUE,
        value
    })
}

export default updateLoadValue
