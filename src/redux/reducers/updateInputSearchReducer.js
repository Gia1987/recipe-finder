import { SEARCH_INPUT } from './constants'

export function reducer(state = '', action) {
    const { text } = action
    switch (action.type) {
    case SEARCH_INPUT:
        return text || ''
    default:
        return state
    }
}
export default reducer
