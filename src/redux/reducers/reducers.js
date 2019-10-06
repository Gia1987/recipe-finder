import { combineReducers } from 'redux'
import { reducer as getRecipe } from './getRecipeReducer'
import { reducer as updateInputSearch } from './updateInputSearchReducer'
import { reducer as toggleSpinner } from './toggleSpinnerReducer'

const reducers = combineReducers({
    getRecipe,
    updateInputSearch,
    toggleSpinner
})

export default reducers
