const { TextToArray } = require('../helpers')

const challengeOne = (input) => {
    input = TextToArray(input)

    let horizontalPosition = 0
    let depth = 0

    input.forEach(item => {
        const [direction, amount] = item.split(' ')

        if (direction === 'forward') {
            horizontalPosition += Number(amount)
        } else {
            direction === 'down' ? depth += Number(amount) : depth -= Number(amount)
        }
    })

    return horizontalPosition * depth
}

const challengeTwo = (input) => {
    input = TextToArray(input)

    let horizontalPosition = 0
    let depth = 0
    let aim = 0

    input.forEach(item => {
        const [direction, amount] = item.split(' ')

        if (direction === 'forward') {
            horizontalPosition += Number(amount)
            depth += aim * Number(amount)
        } else {
            direction === 'down' ? aim += Number(amount) : aim -= Number(amount)
        }
    })

    return horizontalPosition * depth
}

module.exports = {
    challengeOne,
    challengeTwo
}