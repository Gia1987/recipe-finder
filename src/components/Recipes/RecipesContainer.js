import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners'

import styles from './styles'
import Recipes from './Recipes'

class RecipesContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { recipes, loadValue } = this.props
        console.log({ recipes })

        if (loadValue) {
            return (
                <div style={styles.Container}>
                    <ClipLoader />
                </div>
            )
        }
        if (recipes && recipes.length > 0) {
            return (
                <div style={styles.Container}>
                    <Recipes />
                </div>
            )
        }

        return <Fragment />
    }
}

RecipesContainer.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    loadValue: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    recipes: state.getRecipe.data.recipes,
    loadValue: state.updateLoadValue
})

export default connect(mapStateToProps)(RecipesContainer)
