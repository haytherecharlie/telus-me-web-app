import subDays from 'date-fns/subDays'
import format from 'date-fns/format'

export const lastWorkDayText = () => {
  const today = format(new Date(), 'iiii')
  switch (today) {
    case 'Saturday':
    case 'Sunday':
    case 'Monday':
      return 'last Friday'
    default:
      return 'yesterday'
  }
}

export const lastWorkDayNumber = () => {
  const date = new Date()
  const today = format(date, 'iiii')
  switch (today) {
    case 'Sunday':
      return format(subDays(date, 2), 'yyyy-MM-dd')
    case 'Monday':
      return format(subDays(date, 3), 'yyyy-MM-dd')
    default: 
    return format(subDays(date, 1), 'yyyy-MM-dd')
  }
}
