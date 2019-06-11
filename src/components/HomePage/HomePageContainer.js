import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
// import PropTypes from 'prop-types'
import styles from './styles'
import Search from '../Search'
import Recipes from '../Recipes'

class HomePageContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={styles.Container}>
                <div>reactApp</div>
                <div style={styles.wrapperContainer}>
                    <Search />
                </div>
                <div style={styles.recipes}>
                    <Recipes />
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         getRecipiesAction: props => dispatch(getRecipe(props)),
//         updateInputSearchAction: props => dispatch(updateInputSearch(props))
//     }
// }

export default connect()(HomePageContainer)
// mapStateToProps
// mapDispatchToProps
