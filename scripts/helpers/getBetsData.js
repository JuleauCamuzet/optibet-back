const fs = require('fs')

const getBetsData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/bets.json').toString())

    return data
}

module.exports = { getBetsData }
