import { SEARCH_INPUT } from './constants'

export function reducer(state = '', action) {
    const { payload } = action
    switch (action.type) {
    case SEARCH_INPUT:
        return payload.value || ''
    default:
        return state
    }
}
export default reducer
