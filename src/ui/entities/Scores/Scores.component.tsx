import React from 'react'
import { useSelector } from 'react-redux'
import Text from 'ui/atoms/Text'

const Scores = () => {
  const { personal, team } = useSelector(s => s.ratings)

  const getAverage = (arrOfObj) => {
    const length = arrOfObj.length
    const total = arrOfObj.reduce((t, o) => t + o.y , 0)
    return (total / length).toString().substr(0, 4)
  }
  
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center' }}>
      <img src="images/left-bird.png" />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text size="M" text={`THANKS!`} style={{ fontSize: 40 }} bold unique />
        <Text size="M" text={`SEE YOU SOON!`} style={{ fontSize: 20 }} bold unique />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: `35px 20px`
            }}>
            <Text size="S" text={`PERSONAL`} bold unique />
            <Text size="S" text={`AVERAGE`} bold unique />
            <Text size="S" text={`RATING`} bold unique />
            <Text size="M" text={`${getAverage(personal.data) * 2}`} style={{ fontSize: 40 }} bold unique />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: `35px 20px`
            }}>
            <Text size="S" text="TEAM" bold unique />
            <Text size="S" text={`AVERAGE`} bold unique />
            <Text size="S" text={`RATING`} bold unique />
            <Text size="M" text={`${getAverage(team.data)}`} style={{ fontSize: 40 }} bold unique />
          </div>
        </div>
      </div>
      <img src="images/right-bird.png" />
    </div>
  )
}

export default Scores
