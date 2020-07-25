import format from 'date-fns/format'

const lastWorkDay = () => {
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

export default lastWorkDay
