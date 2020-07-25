import * as A from 'services/redux/actions'

const defaultState = {
  auth: 'pending',
  email: null,
  firstName: null,
  lastName: null
}

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}

export default uiReducer
