import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import TranslateProvider from './Translate';


let store;

let thunkFake = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }

    return next(action)
}

export default function App({ children, reducers = {}, saga }) {

    if (!store) {
        store = combineReducers(reducers)
        const composeEnhancers = typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose
        let params = [thunkFake]

        let sagaMidleware = { run: () => { } }
        if (saga) {
            sagaMidleware = createSagaMiddleware()
            params.push(sagaMidleware)
        }

        store = createStore(reducers, composeEnhancers(applyMiddleware(...params)))

        sagaMidleware.run(saga)
    }


    return (
        <Provider store={store}>
            <TranslateProvider>
                <BrowserRouter>
                    {children}
                </BrowserRouter>
            </TranslateProvider>
        </Provider>
    )
}
