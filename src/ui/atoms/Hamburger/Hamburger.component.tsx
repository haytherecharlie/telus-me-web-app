import React from 'react'
import types from 'prop-types'
import * as S from './Hamburger.style'

const Hamburger = ({ onClick, nav }) => {
  return (
    <S.HamburgerMenu onClick={onClick} aria-expanded={nav}>
      <S.TopLine open={nav} />
      <S.MidLine open={nav} />
      <S.BottomLine open={nav} />
    </S.HamburgerMenu>
  )
}

Hamburger.propTypes = {
  onClick: types.func.isRequired,
  nav: types.bool.isRequired
}

export default Hamburger
