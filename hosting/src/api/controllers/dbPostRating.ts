import { db, ts } from 'services/firebase'
import store from 'services/redux'

const dbPostRating = async rating => {
  const { date, user } = store.getState()
  const { email, firstname, lastname } = user
  const { yesterday } = date
  const docName = email.replace('@telus.com', '')
  const timestamp = ts.fromDate(new Date(yesterday.replace('-', '/')))
  const newRating = { date: yesterday, email, firstname, lastname, rating }
  await db()
    .doc(`ratings/${yesterday}-${docName}`)
    .set({ ...newRating, timestamp })
  return store.dispatch({ type: 'RATINGS', ratings: { [yesterday]: newRating } })
}

export default dbPostRating
