import React from 'react'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const Home = () => {
  return (
    <PageLayout page="home" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text size="M" text="Home" style={{ textAlign: 'center' }} bold unique />
    </PageLayout>
  )
}

export default Home
