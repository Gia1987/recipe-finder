import React from 'react'
import { shallow } from 'enzyme'
import Search from '../Search'

const setup = () => {
    const props = {
        getRecipe: () => {},
        handleChange: () => {},
        searchInput: ''
    }

    const component = shallow(<Search {...props} />)
    const form = component.find('[data-cy="form"]')

    return {
        component,
        form
    }
}

describe('Search', () => {
    it('should render correctly', () => {
        const { component } = setup()
        expect(component.exists()).toEqual(true)
    })
    it('should pass the right props', () => {
        const { form } = setup()
        expect(form.exists()).toEqual(true)
    })
})
