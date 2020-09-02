import React from 'react'
import { useSelector } from 'react-redux'
import GlobalStyle from 'ui/assets/theme/global.style'
import SEO from 'ui/atoms/SEO'
import Spinner from 'ui/atoms/Spinner'
import * as S from './PageLayout.style'

const PageLayout = ({ children, page, crawl, style = {} }) => {
  const { loading } = useSelector(s => s.ui)

  return (
    <S.PageLayout>
      <GlobalStyle />
      <SEO page={page} crawl={crawl} />
      {loading ? <Spinner /> : <S.Main style={style}>{children}</S.Main>}
    </S.PageLayout>
  )
}

export default PageLayout
