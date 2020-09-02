import React from 'react'
import { formatMessage } from 'ui/language/translations'
import * as S from './Text.style'

const Text = ({ size = 'M', bold = false, text = 'placeholder', style = {}, unique = false, link = false }) => {
  if (size === 'XL') {
    return (
      <S.XLarge bold={bold} style={style} link={link}>
        {unique ? text : formatMessage(text)}
      </S.XLarge>
    )
  }

  if (size === 'L') {
    return (
      <S.Large bold={bold} style={style} link={link}>
        {unique ? text : formatMessage(text)}
      </S.Large>
    )
  }

  if (size === 'M') {
    return (
      <S.Medium bold={bold} style={style} link={link}>
        {unique ? text : formatMessage(text)}
      </S.Medium>
    )
  }

  if (size === 'S') {
    return (
      <S.Small bold={bold} style={style} link={link}>
        {unique ? text : formatMessage(text)}
      </S.Small>
    )
  }

  if (size === 'XS') {
    return (
      <S.XSmall bold={bold} style={style} link={link}>
        {unique ? text : formatMessage(text)}
      </S.XSmall>
    )
  }
}

export default Text
