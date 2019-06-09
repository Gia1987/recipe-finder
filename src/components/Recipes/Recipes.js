import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Card, Image } from 'semantic-ui-react'
import styles from './styles'

const Recipes = props => {
    const { data } = props
    if (data && data.recipes.length > 0) {
        return data.recipes.map(recipe => {
            return (
                <Fragment>
                    <Card style={styles.recipesCard}>
                        <Card.Content>
                            <Image src={recipe.image_url} alt={recipe.title} />
                            <Card.Header>
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
                                View Recipe
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
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

const mapStateToProps = state => ({
    data: state.getRecipe.data
})
// export default Recipes
export default connect(
    mapStateToProps
    // mapDispatchToProps
)(Recipes)
