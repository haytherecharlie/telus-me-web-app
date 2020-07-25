import * as A from 'services/redux/actions'

const defaultState = {}

const ratingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.RATINGS:
      return { ...state, ...action.ratings }
    default:
      return state
  }
}

export default ratingsReducer
