import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Avatar = styled('img')({
  height: 40,
  width: 40,
  border: `1px solid ${theme.BRAND_COLOR}`,
  borderRadius: `50%`
})
