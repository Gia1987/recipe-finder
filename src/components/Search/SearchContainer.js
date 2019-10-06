import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getRecipe } from '../../redux/actions/getRecipeAction'
import { updateInputSearch } from '../../redux/actions/updateInputSearchAction'
import { toggleSpinner } from '../../redux/actions/toggleSpinnerAction'
import Search from './Search'

class SearchContainer extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = e => {
        const { updateInputSearchAction } = this.props
        updateInputSearchAction({ text: e.target.value })
    };

    getRecipe = () => {
        const {
            getRecipiesAction,
            searchInput,
            toggleSpinnerAction
        } = this.props
        getRecipiesAction(searchInput)
        toggleSpinnerAction({ value: true })
    };

    render() {
        const { searchInput } = this.props

        return (
            <Search
                searchInput={searchInput}
                getRecipe={this.getRecipe}
                handleChange={this.handleChange}
            />
        )
    }
}

SearchContainer.propTypes = {
    getRecipiesAction: PropTypes.func.isRequired,
    updateInputSearchAction: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired,
    toggleSpinnerAction: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    searchInput: state.updateInputSearch
})

const mapDispatchToProps = dispatch => {
    return {
        getRecipiesAction: props => dispatch(getRecipe(props)),
        updateInputSearchAction: props => dispatch(updateInputSearch(props)),
        toggleSpinnerAction: props => dispatch(toggleSpinner(props))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
