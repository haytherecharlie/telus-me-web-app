import React from 'react'
import format from 'date-fns/format'
import Text from 'ui/atoms/Text'
import * as S from './CalendarRating.style'

const CalendarRating = ({ date, rating, timestamp }) => {
  return (
    <S.CalendarRating>
      <S.RedTitle>
        <Text
          size="S"
          text={format(new Date(date.replace('-', '/')), 'MMM do').toUpperCase()}
          style={{ color: `#FFF` }}
          bold
          unique
        />
      </S.RedTitle>
      <S.RatingBox>
        <Text size="XL" text={rating} style={{ color: `#444` }} bold unique />
      </S.RatingBox>
    </S.CalendarRating>
  )
}

export default CalendarRating
