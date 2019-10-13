import { SEARCH_INPUT } from '../reducers/constants'

export const updateInputSearch = (singleActionProp, text) => {
    singleActionProp({
        type: SEARCH_INPUT,
        payload: { value: text }
    })
}

export default updateInputSearch
