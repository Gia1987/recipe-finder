import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ClipLoader from 'react-spinners/ClipLoader'
import styles from './styles'
import Recipes from './Recipes'

class RecipesContainer extends PureComponent {
    render() {
        const { recipes, toggleSpinner } = this.props

        if (toggleSpinner) {
            return (
                <div style={styles.spinner}>
                    <ClipLoader />
                </div>
            )
        }
        return (
            <div style={styles.container}>
                <Recipes recipes={recipes} />
            </div>
        )
    }
}

RecipesContainer.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    toggleSpinner: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    recipes: state.getRecipe,
    toggleSpinner: state.toggleSpinner
})

export default connect(mapStateToProps)(RecipesContainer)
