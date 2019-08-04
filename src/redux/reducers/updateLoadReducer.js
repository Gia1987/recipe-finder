import { LOAD_VALUE } from './constants'

export function reducer(state = false, action) {
    switch (action.type) {
    case LOAD_VALUE:
        return action.value
    default:
        return state
    }
}
export default reducer
