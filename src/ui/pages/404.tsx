import React from 'react'
import Link from 'ui/atoms/Link'
import Text from 'ui/atoms/Text'
import PageLayout from 'ui/layouts/PageLayout'

const _404 = () => {
  return (
    <PageLayout page="404" crawl={false} style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text size="M" text="Oops! We all make mistakes..." style={{ textAlign: 'center', marginTop: 10 }} bold unique />
      <Text size="M" text="Page not found!" style={{ textAlign: 'center' }} bold unique />
      <Link href="/">
        <Text
          size="S"
          text="Return to homepage"
          style={{ marginTop: 10, textAlign: 'center' }}
          unique
        />
      </Link>
    </PageLayout>
  )
}

export default _404
