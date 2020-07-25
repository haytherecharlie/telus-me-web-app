import React from 'react'
import { useSelector } from 'react-redux'
import { Router, Redirect } from '@reach/router'
import useFirebaseAuth from 'ui/hooks/useFirebaseAuth'
import Feedback from 'ui/pages/Feedback'
import Loading from 'ui/pages/Loading'
import Login from 'ui/pages/Login'

const Routes = () => {
  useFirebaseAuth()
  const { auth } = useSelector(s => s.user)

  switch (auth) {
    case 'pending':
      return <Loading />
    case 'failed':
      return <Login />
    default:
      return (
        <Router basepath="/">
          <Feedback path="/" />
        </Router>
      )
  }
}

export default Routes
