import React from 'react'
import Spinner from 'ui/atoms/Spinner'
import PageLayout from 'ui/layouts/PageLayout'

const Loading = () => {
  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Spinner />
    </PageLayout>
  )
}

export default Loading
