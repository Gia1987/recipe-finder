import { TOGGLE_SPINNER } from './constants'

export function reducer(state = false, action) {
    switch (action.type) {
    case TOGGLE_SPINNER:
        return action.value
    default:
        return state
    }
}
export default reducer
