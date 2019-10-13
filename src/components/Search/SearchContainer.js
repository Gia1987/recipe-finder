import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { singleAction } from '../../redux/actions/singleAction'
import { getRecipe } from '../../redux/actions/getRecipeAction'
import { updateInputSearch } from '../../redux/actions/updateInputSearchAction'
import { toggleSpinner } from '../../redux/actions/toggleSpinnerAction'
import Search from './Search'

class SearchContainer extends PureComponent {
    handleChange = e => {
        const { singleActionProp } = this.props

        updateInputSearch(singleActionProp, e.target.value)
    };

    handleButton = () => {
        const { singleActionProp, searchInput } = this.props

        getRecipe(singleActionProp, searchInput)
        toggleSpinner(singleActionProp, true)
    };

    render() {
        const { searchInput } = this.props

        return (
            <Search
                searchInput={searchInput}
                handleButton={this.handleButton}
                handleChange={this.handleChange}
            />
        )
    }
}

SearchContainer.propTypes = {
    singleActionProp: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    searchInput: state.updateInputSearch
})

const mapDispatchToProps = dispatch => {
    return {
        singleActionProp: props => dispatch(singleAction(props))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
