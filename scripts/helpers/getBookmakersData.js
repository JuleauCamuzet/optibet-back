const fs = require('fs')

const getBookmakersData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/bookmakers.json').toString())

    return data
}

module.exports = { getBookmakersData }
