import React from 'react'
import Search from '../../components/Search'
import Recipes from '../../components/Recipes'
import styles from './styles'

export const Homepage = () => {
    return (
        <div style={styles.Container}>
            <Search data-cy="search" />
            <Recipes data-cy="recipes" />
        </div>
    )
}
export default Homepage
