import styled from 'styled-components'
import theme from 'ui/assets/theme'

export const HamburgerMenu = styled('button')({
  height: `17px`,
  width: `20px`,
  position: `relative`,
  cursor: `pointer`,
  background: 'transparent',
  border: 0,
  padding: 0,
})

const defaultLineStyle = {
  width: `100%`,
  height: `3px`,
  background: theme.PRIMARY_COLOR,
  borderRadius: `5px`,
  position: `absolute`,
  opacity: 1
}

const midLine = `7px`

export const TopLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `0px`),
  transform: (p) => (p.open ? `rotate(45deg)` : `none`)
})

export const MidLine = styled('div')({
  ...defaultLineStyle,
  transition: `display .5s`,
  top: midLine,
  display: (p) => (p.open ? `none` : `flex`)
})

export const BottomLine = styled('div')({
  ...defaultLineStyle,
  transition: `transform .5s, top .5s`,
  top: (p) => (p.open ? midLine : `14px`),
  transform: (p) => (p.open ? `rotate(-45deg)` : `none`)
})
