import { SEARCH_INPUT } from '../reducers/constants'

export const updateInputSearch = data => dispatch => {
    const { text } = data
    dispatch({
        type: SEARCH_INPUT,
        text
    })
}

export default updateInputSearch
