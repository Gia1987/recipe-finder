import { LOAD_VALUE } from '../reducers/constants'

export const updateLoadValue = data => dispatch => {
    const { value } = data
    console.log({ value })
    dispatch({
        type: LOAD_VALUE,
        value
    })
}

export default updateLoadValue
