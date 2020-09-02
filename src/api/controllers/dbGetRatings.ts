import { db } from 'services/firebase'

const filterTeamResults = teamData => {
  const teamResults = teamData.reduce((t, o) => {
    if (t.hasOwnProperty(o.x)) {
      return { ...t, [o.x]: { total: t[o.x].total + o.y, count: t[o.x].count + 1 } }
    }
    return { ...t, [o.x]: { total: o.y, count: 1 } }
  }, {})

  const results = Object.entries(teamResults).reduce(
    (acc, [key, val]) => [...acc, { x: key.substr(5, key.length), y: (val.total / val.count) * 2 }],
    []
  )
  return { ...teamData, data: results }
}

const dbGetRatings = async email => {
  try {
    const rawRatings = await db().collection('ratings').orderBy('timestamp', 'desc').limit(50).get()
    const { personal, team } = rawRatings.docs.reduce(
      (acc, val) => {
        const curr = val.data()
        return curr.email === email
          ? {
              ...acc,
              personal: {
                data: [...acc.personal.data, { x: curr.date.substr(5, curr.date.length), y: curr.rating }],
                raw: { ...acc.personal.raw, [val.id]: curr }
              }
            }
          : {
              ...acc,
              team: {
                data: [...acc.team.data, { x: curr.date, y: curr.rating }],
                raw: { ...acc.team.raw, [val.id]: curr }
              }
            }
      },
      {
        personal: { data: [], raw: {} },
        team: { data: [], raw: {} }
      }
    )
    return { personal, team: filterTeamResults(team.data) }
  } catch (err) {
    console.log(err)
  }
}

export default dbGetRatings
