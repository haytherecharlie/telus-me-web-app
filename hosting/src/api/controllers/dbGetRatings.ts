import { db } from 'services/firebase'

const dbGetRatings = async email => {
  try {
    const ratings = await db().collection('ratings').where('email', '==', email).limit(50).get()
    return ratings.docs.reduce((acc, val) => {
      const rating = val.data()
      return { ...acc, [rating.date]: rating }
    }, {})
  } catch (err) {}
}

export default dbGetRatings
