import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './styles'
import Search from '../Search'
import Recipes from '../Recipes'

class HomePageContainer extends Component {
    constructor(props) {
        super(props)
        // this.state= ({})
        // console.log({ props })
    }

    render() {
        const { searchInput } = this.props
        console.log({ searchInput })
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

HomePageContainer.propTypes = {
    searchInput: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    searchInput: state.updateInputSearch
})
// const mapDispatchToProps = dispatch => {
//     return {
//         getRecipiesAction: props => dispatch(getRecipe(props)),
//         updateInputSearchAction: props => dispatch(updateInputSearch(props))
//     }
// }

export default connect(mapStateToProps)(HomePageContainer)
// mapStateToProps
// mapDispatchToProps
