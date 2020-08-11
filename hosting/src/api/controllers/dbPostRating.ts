import { db, ts } from 'services/firebase'
import store from 'services/redux'

const dbPostRating = async score => {
  const { date, ratings, user } = store.getState()
  const { yesterday } = date
  const todaysObject = Object.entries(ratings.personal.raw).filter(([key, val]) => val.date === yesterday)
  const ref = todaysObject.length ?  db().collection(`ratings`).doc(todaysObject[0][0]) : db().collection(`ratings`).doc()
  const rating = parseInt(score, 10)
  const { email, firstname, lastname } = user
  const team = 'GhKlzGFk4hFidKtWWns3'
  const timestamp = new Date(yesterday).getTime()
  const newRating = { date: yesterday, email, firstname, lastname, rating, team, timestamp }
  await ref.set(newRating)
  return store.dispatch({ type: 'NEW_RATING', rating: { [ref.id]: newRating } })
}

export default dbPostRating
