import * as A from 'services/redux/actions'

const defaultState = {
  auth: 'pending',
  email: null,
  firstname: null,
  lastname: null
}

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.USER:
      return { ...state, ...action.user }
    default:
      return state
  }
}

export default userReducer
