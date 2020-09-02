import { db } from 'services/firebase'

const filterTeamResults = ratings => {
  const {totals} = ratings.team.data.reduce((acc, val, index, arr) => {
    if(arr[index + 1] && arr[index].x === arr[index + 1].x) {
      return { ...acc, sum: acc.sum + val.y, dividend: acc.dividend + 1 }
    }
    return { ...acc, totals: [ ...acc.totals, { x: val.x.substr(5, val.x.length), y: (((val.y *2) + acc.sum) / (acc.dividend + 1))}], sum: 0, dividend: 0 }
  }, { totals: [], sum: 0, dividend: 0 })
  return { ...ratings, team: { ...ratings.team, data: totals }}
}

const dbGetRatings = async email => {
  try {
    const rawRatings = await db().collection('ratings').orderBy('timestamp', 'desc').limit(50).get()
    const ratings = rawRatings.docs.reduce(
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
      {
        personal: { count: 0, data: [], raw: {}, score: 0, sum: 0 },
        team: { count: 0, data: [], raw: {}, score: 0, sum: 0 }
      }
    )
    return filterTeamResults(ratings)
  } catch (err) {
    console.log(err)
  }
}

export default dbGetRatings
