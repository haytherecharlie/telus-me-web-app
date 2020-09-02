import React from 'react'
import * as S from './Avatar.style'

const Avatar = ({ alt, src, style = {} }) => {
  return <S.Avatar src={src} alt={alt} style={style} />
}

export default Avatar
