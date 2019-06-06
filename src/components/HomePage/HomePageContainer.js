import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import Search from '../Search'

class HomePageContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div>reactApp</div>
                <Search />
            </div>
        )
    }
}

HomePageContainer.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

const mapStateToProps = state => ({
    data: state.data
})

// const mapDispatchToProps = dispatch => {
//     return {
//         getRecipiesAction: props => dispatch(getRecipe(props)),
//         updateInputSearchAction: props => dispatch(updateInputSearch(props))
//     }
// }

export default connect(
    mapStateToProps
    // mapDispatchToProps
)(HomePageContainer)
