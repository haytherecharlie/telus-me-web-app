import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const RecentRatings = styled("div")({
  display: "flex",
  flexDirection: 'column',
  alignItems: "stretch",
  justifyContent: "stretch",
  width: `100%`,
  maxWidth: 500,
  margin: `0 auto`
})

export const RowRatings = styled("div")({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: `100%`,
  maxWidth: 800,
  margin: `0 auto`
})
