import { combineReducers } from 'redux'
import { reducer as getRecipe } from './getRecipeReducer'
import { reducer as updateInputSearch } from './updateInputSearchReducer'
import { reducer as updateLoadValue } from './updateLoadReducer'

const reducers = combineReducers({
    getRecipe,
    updateInputSearch,
    updateLoadValue
})

export default reducers
