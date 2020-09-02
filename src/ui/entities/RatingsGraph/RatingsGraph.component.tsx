const { BarChart } = typeof window !== 'undefined' ? require('react-charts-d3') : { BarChart: undefined }
import React from 'react'
import Text from 'ui/atoms/Text'
import { useSelector } from 'react-redux'
import * as S from './RatingsGraph.style'

const RatingsGraph = () => {
  const { data } = useSelector(s => s.ratings.team)

  return (
    <S.Wrapper>
      <Text size="XL" text="Daily Team Score History" bold unique />
      {BarChart && (
        <BarChart
          height={300}
          barSpacing={0.15}
          axisConfig={{
            showXAxis: true,
            showXAxisLabel: true,
            xLabel: 'Date',
            xLabelPosition: 'right',
            showYAxis: true,
            showYAxisLabel: true,
            yLabel: 'Rating',
            yLabelPosition: 'top'
          }}
          data={[{ key: 'Team Scores', values: data }]}
        />
      )}
    </S.Wrapper>
  )
}

export default RatingsGraph
