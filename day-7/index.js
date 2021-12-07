const { TextToArray } = require('../helpers')
const fs = require("fs");
const path = require("path");

const triangular = (distance) => {
    const abs = Math.abs(distance);
    return ((abs / 2) * (abs + 1)) * (abs / distance) || 0;
};

const getLowestFuel = (low, high, crabs, withTriangularNumbers) => {
    let lowestFuel = 0;
    for(let i = low; i < high; i++) {
        let totalFuel = 0
        crabs.forEach(crab => {
            const distance = Number(crab) < i ? i - Number(crab) : Number(crab) - i
            withTriangularNumbers ? totalFuel += triangular(distance) : totalFuel += distance
        })

        if (totalFuel < lowestFuel || lowestFuel === 0) {
            lowestFuel = totalFuel
        }
    }

    return lowestFuel
}

const challengeOne = (input) => {
    const crabs = TextToArray(input, ',')
    const lowestPos = Math.min(...crabs)
    const highestPos = Math.max(...crabs)

    return getLowestFuel(lowestPos, highestPos, crabs)
}

const challengeTwo = (input) => {
    const crabs = TextToArray(input, ',')
    const lowestPos = Math.min(...crabs)
    const highestPos = Math.max(...crabs)

    return getLowestFuel(lowestPos, highestPos, crabs, true)
}

module.exports = {
    challengeOne,
    challengeTwo
}

const input = fs.readFileSync(path.join(__dirname, '/input.txt'), { encoding: 'utf8'})

console.log(`The answer to challenge one is: ${challengeOne(input)}`)
console.log(`The answer to challenge two is: ${challengeTwo(input)}`)

console.warn(`    
    |,\\/,| |[_' |[_]) |[_]) \\\\//
    ||\\/|| |[_, ||'\\, ||'\\,  ||
     ___ __ __ ____  __  __  ____  _  _    __    __
    // ' |[_]| |[_]) || ((_' '||' |,\\/,|  //\\\\  ((_'
    \\\\_, |[']| ||'\\, || ,_))  ||  ||\\/|| //\`\`\\\\ ,_))
    `)