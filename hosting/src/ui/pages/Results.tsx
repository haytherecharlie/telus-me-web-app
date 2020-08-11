import React, { useEffect, useState } from 'react'
import Scores from 'ui/entities/Scores'
import RatingsGraph from 'ui/entities/RatingsGraph'
import PageLayout from 'ui/layouts/PageLayout'
import Loading from 'ui/pages/Loading'

const Results = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Scores />
      <RatingsGraph />
    </PageLayout>
  )
}

export default Results
