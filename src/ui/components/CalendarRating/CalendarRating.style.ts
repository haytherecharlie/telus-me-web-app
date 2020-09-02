import styled from 'styled-components'

export const CalendarRating = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'center',
  margin: 5,
  boxShadow: `0 2px 5px rgba(0, 0, 0, 0.2)`
})

export const RedTitle = styled('div')({
  flex: 1,
  color: `#FFF`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#E9554D',
  padding: `10px 10px`
})

export const RatingBox = styled('div')({
  flex: 1,
  color: `#FFF`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#FFF',
  padding: `10px 10px`
})
