import { GET_RECIPE_SUCCESS } from './constants'

export function reducer(state = [], action) {
    const { payload, type } = action
    switch (type) {
    case GET_RECIPE_SUCCESS:
        return payload.value || state
    default:
        return state
    }
}
export default reducer
