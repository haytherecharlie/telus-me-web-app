import React from 'react'
import * as S from './Responsive.style'

const Responsive = ({ children = null, style = {} }) => {
  return <S.Responsive style={style}>{children}</S.Responsive>
}

export default Responsive
