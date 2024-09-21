const fs = require('fs')

const getSportsData = () => {
  const data = JSON.parse(
    fs.readFileSync(process.cwd() + '/scripts/data/sports.json').toString()
  )

  return data
}

module.exports = { getSportsData }
