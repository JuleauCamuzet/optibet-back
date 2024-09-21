const fs = require('fs')

const getLeaguesData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/leagues.json').toString())

    return data
}

module.exports = { getLeaguesData }
