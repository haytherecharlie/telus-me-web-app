import format from 'date-fns/format'
import * as A from 'services/redux/actions'
import { lastWorkDayNumber } from 'ui/helpers/lastWorkDay'

const date = new Date().getTime()

const defaultState = {
  yesterday: lastWorkDayNumber(),
  today: format(date, 'yyyy-MM-dd')
}

const dateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case A.DATE:
      return { ...state, ...action.ratings }
    default:
      return state
  }
}

export default dateReducer
