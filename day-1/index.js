const { TextToNumbersArray } = require('../helpers')

const challengeOne = (input) => {
    input = TextToNumbersArray(input)

    let amount = 0;
    input.forEach((item, index) => {
        input[index - 1] && item > input[index - 1] && amount++
    })

    return amount
}

const challengeTwo = (input) => {
    input = TextToNumbersArray(input)
    let amount = 0;

    for(let i = 0; i < input.length; i++) {
        const currentNumber = input[i] + input[i+1] + input[i+2]
        const nextNumber = input[i+1] + input[i+2] + input[i+3]


        nextNumber > currentNumber && amount++
    }

    return amount
}

module.exports = {
    challengeOne,
    challengeTwo
}