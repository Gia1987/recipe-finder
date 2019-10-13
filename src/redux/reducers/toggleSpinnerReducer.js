import { TOGGLE_SPINNER } from './constants'

export function reducer(state = false, action) {
    const { payload, type } = action
    switch (type) {
    case TOGGLE_SPINNER:
        return payload.value
    default:
        return state
    }
}
export default reducer
