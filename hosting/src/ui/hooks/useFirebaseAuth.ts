import { useEffect } from 'react'
import { dbGetRatings } from 'api/routes'
import { auth } from 'services/firebase'
import store from 'services/redux'

const useFirebaseAuth = () => {
  const authenticated = async user => {
    const email = user.email
    const [firstName, lastName] = email.replace('@telus.com', '').split('.')
    store.dispatch({ type: 'RATINGS', ratings: await dbGetRatings(email) })
    return store.dispatch({ type: 'USER', user: { auth: 'success', email, firstName, lastName } })
  }

  const unauthenticated = () => {
    return store.dispatch({ type: 'USER', user: { auth: 'failed' } })
  }

  useEffect(() => {
    auth().onAuthStateChanged(user => (user ? authenticated(user) : unauthenticated()))
  }, [])
}

export default useFirebaseAuth
