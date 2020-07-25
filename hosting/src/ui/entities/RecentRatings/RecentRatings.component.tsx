import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'ui/atoms/Text'
import CalendarRating from 'ui/components/CalendarRating'
import * as S from './RecentRatings.style'

const RecentRatings = () => {
  const { date, ratings } = useSelector(s => s)
  return (
    <S.RecentRatings>
      <Text size="XL" text="YOUR RECENT RATINGS" style={{ margin: `10px 5px`, textAlign: 'center' }} bold unique />
      {ratings[date.yesterday] && <CalendarRating {...ratings[date.yesterday]} />}
      <S.RowRatings>
        {Object.values(ratings)
          .reverse()
          .map((rating, i) => {
            if (i > 0 && i < 5) return <CalendarRating key={rating.date} {...rating} />
          })}
      </S.RowRatings>
    </S.RecentRatings>
  )
}

export default RecentRatings
