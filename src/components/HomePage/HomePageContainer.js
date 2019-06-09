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
            <Fragment>
                <div>reactApp</div>
                <Search />
                <div style={styles.Container}>{<Recipes />}</div>
            </Fragment>
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
