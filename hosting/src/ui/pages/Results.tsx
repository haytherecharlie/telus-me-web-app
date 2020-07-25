import React, { useEffect, useState } from 'react'
import RecentRatings from 'ui/entities/RecentRatings'
import ThanksForVoting from 'ui/entities/ThanksForVoting'
import PageLayout from 'ui/layouts/PageLayout'
import Loading from 'ui/pages/Loading'

const Results = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <ThanksForVoting />
      <RecentRatings />
    </PageLayout>
  )
}

export default Results
