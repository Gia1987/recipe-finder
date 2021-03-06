import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'

import Header from './components/Header'
import Homepage from './scenes/Homepage'
import Footer from './components/Footer'

ReactDOM.render(
    <BrowserRouter>
        <Fragment>
            <Provider store={store}>
                <Header />
                <Homepage />
                <Footer />
            </Provider>
        </Fragment>
    </BrowserRouter>,
    document.getElementById('root')
)
