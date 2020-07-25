import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ratings from 'services/redux/reducers/ratings'
import ui from 'services/redux/reducers/ui'
import user from 'services/redux/reducers/user'

const reducer = combineReducers({ ratings, ui, user })

export default createStore(reducer, composeWithDevTools())
