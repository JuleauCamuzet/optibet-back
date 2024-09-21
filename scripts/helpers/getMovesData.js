const fs = require('fs')

const getMovesData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/moves.json').toString())

    return data
}

module.exports = { getMovesData }
