import { combineReducers } from 'redux'
import { reducer as getRecipe } from './getRecipeReducer'
import { reducer as updateInputSearch } from './updateInputSearchReducer'

const reducers = combineReducers({
    getRecipe,
    updateInputSearch
})

export default reducers
