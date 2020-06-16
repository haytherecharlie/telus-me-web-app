import { useReducer, useRef } from 'react'
import { vName, vGender, vAge, vEmail, vPhone, vVote, vReferendum } from 'ui/helpers/validations'

const useValidateForm = () => {
  const defaultState = {
    first: { value: '', valid: 'pending', error: null },
    last: { value: '', valid: 'pending', error: null },
    gender: { value: '', valid: 'pending', error: null },
    age: { value: '', valid: 'pending', error: null },
    email: { value: '', valid: 'pending', error: null },
    phone: { value: '', valid: 'pending', error: null },
  }

  const reducer = (state, action) => {
    const { value = state.value, valid } = action
    switch (action.type) {
      case 'first':
        return vName(value) === 'valid'
          ? { ...state, first: { ...state.first, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, first: { ...state.first, value, valid: 'invalid', error: null } }
      case 'last':
        return vName(value) === 'valid'
          ? { ...state, last: { ...state.last, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, last: { ...state.last, value, valid: 'invalid', error: null } }
      case 'gender':
        return vGender(value) === 'valid'
          ? { ...state, gender: { ...state.gender, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, gender: { ...state.gender, value, valid: 'invalid', error: null } }
      case 'age':
        return vAge(value) === 'valid'
          ? { ...state, age: { ...state.age, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, age: { ...state.age, value, valid: 'invalid', error: null } }
      case 'email':
        return vEmail(value) === 'valid'
          ? { ...state, email: { ...state.email, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, email: { ...state.email, value, valid: 'invalid', error: null } }
      case 'phone':
        return vPhone(value) === 'valid'
          ? { ...state, phone: { ...state.phone, value, valid: valid ? valid : 'valid', error: null } }
          : { ...state, phone: { ...state.phone, value, valid: 'invalid', error: null } }
      case 'find-errors':
        return {
          first: vName(state.first.value) !== 'valid' ? { ...state.first, valid: 'invalid', error: 'Please include a valid first name.' } : state.first,
          last: vName(state.last.value) !== 'valid' ? { ...state.last, valid: 'invalid', error: 'Please include a valid last name.' } : state.last,
          gender: vGender(state.gender.value) !== 'valid' ? { ...state.gender, valid: 'invalid', error: 'Please include a gender or type N/A.' } : state.gender,
          age: vAge(state.age.value) !== 'valid' ? { ...state.age, valid: 'invalid', error: 'Please include a valid age between 10 - 120.' } : state.age,
          email: vEmail(state.email.value) !== 'valid' ? { ...state.email, valid: 'invalid', error: 'Please include a valid email address.' } : state.email,
          phone: vPhone(state.phone.value) !== 'valid' ? { ...state.phone, valid: 'invalid', error: 'Please include a valid Canadian phone number.' } : state.phone,
        }
      default:
        return state
    }
  }

  return useReducer(reducer, defaultState)
}

export default useValidateForm
