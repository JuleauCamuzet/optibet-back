const fs = require('fs')

const getRegionsData = () => {
    const data = JSON.parse(fs.readFileSync(process.cwd() + '/scripts/data/regions.json').toString())

    return data
}

module.exports = { getRegionsData }
