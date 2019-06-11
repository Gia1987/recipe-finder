import { GET_RECIPE_SUCCESS } from './constants'

const initialState = {
    data: { recipes: [] }
}

export function reducer(state = initialState, action) {
    switch (action.type) {
    case GET_RECIPE_SUCCESS:
        return action.data || state
    default:
        console.log({ state })
        return state
    }
}
export default reducer
