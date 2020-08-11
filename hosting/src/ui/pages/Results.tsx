import React, { useEffect, useState } from 'react'
import Scores from 'ui/entities/Scores'
import PageLayout from 'ui/layouts/PageLayout'
import Loading from 'ui/pages/Loading'

const Results = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return loading ? (
    <Loading />
  ) : (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'flex-start' }}>
      <Scores />
    </PageLayout>
  )
}

export default Results
