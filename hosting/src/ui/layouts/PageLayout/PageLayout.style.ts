import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const PageLayout = styled('div')({
  width: `100vw`,
  minWidth: 300,
  minHeight: `85vh`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  background: theme.BACKGROUND_COLOR,
  overflowX: 'hidden'
})

export const Main = styled('main')(P => ({
  position: 'relative',
  width: `100%`,
  margin: 'auto',
  maxWidth: theme.LARGE_VIEW,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
  paddingRight: 15,
  paddingLeft: 15,
  ...P.style
}))
