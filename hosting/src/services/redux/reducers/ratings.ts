import * as A from 'services/redux/actions'

const defaultState = {}

const ratingsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.RATINGS:
      return { ...state, ...action.ratings }
    case A.NEW_RATING:
      return { ...state, personal: { ...state.personal, raw: { ...state.personal.raw, ...action.rating } } }
    default:
      return state
  }
}

export default ratingsReducer
