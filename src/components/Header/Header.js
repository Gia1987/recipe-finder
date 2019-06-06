import React from 'react'
import { Form } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styles from './styles'

const Header = ({ getRecipe, handleChange, searchInput }) => {
    return (
        <Form onSubmit={getRecipe}>
            <Form.Group style={styles.formGroup}>
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

Header.propTypes = {
    searchInput: PropTypes.string.isRequired,
    getRecipe: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired
}
export default Header
