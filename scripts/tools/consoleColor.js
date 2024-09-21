const red = '\x1b[31m';
const green = '\x1b[32m';
const reset = '\x1b[0m';

const consoleRed = (message) => {
    console.log(red + message + reset)
}

const consoleGreen = (message) => {
    console.log(green + message + reset)
}

module.exports = { consoleGreen, consoleRed }
