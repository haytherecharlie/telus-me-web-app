import { useEffect } from 'react'
import { dbGetRatings } from 'api/routes'
import { auth } from 'services/firebase'
import store from 'services/redux'

const useFirebaseAuth = () => {
  const authenticated = async user => {
    const email = user.email
    const uid = user.uid
    const [firstname, lastname] = email.replace('@telus.com', '').split('.')
    store.dispatch({ type: 'RATINGS', ratings: await dbGetRatings(email) })
    return store.dispatch({
      type: 'USER',
      user: {
        auth: 'success',
        email,
        firstname: firstname.replace(/[0-9]/g, ''),
        lastname: lastname.replace(/[0-9]/g, ''),
        uid
      }
    })
  }

  const unauthenticated = () => {
    return store.dispatch({ type: 'USER', user: { auth: 'failed' } })
  }

  useEffect(() => {
    auth().onAuthStateChanged(user => (user ? authenticated(user) : unauthenticated()))
  }, [])
}

export default useFirebaseAuth
