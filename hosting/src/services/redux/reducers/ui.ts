import * as A from 'services/redux/actions'

const defaultState = {
  dimensions: 'mobile',
  language: null,
  loading: false,
  modal: null,
  nav: false
}

const uiReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.DIMENSIONS:
      return { ...state, dimensions: action.value }
    case A.LANGUAGE:
      return { ...state, language: action.language }
    case A.LOADING:
      return { ...state, loading: action.loading }
    case A.MODAL:
      return { ...state, modal: action.value }
    case A.NAV:
      return { ...state, nav: !state.nav }
    default:
      return state
  }
}

export default uiReducer
