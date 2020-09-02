import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Modal = styled('div')(P => ({
  animation: 'fadeIn',
  animationDuration: `.3s`,
  zIndex: 1000,
  position: 'fixed',
  top: theme.HEADER_HEIGHT,
  left: 0,
  height: `calc(100% - ${theme.FOOTER_HEIGHT + theme.HEADER_HEIGHT}px)`,
  width: `100%`,
  background: theme.BACKGROUND_COLOR,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'stretch',
  ...P.style
}))
