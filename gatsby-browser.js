import 'animate.css'
import 'prismjs/themes/prism-tomorrow.css'
import React from 'react'
import { Provider } from 'react-redux'
import store from './src/services/redux'

if (typeof window !== 'undefined') {
  require('firebase/auth')
  require('firebase/firestore')
  require('firebase/analytics')
}

export const wrapRootElement = ({ element }) => <Provider store={store}>{element}</Provider>
