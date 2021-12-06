const { TextToArray } = require('../helpers')

let day = 0;

const processFish = (amountOfFish, days) => {
    day === days && amountOfFish.reduce((curr, val) => curr + val, 0)
    const newFishes = [
        amountOfFish[1],
        amountOfFish[2],
        amountOfFish[3],
        amountOfFish[4],
        amountOfFish[5],
        amountOfFish[6],
        amountOfFish[7] + amountOfFish[0],
        amountOfFish[8],
        amountOfFish[0],
    ]

    day++
    return processFish(newFishes, days)
}

const challengeOne = (input, days) => {
    input = TextToArray(input, ',')
    let array = new Array (9)
    for(let i = 0; i < 10; i++) {
        array[i] = input.filter(item => Number(item) === i).length
    }

    return processFish(array, days)
}

module.exports = {
    challengeOne
}