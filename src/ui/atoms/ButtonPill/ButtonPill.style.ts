import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Pill = styled('div')(P => ({
  flex: 1,
  background: P.invert ? theme.WHITE : theme.BRAND_COLOR,
  borderRadius: theme.CARD_RADIUS,
  display: 'flex',
  justifyContent: 'center',
  ...P.style
}))
