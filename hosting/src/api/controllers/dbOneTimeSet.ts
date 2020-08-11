import { db } from 'services/firebase'
import ratings from 'config/ratings.json'

const dbOneTimeSet = async () => {
  const values = Object.values(ratings).reverse()
  for (let rating of values) {
    const date = new Date(rating.date)
    await db()
      .collection(`ratings`)
      .add({ ...rating, timestamp: date.getTime() })
    console.log('sent', rating)
  }
  // return Object.values(ratings)
  //   .reverse()
  //   .map(async val => {

  //   })
}

export default dbOneTimeSet
