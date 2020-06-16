import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const Spinner = styled('svg')({
  margin: 'auto',
  viewBox: '0 0 50 50',
  animation: `rotate 2s linear infinite`,
  width: 50,
  height: 50,
  '@keyframes rotate': {
    '100%': {
      transform: 'rotate(360deg)'
    }
  },
  '@keyframes dash': {
    '0%': {
      strokeDasharray: `1, 150`,
      strokeDashoffset: `0`
    },
    '50%': {
      strokeDasharray: `90, 150`,
      strokeDashoffset: -35
    },
    '100%': {
      strokeDasharray: `90, 150`,
      strokeDashoffset: -124
    }
  }
})

export const Circle = styled('circle')({
  stroke: theme.PRIMARY_COLOR,
  strokeLinecap: `round`,
  animation: `dash 1.5s ease-in-out infinite`,
  cx: 25,
  cy: 25,
  r: 20,
  fill: 'none',
  strokeWidth: 4
})
