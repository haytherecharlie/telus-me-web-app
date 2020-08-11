import React from 'react'
import { useSelector } from 'react-redux'
import { BarChart } from 'react-charts-d3'
import * as S from './RatingsGraph.style'

const RatingsGraph = () => {
  const { personal, team } = useSelector(s => s.ratings)
  return (
    <S.Wrapper>
      <BarChart
        height={150}
        width={600}
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
        data={[{ key: 'personal', values: personal.data.slice(0, 5) }]}
      />
    </S.Wrapper>
  )
}

export default RatingsGraph
