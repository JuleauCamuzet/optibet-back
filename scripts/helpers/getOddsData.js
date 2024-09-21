const fs = require('fs')

const getOddsData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/mma_odds.json').toString())

    return data
}

module.exports = { getOddsData }
