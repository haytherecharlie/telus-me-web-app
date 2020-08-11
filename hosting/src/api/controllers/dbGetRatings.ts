import { db } from 'services/firebase'

const dbGetRatings = async email => {
  try {
    const ratings = await db().collection('ratings').orderBy('timestamp', 'desc').limit(50).get()
    return ratings.docs.reduce(
      (acc, val) => {
        const curr = val.data()
        return curr.email === email
          ? {
              ...acc,
              personal: {
                count: acc.personal.count + 1,
                data: [...acc.personal.data, { x: curr.date.substr(5, curr.date.length), y: curr.rating }],
                raw: { ...acc.personal.raw, [val.id]: curr },
                score: (acc.personal.sum + curr.rating) / (acc.personal.count + 1),
                sum: acc.personal.sum + curr.rating
              }
            }
          : {
              ...acc,
              team: {
                count: acc.team.count + 1,
                data: [...acc.team.data, { x: curr.date, y: curr.rating }],
                raw: { ...acc.team.raw, [val.id]: curr },
                score: (acc.team.sum + curr.rating) / (acc.team.count + 1),
                sum: acc.team.sum + curr.rating
              }
            }
      },
      { personal: { count: 0, data: [], raw: {}, score: 0, sum: 0 }, team: { count: 0, data: [], raw: {}, score: 0, sum: 0 } }
    )
  } catch (err) {}
}

export default dbGetRatings
