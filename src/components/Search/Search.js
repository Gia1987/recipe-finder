import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './styles'

const Search = ({ getRecipe, handleChange, searchInput }) => {
    return (
        <div>
            <Form data-cy="form" style={styles.formGroup} onSubmit={getRecipe}>
                <Form.Group>
                    <Form.Input
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleChange}
                    />
                    <Form.Button content="Find" />
                </Form.Group>
            </Form>
        </div>
    )
}

Search.propTypes = {
    searchInput: PropTypes.string.isRequired,
    getRecipe: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Search
