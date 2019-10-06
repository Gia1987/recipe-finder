import { GET_RECIPE_SUCCESS } from './constants'

export function reducer(state = [], action) {
    switch (action.type) {
    case GET_RECIPE_SUCCESS:
        return action.recipes || state
    default:
        console.log(state)
        return state
    }
}
export default reducer
