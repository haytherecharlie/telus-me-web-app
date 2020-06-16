import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ui from 'services/redux/reducers/ui'

const reducer = combineReducers({ ui })

export default createStore(reducer, composeWithDevTools())
