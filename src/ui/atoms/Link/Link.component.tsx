import React from 'react'
import * as S from './Link.style'

const Link = ({ type = null, href = null, onClick = null, children = null, style = {} }) => {
  switch (type) {
    case 'button':
      return (
        <S.ButtonLink style={style} onClick={onClick}>
          {children}
        </S.ButtonLink>
      )
    case 'external':
      return (
        <S.ExternalLink style={style} href={href} onClick={onClick}>
          {children}
        </S.ExternalLink>
      )
    default:
      return (
        <S.InternalLink style={style} to={href || '/'} onClick={onClick}>
          {children}
        </S.InternalLink>
      )
  }
}

export default Link
