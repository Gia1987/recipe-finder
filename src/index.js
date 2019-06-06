import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

import HomePage from './components/HomePage'

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <HomePage />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
)
