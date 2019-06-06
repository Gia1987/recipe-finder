import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './styles'

const Search = ({ getRecipe, handleChange, searchInput }) => {
    return (
        <Form style={styles.formGroup} onSubmit={getRecipe}>
            <Form.Group style={styles.input}>
                <Form.Input
                    placeholder="Search..."
                    value={searchInput}
                    onChange={handleChange}
                />
                <Form.Button content="Submit" />
            </Form.Group>
        </Form>
    )
}

Search.propTypes = {
    searchInput: PropTypes.string.isRequired,
    getRecipe: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Search
