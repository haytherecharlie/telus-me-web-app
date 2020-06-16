import React from 'react'
import * as S from './ButtonPill.style'

const ButtonPill = ({ invert = false, children = null, style = {} }) => {
  return (
    <S.Pill invert={invert} style={style}>
      {children}
    </S.Pill>
  )
}

export default ButtonPill
