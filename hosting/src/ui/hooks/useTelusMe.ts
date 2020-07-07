import { useReducer } from 'react'

const useTelusMe = () => {
  const defaultState = {
    email: '',
    page: 'login',
    rating: null
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'email':
        return { ...state, email: action.email }
      case 'page':
        return { ...state, page: action.page }
      case 'rating':
        return { ...state, rating: action.rating }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useTelusMe
