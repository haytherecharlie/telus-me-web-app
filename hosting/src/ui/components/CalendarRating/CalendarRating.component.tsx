import React from 'react'
import format from 'date-fns/format'
import Text from 'ui/atoms/Text'
import * as S from './CalendarRating.style'

const CalendarRating = ({ date, rating, timestamp }) => {
  const [year, month, day] = date.split('-')
  return (
    <S.CalendarRating>
      <S.RedTitle>
        <Text
          size="S"
          text={format(new Date(year, month, day), 'MMM do').toUpperCase()}
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
