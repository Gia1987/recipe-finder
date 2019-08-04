import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

import Search from './components/Search'
import Recipes from './components/Recipes'

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <Search />
                <Recipes />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
)
