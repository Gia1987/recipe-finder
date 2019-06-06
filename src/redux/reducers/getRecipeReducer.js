import { GET_RECIPE_SUCCESS } from './constants'

export function reducer(state = {}, action) {
    switch (action.type) {
    case GET_RECIPE_SUCCESS:
        return action.data || state
    default:
        return state
    }
}
export default reducer
