import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Card, Image } from 'semantic-ui-react'
import styles from './styles'

const Recipes = props => {
    const { recipes } = props
    if (recipes && recipes.length > 0) {
        return recipes.map(recipe => {
            return (
                <Fragment key={recipe.recipe_id}>
                    <Card style={styles.recipesCard}>
                        <Card.Content>
                            <Image
                                style={styles.image}
                                src={recipe.image_url}
                                alt={recipe.title}
                            />
                            <Card.Header style={styles.text}>
                                {recipe.title.length < 20
                                    ? `${recipe.title}`
                                    : `${recipe.title.substring(0, 21)}...`}
                            </Card.Header>
                            <Card.Description>
                                {recipe.publisher}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button style={styles.btn} basic color="green">
                                <a href={recipe.source_url} rel='noreferrer noopener' target="_blank">
                                    View Recipe
                                </a>
                            </Button>
                        </Card.Content>
                    </Card>
                </Fragment>
            )
        })
    }

    return <Fragment />
}

Recipes.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

const mapStateToProps = state => ({
    recipes: state.getRecipe.data.recipes
})
// export default Recipes
export default connect(
    mapStateToProps
    // mapDispatchToProps
)(Recipes)
