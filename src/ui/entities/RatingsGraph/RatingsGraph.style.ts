import styled from 'styled-components'

export const Wrapper = styled("div")({
  flex: 1,
  width: 900,
  display: "flex",
  flexDirection: 'column',
  alignItems: "center",
  justifyContent: "center",
  padding: 20,
  '.bar-chart, svg': {
    width: '600px!important'
  }
})
