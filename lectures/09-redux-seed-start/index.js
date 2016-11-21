import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

//import { createStore } from 'redux'

import { applyMiddleware, createStore } from 'redux'
import reduxLogger from "redux-logger"

//async...
import ReduxThunk from 'redux-thunk'

import App from './containers/App/App.view'
import rootReducer from './reducers'


//const store = createStore(rootReducer)
//const store = createStore(rootReducer,{counter:8})

const logger = store => next => action => {
  console.log('dispatching', action, store.getState())

  let result = next(action)
  console.log('next state', store.getState())
  return result
}
//const middleware = applyMiddleware(logger)
//const middleware = applyMiddleware(reduxLogger())
const middleware = applyMiddleware(reduxLogger(),ReduxThunk)

const store = createStore(rootReducer,{counter:8},middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')  
)

