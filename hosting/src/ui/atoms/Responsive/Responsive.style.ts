import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Responsive = styled('div')(P => ({
  position: 'relative',
  flex: 1,
  height: `100%`,
  width: `100%`,
  maxWidth: theme.LARGE_VIEW,
  display: `flex`,
  flexDirection: 'row',
  alignItems: `center`,
  justifyContent: `space-between`,
  padding: `0 10px`,
  ...P.style
}))
