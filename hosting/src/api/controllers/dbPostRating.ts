import { db, ts } from 'services/firebase'
import store from 'services/redux'

const dbPostRating = async rating => {
  const { date, user } = store.getState()
  const { email, firstname, lastname } = user
  const { yesterday } = date
  const [year, month, day] = yesterday.split('-')
  console.log(`${year}, ${month}, ${day}`)
  const docName = email.replace('@telus.com', '')
  const timestamp = ts.fromDate(new Date(year, month, day))
  const newRating = { date: yesterday, email, firstname, lastname, rating }
  await db()
    .doc(`ratings/${yesterday}-${docName}`)
    .set({ ...newRating, timestamp })
  return store.dispatch({ type: 'RATINGS', ratings: { [yesterday]: newRating } })
}

export default dbPostRating
