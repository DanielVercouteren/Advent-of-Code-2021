const { TextToArray } = require('../helpers')

const _getMostCommonValue = (array, index) => {
    let zeroes = 0,
        ones = 0

    array.forEach(item => item.charAt(index) === '1' ? ones++ : zeroes++)
    return zeroes > ones ? 0 : 1
}

const challengeOne = (input) => {
    input = TextToArray(input)

    let gammaBit = []
    let epsilonBit = []

    for(let i = 0; i < input[0].length; i++) {
        const mostCommonValue = _getMostCommonValue(input, i)
        gammaBit.push(mostCommonValue)
        epsilonBit.push(+!mostCommonValue)
    }

    const gamma = parseInt(gammaBit.join(''), 2)
    const epsilon = parseInt(epsilonBit.join(''), 2)

    return gamma * epsilon
}

const challengeTwo = (input) => {
    input = TextToArray(input)
    let oxygenGeneratorBits = input
    let co2ScrubberBits = input

    for(let i = 0; i < oxygenGeneratorBits[0].length; i++) {
        if(oxygenGeneratorBits.length === 1) { break }

        const bitCriteria = _getMostCommonValue(oxygenGeneratorBits, i)
        oxygenGeneratorBits = oxygenGeneratorBits.filter((item) => Number(item[i]) === bitCriteria)
        console.log(oxygenGeneratorBits)
    }

    for(let i = 0; i < co2ScrubberBits[0].length; i++) {
        if(co2ScrubberBits.length === 1) { break }

        const bitCriteria = _getMostCommonValue(co2ScrubberBits, i)
        co2ScrubberBits = co2ScrubberBits.filter((item) => Number(item[i]) !== bitCriteria)
    }

    const oxygenGeneratorRating = parseInt(oxygenGeneratorBits[0], 2)
    const co2ScrubberRating = parseInt(co2ScrubberBits[0], 2)

    return oxygenGeneratorRating * co2ScrubberRating
}

module.exports = {
    challengeOne,
    challengeTwo
}