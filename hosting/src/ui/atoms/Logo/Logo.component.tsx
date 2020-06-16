import React from 'react'
import Text from 'ui/atoms/Text'
import * as S from './Logo.style'

const Logo = () => {
  return (
    <S.Logo>
      <Text size="XL" text="habichat" unique bold style={{ letterSpacing: -1 }} />
    </S.Logo>
  )
}

export default Logo
