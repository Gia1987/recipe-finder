import React from 'react'
import { shallow } from 'enzyme'
import { Homepage } from '../Homepage'

const setup = () => {
    const props = {}

    const component = shallow(<Homepage {...props} />)
    const search = component.find('[data-cy="search"]')
    const recipes = component.find('[data-cy="recipes"]')

    return {
        component,
        search,
        recipes
    }
}

describe('Homepage', () => {
    it('should render correctly', () => {
        const { component } = setup()

        expect(component.exists()).toEqual(true)
    })

    it('should pass the right props', () => {
        const { search, recipes } = setup()

        expect(search.exists()).toEqual(true)
        expect(recipes.exists()).toEqual(true)
    })
})
