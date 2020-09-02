import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const TextInput = styled('textarea')({
  boxSizing: 'border-box',
  width: `100%`,
  display: 'flex',
  alignItems: 'flex-start',
  border: `1px solid ${theme.BRAND_COLOR}`,
  padding: `7px 10px`,
  borderRadius: theme.CARD_RADIUS,
  background: 'transparent',
  color: theme.PRIMARY_COLOR,
  fontFamily: theme.FONT_BODY,
  fontSize: theme.FONT_M,
  fontWeight: 300,
  resize: `none`,
  '&::placeholder': {
    color: theme.PRIMARY_COLOR,
    fontWeight: 300
  },
  '&:focus': {
    outline: 'none'
  }
})
