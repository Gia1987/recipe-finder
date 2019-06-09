import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getRecipe } from '../../redux/actions/getRecipeAction'
import { updateInputSearch } from '../../redux/actions/updateInputSearchAction'
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
        const { getRecipiesAction, searchInput } = this.props
        getRecipiesAction(searchInput)
    };

    render() {
        const { searchInput } = this.props

        return (
            <div>
                <Search
                    searchInput={searchInput}
                    getRecipe={this.getRecipe}
                    handleChange={this.handleChange}
                />
            </div>
        )
    }
}

SearchContainer.propTypes = {
    getRecipiesAction: PropTypes.func.isRequired,
    updateInputSearchAction: PropTypes.func.isRequired,
    searchInput: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    searchInput: state.updateInputSearch
})

const mapDispatchToProps = dispatch => {
    return {
        getRecipiesAction: props => dispatch(getRecipe(props)),
        updateInputSearchAction: props => dispatch(updateInputSearch(props))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer)
